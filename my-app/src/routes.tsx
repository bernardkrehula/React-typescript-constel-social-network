import { createBrowserRouter } from "react-router";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />
    },
    {
        path: 'login',
        element: <Login />
    }
]);


export default router;