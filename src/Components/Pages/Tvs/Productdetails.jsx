import { useLoaderData, useParams } from "react-router-dom";
import ProductSlider from "./productSlider";
import Healmet from "../../Helmet/Healmet";
import { useCart } from "../../Context/Cart";
import toast from "react-hot-toast";

const Productdetails = () => {
  const productDetails = useLoaderData();
  const { brand_name, ratings, tv_image, tv_name, tv_price, description } = productDetails || {};
  const params = useParams();
  console.log(params);


  const [cart, setCart] = useCart();



  return (
    <div>
      <Healmet title="Product/Details" />
      <ProductSlider />
      <section className="mt-10 mb-10 gap-5 grid grid-cols-1 md:flex items-center ">
        <div className="grid-cols-3 ">
          <img className="h-full w-96" src={tv_image} alt="" />
        </div>
        <div className=" space-y-2 p-6 bg-gray-100 rounded-tr-full dark:bg-black dark:text-white">
          <header className="text-2xl font-bold">{tv_name}</header>
          <p className="font-medium w-9/12">{description}</p>
          <p className="font-bold">Brand: {brand_name}</p>
          <div className="flex items-center gap-5 font-bold">
            <div className="rating gap-1 animate-pulse">
              <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-orange-400"
                checked
              />
              <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
              <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
              <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
            </div>
            
            <p>{ratings}</p>
          </div>
          <p className="font-bold">Price: ${tv_price}</p>
          <div className="flex items-center gap-5">
            <button className="btn border-none font-bold bg-violet-400">Buy Now</button>

            <button className=" btn border-none font-bold bg-sky-300" 
            onClick={() => {setCart([...cart, productDetails]);
              localStorage.setItem('cart', JSON.stringify([...cart, productDetails]))
              toast.success('Item Added to Cart')
            }}
            >Add to Cart</button>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Productdetails;
