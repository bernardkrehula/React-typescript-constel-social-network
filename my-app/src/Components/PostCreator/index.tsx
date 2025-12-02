import './index.css'
import SingleInput from '../SingleInput';
import Btn from '../Btn';
import { useState } from 'react';

const PostCreator = () => {
    const [ inputValue, setInputValue ] = useState('');
    const getPostValue = (e) => {
        const values = e.target
        console.log(values.value)
    }
    return(
        <div className='post-creator'>
            <img src="/user-logo.jpg"/>
            <SingleInput variation='post-creator-input' placeholder="What's on your mind?" onChange={getPostValue}/>
            <Btn variation='primary--large'>New Post</Btn>
        </div>
    )
}

export default PostCreator;