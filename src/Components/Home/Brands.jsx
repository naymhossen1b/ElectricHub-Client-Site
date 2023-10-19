/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brands = ({ brand }) => {

  const {brand_name, brand_image, brand_names} = brand || {}

  // const [getProducts, setGetProducts] = useState([]);

  // useEffect(() =>{
  //   fetch('http://localhost:5000/products')
  //   .then(res => res.json())
  //   .then(data => {
  //     setGetProducts(data);
  //   })
  // }, [])

  // console.log(getProducts);

  return (
    <div>
     <Link to={`getproduct/${brand_names}`}>
     <div className="relative grid h-[25rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 hover:cursor-pointer">
        <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none">

            <img className="w-full bg-cover" src={brand_image} alt="" />

          <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        <div className="relative">
          <h2 className="mb-6 block font-sans font-bold text-2xl text-gray-400 leading-[1.5] tracking-normal antialiased">
            {brand_name}
          </h2>
        </div>
      </div>
     </Link>
    </div>
  );
};

export default Brands;
