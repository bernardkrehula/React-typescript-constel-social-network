import Login from "./Pages/Login";
import Homepage from "./Pages/Homepage";
import { useState } from "react";

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
        <div className="main">
            <Homepage/>
            <Login setLoginData={setLoginData} getLogData={'gas'}/> 
        </div>
    )
}
export default App;