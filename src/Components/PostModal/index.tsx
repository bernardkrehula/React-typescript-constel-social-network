import { useOutsideClick } from "#/hooks/useOutsideClick";
import { useRef, useState } from "react";

type PostModalType = {
    closeModal: () => void;
}

const PostModal = ({closeModal}: PostModalType) => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const postRef = useRef<HTMLDivElement>(null);
    useOutsideClick(postRef, closeModal)


    if(!isLoading) return(
        <>
            <span className="loader"></span>
            <div className='modal-overlay' onClick={closeModal}></div>
        </>
    )
    return(
        <>
            <div className='modal-overlay'></div>
            <div className="post-modal" ref={postRef}>

            </div>
        </>
    )
}
export default PostModal;