import './index.css'
import Btn from '#/Components/Btn';
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

type LikeBtnType = {
    handlePostlike: (e: React.MouseEvent) => void;
    liked: boolean;
    likes: number;
}

const LikeBtn = ({handlePostlike, liked, likes}: LikeBtnType) => {
    return(
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
    )
}
export default LikeBtn;