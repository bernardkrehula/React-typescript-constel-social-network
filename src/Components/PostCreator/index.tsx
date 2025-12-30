import './index.css'
import SingleInput from '../SingleInput';
import Btn from '../Btn';
import { useState } from 'react';
import { useCreatePost } from '#/hooks/useCreatePost';
import type { UserProfileDataType } from '#/Pages/Homepage';

type PostCreatorPropsType = {
    userProfileData: UserProfileDataType;
}

const PostCreator = ({userProfileData}: PostCreatorPropsType) => {
    const [ inputValue, setInputValue ] = useState('');
    const { mutate: createPost } = useCreatePost(userProfileData);

    const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

    const passInputValue = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setInputValue('');
        createPost(inputValue);
        console.log('radi', inputValue)
    };

    return(
        <form className='post-creator' onSubmit={passInputValue}>
            <img src="https://constel-hr-frontend.s3.eu-central-1.amazonaws.com/nemanja_malesija.jpeg"/>
            <SingleInput type='text' name='' placeholder="What's on your mind?" onChange={getInputValue} value={inputValue}/>
            <Btn variation='primary--large' type ='submit'>New Post</Btn>
        </form>
    )
}

export default PostCreator;