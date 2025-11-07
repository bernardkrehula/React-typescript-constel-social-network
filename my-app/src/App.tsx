import './App.css'
import Login from './Pages/Login';
import Authcontext from './Pages/AuthContext';
import Homepage from './Pages/Homepage';

const App = () => {
    return(
        <Authcontext>
            <Login/>
            <Homepage/>
        </Authcontext>
    )
}

export default App;