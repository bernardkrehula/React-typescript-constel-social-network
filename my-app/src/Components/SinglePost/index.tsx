import './index.css'
import SingleInput from '../SingleInput';
import Btn from '../Btn';

const SinglePost = () => {

    return(
        <div className='single-post'>
            <div>
                <img src="/user-logo.jpg"/>
                <SingleInput />
            </div>
            <Btn variation='new-post'>New Post</Btn>
        </div>
    )
}

export default SinglePost;