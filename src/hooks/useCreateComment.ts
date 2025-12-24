import { useMutation, useQueryClient } from "@tanstack/react-query"
import { postComment } from "#/api/postComment";

//Custom hook
export const useCreateComment = (postId: string) => {
    //Daje pristup query cache
    const queryClient = useQueryClient();
    //Definira write operaciju
  return useMutation({
    //Jedina funkcija koja komunicira sa serverom
    mutationFn: (text: string) =>
      postComment(postId, text),

    //Poziva se odmah i prije nego je server odgovorio
    onMutate: async (newText: string) => {
      await queryClient.cancelQueries(['comments', postId]);

      //Sprema trenutno stanje komentara koristi za rollback
      const previousComments = queryClient.getQueryData(['comments', postId]);
      //Fake komentar koji UI prikazuje odmah
      const optimisticComment = {
        comment_id: `temp-${Date.now()}`,
        text: newText,
        username: 'bruxiii', // ako imaš user state
        full_name: 'bernard_krehula',
        picture: '/user-logo.jpg',
        created_at: new Date().toISOString(),
        optimistic: true
      };
      //Sprjecava da stari get pregazi optimistic update
      //Dodaje komentar na ekran
      queryClient.setQueryData(['comments', postId], (old: any[] = []) => [
        optimisticComment,
        ...old
      ]);
      //Salje backup na onError
      return { previousComments };
    },

    onError: (_err, _newComment, context) => {
      if (context?.previousComments) {
        queryClient.setQueryData(['comments', postId], context.previousComments);
      }
    },
    //Server vrati pravi komentar zamjeni optimistic komentar sa pravim
    onSuccess: (serverComment) => {
      queryClient.setQueryData(['comments', postId], (old: any[] = []) =>
        old.map(c => (c.optimistic ? serverComment : c))
      );
    },
    onSettled: () => {
      // Refetch za sigurnost
      queryClient.invalidateQueries(['comments', postId]);
    }
  });
};
