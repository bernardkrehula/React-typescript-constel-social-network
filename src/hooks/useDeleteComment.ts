import { useMutation, useQueryClient } from "@tanstack/react-query";
import { requestCommentDelete } from "#/api/requestCommentDelete";

export const useDeleteComment = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (commentId: string) =>
      requestCommentDelete(postId, commentId),

    onMutate: async (commentId: string) => {
      await queryClient.cancelQueries(['comments', postId]);

      const previousComments =
        queryClient.getQueryData<any[]>(['comments', postId]);

      queryClient.setQueryData(['comments', postId], (old: any[] = []) =>
        old.filter(c => c.comment_id !== commentId)
      );

      return { previousComments };
    },

    onError: (_err, _commentId, context) => {
      if (context?.previousComments) {
        queryClient.setQueryData(
          ['comments', postId],
          context.previousComments
        );
      }
    },

    onSuccess: () => {},

    onSettled: () => {
      queryClient.invalidateQueries(['comments', postId]);
    }
  });
};
