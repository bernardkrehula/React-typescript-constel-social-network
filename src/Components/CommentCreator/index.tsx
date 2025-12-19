import './index.css'
import SingleInput from '../SingleInput';
import Btn from '../Btn';
import { useState } from 'react';

const CommentCreator = () => {
    const [commentValue, setCommentValue] = useState<string>('');

    return(
        <div className='comment-creator'>
            <img src="/user-logo.jpg" />
            <SingleInput name='comment-creator' type='text' placeholder="What's on your mind?" variation='input--mid'/>
            <Btn variation='primary--mid' type='button'>Add comment</Btn>
        </div>
    )
}
export default CommentCreator;