import './index.css'
import { FaPencil } from "react-icons/fa6";

const CommentPopUpModal = ({}) => {

    return(
        <div>
            <Btn>          
                <h2>Edit</h2>
                <FaPencil />
            </Btn>
            <Btn>
               <h2>Delete</h2> 
            </Btn>
        </div>
    )
}
export default CommentPopUpModal;