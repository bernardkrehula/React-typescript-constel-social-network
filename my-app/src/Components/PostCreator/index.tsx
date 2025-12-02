import './index.css'
import SingleInput from '../SingleInput';
import Btn from '../Btn';
import { useState } from 'react';

const PostCreator = ({addNewPost}) => {
    const [ inputValue, setInputValue ] = useState('');

    const getInputValue = (e) => setInputValue(e.target.value);
    const passInputValue = (e) => {
        e.preventDefault();
        const newPost = {
                audio: null,
                comments: 0,
                created_at: '2.12',
                image: '',
                liked: false,
                likes: '',
                post_id: crypto.randomUUID(),
                text: inputValue,
                user: {
                    full_name: 'Bernard Krehula',
                    picture: '/user-logo.jpg',
                    username: 'bruxiii'
                },
                user_id: ''
            }
        setInputValue('');
        addNewPost(newPost);
    };

    return(
        <form className='post-creator' onSubmit={passInputValue}>
            <img src="/user-logo.jpg"/>
            <SingleInput variation='post-creator-input' placeholder="What's on your mind?" onChange={getInputValue} value={inputValue}/>
            <Btn variation='primary--large' type ='submit'>New Post</Btn>
        </form>
    )
}

export default PostCreator;