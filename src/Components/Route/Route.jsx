import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Home/Home";
import Addproducr from "../Pages/Addproduct";
import Mycart from "../Pages/Mycart";
import Login from "../Auth/Login";
import Footer from "../Home/Footer";
import Banner from "../Navbar/Banner";
import Tvs from "../Pages/Tvs/Tvs";

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: '/addproduct',
                element: <Addproducr />
            },
            {
                path: '/mycart',
                element: <Mycart />,
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/footer',
                element: <Footer />
            },
            {
                path: '/banner',
                element: <Banner />
            },
            {
                path:'/brand/:id',
                element: <Tvs />,
                loader: () => fetch('http://localhost:5000/products')
            }
        ]
    }
])


export default appRouter;