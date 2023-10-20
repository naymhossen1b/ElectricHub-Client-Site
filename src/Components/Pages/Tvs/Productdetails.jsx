import { useLoaderData } from "react-router-dom";
import ProductSlider from "./productSlider";

const Productdetails = () => {
  const productDetails = useLoaderData();
  console.log(productDetails);
  const { brand_name, ratings, tv_image, tv_name, tv_price, type, description } = productDetails || {};
  

  return (
    <div>
      <ProductSlider />
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={tv_image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{tv_name}</h2>
          <p>{brand_name}</p>
          <p>{description}</p>
          <p>{ratings}</p>
          <p>{type}</p>
          <div className="card-actions">
            <button className="btn btn-primary">{tv_price}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
