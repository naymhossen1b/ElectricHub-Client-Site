import Swal from "sweetalert2";
import Healmet from "../Helmet/Healmet";

const Addproduct = () => {

  const handleInput = (e) => {
    e.preventDefault();
    const form = e.target;
    const brand_name = form.brand_name.value;
    const tv_image = form.tv_image.value;
    const tv_name = form.tv_name.value;
    const type = form.type.value;
    const tv_price = form.tv_price.value;
    const description = form.description.value;
    const ratings = form.ratings.value;
    const customarData = { tv_image, brand_name, tv_name, type, tv_price, description, ratings };
    console.log(customarData);

    fetch(`http://localhost:5000/add/${type}/`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(customarData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            title: 'Success!',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        }

      })
      .catch(error => console.log(error))

  };

  return (
    <div className="">
      <Healmet title="Add Product" />
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-500">Add New Product</h1>
        <p className="font-medium">
        Introducing the latest electronic marvel: our cutting-edge smartwatch! Seamlessly merging style and function, it boasts a vibrant touchscreen, heart rate monitoring, GPS, and water resistance. Stay connected with notifications, track your fitness, and elevate your tech-savvy fashion. The perfect companion for a modern, active lifestyle.
        </p>
      </div>
      {/* coffee form */}
      <div>
        <section className="p-10 mb-10 mt-8">
          <form onSubmit={handleInput} className="container flex flex-col mx-auto space-y-12">
            <fieldset className="grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm bg-orange-100 text-black">
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Name</label>
                  <input
                    id="tv_name"
                    type="text"
                    name="tv_name"
                    placeholder="Enter your product name"
                    className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Brand Name</label>
                  <input
                    id="brand_name"
                    type="text"
                    name="brand_name"
                    placeholder="Enter brand name"
                    className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Type</label>
                  <input
                    id="type"
                    type="text"
                    name="type"
                    placeholder="Enter product type..."
                    className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Details</label>
                  <input
                    id="description"
                    type="text"
                    name="description"
                    placeholder="Enter short details"
                    className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Price</label>
                  <input
                    id="tv_price"
                    type="number"
                    name="tv_price"
                    placeholder="Enter price"
                    className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Rating</label>
                  <input
                    id="ratings"
                    type="text"
                    name="ratings"
                    placeholder="Give your ratings"
                    className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full">
                  <label className="text-sm">Your Product Photo</label>
                  <input
                    id="tv_image"
                    type="url"
                    name="tv_image"
                    placeholder="Enter image URL"
                    className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <button className="btn btn-block bg-orange-300 border-none col-span-full">
                  <input type="submit" value="Add Your Product" className="hover:cursor-pointer" />
                </button>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Addproduct;