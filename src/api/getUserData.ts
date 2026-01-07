import { baseUrl } from "#/utils/baseUrl";
import axios from "axios";

export const requestUserData = async(token: string | null) => {

    try{
        const response = await axios.get(`${baseUrl}/accounts/me`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response.data.account;
    }catch(error){
        console.error(error);
    }

}