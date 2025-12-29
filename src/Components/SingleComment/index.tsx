import './index.css'
import { HiDotsVertical } from "react-icons/hi";
import { formatDistanceStrict } from 'date-fns';
import { LuDot } from "react-icons/lu";
import { useState } from 'react';
import CommentPopUpModal from '../CommentPopUpModal';

type SingleCommentTypes = {
    comment: SingleCommentType;
    postId: string;
    deleteComment: (postId: string, commentId: string) => void;
}
export type SingleCommentType = {
        comment_id: string;
        created_at: string;
        full_name: string;
        picture: string;
        text: string;
        username: string;
    }

const SingleComment = ({comment, postId, deleteComment}: SingleCommentTypes) => {
    if(!comment) return null;
    console.log(comment)
    const [ isCommentClicked, setIsCommentClicked ] = useState<boolean>(false);
    const { created_at, picture, text, username, comment_id: commentId } = comment;
    const [userComment, setUserComment] = useState();

    if(!created_at) return null
    const time = formatDistanceStrict(new Date(created_at), new Date(), { addSuffix: true });

    const openCommentPopUpModal = () => {
        setIsCommentClicked(prev => !prev);
        /* setUserComment(comment); */
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
                {isCommentClicked && <CommentPopUpModal username={username} deleteComment={deleteComment} commentId={commentId} postId={postId}/>}
            </div>
        </div>
    )
}
export default SingleComment;