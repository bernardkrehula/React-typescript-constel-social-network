import { ValidationError } from '#/Classes/ValidationError';
import axios from 'axios';

export const requestCommentDelete = async(postId: string, commentId: string) => {
    const token = localStorage.getItem('token');
    try{
        const response = await axios({
            method: 'DELETE',
            url: `https://api.hr.constel.co/api/v1/posts/${postId}/comments/${commentId}`,
             
                headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
                }
            })
        return response.data.comments;
    }
    
    catch(error: any){
        if(error.status === 400){
            throw new ValidationError(error.response.data.error.message)
        }
        else{
            throw Error
        }
    }
}
