import './index.css'
import SingleInput from '../SingleInput';
import Btn from '../Btn';
import { useState } from 'react';

type PostCreatorType = {
    addNewPost: (post: NewPostValueType) => void;
}

export type NewPostValueType = {
    comments: number,
    created_at: Date,
    image: string,
    liked: boolean,
    likes: number,
    post_id: number | string,
    text: string,
    user: {
        full_name: string,
        picture: string,
        username: string
    },
    user_id: string,
    isLiked: boolean
}
//new FormData na nju stavim tekst 
const PostCreator = ({addNewPost}: PostCreatorType) => {
    const [ inputValue, setInputValue ] = useState('');

    const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

    const passInputValue = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newPost: NewPostValueType = {
                comments: 0,
                created_at: new Date(),
                image: '',
                liked: false,
                likes: 0,
                post_id: crypto.randomUUID(),
                text: inputValue,
                user: {
                    full_name: 'Bernard Krehula',
                    picture: '/user-logo.jpg',
                    username: 'bruxiii'
                },
                user_id: crypto.randomUUID()
            }
        setInputValue('');
        addNewPost(newPost);
    };

    return(
        <form className='post-creator' onSubmit={passInputValue}>
            <img src="/user-logo.jpg"/>
            <SingleInput placeholder="What's on your mind?" onChange={getInputValue} value={inputValue}/>
            <Btn variation='primary--large' type ='submit'>New Post</Btn>
        </form>
    )
}

export default PostCreator;