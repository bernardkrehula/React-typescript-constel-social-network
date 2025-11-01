import { createBrowserRouter } from "react-router";
import App from "./App";
import Homepage from "./Pages/Homepage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'Login',
                element:
            }
            {
                path: 'Homepage',
                element: <Homepage />
            }
        ]
    }
]);

export default router;