import './index.css'
import { HiDotsVertical } from "react-icons/hi";
import { formatDistanceStrict } from 'date-fns';
import { LuDot } from "react-icons/lu";
import { useState } from 'react';
import CommentPopUpModal from '../CommentPopUpModal';
import { requestCommentDelete } from '#/api/requestCommentDelete';

type SingleCommentTypes = {
    comment: SingleCommentType;
    postId: string;
}
export type SingleCommentType = {
        comment_id: string;
        created_at: string;
        full_name: string;
        picture: string;
        text: string;
        username: string;
    }

const SingleComment = ({comment, postId}: SingleCommentTypes) => {
    if(!comment) return null;
    const [ isCommentClicked, setIsCommentClicked ] = useState<boolean>(false);
    const [ userComment, setUserComment ] = useState({
        comment_id: '',
        created_at: '',
        full_name: '',
        picture: '',
        text: '',
        username: ''
    });
    const { created_at, picture, text, username, comment_id: commentId } = comment;

    if(!created_at) return null
    const time = formatDistanceStrict(new Date(created_at), new Date(), { addSuffix: true });

    const deleteComment = () => {
        requestCommentDelete(postId, commentId);
    }
    const openCommentPopUpModal = () => {
        setIsCommentClicked(prev => !prev);
        setUserComment(comment);
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
                {/* Neki state napraviti user, isUserClicked */}
                {isCommentClicked && userComment && <CommentPopUpModal username={username} deleteComment={deleteComment} commentId={commentId}/>}
            </div>
        </div>
    )
}
export default SingleComment;