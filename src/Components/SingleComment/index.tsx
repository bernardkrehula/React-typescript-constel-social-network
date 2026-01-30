import './index.css'
import { HiDotsVertical } from "react-icons/hi";
import { formatDistanceStrict } from 'date-fns';
import { LuDot } from "react-icons/lu";
import { useState } from 'react';
import CommentPopUpModal from '../CommentPopUpModal';
import type { UserProfileDataType } from '#/types/UserProfileDataType';
import type { SingleCommentType } from '#/types/SingleCommentType';

type SingleCommentTypes = {
    comment: SingleCommentType;
    postId: string;
    deleteComment: (postId: string, commentId: string) => void;
    userProfileData: UserProfileDataType;
}

const SingleComment = ({comment, postId, deleteComment, userProfileData}: SingleCommentTypes) => {
    if(!comment) return null;

    const [ isCommentClicked, setIsCommentClicked ] = useState<boolean>(false);
    const { created_at, picture, text, username, comment_id: commentId } = comment;
    const [userComment, setUserComment] = useState<boolean>(false);
    
    if(!created_at) return null
    const time = formatDistanceStrict(new Date(created_at), new Date(), { addSuffix: true });

    const openCommentPopUpModal = () => {
        setIsCommentClicked(prev => !prev);
        checkIfCommetIsByUser();
    }
    const checkIfCommetIsByUser = () => {
        setUserComment(userProfileData.username === username);
    }

    return(
        <div className='single-comment'>
            <div className='comment-profile'>
                <img src={picture}/>
                <div className='comment-profile-content'>
                    <div>
                        <div className='comment-name-time'>
                            <h2>{username}</h2>
                            <LuDot />
                            <h3>{time}</h3> 
                        </div>
                        <p>{text}</p>
                    </div>
                    <HiDotsVertical onClick={openCommentPopUpModal}/>
                </div>
                {isCommentClicked && userComment && <CommentPopUpModal deleteComment={deleteComment} setIsCommentClicked={setIsCommentClicked} commentId={commentId} postId={postId}/>}
            </div>
        </div>
    )
}
export default SingleComment;