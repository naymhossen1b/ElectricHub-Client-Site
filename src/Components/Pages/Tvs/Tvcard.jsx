/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

const Tvcard = ({ tvs }) => {
  const { brand_name, tv_price, ratings, tv_image } = tvs || {};

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={tv_image} alt="image" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{brand_name}</h2>
          <p>{tv_price}</p>
          <p>{ratings}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tvcard;
