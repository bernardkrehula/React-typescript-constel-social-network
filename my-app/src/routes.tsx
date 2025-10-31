import { createBrowserRouter } from "react-router";
import App from "./App";
import Homepage from "./Homepage";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'Homepage',
                element: <Homepage />
            }
        ]
    }
]);