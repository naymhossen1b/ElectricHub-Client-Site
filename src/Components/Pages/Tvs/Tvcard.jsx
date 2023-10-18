/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */


const Tvcard = ({tvs}) => {
    
    const { brand_name, tv_price, ratings, tv_image } = tvs || {}

    return (
        <div>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
  <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
    <img
      src={tv_image}
      alt="img-blur-shadow"
    />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {brand_name}
    </h5>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      {ratings}
    </p>
    <h1>{tv_price}</h1>
  </div>
  <div className="p-6 pt-0">
    <button
      className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      Read More
    </button>
  </div>
</div>
        </div>
    );
};

export default Tvcard;