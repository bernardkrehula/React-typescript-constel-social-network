import './index.css'
import { format } from 'date-fns';
import { formatDistanceStrict } from 'date-fns';

type SingleCommentType = {
    created_at: string;
    full_name: string;
    picture: string;
    text: string;
    username: string
} 

const SingleComment = ({comment}: SingleCommentType) => {
     console.log('komentar: ', comment)
    const { created_at, full_name, picture, text, username } = comment;
    if(!created_at) return null
    const time = formatDistanceStrict(new Date(created_at), new Date(), { addSuffix: true });
   
    return(
        <div className='single-comment'>
            <div className='comment-profile'>
                <img src={picture}/>
                <div className='comment-profile-content'>
                    <h2>{username}</h2>
                    <h2>{time}</h2>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}
export default SingleComment;