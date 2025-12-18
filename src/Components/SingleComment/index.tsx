import './index.css'
import { HiDotsVertical } from "react-icons/hi";
import { formatDistanceStrict } from 'date-fns';
import { LuDot } from "react-icons/lu";


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
                    <div>
                        <div className='comment-name-time'>
                            <h2>{username}</h2>
                            <LuDot />
                            <h3>{time}</h3> 
                        </div>
                        <p>{text}</p>
                    </div>
                    <HiDotsVertical />
                </div>
            </div>
        </div>
    )
}
export default SingleComment;