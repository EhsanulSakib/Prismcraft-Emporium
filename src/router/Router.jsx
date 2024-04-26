import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import ErrorPage from "../components/errorPage/ErrorPage";
import Home from "../components/home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default router;