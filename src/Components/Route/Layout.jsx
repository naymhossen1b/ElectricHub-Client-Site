import { Outlet } from "react-router-dom";
import Header from "../Navbar/Header";
import { Toaster } from "react-hot-toast";

const Layout = () => {
    return (
        <>
        <div className="w-11/12 mx-auto">
            <Header />
            <div className="mt-8">
            <Outlet />
            <Toaster />
            </div>
        </div>
        </>
    );
};

export default Layout;