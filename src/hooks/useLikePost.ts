import { changeLikeStatus } from "#/api/changeLikeStatus";
import { useQueryClient, useMutation } from "@tanstack/react-query";

export const usePostLike = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (liked: boolean) =>
      changeLikeStatus(postId, liked),

    onMutate: async (liked: boolean) => {
      await queryClient.cancelQueries(['homepage']);

      const previousPosts = queryClient.getQueryData(['homepage']);

      queryClient.setQueryData(['homepage'], (old: any[]) => {
        if (!old?.posts) return old;

        return{
          ...old,
          posts: old.posts.map(post =>
            post.post_id === postId
              ? { ...post, liked: !liked, likes: liked ? post.likes - 1 : post.likes + 1 }
              : post 
            ),
        };
      });

      return { previousPosts };
    },

    onError: (_err, _liked, context) => {
      if (context?.previousPosts) {
        queryClient.setQueryData(['homepage'], context.previousPosts);
      }
    }
  });
};