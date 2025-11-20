import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";

export type UserDataType = {
    account: {
        email: string;
        full_name: string;
        picture: string;
        username: string;
    },
    userLogin: boolean;
}

const App = () => {
    //Maknuti status i dati drugacija imena varijablama
    const [userProfileData, setUserProfileData] = useState<UserDataType>({
        account: {
            email: '',
            full_name: '',
            picture: '',
            username: ''
        },
        userLogin: false
    });
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token) navigate('/login')
        else navigate('/homepage');
    },[])
    
    return <Outlet context={{userProfileData, setUserProfileData}}/>
}
export default App;