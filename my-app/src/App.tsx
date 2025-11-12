import Login from "./Pages/Login";
import Homepage from "./Pages/Homepage";
import { useState } from "react";

const App = () => {
    const [loginData, setLoginData] = useState({
        status: '',
        token: ''
    });

    return(
        <div className="main">
            <Homepage />
            {/*<Login /> */}
            <h1>Radi</h1>
        </div>
    )
}
export default App;