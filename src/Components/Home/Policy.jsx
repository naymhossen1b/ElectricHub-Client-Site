import { BsRocketTakeoff } from 'react-icons/bs';
import { GiTakeMyMoney } from 'react-icons/gi';
import { BiSupport } from 'react-icons/bi';
import { FiUmbrella } from 'react-icons/fi';

const Policy = () => {
    return (
        <div>
            <section className="grid grid-cols-1 md:grid-cols-4 border p-2 mt-20 mb-24 ">
                <div className="flex items-center gap-8  border-r-2 p-1">
                    <div className='text-7xl font-medium text-sky-500'>
                        <BsRocketTakeoff />
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold'>Fast & Free Shipping</h1>
                        <p className='text-gray-700'>on all orders $999</p>
                    </div>
                </div>
                <div className="flex items-center gap-8  border-r-2 p-2">
                    <div className='text-7xl font-medium text-sky-500'>
                        <GiTakeMyMoney />
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold'>100% Money Guarantee</h1>
                        <p className='text-gray-700'>30 days money back</p>
                    </div>
                </div>
                <div className="flex items-center gap-8  border-r-2 p-2">
                    <div className='text-7xl font-medium text-sky-500'>
                        <FiUmbrella />
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold'>Safe Shopping</h1>
                        <p className='text-gray-700'>Safe Shopping Guarantee</p>
                    </div>
                </div>
                <div className="flex items-center gap-8 p-2">
                    <div className='text-7xl font-medium text-sky-500'>
                        <BiSupport />
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold'>Online Support</h1>
                        <p className='text-gray-700'>24/24 on day</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Policy;