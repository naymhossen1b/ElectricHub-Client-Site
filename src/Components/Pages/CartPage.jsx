// import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/Cart";
import { useContext } from "react";
import { AuthContext } from "../Auth/Authprovider";
import Swal from "sweetalert2";

const CartPage = () => {
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useCart();
//   const navigate = useNavigate();



  const removeProduct = (pid) => {
    try {
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
            let myCart = [...cart];
            let index = myCart.findIndex((item) => item._id === pid);
            myCart.splice(index, 1);
            setCart(myCart);
            localStorage.setItem('cart', JSON.stringify(myCart));
            Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
          }
        });
      } catch (error) {
        console.log(error);
      }
    }



  return (
    <div>
    <div className="text-center">
    <p>{`Hello ${user.accessToken && user.email}`}</p>
      <h2>
        {
            cart?.length
            ? `You Have ${cart.length} Items In Your Cart 
            ${user.accessToken ? "" : "Pleace Login to Checkout"}`
            : "Your Cart is Empty"
        }
      </h2>
    </div>
    <section>
        <div>
            {
                cart.map( p =>  <div key={p._id}>
                    <section className=" grid items-center  md:grid-cols-8 mt-7">
                      <div className="flex p-3 items-center gap-5 w-96 col-span-3">
                        <img className="w-96" src={p.tv_image} alt="" />
                      </div>
                      {/*  */}
                      <div className="space-y-2 col-span-3 ">
                        <p className="text-2xl font-bold">{p.tv_name}</p>
                        <p className="font-bold">{p.description}</p>
                        <div className=" flex items-center font-bold gap-5 underline">
                          <p>{p.brand_name}</p>
                          <p>{p.type}</p>
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
                          <p>{p.ratings}</p>
                        </div>
                      </div>
                      <div className="col-span-2 md:ml-4 items-center grid text-center font-bold space-y-3">
                        <h1> Price: ${p.tv_price}</h1>
                        <button onClick={() => removeProduct(p._id)}  className="btn hover:bg-red-500 font-bold">Delete</button>
                        <button className="btn hover:bg-green-500 font-bold">Buy Now</button>
                      </div>
                    </section>
                  </div>)
            }
        </div>
    </section>
      
    </div>
  );
};

export default CartPage;
