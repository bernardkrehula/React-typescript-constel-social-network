import { createBrowserRouter } from "react-router";
import App from "./App";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'homepage',
                element: <Homepage />
            }
        ]
    }
]);

export default router;