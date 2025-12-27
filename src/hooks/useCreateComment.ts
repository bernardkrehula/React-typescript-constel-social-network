import { useMutation, useQueryClient } from "@tanstack/react-query"
import { postComment } from "#/api/postComment";
//Posalji request za komentar neoptimisticno 
//Napraviti fetch request za post 
//Spremi usera u state 


export const useCreateComment = (postId: string | undefined) => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: (text: string) =>
      postComment(postId, text),

    onMutate: async (newText: string) => {
      await queryClient.cancelQueries(['comments', postId]);

      const previousComments = queryClient.getQueryData(['comments', postId]);

      const optimisticComment = {
        comment_id: `temp-${Date.now()}`,
        text: newText,
        username: 'nemanja_malesija', 
        full_name: 'Nemanja Malesija',
        picture: 'https://constel-hr-frontend.s3.eu-central-1.amazonaws.com/nemanja_malesija.jpeg',
        created_at: new Date().toISOString(),
        optimistic: true
      };
      queryClient.setQueryData(['comments', postId], (old: any[] = []) => [
        optimisticComment,
        ...old
      ]);
      return { previousComments };
    },

    onError: (_err, _newComment, context) => {
      if (context?.previousComments) {
        queryClient.setQueryData(['comments', postId], context.previousComments);
      }
    },
    onSuccess: (serverComment) => {
      queryClient.setQueryData(['comments', postId], (old: any[] = []) =>
        old.map(c => (c.optimistic ? serverComment : c))
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries(['comments', postId]);
    }
  });
};
