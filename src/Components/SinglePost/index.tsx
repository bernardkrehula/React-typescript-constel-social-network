import "./index.css";
import Btn from "../Btn";
import { format } from "date-fns";
import { FaRegComment } from "react-icons/fa";
import { usePostLike } from "#/hooks/useLikePost";
import { FaRegCalendar } from "react-icons/fa6";
import type { SinglePostDataType } from "#/types/SinglePostDataType";
import LikeBtn from "./LikeBtn";
import type { UserProfileDataType } from "#/types/UserProfileDataType";

type SinglePostPropsType = {
  data: SinglePostDataType;
  openComments?: (value: string) => void;
  openPost?: (postId: string) => void;
  activePost: boolean;
  handlePostData?: () => void;
  isSinglePostClicked: boolean;
  userProfileData?: UserProfileDataType;
};

const SinglePost = ({
  data,
  openComments,
  openPost,
  activePost,
  handlePostData,
  isSinglePostClicked
}: SinglePostPropsType) => {
  const { mutate: likePost, isPending } = usePostLike(data.post_id);
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

  const handlePostlike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if(isPending) return
    likePost(liked);
    if(handlePostData){
      handlePostData();
    };
  };

  const showPostComments = (e: React.MouseEvent) => {
    e.stopPropagation();
    if(openComments) openComments(postId);
  };

  const handleOpenPost = () => {
    if(openPost){
      openPost(postId);
    }
  };

  if (!created_at) return null;
  const date = format(new Date(created_at), "dd.MM.y.");

  return (
    <div
      className={activePost ? "single-post active" : "single-post"}
      onClick={handleOpenPost}
    >
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
        <LikeBtn handlePostlike={handlePostlike} liked={liked} likes={likes}></LikeBtn>
        <Btn
          variation="primary--small"
          type="button"
          onClick={showPostComments}
          disabled={isSinglePostClicked}
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
