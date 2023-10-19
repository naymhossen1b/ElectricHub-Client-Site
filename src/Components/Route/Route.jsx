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
                element: <Mycart />,
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
                path:'/getproduct/:brand_names',
                element: <Tvs />,
                loader: ({params}) => fetch(`http://localhost:5000/${params.brand_names}`)
            }
        ]
    }
])


export default appRouter;