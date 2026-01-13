import { useOutsideClick } from "#/hooks/useOutsideClick";
import { useEffect, useRef, useState } from "react";
import Comments from "../Comments";
import type { UserProfileDataType } from "#/types/UserProfileDataType";

type PostModalType = {
    closePost: () => void;
    postId: string;
    userProfileData: UserProfileDataType;
    closeComments: () => void;
}

const PostModal = ({closePost, postId, userProfileData, closeComments}: PostModalType) => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const postRef = useRef<HTMLDivElement>(null);
    useOutsideClick(postRef, closePost)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 700)
    },[]);

    if(!isLoading) return(
        <>
            <span className="loader"></span>
            <div className='modal-overlay' onClick={closePost}></div>
        </>
    )
    return(
        <>
            <div className='modal-overlay'></div>
            <div className="post-modal" ref={postRef}>
{/*                 <Comments postId={postId} userProfileData={userProfileData} closeComments={closeComments}/>
 */}            </div>
        </>
    )
}
export default PostModal;