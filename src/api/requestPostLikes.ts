import { baseUrl } from '#/utils/baseUrl';
import axios from 'axios';

export const requestPostLikes = async(postId: string) => {
    const token = localStorage.getItem('token');
    try{
        const response = await axios({
            method: 'GET',
            url: `${baseUrl}/posts/${postId}/likes`,
             
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
