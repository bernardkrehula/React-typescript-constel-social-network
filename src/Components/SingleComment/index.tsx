import './index.css'

type SingleCommentType = {
    created_at: string;
    full_name: string;
    picture: string;
    text: string;
    username: string
}

const SingleComment = (comment: SingleCommentType) => {
    const { created_at, full_name, picture, text, username } = comment;
    
    return(
        <div className='single-comment'>

        </div>
    )
}
export default SingleComment;