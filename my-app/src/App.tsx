import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";

export type LoginDataType = {
    email: string;
    full_name: string;
    picture: string;
    username: string;
}

const App = () => {
    const [loginData, setLoginData] = useState<LoginDataType>({
        email: '',
        full_name: '',
        picture: '',
        username: ''
    });
    const navigate = useNavigate();
    useEffect(() => {
        console.log(loginData)
        const token = localStorage.getItem('token');
        if(!token) navigate('/login')
    },[])

    return <Outlet context={{loginData, setLoginData}}/>
}
export default App;