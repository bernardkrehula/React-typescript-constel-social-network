import { useEffect } from "react";
import ConnectionContex from "./ConnectionContext";
import { Outlet, useNavigate } from "react-router";

const App = () => {
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