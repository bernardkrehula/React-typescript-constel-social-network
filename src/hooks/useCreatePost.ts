import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost } from '#/api/createPost';

type NewPostValueType = {
    audio: null,
    comments: number,
    created_at: string,
    image: string,
    liked: boolean,
    likes: number,
    post_id: string,
    text: string,
    user: {
        full_name: string,
        picture: string,
        username: string
    },
    user_id: string
}

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,

    onMutate: async (postText) => {
      await queryClient.cancelQueries(['homepage']);

      const previousHomepage = queryClient.getQueryData<any>(['homepage']);

        const optimisticPost: NewPostValueType = {
                audio: null,
                comments: 0,
                created_at: new Date().toISOString(),
                image: '',
                liked: false,
                likes: 0,
                post_id: crypto.randomUUID(),
                text: postText,
                user: {
                    full_name: '',
                    picture: '',
                    username: ''
                },
                user_id: crypto.randomUUID()
            }
      queryClient.setQueryData(['homepage'], (old: any) => {
        if (!old) return old;

        return {
          ...old,
          posts: [optimisticPost, ...old.posts],
        };
      });

      return { previousHomepage };
    },

    onError: (_err, _newPost, context) => {
      if (context?.previousHomepage) {
        queryClient.setQueryData(
          ['homepage'],
          context.previousHomepage
        );
      }
    },

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
    }
  });
};
