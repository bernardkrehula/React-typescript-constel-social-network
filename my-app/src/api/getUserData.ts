import axios from "axios";

export const requestUserData = async(token: string | null) => {

    try{
        const { data } = await axios.get('https://api.hr.constel.co/api/v1/accounts/me', {
            headers: { Authorization: `Bearer ${token}` }
        })
        return data;
    }catch(error){
        console.error(error);
    }

}