import { ValidationError } from '#/Classes/ValidationError';
import axios from 'axios';

export const changeLikeStatus = async(id: string, liked: boolean) => {
    const token = localStorage.getItem('token');
    try{
        const response = await axios({
            method: liked ? 'DELETE' : 'POST',
            url: `https://api.hr.constel.co/api/v1/posts/${id}/like`,
             
                headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
                }
            })
        return response.data.status;
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
