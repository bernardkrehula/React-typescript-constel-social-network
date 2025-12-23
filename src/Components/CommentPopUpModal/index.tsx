import './index.css'
import { FaPencil } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import Btn from '../Btn';

type CommentPopUpModalType = {
    username: string;
    commentId: string;
    deleteComment: (value: string) => void;
}

const CommentPopUpModal = ({commentId, deleteComment}: CommentPopUpModalType) => {

    return(
        <div className='comment-popUp-modal'>
            <Btn type='button' variation='secondary--small'>          
                <h2>Edit</h2>
                <FaPencil />
            </Btn>
            <Btn type='button' variation='secondary--small' onClick={() => deleteComment(commentId)}>
               <h2>Delete</h2> 
               <FaRegTrashCan />
            </Btn>
        </div>
    )
}
export default CommentPopUpModal;