import { useLoaderData } from "react-router-dom";
import Brands from "./Brands";
import Footer from "./Footer";
import Banner from "../Navbar/Banner";


const Home = () => {

    const categores = useLoaderData();

    return (
       <>
        <div>
            <Banner />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                categores.slice(0, 6).map( brand => <Brands key={brand.id} brand={brand} ></Brands>)
            }
        </div>
        <div className="mt-8">
            <Footer />
        </div>
        </div>

       </>
        
    );
};

export default Home;