import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost } from '#/api/createPost';

type Callbacks = {
  onSuccess?: () => void
  onError?: (error: Error) => void
}

export const useCreatePost = (callbacks?: Callbacks) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,

    onSuccess: (onSuccess) => {
      queryClient.invalidateQueries(['homepage']);
      callbacks?.onSuccess?.()
      console.log('uspjesno: ', onSuccess)
    },
    onError: (error) => {
      callbacks?.onError?.(error as Error)
    }
  });
};
