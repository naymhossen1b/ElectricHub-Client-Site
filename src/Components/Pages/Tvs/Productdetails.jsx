import { useLoaderData, useParams } from "react-router-dom";

const Productdetails = () => {

    const productDetails = useLoaderData();
    console.log(productDetails);


    const param = useParams()
    console.log(param);

    return (
        <div>
            
        </div>
    );
};

export default Productdetails;