import './index.css'
import SingleInput from '../SingleInput';
import Btn from '../Btn';
import React, { useState } from 'react';
import { format } from 'date-fns';

const CommentCreator = ({addComment}) => {
    const [commentValue, setCommentValue] = useState<string>('');
    const [newComment, setNewComment] = useState({
      created_at: "",
      full_name: "bernard krehula",
      picture: "",
      text: "",
      username: "",
    })
    const time = format(new Date(), 'H:m')
    console.log('time')
    const changeCommentValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCommentValue(value);
    }

    const passCommentValueToParent = () => {
        console.log(commentValue)
        addComment(commentValue)
        setCommentValue('');
    }

    return(
        <div className='comment-creator'>
            <img src="/user-logo.jpg" />
            <SingleInput name='comment-creator' onChange={changeCommentValue} value={commentValue} type='text' placeholder="What's on your mind?" variation='input--mid'/>
            <Btn variation='primary--mid' onClick={passCommentValueToParent} type='button'>Add comment</Btn>
        </div>
    )
}
export default CommentCreator;