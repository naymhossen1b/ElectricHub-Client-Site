import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Home/Home";
import Addproducr from "../Pages/Addproduct";
import Mycart from "../Pages/Mycart";
import Login from "../Auth/Login";
import Footer from "../Home/Footer";
import Banner from "../Navbar/Banner";
import Tvs from "../Pages/Tvs/Tvs";
import Signup from "../Auth/Signup";
import Error from "../Pages/Error";
import Productdetails from "../Pages/Tvs/Productdetails";
import UpdateProduct from "../Pages/UpdateProduct";
import Privateroute from "../Auth/Privateroute";



const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/category')
            },
            {
                path: '/addproduct',
                element: <Addproducr />
            },
            {
                path: '/mycart',
                element: <Privateroute> <Mycart /> </Privateroute>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
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
                path:'/getproduct/:type',
                element: <Tvs />,
                loader: ({params}) => fetch(`http://localhost:5000/${params.type}`)
            },
            {
                path: "/:type/:id",
                element: <Productdetails />,
                loader: ({params}) => fetch(`http://localhost:5000/${params.type}/${params.id}`)
            },
            {
                path: '/type/:id',
                element: <UpdateProduct />,
                loader: ({params}) =>  fetch(`http://localhost:5000/${params.type}${params.id}`)

                // loader: ({params}) => fetch(`http://localhost:5000/${params.type}`)
                // loader: ({params}) => fetch(`http://localhost:5000/tvs/${params.id}`)
            }
        ]
    }
])


export default appRouter;