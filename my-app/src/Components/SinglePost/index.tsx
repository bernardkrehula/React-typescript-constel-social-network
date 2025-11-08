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
            <div className='post-user-data'>
                <img src="https://constel-hr-frontend.s3.eu-central-1.amazonaws.com/image+(2).png"/>
                <div className='post-names'>
                    <h2 className='username'>@constelic</h2>
                    <h2 className='full-name'>John Constelic</h2>
                </div>
                <div className='post-time'>
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"></path></svg>
                    <h2>2023-09-14T17:44:03.772Z</h2>
                </div>
            </div>
            <img className='post-img' src="https://constel-hr-frontend.s3.eu-central-1.amazonaws.com/4f918bc4-c0d9-4e7d-9c91-387316234058-mountain.jpeg" />
            <p className='post-content'>Climate change refers to long-term alterations in global weather patterns and temperature, primarily driven by human activities like burning fossil fuels and deforestation. Its consequences include rising temperatures, extreme weather events, and sea-level rise, posing significant environmental and societal challenges. Urgent action through sustainable practices and international cooperation is crucial to mitigate the impacts of climate change and protect our planet's future.</p>
        </div>
    )
}
export default SinglePost;