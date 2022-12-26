import { useRef } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Hero from './Hero';
import "swiper/css";
import "swiper/css/navigation";

const heroData = [
    {
        image: 'https://i.ibb.co/rFG5ccX/book1-removebg-preview.png',
        id: '01'
    },
    {
        image: 'https://i.ibb.co/DC52pr9/book2-removebg-preview.png',
        id: '02'
    },
    {
        image: 'https://i.ibb.co/ZGzQZ16/book3-removebg-preview.png',
        id: '03'
    }
]

const MainHero = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <div className='relative container mx-auto mb-24 px-2'>
            {/* left button */}
            <button
                ref={prevRef}
                className='absolute p-[10px] sm:p-[18px] bg-neutral rounded-full -bottom-16 right-20 sm:right-24 z-50'
            >
                <span className='text-center text-xl text-white opacity-100'>
                    <AiOutlineArrowLeft />
                </span>
            </button>

            {/* right button */}
            <button
                ref={nextRef}
                className='absolute p-[10px] sm:p-[18px] mr-5 bg-primary rounded-full -bottom-16 right-0 z-50'
            >
                <span className='text-center text-xl text-white'>
                    <AiOutlineArrowRight />
                </span>
            </button>

            <Swiper
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="heroSwiper"
            >

                {
                    heroData.map(slider =>
                        <SwiperSlide key={slider.id} >
                            <Hero slider={slider}>

                            </Hero>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default MainHero;