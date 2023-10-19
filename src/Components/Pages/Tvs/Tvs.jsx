// import { useEffect, useState } from "react";
import {  useLoaderData } from "react-router-dom";

const Tvs = () => {
  const allProducts = useLoaderData();
  console.log(allProducts);
  const { brand_name, ratings, tv_image, tv_name, tv_price } = allProducts || {};

//   const { brand_names } = useParams();
//   const getProduct = allProducts.find( product => product.type == _id);
//   console.log(getProduct);

// const [getProduct, setGetProduct] = useState([]);

// useEffect(() => {
//     fetch('http://localhost:5000/products')
//     .then(res => res.json())
//     .then(data => setGetProduct(data))
// }, []);

// console.log(getProduct);

// const params = useParams()
// console.log(params);



  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={tv_image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{brand_name}</h2>
          <p>{tv_name}</p>
          <p>{tv_price}</p>
          <div>{ratings}</div>
          <div className="card-actions">
            <button className="btn btn-primary">{type}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tvs;
