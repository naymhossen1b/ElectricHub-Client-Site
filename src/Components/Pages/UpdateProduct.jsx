import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const updatedProduct = useLoaderData();
  console.log(updatedProduct);
  const { brand_name, ratings, tv_image, tv_name, tv_price, type, _id } = updatedProduct || {};


  const params = useParams();
    // console.log(params);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const tv_name = form.tv_name.value;
    const brand_name = form.brand_name.value;
    const type = form.type.value;
    const tv_price = form.tv_price.value;
    const ratings = form.ratings.value;
    const tv_image = form.tv_image.value;
    const customarData = { tv_name, brand_name, type, tv_price, ratings, tv_image };
    console.log(customarData);

    

    fetch(`http://localhost:5000/${params.type}/${_id}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(customarData),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.modifiedCount > 0){
          Swal.fire({
            title: 'Success!',
            text: 'Product Updated!',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        }
      });
  };

  return (
    <div>
      <div className="">
        <div className="text-left space-y-3">
          <h1 className="text-4xl font-bold text-gray-500">Update Our Product Now</h1>
          <p className="font-medium">
            Visit our electronic brand shop for a cutting-edge technology experience. Discover a
            wide array of top-tier gadgets, from smartphones to laptops, headphones to smart home
            devices. Immerse yourself in innovation with the latest products, all backed by expert
            guidance and exceptional customer service. Elevate your tech lifestyle with us today.
          </p>
        </div>
        {/* coffee form */}
        <div>
          <section className="p-6 bg-orange-800 mt-8">
            <form onSubmit={handleUpdate} className="container flex flex-col mx-auto space-y-12">
              <fieldset className="grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm bg-orange-100 text-black">
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full sm:col-span-3">
                    <label className="text-sm">Product Name</label>
                    <input
                      id="firstname"
                      type="text"
                      name="tv_name"
                      defaultValue={tv_name}
                      placeholder="Enter product name"
                      className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label className="text-sm">Product Brand</label>
                    <input
                      id="brand_name"
                      type="text"
                      name="brand_name"
                      defaultValue={brand_name}
                      placeholder="Enter product brand name"
                      className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label className="text-sm">Product Type</label>
                    <input
                      id="lastname"
                      type="text"
                      name="type"
                      defaultValue={type}
                      placeholder="Enter product type"
                      className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label className="text-sm">Product Price</label>
                    <input
                      id="tv_price"
                      type="number"
                      defaultValue={tv_price}
                      name="tv_price"
                      placeholder="Enter product price"
                      className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label className="text-sm">Your Ratings</label>
                    <input
                      id="lastname"
                      type="number"
                      name="ratings"
                      defaultValue={ratings}
                      placeholder="Enter product ratings"
                      className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                    />
                  </div>
                  <div className="col-span-full">
                    <label className="text-sm">Product Photo</label>
                    <input
                      id="tv_image"
                      type="url"
                      name="tv_image"
                      defaultValue={tv_image}
                      placeholder="Enter image URL"
                      className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                    />
                  </div>
                  <button className="btn btn-block bg-orange-300 border-none col-span-full">
                    <input type="submit" value="Add Coffee" className="hover:cursor-pointer" />
                  </button>
                </div>
              </fieldset>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
