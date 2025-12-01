import './index.css'
import Btn from '../Btn'
import { useState } from 'react';
import { formatISO9075 } from 'date-fns';
import LikeIcon from '#/icons/LikeFilled';
import LikeFilled from '#/icons/LikeFilled';
import LikeOutlined from '#/icons/LikeOutlined';

type SinglePostDataType = {
    data: {
        post_id: string;
        user_id: string;
        text: string;
        image: string | null;
        audio: null;
        comments: number;
        likes: number;
        created_at: string;
        user: {
            username: string;
            full_name: string;
            picture: string;
        },
        liked: boolean;
    }   
}

const SinglePost = ({data}: SinglePostDataType) => {
    const { user, image, text, created_at, likes, comments } = data;
    const { full_name, username, picture } = user;
    const [isLiked, setIsLiked ] = useState(false);
    const [isCommentOpened, setIsCommentOpened] = useState(false);

    const likePost = () => setIsLiked(prev => !prev);
    const openComment = () => setIsCommentOpened(prev => !prev);
    //Prevent error from formatIso9075 
    if(created_at === '') return
    const date  = formatISO9075(created_at, {representation: 'date'})

    return(
        <div className="single-post">
            <div className='post-user-data'>
                <img src={picture}/>
                <div className='post-names'>
                    <h2 className='username'>@{username}</h2>
                    <h2 className='full-name'>{full_name}</h2>
                </div>
                <div className='post-time'>
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"></path></svg>
                   <h2>{date}</h2>
                </div>
            </div>
            {image && <div className='post-image-containter'>
                    <img className='post-img' src={image} />
                </div>}
            <p className='post-content'>{text}</p>
            <div className='post-btns'>
                <Btn variation='primary--small' onClick={likePost}>
                    {isLiked ?
                        <>
                            <LikeFilled />
                            <h2>{likes}</h2>
                        </> 
                        :
                        <>
                            <LikeOutlined />
                            <h2>{likes}</h2>
                        </>
                    }
                </Btn>
                <Btn variation='primary--small' onClick={openComment}>
                    {!isCommentOpened ? 
                    <>
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="comment" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"></path></svg>
                        <h2>{comments}</h2>
                    </>
                    :
                    <>
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="comment" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"></path></svg>
                        <h2>{comments}</h2>
                    </>
                    }
                </Btn>
            </div>
        </div>
    )
}
export default SinglePost;