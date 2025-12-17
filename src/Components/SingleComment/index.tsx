import './index.css'

type SingleCommentType = {
    created_at: string;
    full_name: string;
    picture: string;
    text: string;
    username: string
}

const SingleComment = (data: SingleCommentType) => {
    const { created_at, full_name, picture, text, username } = data;

    return(
        <div className='single-comment'>

        </div>
    )
}
export default SingleComment;