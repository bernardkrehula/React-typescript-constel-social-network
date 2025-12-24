import "./index.css";
import Btn from "../Btn";
import { useState } from "react";
import { format } from "date-fns";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaComment, FaRegComment } from "react-icons/fa";
import { requestComments } from "#/api/requestComments";
import { usePostLike } from "#/hooks/useLikePost";
import { changeLikeStatus } from "#/api/changeLikeStatus";
import { useQuery } from "@tanstack/react-query";

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
type SinglePostPropsType = {
  data: SinglePostDataType;
  openPost: (value: SinglePostDataType) => void;
};

const SinglePost = ({
  data,
  openPost
}: SinglePostPropsType) => {
  const { user, image, text, created_at, likes, comments: commentsNumber, post_id: postId, liked } = data;
  const { full_name, username, picture } = user;

  const { mutate: likePost } = usePostLike(postId);

  const handlePostlike = () => {
    likePost(liked);
    console.log('like radi', liked) 
  };
 
  if (!created_at) return null;
  const date = format(new Date(created_at), "dd.MM.y.");

  return (
    <div className="single-post">
      <div onClick={() => openPost(data)}>
        <div className="post-user-data">
          <img src={picture} />
          <div className="post-names">
            <h2 className="username">@{username}</h2>
            <h2 className="full-name">{full_name}</h2>
          </div>
          <div className="post-time">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="calendar"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"
              ></path>
            </svg>
            <h2>{date}</h2>
          </div>
        </div>
        {image && (
          <div className="post-image-containter">
            <img className="post-img" src={image} />
          </div>
        )}
        <p className="post-content">{text}</p>
      </div>
      <div className="post-btns">
        <Btn variation="primary--small" onClick={handlePostlike} type="button">
          {liked ? (
            <>
              <AiFillLike />
              <h2>{likes}</h2>
            </>
          ) : (
            <>
              <AiOutlineLike />
              <h2>{likes}</h2>
            </>
          )}
        </Btn>
        <Btn
          variation="primary--small"
          type="button"
        >
          <FaRegComment />
          <h2>{commentsNumber}</h2>
        </Btn>
      </div>
    </div>
  );
};
export default SinglePost;
