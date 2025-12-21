import { ValidationError } from '#/Classes/ValidationError';
import axios from 'axios';

export const deleteComment = async(id: string, text: string) => {
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
        console.log('response: ', response, 'text:', text, 'id: ', id)
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
