import axios from "axios";

export const getHomepageData = async(token: string) => {

    try{
        const { data } = await axios.post('https://api.hr.constel.co/api/v1/posts', {
            token: token
        }, {
            headers: {
            'Content-Type': 'application/json; charset=utf-8'
            }
        })
        return data;
    }catch(error){
        console.error(error);
    }

}