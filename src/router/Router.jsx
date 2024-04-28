import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import ErrorPage from "../components/errorPage/ErrorPage";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import AllCrafts from "../components/allCrafts/AllCrafts";
import MyCrafts from "../components/myCrafts/MyCrafts";
import AddCrafts from "../components/addCrafts/AddCrafts";
import PrivateRouter from "./PrivateRouter";

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
            },
            {
                path: '/all-craft',
                element: <AllCrafts></AllCrafts>
            },
            {
                path: '/add-craft',
                element: <PrivateRouter><AddCrafts></AddCrafts></PrivateRouter>
            },
            {
                path: '/my-crafts',
                element: <PrivateRouter><MyCrafts></MyCrafts></PrivateRouter>
            }

        ]
    }
])

export default router;