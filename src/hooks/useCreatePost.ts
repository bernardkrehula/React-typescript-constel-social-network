import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost } from '#/api/createPost';

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,

    // 🔹 OPTIMISTIC UPDATE
    onMutate: async (newPostData) => {
      await queryClient.cancelQueries(['homepage']);

      const previousHomepage =
        queryClient.getQueryData<any>(['homepage']);

      queryClient.setQueryData(['homepage'], (old: any) => {
        if (!old) return old;

        return {
          ...old,
          posts: [newPostData, ...old.posts],
        };
      });

      return { previousHomepage };
    },

    // ❌ rollback ako pukne
    onError: (_err, _newPost, context) => {
      if (context?.previousHomepage) {
        queryClient.setQueryData(
          ['homepage'],
          context.previousHomepage
        );
      }
    },

    // ✅ server vrati pravi post
    onSuccess: (serverPost) => {
      queryClient.setQueryData(['homepage'], (old: any) => {
        if (!old) return old;

        return {
          ...old,
          posts: old.posts.map((p: any) =>
            p.optimistic ? serverPost : p
          ),
        };
      });
    },

    // 🔄 sigurnost
    onSettled: () => {
      queryClient.invalidateQueries(['homepage']);
    },
  });
};
