import './index.css';
import Btn from '#/Components/Btn';
import { FaRegTrashCan } from 'react-icons/fa6';
import { useOutsideClick } from '#/hooks/useOutsideClick';
import { useRef } from 'react';
import { requestDeletePost } from '#/api/requestDeletePost';

type PostOptionsMessageType = {
    postId: string;
}

const PostOptionsMessage = ({postId}: PostOptionsMessageType) => {
    const messageRef = useRef<HTMLDivElement>(null);
    const handleOptionsMessage = async(e: React.MouseEvent) => {
        e.stopPropagation(); 
        await requestDeletePost(postId);
    }
    /* useOutsideClick(messageRef, handleOptionsMessage); */ 
    return(
        <div className='post-options-message' ref={messageRef}>
            <Btn type='button' variation='secondary--small' onClick={handleOptionsMessage}>
               <h2>Delete</h2> 
               <FaRegTrashCan />
            </Btn>
        </div>
    )
}
export default PostOptionsMessage;