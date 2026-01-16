import { useOutsideClick } from "#/hooks/useOutsideClick";
import { useEffect, useRef, useState } from "react";
import Comments from "../Comments";
import type { UserProfileDataType } from "#/types/UserProfileDataType";
import SinglePost from "../SinglePost";
import { type SinglePostDataType } from "#/types/SinglePostDataType";
import { requestSinglePost } from "#/api/requestSinglePosts";

export type postUserDataType = {
    username: string;
    full_name: string;
    picture: string;
}
type PostModalType = {
    closePost: () => void;
    postId: string;
    userProfileData: UserProfileDataType;
    closeComments: () => void;
    postModalUserData: {
        user: postUserDataType;
        likes: number;
        commentsNumber: number;
    }
}

const PostModal = ({closePost, postId, userProfileData, closeComments, postModalUserData}: PostModalType) => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [postData, setPostData] = useState<SinglePostDataType>({
        post_id: '',
        user_id: '',
        text: '',
        image: '',
        audio: null,
        comments: postModalUserData.commentsNumber,
        likes: postModalUserData.likes,
        created_at: '',
        user: postModalUserData.user,
        liked: false
    });
    const postRef = useRef<HTMLDivElement>(null);
    useOutsideClick(postRef, closePost)               

    const handlePostData = async() => {
        const singlePostData = await requestSinglePost(postId);
        setPostData(prev => ({ ...prev, ...singlePostData }));
    }
   
    useEffect(() => {
        handlePostData();
        setTimeout(() => {
            setLoading(true);
            console.log('radi', postData)
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
                <SinglePost data={postData} activePost={true}/> 
                <Comments postId={postId} userProfileData={userProfileData} closeComments={closeComments} atciveModalComments={true}/>
           </div>
        </>
    )
}
export default PostModal;