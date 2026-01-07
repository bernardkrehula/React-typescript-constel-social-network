import { ValidationError } from '#/Classes/ValidationError';
import { baseUrl } from '#/utils/baseUrl';
import axios from 'axios';
import type { FieldValues } from 'react-hook-form';

export const requestLoginData = async(values: FieldValues) => {
    const { email, password } = values;
    try{
        const response = await axios.post(`${baseUrl}/login`, {
            email: email,
            password: password
        }, {
            headers: {
            'Content-Type': 'application/json; charset=utf-8'
            }
        })
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
}