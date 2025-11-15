import Login from "./Pages/Login";
import Homepage from "./Pages/Homepage";
import { useState } from "react";
import { Outlet } from "react-router";
import ConnectionContex from "./ConnectionContext";

export type LoginDataType = {
    status: string;
    token: string;
}

const App = () => {
    const [loginData, setLoginData] = useState<LoginDataType>({
        status: '',
        token: ''
    });
    const getLogData = (data) => {
        console.log('AppData:', data)
    }
    return(
        <ConnectionContex>
            <Login/>
            <Homepage/>
        </ConnectionContex>
    )
}
export default App;