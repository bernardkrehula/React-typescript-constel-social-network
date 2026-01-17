import { baseUrl } from '#/utils/baseUrl';
import axios from 'axios';

export const requestDeletePost = async(postId: string) => {
    const token = localStorage.getItem('token');
    try{
        const response = await axios({
            method: 'DELETE',
            url: `${baseUrl}/posts/${postId}`,
             
                headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
                }
            })
            console.log(response)
        return response.data.post;
    }
    
    catch(error: any){
        throw Error
    }
}
