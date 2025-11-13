import { createBrowserRouter } from "react-router";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import App from "./App";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/homepage',
                element: <Homepage />
            },
            {
                path: 'login',
                element: <Login />
            }
        ]
    }
]);


export default router;