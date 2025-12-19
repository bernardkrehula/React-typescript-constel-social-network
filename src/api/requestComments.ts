import { ValidationError } from '#/Classes/ValidationError';
import axios from 'axios';

export const requestComments = async(id: string, method: string) => {
    const token = localStorage.getItem('token');
    try{
        const response = await axios({
            method: method,
            url: `https://api.hr.constel.co/api/v1/posts/${id}/comments`,
             
                headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
                }
            })
        console.log('response: ', response.data.comments)
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
