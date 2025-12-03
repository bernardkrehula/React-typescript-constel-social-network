import { ValidationError } from '#/Classes/ValidationError';
import axios from 'axios';

type ValueTypes = {
    email: string;
    password: string;
}

export const requestLoginData = async(values: ValueTypes) => {
    const { email, password } = values;
    try{
        const response = await axios.post('https://api.hr.constel.co/api/v1/login', {
            email: email,
            password: password
        }, {
            headers: {
            'Content-Type': 'application/json; charset=utf-8'
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
}