import './index.css'
import { FaPencil } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import Btn from '../Btn';
import { requestCommentDelete } from '#/api/requestCommentDelete';

type CommentPopUpModalType = {
    username: string;
    postId: string;
    commentId: string;
}

const CommentPopUpModal = ({username, postId, commentId}: CommentPopUpModalType) => {

    const deleteComment = () => {
        requestCommentDelete(postId, commentId);
    }

    return(
        <div className='comment-popUp-modal'>
            {username === 'nemanja_malesija' && <Btn type='button' variation='secondary--small'>          
                <h2>Edit</h2>
                <FaPencil />
            </Btn>}
            <Btn type='button' variation='secondary--small' onClick={deleteComment}>
               <h2>Delete</h2> 
               <FaRegTrashCan />
            </Btn>
        </div>
    )
}
export default CommentPopUpModal;