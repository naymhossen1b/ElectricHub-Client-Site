import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Home/Home";
import Addproducr from "../Pages/Addproduct";
import Login from "../Auth/Login";
import Footer from "../Home/Footer";
import Banner from "../Navbar/Banner";
import Tvs from "../Pages/Tvs/Tvs";
import Signup from "../Auth/Signup";
import Error from "../Pages/Error";
import Productdetails from "../Pages/Tvs/Productdetails";
import UpdateProduct from "../Pages/UpdateProduct";
import Privateroute from "../Auth/Privateroute";
import CartPage from "../Pages/CartPage";



const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://elctronic-hub-server-7c7w7vv2b-nayms-projects.vercel.app/category')
            },
            {
                path: '/addproduct',
                element: <Privateroute><Addproducr /></Privateroute>
            },
            {
                path: '/cart',
                element: <Privateroute> <CartPage />  </Privateroute>,
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
                loader: ({params}) => fetch(`https://elctronic-hub-server-7c7w7vv2b-nayms-projects.vercel.app/${params.type}`)
            },
            {
                path: "/:type/:id",
                element: <Privateroute><Productdetails /></Privateroute>,
                loader: ({params}) => fetch(`https://elctronic-hub-server-7c7w7vv2b-nayms-projects.vercel.app/${params.type}/${params.id}`)
            },
            {
                path: '/update/:type/:id',
                element: <Privateroute><UpdateProduct /></Privateroute>,
                loader: ({params}) =>  fetch(`https://elctronic-hub-server-7c7w7vv2b-nayms-projects.vercel.app/update/${params.type}/${params.id}`)

                // loader: ({params}) => fetch(`https://elctronic-hub-server-7c7w7vv2b-nayms-projects.vercel.app/${params.type}`)
                // loader: ({params}) => fetch(`https://elctronic-hub-server-7c7w7vv2b-nayms-projects.vercel.app/tvs/${params.id}`)
            }
        ]
    }
])


export default appRouter;