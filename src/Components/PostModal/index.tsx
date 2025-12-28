import './index.css'
import { format } from 'date-fns';
import Btn from '../Btn';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import type { SinglePostDataType } from '../SinglePost';
import SingleComment, { type SingleCommentType } from '../SingleComment';
import CommentCreator from '../CommentCreator';
import { useQuery } from '@tanstack/react-query';
import { requestComments } from '#/api/requestComments';
import { usePostLike } from '#/hooks/useLikePost';

type PostModalType = {
    postData: SinglePostDataType;
    closeModal: () => void;
}

const PostModal = ({postData, closeModal, comments}: PostModalType) => {
    const {  image, text, created_at, likes, comments: commentsNumber, post_id: postId, liked } = postData;
    console.log('PostModal: ', )
    /* const { full_name, username, picture } = user; */



    if(!created_at) return null
    const date = format(new Date(created_at), "dd.MM.y.");

    const { mutate: likePost } = usePostLike(postId);

    const handlePostlike = () => {
        likePost(liked);
    }

    return(
        <>
        <div className='modal-overlay' onClick={closeModal}></div>
        <div className='post-modal'>
            <div className='post-user-data'>
                {/*<img src={picture}/>
                <div className='post-names'>
                    <h2 className='username'>@{username}</h2>
                    <h2 className='full-name'>{full_name}</h2>
                </div>  */}
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
                <Btn variation='primary--small' onClick={handlePostlike} type='button'>
                    {liked ?
                        <>
                            <AiFillLike/>
                            <h2>{likes}</h2>
                        </> 
                        :
                        <>
                            <AiOutlineLike/>
                            <h2>{likes}</h2>
                        </>
                    }
                </Btn>
                <Btn variation='primary--small' type='button'>
                    <FaRegComment />
                    <h2>{comments.length}</h2>
                </Btn>
            </div>
            <hr />
            <CommentCreator postId={postId}/>
            <div className='comments'>
                {comments && comments.map((comment: SingleCommentType, key: number) => {
                    return  <SingleComment key={key} comment={comment} postId={postId}/> 
                })} 
            </div>
        </div>
        </> 
    )
} 
export default PostModal;