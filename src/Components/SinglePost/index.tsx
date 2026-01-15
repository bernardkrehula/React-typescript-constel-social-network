import "./index.css";
import Btn from "../Btn";
import { format } from "date-fns";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { usePostLike } from "#/hooks/useLikePost";
import { FaRegCalendar } from "react-icons/fa6";
import type { SinglePostDataType } from "#/types/SinglePostDataType";
import type { MouseEvent } from "react";

type SinglePostPropsType = {
  data: SinglePostDataType;
  openComments: (value: string) => void;
  openPost: () => void;
};

const SinglePost = ({ data, openComments, openPost }: SinglePostPropsType) => {
  if (!data) return null;

  const {
    user,
    image,
    text,
    created_at,
    likes,
    comments: commentsNumber,
    post_id: postId,
    liked,
  } = data;
  const { full_name, username, picture } = user;

  const { mutate: likePost } = usePostLike(postId);

  const handlePostlike = () => {
    likePost(liked);
  };
  const showPostComments = (e: React.MouseEvent) => {
    e.stopPropagation();
    openComments(postId);
  };

  if (!created_at) return null;
  const date = format(new Date(created_at), "dd.MM.y.");

  return (
    <div className="single-post" onClick={() => openPost(user, postId)}>
      <div>
        <div className="post-user-data">
          <img src={picture} />
          <div className="post-names">
            <h2 className="username">@{username}</h2>
            <h2 className="full-name">{full_name}</h2>
          </div>
          <div className="post-time">
            <FaRegCalendar />
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
            <div className="like-icon">
              <AiFillLike />
              <span>{likes}</span>
            </div>
          ) : (
            <div className="like-icon">
              <AiOutlineLike />
              <span>{likes}</span>
            </div>
          )}
        </Btn>
        <Btn
          variation="primary--small"
          type="button"
          onClick={showPostComments}
        >
          <div className="comment-icon">
            <FaRegComment />
            <span>{commentsNumber}</span>
          </div>
        </Btn>
      </div>
    </div>
  );
};
export default SinglePost;
