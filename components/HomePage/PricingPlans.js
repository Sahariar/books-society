import {FaCheck} from 'react-icons/fa';
const PricingPlans = () => {
    return (
        <div className="bg-neutral">
            <h1 className='text-white text-center pb-10 pt-24 text-4xl font-bold'>
                    Pricing Plans
            </h1>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 py-10 container mx-auto">
                <div className="bg-white shadow-lg rounded-lg p-10 price-plan">
                    <h2 className="text-center text-4xl">Free Trial</h2>
                    <h4 className='text-xl text-center mt-4'><span className='text-3xl'>$</span> <span className='text-primary text-5xl'>00</span>/7days Trial</h4>
                    <hr className='my-5' />
                    <ul>
                        <li className="flex items-center text-base mb-2"><FaCheck className='text-primary'/>&nbsp;&nbsp;Read books</li>
                        <li className="flex items-center text-base mb-2"><FaCheck className='text-primary'/>&nbsp;&nbsp;Chat with others</li>
                        <li className="flex items-center text-base mb-2"><FaCheck className='text-primary'/>&nbsp;&nbsp;Note down</li>
                        <li className="flex items-center text-base mb-2"><FaCheck className='text-primary'/>&nbsp;&nbsp;Can Read All books</li>
                        <li className="flex items-center text-base mb-2"><FaCheck className='text-primary'/>&nbsp;&nbsp;Access 7 days</li>
                    </ul>
                    <div className='text-center mt-5'>
                        <button className='btn btn-outline btn-primary rounded w-1/2'>Learn More</button>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-10 price-plan">
                    <h2 className="text-center text-4xl">Half Yearly</h2>
                    <h4 className='text-xl text-center mt-4'>Only <span className='text-3xl'>$</span> <span className='text-primary text-5xl'>65</span></h4>
                    <hr className='my-5' />
                    <ul>
                        <li className="flex items-center text-base mb-2"><FaCheck className='text-primary'/>&nbsp;&nbsp;Read books</li>
                        <li className="flex items-center text-base mb-2"><FaCheck className='text-primary'/>&nbsp;&nbsp;Chat with others</li>
                        <li className="flex items-center text-base mb-2"><FaCheck className='text-primary'/>&nbsp;&nbsp;Take test</li>
                        <li className="flex items-center text-base mb-2"><FaCheck className='text-primary'/>&nbsp;&nbsp;Note down</li>
                        <li className="flex items-center text-base mb-2"><FaCheck className='text-primary'/>&nbsp;&nbsp;Can Read All books</li>
                        <li className="flex items-center text-base mb-2"><FaCheck className='text-primary'/>&nbsp;&nbsp;Access 6 Months</li>
                        <li className="flex items-center text-base mb-2"><FaCheck className='text-primary'/>&nbsp;&nbsp;One To one Chat options</li>
                    </ul>
                    <div className='text-center mt-5'>
                        <button className='btn btn-outline btn-primary rounded w-1/2'>Learn More</button>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-10 price-plan">
                    <h2 className="text-center text-4xl">Yearly</h2>
                    <h4 className='text-xl text-center mt-4'>Only <span className='text-3xl'>$</span> <span className='text-primary text-5xl'>99</span></h4>
                    <hr className='my-5' />
                    <ul>
                        <li className="flex items-center text-base mb-2"><FaCheck className='text-primary'/>&nbsp;&nbsp;Read books</li>
                        <li className="flex items-center text-base mb-2"><FaCheck className='text-primary'/>&nbsp;&nbsp;Chat with others</li>
                        <li className="flex items-center text-base mb-2"><FaCheck className='text-primary'/>&nbsp;&nbsp;Take test</li>
                        <li className="flex items-center text-base mb-2"><FaCheck className='text-primary'/>&nbsp;&nbsp;Note down</li>
                        <li className="flex items-center text-base mb-2"><FaCheck className='text-primary'/>&nbsp;&nbsp;Can Read All books</li>
                        <li className="flex items-center text-base mb-2"><FaCheck className='text-primary'/>&nbsp;&nbsp;Access 1 years</li>
                        <li className="flex items-center text-base mb-2"><FaCheck className='text-primary'/>&nbsp;&nbsp;One To one Chat options</li>
                    </ul>
                    <div className='text-center mt-5'>
                        <button className='btn btn-outline btn-primary rounded w-1/2'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPlans;