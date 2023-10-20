import Swal from "sweetalert2";

const Addproduct = () => {

  const handleInput = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const shortDetails = form.shortDetails.value;
    const rating = form.rating.value;
    const customarData = { photo, name, brandName, type, price, shortDetails, rating };
    console.log(customarData);

    fetch("http://localhost:5000/products", {
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
      });
  };

  return (
    <div className="">
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
                    id="firstname"
                    type="text"
                    name="name"
                    placeholder="Enter your product name"
                    className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Brand Name</label>
                  <input
                    id="brandName"
                    type="text"
                    name="brandName"
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
                    id="shortDetails"
                    type="text"
                    name="shortDetails"
                    placeholder="Enter short details"
                    className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Price</label>
                  <input
                    id="price"
                    type="number"
                    name="price"
                    placeholder="Enter price"
                    className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Rating</label>
                  <input
                    id="rating"
                    type="text"
                    name="rating"
                    placeholder="Give your ratings"
                    className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full">
                  <label className="text-sm">Your Product Photo</label>
                  <input
                    id="photo"
                    type="url"
                    name="photo"
                    placeholder="Enter photo URL"
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