import './index.css'
import { HiDotsVertical } from "react-icons/hi";
import { formatDistanceStrict } from 'date-fns';
import { LuDot } from "react-icons/lu";
import { useState } from 'react';
import CommentPopUpModal from '../CommentPopUpModal';


type SingleCommentType = {
    comment: {
        comment_id: string;
        created_at: string;
        full_name: string;
        picture: string;
        text: string;
        username: string;
    }
    postId: string;
} 

const SingleComment = ({comment, postId}: SingleCommentType) => {
    if(!comment) return null;
    const [ isCommentClicked, setIsCommentClicked ] = useState<boolean>(false);
    const { created_at, picture, text, username, comment_id: commentId } = comment;
    console.log(comment)
    if(!created_at) return null
    const time = formatDistanceStrict(new Date(created_at), new Date(), { addSuffix: true });
    
    const openCommentPopUpModal = () => setIsCommentClicked(prev => !prev);

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
                {isCommentClicked && <CommentPopUpModal username={username} commentId={commentId} postId={postId} />}
            </div>
        </div>
    )
}
export default SingleComment;