import axios from 'axios';

export const requestPostLikes = async(postId: string) => {
    const token = localStorage.getItem('token');
    try{
        const response = await axios({
            method: 'GET',
            url: `https://api.hr.constel.co/api/v1/posts/${postId}/likes`,
             
                headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
                }
            })
        return response.data.post;
    }
    
    catch(error: any){
        throw Error
    }
}
