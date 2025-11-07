import axios from "axios";

export const getHomepageData = async(token: string) => {

    try{
        const { data } = await axios.get('https://api.hr.constel.co/api/v1/posts', {
            headers: { Authorization: `Bearer ${token}` }
        })
        console.log(data, 'radi')
        return data;
    }catch(error){
        console.error(error);
    }

}