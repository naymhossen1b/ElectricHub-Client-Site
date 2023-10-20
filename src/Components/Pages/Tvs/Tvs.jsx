import { useLoaderData } from "react-router-dom";
import Cards from "./cards";
import ProductSlider from "./productSlider";
import { Helmet } from "react-helmet";

const Tvs = () => {
  const allProducts = useLoaderData();

  return (
   <div className=" mb-20">
    <Helmet title="Product" />
    <ProductSlider />

     <div className=" grid grid-cols-1 md:grid-cols-5 gap-5">

     <div className="gap-8 col-span-3">
      {allProducts.map((card) => (
        <Cards key={card._id} card={card}></Cards>
      ))}
    </div>

    <div className="col-span-2 rounded-md space-y-4 -mt-8 p-20">
      <h1 className="">🤙🏾Sponsored</h1>
      <img className="rounded-xl w-full hover:animate-pulse hover:cursor-pointer" src="https://i.ibb.co/bPDVXCk/spo1.jpg" alt="" />
      <img className="rounded-xl w-full hover:animate-pulse hover:cursor-pointer" src="https://i.ibb.co/LY3cW7Y/spo3.jpg" alt="" />
      <img className="rounded-xl w-full hover:animate-pulse hover:cursor-pointer" src="https://i.ibb.co/T8BKN4N/spo4.jpg" alt="" />
      <img className="rounded-xl w-full hover:animate-pulse hover:cursor-pointer" src="https://i.ibb.co/6Hbrt5K/w1.jpg" alt="" />
      <img className="rounded-xl w-full hover:animate-pulse hover:cursor-pointer" src="https://i.ibb.co/Sd2zt93/h1.jpg" alt="" />
    </div>

     </div>
   </div>
  );
};

export default Tvs;
