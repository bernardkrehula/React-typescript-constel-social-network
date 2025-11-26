import { ValidationError } from '#/Classes/ValidationError';
import axios from 'axios';

type ValueTypes = {
    email: string;
    password: string;
}

export const requestLoginData = async(values: ValueTypes) => {
    const { email, password } = values;
    try{
        const {data} = await axios.post('https://api.hr.constel.co/api/v1/login', {
            email: email,
            password: password
        }, {
            headers: {
            'Content-Type': 'application/json; charset=utf-8'
            }
        })
        
        localStorage.setItem('token', data.token)
        return data;
    }
    
    catch(error: unknown){
        const errorMessage = error.response.data.error.message;
        if(error?.response){
            throw new ValidationError(errorMessage);
        }
        else console.error('Unexpected error', error);        
    }
}
