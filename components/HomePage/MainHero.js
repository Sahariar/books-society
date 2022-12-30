import { useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Hero from "./Hero";
import "swiper/css";
import "swiper/css/navigation";

const heroData = [
	{
		image: "https://i.ibb.co/X3vryRy/ligthbook.jpg",
		id: "01",
		title: "Living in the Light",
		description:
			"In Living in the Light, Shakti Gawain introduced a powerful new way of life: that of listening to one's own intuition and relying on it as a guiding force. In the newly revised edition of that classic work, she elaborates on her original ideas, adding aspects of her own experiences and learning process over the past twelve years. In addition to balancing feminine and masculine energies, she now examines several other fundamental polarities we all have, such as power and vulnerability. Everyone's life journey involves developing the full range of self and acknowledging all aspects of one's personality -- including both light facets and dark.",
	},
	{
		image: "https://i.ibb.co/hKmbVWR/lmeetbook.jpg",
		id: "02",
		title: "The Day We Met",
		description:
			"For generations, we have focused on the individual drivers of success: passion, hard work, talent, and luck. But in today dramatically reconfigured world, success is increasingly dependent on how we interact with others. In Give and Take, Adam Grant, an award-winning researcher and Wharton’s highest-rated professor, examines the surprising forces that shape why some people rise to the top of the success ladder while others sink to the bottom. Praised by social scientists, business theorists, and corporate leaders, Give and Take opens up an approach to work, interactions, and productivity that is nothing short of revolutionary.",
	},
	{
		image: "https://i.ibb.co/DrK3rs0/forest-Book.jpg",
		id: "03",
		title: "Forest Of Secret",
		description:
			"From acclaimed psychologist Dr. Shad Helmstetter comes a life-changing guide to helping you help yourself through motivational self-talk and positive thinking. Imagine relying on yourself to optimize your outlook, focus your plans, and keep you on top, in touch, and going for it! You can do it, by adopting the simple techniques of self-talk, and understanding the power of key phrases like these: I choose my thoughts. No thought, at any time, can dwell in my mind without my permission. I have talents, skills and abilities--and I'm discovering new talents all the time. I take time to listen and communicate. I'm patient and understanding. It's worth working at, and I do. I focus my attention on the things I can control. If l can't affect it or direct it--I accept it. I know that what I believe about myself is what l will become--so I believe in the best for myself. Acclaimed psychologist Dr. Shad Helmstetter shows you how to make positive self-talk a permanent habit. Give yourself the kind, loving, determined support you would give to your best friend. Harness the power of the ultimate motivator--you!",
	},
	{
		image: "https://i.ibb.co/wQnghsk/noteBook.jpg",
		id: "04",
		title: "The Note Book Life",
		description:
			"The Note Book Life, compiled more than two thousand years ago, is a study of the anatomy of organizations in conflict. It is perhaps the most prestigious and influential book of strategy in the world today. Now, this unique volume brings together the essential versions of Sun Tzu text, along with illuminating commentaries and auxiliary texts written by distinguished strategists. The translations, by the renowned translator Thomas Cleary, have all been published previously in book form, except for The Silver Sparrow Art of War, which is available here for the first time.",
	},
];

const MainHero = () => {
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	return (
		<section className="bg-neutral relative">
			<div className="relative container mx-auto px-2">
				<div className="absolute w-1/2 xl:w-1/12 slide-arrow left-24">
					{/* left button */}
					<button
						ref={prevRef}
						className=" absolute p-[10px] sm:p-[18px] border-2 border-primary/50 hover:border-primary  rounded-full -bottom-16 right-20 sm:right-24 z-50 "
					>
						<span className="text-center text-xl text-primary/50 hover:text-primary opacity-100 ">
							<AiOutlineArrowLeft />
						</span>
					</button>

					{/* right button */}
					<button
						ref={nextRef}
						className="absolute p-[10px] sm:p-[18px] mr-5 border-2 border-primary/50 hover:border-primary rounded-full -bottom-16 right-0 z-50 "
					>
						<span className="text-center text-xl text-primary/50 hover:text-primary">
							<AiOutlineArrowRight />
						</span>
					</button>
				</div>

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
					{heroData.map((slider) => (
						<SwiperSlide key={slider.id}>
							<Hero slider={slider}></Hero>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="bs-shape">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
						className="shape-fill"
					></path>
				</svg>
			</div>
		</section>
	);
};

export default MainHero;
