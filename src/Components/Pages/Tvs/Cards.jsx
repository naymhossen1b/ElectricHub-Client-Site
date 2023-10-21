/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Cards = ({ card }) => {
  const { brand_name, ratings, tv_image, tv_name, tv_price, type, _id  } = card || {};

  return (
    <div>
      <div className="md:card dark:bg-black dark:text-white md:card-side bg-white text-black shadow-xl gap-8 mt-5">
        <figure>
          <img className="h-full w-96 p-4" src={tv_image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold animate-pulse">{brand_name}</h2>
          <div className="font-bold py-3 space-y-2">
          <p>Brand: {type}</p>
          <p>{tv_name}</p>
          <div className='flex items-center gap-2'>
          <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        </div>
          <p className='text-xl'>{ratings}</p>
          </div>
          <p> <span>Price:</span> ${tv_price}</p>
          </div>

          <div className="flex items-center flex-grow gap-4">
            <Link to={`/productDetails/${_id}`}><button className="btn bg-yellow-300">Details</button></Link>
            <Link to={`update/${_id}`}><button className="btn bg-yellow-300">Update</button></Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
