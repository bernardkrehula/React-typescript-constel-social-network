import './index.css'

type SinglePostDataType = {
    data: {
        post_id: string;
        user_id: string;
        text: string;
        image: string;
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
    console.log(data)
 
    return(
        <div className="single-post">

        </div>
    )
}
export default SinglePost;