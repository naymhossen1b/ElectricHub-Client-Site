// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "./cards";
// import ProductSlider from "./productSlider";

const Tvs = () => {
  const allProducts = useLoaderData();

  return (
   <div className="mt-20 mb-20">
    {/* <ProductSlider /> */}

     <div className=" grid grid-cols-1 md:grid-cols-5 gap-5">

     <div className="gap-8 col-span-3">
      {allProducts.map((card) => (
        <Cards key={card._id} card={card}></Cards>
      ))}
    </div>

    <div className="border col-span-2 rounded-md">

    </div>

     </div>
   </div>
  );
};

export default Tvs;
