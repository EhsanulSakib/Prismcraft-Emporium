import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import ErrorPage from "../components/errorPage/ErrorPage";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import Register from "../components/register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }

        ]
    }
])

export default router;