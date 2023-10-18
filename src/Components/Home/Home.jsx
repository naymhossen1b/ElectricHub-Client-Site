import { useLoaderData } from "react-router-dom";
import Brands from "./Brands";


const Home = () => {

    const categores = useLoaderData();
    // console.log(categores);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                categores.brands.map( brand => <Brands key={brand.id} brand={brand} ></Brands>)
            }
        </div>
    );
};

export default Home;