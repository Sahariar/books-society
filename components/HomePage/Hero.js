import React from 'react';

const Hero = ({ slider }) => {
    return (
        <div className="bg-neutral rounded-md px-6 sm:px-16 xl:px-32">
            <div className='sm:flex justify-between items-center'>
                <div className='w-full lg:w-1/2 py-16 xl:py-32 2xl:py-40'>
                    <div className='flex flex-col gap-4 sm:gap-6'>
                        <h1 className='text-2xl sm:text-5xl text-white font-bold text-center lg:text-left'>
                            Read your favorite books and Judge your knowledge.
                        </h1>
                        <h2 className='text-white text-sm sm:text-xl mx-auto sm:mx-0 text-center lg:text-left'>Book Society- Books Society is place where user can read books and test their skill and communicate with like minded.</h2>
                        <div className='flex flex-col lg:flex-row items-center gap-4'>
                            <button className="text-base shadow-lg sm:text-xl py-3 px-6 bg-primary rounded-md text-white">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 hidden lg:block'>
                    <img className='object-cover' data-aos="zoom-in" data-aos-duration="1500" src={slider.image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;