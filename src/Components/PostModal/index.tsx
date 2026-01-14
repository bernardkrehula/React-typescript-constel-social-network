import { useOutsideClick } from "#/hooks/useOutsideClick";
import { use, useEffect, useRef, useState } from "react";
import Comments from "../Comments";
import type { UserProfileDataType } from "#/types/UserProfileDataType";
import SinglePost from "../SinglePost";
import { type SinglePostDataType } from "#/types/SinglePostDataType";
import { requestSinglePost } from "#/api/requestSinglePost";

type PostModalType = {
    closePost: () => void;
    postId: string;
    userProfileData: UserProfileDataType;
    closeComments: () => void;
    postModalUserData: {
        username: '';
        full_name: '';
        picture: '';
  };
}

const PostModal = ({closePost, postId, userProfileData, closeComments, postModalUserData}: PostModalType) => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [postData, setPostData] = useState<SinglePostDataType>({
        post_id: '',
        user_id: '',
        text: '',
        image: '',
        audio: null,
        comments: 0,
        likes: 0,
        created_at: '',
        user: postModalUserData,
        liked: false
    });
    const postRef = useRef<HTMLDivElement>(null);
    useOutsideClick(postRef, closePost)

    const handlePostData = async() => {
        const singlePostData = await requestSinglePost(postId);
        Object.keys(singlePostData).forEach(key => {
            setPostData(prev => ({
            ...prev, 
            [key]: singlePostData[key]
        }))
        })
    }
    
    useEffect(() => {
        handlePostData();
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
                {/* <SinglePost /> */}
{/*                 <Comments postId={postId} userProfileData={userProfileData} closeComments={closeComments}/>
 */}        </div>
        </>
    )
}
export default PostModal;