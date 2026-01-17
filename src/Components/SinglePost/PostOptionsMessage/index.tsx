import './index.css';
import Btn from '#/Components/Btn';
import { FaRegTrashCan } from 'react-icons/fa6';

const PostOptionsMessage = () => {
    
    const handleOptionsMessage = () => {
        
    }

    return(
        <div className='comment-popUp-modal'>
            <Btn type='button' variation='secondary--small' onClick={handleOptionsMessage}>
               <h2>Delete</h2> 
               <FaRegTrashCan />
            </Btn>
        </div>
    )
}
export default PostOptionsMessage;