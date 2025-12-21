import './index.css'
import { FaPencil } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import Btn from '../Btn';

const CommentPopUpModal = ({}) => {

    return(
        <div className='comment-popUp-modal'>
            <Btn>          
                <h2>Edit</h2>
                <FaPencil />
            </Btn>
            <Btn>
               <h2>Delete</h2> 
               <FaRegTrashCan />
            </Btn>
        </div>
    )
}
export default CommentPopUpModal;