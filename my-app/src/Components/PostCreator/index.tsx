import './index.css'
import SingleInput from '../SingleInput';
import Btn from '../Btn';

const PostCreator = () => {

    return(
        <div className='post-creator'>
            <div>
                <img src="/user-logo.jpg"/>
                <SingleInput />
            </div>
            <Btn variation='new-post'>New Post</Btn>
        </div>
    )
}

export default PostCreator;