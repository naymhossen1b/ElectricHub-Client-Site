import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Home/Home";
import Addproducr from "../Pages/Addproduct";
import Mycart from "../Pages/Mycart";
import Login from "../Auth/Login";

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/addproduct',
                element: <Addproducr />
            },
            {
                path: '/mycart',
                element: <Mycart />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])


export default appRouter;