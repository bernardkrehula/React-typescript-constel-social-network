import axios from 'axios';

type ValueTypes = {
    email: string;
    password: string;
}

export const fetchDataApi = async(values: ValueTypes) => {
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
    catch(error){
        console.error(error);
    }
}
