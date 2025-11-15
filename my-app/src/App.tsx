import { useEffect, useState } from "react";
import ConnectionContex from "./ConnectionContext";
import { Outlet, useNavigate } from "react-router";

export type LoginDataType = {
    status: string;
    token: string;
}

const App = () => {
    const [loginData, setLoginData] = useState<LoginDataType>({
        status: '',
        token: ''
    });
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token) navigate('/login')
    },[])

    return(
        <ConnectionContex>
            <Outlet/>
        </ConnectionContex>
    )
}
export default App;