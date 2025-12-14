import { ValidationError } from '#/Classes/ValidationError';
import axios from 'axios';

/* export const requestLikesStatus = async(id: string, method: string) => {
    const token = localStorage.getItem('token');
    console.log('token: ', token)
    try{
        const response = await axios.post(`https://api.hr.constel.co/api/v1/posts/${id}/like`, {
                Authorization: `Bearer ${token}`
            },
            {
                headers: {
                'Content-Type': 'application/json',
                }
            })
        console.log('response: ', response)
        return { pageData: {token: response.data.token}};
    }
    
    catch(error: any){
        if(error.status === 400){
            throw new ValidationError(error.response.data.error.message)
        }
        else{
            throw Error
        }
    }
} */

export const requestLikesStatus = async(id: string, method: string) => {
    const token = localStorage.getItem('token');
    console.log(token)
    try{
        const response = await fetch(`https://api.hr.constel.co/api/v1/posts/${id}/like`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
        },
        });
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}