import './index.css'
import SingleComment from '../SingleComment';
import CommentCreator from '../CommentCreator';
import { requestComments } from '#/api/requestComments';
import { useEffect, useState } from 'react';
import { requestCommentDelete } from '#/api/requestCommentDelete';
import type { UserProfileDataType } from '#/types/UserProfileDataType';
import type { SingleCommentType } from '#/types/SingleCommentType';

type PostModalType = {
    postId: string;
    closeComments: () => void;
    userProfileData: UserProfileDataType;
}

const Comments = ({postId, closeComments, userProfileData}: PostModalType) => {
    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const [ comments, setComments ] = useState([{
            comment_id: "",
            text: "",
            created_at: "",
            username: "",
            full_name: "",
            picture: ""
        }]
    );
    
    const getComments = async() => {
        const postComments = await requestComments(postId);
        setComments(postComments);
    }
    const deleteComment = async(postId: string, commentId: string) => {
        await requestCommentDelete(postId, commentId);
        getComments();
    }

    useEffect(() => {
        getComments();
        setTimeout(() => {
            setIsLoading(false);
        }, 700)
    },[]);

    if(isLoading) return(
        <>
            <span className="loader"></span>
            <div className='modal-overlay' onClick={closeComments}></div>
        </>
    ) 
    return(
        <>
        <div className='modal-overlay' onClick={closeComments}></div>
        <div className='comments-modal'>
            <CommentCreator postId={postId} getComments={getComments}/>
            <div className='comments'>
                {comments && comments.map((comment: SingleCommentType, key: number) => {
                    return  <SingleComment key={key} comment={comment} postId={postId} deleteComment={deleteComment} userProfileData={userProfileData}/> 
                })} 
            </div>
        </div> 
        </> 
    )
} 
export default Comments;