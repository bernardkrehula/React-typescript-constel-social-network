import { ValidationError } from '#/Classes/ValidationError';
import axios from 'axios';

export const postComment = async(id: string | undefined, text: string) => {
    const token = localStorage.getItem('token');
    try{
        const response = await axios({
            method: 'POST',
            url: `https://api.hr.constel.co/api/v1/posts/${id}/comments`,
             
                headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
                },
                data: {
                    text: text,
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
