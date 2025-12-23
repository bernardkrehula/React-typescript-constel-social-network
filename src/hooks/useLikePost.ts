import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeLikeStatus } from "#/api/changeLikeStatus";

export const usePostLike = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (liked: boolean) =>
      changeLikeStatus(postId, liked),
    
    onMutate: async (liked: boolean) => {
      await queryClient.cancelQueries(['post', postId]);

      const previousPost =
        queryClient.getQueryData<any>(['post', postId]);

      queryClient.setQueryData(['post', postId], (old: any) => {
        if (!old) return old;

        return {
          ...old,
          liked: !liked,
          likes: liked ? old.likes - 1 : old.likes + 1
        };
      });

      return { previousPost };
    },

    // ❌ rollback
    onError: (_err, _liked, context) => {
      if (context?.previousPost) {
        queryClient.setQueryData(
          ['post', postId],
          context.previousPost
        );
      }
    },

    // 🔄 sigurnost
    onSettled: () => {
      queryClient.invalidateQueries(['post', postId]);
    }
  });
};
