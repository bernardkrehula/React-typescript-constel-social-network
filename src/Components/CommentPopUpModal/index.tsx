import './index.css'
import { FaPencil } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import Btn from '../Btn';

type CommentPopUpModalType = {
    commentId: string;
    deleteComment: (postId: string, commentId: string) => void;
    postId: string;
}

const CommentPopUpModal = ({commentId, deleteComment, postId}: CommentPopUpModalType) => {

    return(
        <div className='comment-popUp-modal'>
            <Btn type='button' variation='secondary--small'>          
                <h2>Edit</h2>
                <FaPencil />
            </Btn>
            <Btn type='button' variation='secondary--small' onClick={() => deleteComment(postId, commentId)}>
               <h2>Delete</h2> 
               <FaRegTrashCan />
            </Btn>
        </div>
    )
}
export default CommentPopUpModal;