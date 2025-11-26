import { useEffect } from "react";
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
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token) navigate('/login')
        else navigate('/homepage');
    },[])
    
    return <Outlet />
}
export default App;