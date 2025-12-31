import './index.css'
import { FaPencil } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import Btn from '../Btn';

type CommentPopUpModalType = {
    commentId: string;
    deleteComment: (postId: string, commentId: string) => void;
    postId: string;
    setIsCommentClicked: (value: boolean) => void;
}

const CommentPopUpModal = ({commentId, deleteComment, postId, setIsCommentClicked}: CommentPopUpModalType) => {

    const handleDeleteComment = () => {
        deleteComment(postId, commentId)
        setIsCommentClicked(false);
    }

    return(
        <div className='comment-popUp-modal'>
            <Btn type='button' variation='secondary--small'>          
                <h2>Edit</h2>
                <FaPencil />
            </Btn>
            <Btn type='button' variation='secondary--small' onClick={handleDeleteComment}>
               <h2>Delete</h2> 
               <FaRegTrashCan />
            </Btn>
        </div>
    )
}
export default CommentPopUpModal;