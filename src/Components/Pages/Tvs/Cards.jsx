/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Cards = ({ card }) => {
  const { brand_name, ratings, tv_image, tv_name, tv_price, type, _id  } = card || {};

  return (
    <div>
      <div className="grid gap-8 p-3 grid-cols-1 md:grid-cols-2 dark:bg-black dark:text-white md:card-side bg-white text-black shadow-xl  mt-5">
       <div className="grid-cols-3">
       <figure>
          <img className="w-44 h-full" src={tv_image} alt="imaeg" />
        </figure>
       </div>
        <div className="grid-cols-2">
        <p className="text-xl font-bold">{tv_name}</p>
          <h2 className="card-title font-bold">{brand_name}</h2>
          <div className="font-bold py-3 space-y-2">
          <p>Brand: {type}</p>
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
            <Link to={`/${type}/${_id}`}><button className="btn bg-yellow-300">Details</button></Link>
            <Link to={`/update/${type}/${_id}`}><button className="btn bg-yellow-300">Update</button></Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
