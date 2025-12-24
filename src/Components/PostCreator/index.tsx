import './index.css'
import SingleInput from '../SingleInput';
import Btn from '../Btn';
import { useState } from 'react';
import { useCreatePost } from '#/hooks/useCreatePost';

type PostCreatorType = {
    addNewPost: (post: NewPostValueType) => void;
}

export type NewPostValueType = {
    audio: null,
    comments: number,
    created_at: string,
    image: string,
    liked: boolean,
    likes: number,
    post_id: string,
    text: string,
    user: {
        full_name: string,
        picture: string,
        username: string
    },
    user_id: string
}
//new FormData na nju stavim tekst 
const PostCreator = () => {
    const [ inputValue, setInputValue ] = useState('');
    const { mutate: createPost } = useCreatePost();

    const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

    const passInputValue = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newPost: NewPostValueType = {
                audio: null,
                comments: 0,
                created_at: new Date().toISOString(),
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
        createPost(newPost);
    };

    return(
        <form className='post-creator' onSubmit={passInputValue}>
            <img src="/user-logo.jpg"/>
            <SingleInput type='text' name='' placeholder="What's on your mind?" onChange={getInputValue} value={inputValue}/>
            <Btn variation='primary--large' type ='submit'>New Post</Btn>
        </form>
    )
}

export default PostCreator;