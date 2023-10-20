/* eslint-disable react/prop-types */

import Swal from "sweetalert2";

const Cartdata = ({ cart, getCart, setGetCart }) => {

  const {_id, tv_name, brand_name, type, tv_price, ratings, tv_image, description } = cart || {}


  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/products/${_id}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success")
              const remaining = getCart.filter( coffee => coffee._id !== _id);
              setGetCart(remaining);
            }
          });
      }
    });
  };


  return (
    <div>
      <section className=" grid items-center  md:grid-cols-8 mt-7">
        <div className="flex p-3 items-center gap-5 w-96 col-span-3">
          <img className="w-96" src={tv_image} alt="" />
        </div>
        {/*  */}
        <div className="space-y-2 col-span-3 ">
          <p className="text-2xl font-bold">{tv_name}</p>
          <p className="font-bold">{description}</p>
          <div className=" flex items-center font-bold gap-5 underline">
            <p>{brand_name}</p>
            <p>{type}</p>
          </div>
          <div className="flex items-center font-bold gap-5">
            <div className="rating gap-1">
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
        </div>
        {/*  */}
        <div className="col-span-2 md:ml-4 items-center grid text-center font-bold space-y-3">
          <h1> Price: ${tv_price}</h1>
          <button onClick={() => handleDelete(_id)} className="btn hover:bg-red-500 font-bold">Delete</button>
          <button className="btn hover:bg-green-500 font-bold">Buy Now</button>
        </div>
      </section>
    </div>
  );
};

export default Cartdata;
