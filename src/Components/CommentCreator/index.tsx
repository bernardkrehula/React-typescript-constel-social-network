import './index.css'
import SingleInput from '../SingleInput';
import Btn from '../Btn';
import React, { useState } from 'react';
import { format } from 'date-fns';
import { useCreateComment } from '#/hooks/useCreateComment';

const CommentCreator = ({postId}) => {
    const time = format(new Date(), 'HH:mm');
    const [commentValue, setCommentValue] = useState<string>('');
    /* const [newComment, setNewComment] = useState({
        comment_id: crypto.randomUUID(),
        created_at: time,
        full_name: "bernard krehula",
        picture: "/user-logo.jpg",
        text: "",
        username: "bruxiii",
    }) */
    const changeCommentValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
/*         setNewComment(prev => ({...prev, text: value}))
 */        setCommentValue(value);
    }
    const { mutate: createComment } = useCreateComment(postId);

    const passCommentValue = () => {
        if (!commentValue.trim()) return;
        createComment(commentValue);   
        setCommentValue('');
    };
   
    //Tu useCreateComment
    return(
        <div className='comment-creator'>
            <img src="/user-logo.jpg" />
            <SingleInput name='comment-creator' onChange={changeCommentValue} value={commentValue} type='text' placeholder="What's on your mind?" variation='input--mid'/>
            <Btn variation='primary--mid' onClick={passCommentValue} type='button'>Add comment</Btn>
        </div>
    )
}
export default CommentCreator;