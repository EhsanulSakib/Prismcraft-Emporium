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
import { BASE_URL } from "../constVariable/constVariable";
import CraftDetails from "../components/craftDetails/CraftDetails";
import UpdateCraft from "../components/updateCraft/UpdateCraft";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`${BASE_URL}subCategory`)
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
                path: '/all-craft/:id',
                element: <PrivateRouter><CraftDetails></CraftDetails></PrivateRouter>,
                loader: ({ params }) => fetch(`${BASE_URL}crafts/${params.id}`)
            },
            {
                path: '/add-craft',
                element: <PrivateRouter><AddCrafts></AddCrafts></PrivateRouter>
            },
            {
                path: '/my-crafts',
                element: <PrivateRouter><MyCrafts></MyCrafts></PrivateRouter>
            },
            {
                path: '/update/:id',
                element: <UpdateCraft></UpdateCraft>,
                loader: ({ params }) => fetch(`${BASE_URL}crafts/${params.id}`)
            }

        ]
    }
])

export default router;