import { baseUrl } from '#/utils/baseUrl';
import axios from 'axios';

export const requestSinglePost = async(postId: string) => {
    const token = localStorage.getItem('token');
    try{
        const response = await axios({
            method: 'GET',
            url: `${baseUrl}/posts/${postId}`,
             
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
