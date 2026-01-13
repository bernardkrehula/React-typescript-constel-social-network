import { useRef, useState } from "react";

const PostModal = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const postRef = useRef<HTMLDivElement>(null);

    const closeModal

    if(!isLoading) return(
        <>
            <span className="loader"></span>
            <div className='modal-overlay' onClick={closeComments}></div>
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