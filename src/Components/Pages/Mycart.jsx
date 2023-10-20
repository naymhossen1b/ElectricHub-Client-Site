import { useLoaderData } from "react-router-dom";
import Cartdata from "./Cartdata";
import { useState } from "react";
import Healmet from "../Helmet/Healmet";

const Mycart = () => {
    
    const loadCartdata = useLoaderData();

    const [getCart, setGetCart] = useState(loadCartdata)

    return (
        <div className="">
            <Healmet title="My Cart" />
            <div className="">
                {
                    getCart.map( cart => <Cartdata key={cart._id} getCart={getCart} cart={cart} setGetCart={setGetCart} /> )
                }
            </div>
        </div>
    );
};

export default Mycart;