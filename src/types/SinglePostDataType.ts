export type SinglePostDataType = {
  post_id: string;
  user_id: string;
  text: string;
  image: string | null;
  audio: null;
  comments: number;
  likes: number;
  created_at: string;
  user: {
    username: string;
    full_name: string;
    picture: string;
  };
  liked: boolean;
};