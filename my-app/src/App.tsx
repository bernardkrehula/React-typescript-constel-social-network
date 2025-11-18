import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";

export type UserDataType = {
    account: {
        email: string;
        full_name: string;
        picture: string;
        username: string;
    },
    status: string;
    userLogin: boolean;
}

const App = () => {
    //Maknuti status i dati drugacija imena varijablama
    const [userData, setUserData] = useState<UserDataType>({
        account: {
            email: '',
            full_name: '',
            picture: '',
            username: ''
        },
        status: '',
        userLogin: false
    });
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token) navigate('/login')
        else navigate('/homepage');
    },[])
    
    return <Outlet context={{userData, setUserData}}/>
}
export default App;