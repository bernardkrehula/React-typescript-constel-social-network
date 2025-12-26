import './index.css'
import SingleInput from '../SingleInput';
import Btn from '../Btn';
import { useState } from 'react';
import { useCreatePost } from '#/hooks/useCreatePost';

const PostCreator = () => {
    const [ inputValue, setInputValue ] = useState('');
    const { mutate: createPost } = useCreatePost();

    const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

    const passInputValue = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setInputValue('');
        createPost(inputValue);
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