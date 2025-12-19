import './index.css'
import SingleInput from '../SingleInput';
import Btn from '../Btn';
import React, { useState } from 'react';

const CommentCreator = () => {
    const [commentValue, setCommentValue] = useState<string>('');

    const changeCommentValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCommentValue(value);
    }

    const passCommentValueToParent = () => {

    }

    return(
        <div className='comment-creator'>
            <img src="/user-logo.jpg" />
            <SingleInput name='comment-creator' onChange={changeCommentValue} type='text' placeholder="What's on your mind?" variation='input--mid'/>
            <Btn variation='primary--mid' onClick={passCommentValueToParent} type='button'>Add comment</Btn>
        </div>
    )
}
export default CommentCreator;