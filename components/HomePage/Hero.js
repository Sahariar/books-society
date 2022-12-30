import Link from 'next/link';
import Divider from '../Shared/Divider';

const Hero = ({ slider }) => {
    return (
        <div className="">
            <div className='sm:flex sm:py-20 lg:py-0 justify-between items-center my-12 xl:my-16 2xl:my-24'>
                <div className='w-full md:mx-auto md:w-10/12 lg:w-6/12 '>
                    <div className='flex flex-col gap-4 sm:gap-6 p-2'>

                        <h4 className='flex items-center text-xl sm:text-2xl text-white font-bold text-center xl:text-left italic capitalize'>
                        <span className='pr-4'>
                        <Divider></Divider>
                        </span>
                        <span className=''>Welcome to Books Society</span></h4>
                        <h1 className='text-5xl capitalize leading-10 lg:text-7xl text-white font-bold text-center xl:text-left'>
                            {slider.title}
                        </h1>
                        <p className='text-white text-md mx-auto sm:mx-0 text-center xl:text-left'>
                        {slider.description.slice(0,250)}...
                        </p>
                        <div className='flex flex-col xl:flex-row items-center gap-4 my-10'>
                            <button >
                            <Link href={"/login"}>
									<span className="text-neutral bg-primary px-20 py-5 rounded-lg hover:bg-primary/90"> Get Started</span>
							</Link>
                            </button>
                            <button className="py-10">
                               
                                <Link href={"/login"}>
									<span className="text-white px-10 hover:text-primary underline ">Read Books For free </span>
							</Link>
                                </button>
                        </div>
                    </div>
                </div>
                <div className='w-5/12 hidden lg:flex justify-end items-end '>
                    <img className='object-cover border-8 rounded-md mx-8 shadow-primary hover:shadow-xl' data-aos="zoom-in" data-aos-duration="1500" src={slider.image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;