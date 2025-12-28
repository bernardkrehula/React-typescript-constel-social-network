import './index.css'
import SingleInput from '../SingleInput';
import Btn from '../Btn';
import React, { useState } from 'react';
import { postComment } from '#/api/postComment';

type CommentCreatorType = {
    postId?: string;
}

const CommentCreator = ({postId}: CommentCreatorType) => {
    const [commentValue, setCommentValue] = useState<string>('');
    const changeCommentValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCommentValue(value);
    }

    const addComment = () => {
        if (!commentValue.trim()) return;
        postComment(postId, commentValue);
        setCommentValue('');
    };
   
    return(
        <div className='comment-creator'>
            <img src="https://constel-hr-frontend.s3.eu-central-1.amazonaws.com/nemanja_malesija.jpeg" />
            <SingleInput name='comment-creator' onChange={changeCommentValue} value={commentValue} type='text' placeholder="What's on your mind?" variation='input--mid'/>
            <Btn variation='primary--mid' onClick={addComment} type='button'>Add comment</Btn>
        </div>
    )
}
export default CommentCreator;