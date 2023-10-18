import { useLoaderData } from "react-router-dom";
import Tvcard from "./Tvcard";


const Tvs = () => {

    const tvsdata = useLoaderData();
    // console.log(tvsdata);
    
//     const { id } = useParams();
//   const detail = tvsdata.find((detail) => detail._id == id);
//   console.log(detail);

    return (
        <div className="col-span-5 grid grid-cols-1 md:grid-cols-2 ">
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 col-span-3">
                {
                    tvsdata.slice(6, 10).map( tvs => <Tvcard key={tvs._id} tvs={tvs} /> )
                }
            </div>
            <div className="col-span-2 border bg-gray-900">

            </div>
        </div>
    );
};

export default Tvs;