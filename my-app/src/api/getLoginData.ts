import { CustomError } from '#/Classes/CustomError';
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
        const errorStatus = error.status;
        const errorMessage = error.response.data.error.message;
        const myError = new CustomError(errorMessage)
        console.log(myError)

        if(error instanceof CustomError){
            console.log('default error je: ', error)
        }
        //Destrukturirati data na error
        return errorMessage;
    }
}
