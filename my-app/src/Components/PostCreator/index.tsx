import './index.css'
import SingleInput from '../SingleInput';
import Btn from '../Btn';

const PostCreator = () => {

    return(
        <div className='post-creator'>
            <img src="/user-logo.jpg"/>
            <SingleInput variation='post-creator-input' placeholder="What's on your mind?"/>
            <Btn variation='new-post'>New Post</Btn>
        </div>
    )
}

export default PostCreator;