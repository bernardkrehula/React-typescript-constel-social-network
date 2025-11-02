import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const fetchDataApi = async(password: string, email: string) => {
    const {data} = await axios.post('https://api.hr.constel.co/api/v1/login', {
        email: email,
        password: password
    }, {
        headers: {
        'Content-Type': 'application/json; charset=utf-8'
        }
    })
    return data;
}


export const getLoginData = (password: string, email: string) => {
    return useQuery({
        queryKey: ['loginData'],
        queryFn: () => fetchDataApi(password, email),
        enabled: !!password,
    })
} 

/* export const fetchDataApi = async(password: string, email: string) => {
    const options = {
    method: 'POST',
    url: 'https://api.hr.constel.co/api/v1/login',
    params: {
        email: 'malesija.nemanja@gmail.com',
        password: 'He5r4dOVdy9x6IT'
    },
    headers: {
        'Content-Type': 'application/json'
    } 
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    } 
} */