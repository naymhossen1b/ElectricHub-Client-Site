import { useLoaderData } from "react-router-dom";
import Brands from "./Brands";
import Banner from "../Navbar/Banner";
import Ourbrand from "./Ourbrand";
import Policy from "./Policy";
import Healmet from "../Helmet/Healmet";


const Home = () => {

    const categores = useLoaderData();
    // console.log(categores);

    return (
       <>
       <Healmet title="Home" />
        <div className=" dark:bg-black dark:text-white">
            <Banner />
            <Policy />
           <div className="text-center">
           <h2 className="text-4xl font-bold animate-pulse mt-20">Popular Categories</h2>
            <div className="border mb-16 mt-2 w-6/12 mx-auto"></div>
           </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                categores.map( brand => <Brands key={brand._id} brand={brand} ></Brands>)
            }
        </div>
        <div className="mt-8">
            <Ourbrand />
        </div>
        </div>

       </>
        
    );
};

export default Home;