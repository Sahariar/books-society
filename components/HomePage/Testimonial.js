import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const Testimonial = () => {
    return (
        <>
          <section className=" bg-secondary/10 pt-24">
			<div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
				<div className="flex items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						x="0"
						y="0"
						enableBackground="new 0 0 32 32"
						version="1.1"
						viewBox="0 0 32 32"
						xmlSpace="preserve"
						className="h-8 w-8 lg:h-48 lg:w-48 hidden md:flex fill-gray-500/20 absolute left-96"
					>
						<path d="M13 11c.6 0 1-.4 1-1s-.4-1-1-1c-5 0-9 4-9 9 0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5c-.3 0-.7 0-1 .1 1.3-1.3 3-2.1 5-2.1zM23 13c-.3 0-.7 0-1 .1 1.3-1.3 3-2.1 5-2.1.6 0 1-.4 1-1s-.4-1-1-1c-5 0-9 4-9 9 0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5z"></path>
					</svg>{" "}
					<h2 className="text-5xl">
						Testimonials
					</h2>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						x="0"
						y="0"
						enableBackground="new 0 0 46.195 46.195"
						version="1.1"
						viewBox="0 0 46.195 46.195"
						xmlSpace="preserve"
						className="h-8 w-8 lg:h-48 lg:w-48 hidden md:flex fill-gray-500/20 absolute right-96"
					>
						<path d="M35.765 8.264c-5.898 0-10.555 4.782-10.555 10.68s4.844 10.68 10.742 10.68c.059 0 .148-.008.207-.009-2.332 1.857-5.261 2.976-8.467 2.976-1.475 0-2.662 1.196-2.662 2.67s.949 2.67 2.424 2.67c10.469-.001 18.741-8.518 18.741-18.987v-.007c0-5.895-4.534-10.673-10.43-10.673zM10.75 8.264C4.852 8.264.187 13.046.187 18.944s4.84 10.68 10.739 10.68c.059 0 .146-.008.205-.009-2.332 1.857-5.262 2.976-8.468 2.976-1.475 0-2.663 1.196-2.663 2.67s.964 2.67 2.439 2.67c10.469-.001 18.756-8.518 18.756-18.987v-.007c0-5.895-4.549-10.673-10.445-10.673z"></path>
					</svg>
				</div>
				<p className="mx-auto mt-4 text-xl text-center">
					What Client Says About Us
				</p>
			</div>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className="mySwiper "
			>
				<SwiperSlide>
					<div className="slide-item flex flex-col items-center justify-center space-y-4 py-14">
						<p className="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl">
							" Tying wholesale right into my website for me to control, I love it. It’s seamless."
						</p>
						<div className="flex flex-col justify-center  items-center space-y-3">
							<img
								src="https://randomuser.me/api/portraits/women/55.jpg"
								alt=""
								className="w-24 h-24 bg-center bg-cover rounded-full"
							/>
							<div>
								<p className="leading-tight">—Kristin Hinrichs, </p>
								<p className="text-sm leading-tight ">Woodfire Candle Company</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="slide-item flex flex-col items-center justify-center space-y-4 py-14">
						<p className="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl">
							"handmade products, and a great selection of products by People of Color."
						</p>
						<div className="flex flex-col justify-center  items-center space-y-3">
							<img
								src="https://randomuser.me/api/portraits/women/65.jpg"
								alt=""
								className="w-24 h-24 bg-center bg-cover rounded-full"
							/>
							<div>
								<p className="leading-tight">—Kristin Van Buskirk </p>
								<p className="text-sm leading-tight ">Founder, Woonwinkel</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="slide-item flex flex-col items-center justify-center space-y-4 py-14">
						<p className="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl">
							"Veniam quidem animi ea maxime odit fugiat architecto perferendis
							"
						</p>
						<div className="flex flex-col justify-center  items-center space-y-3">
							<img
								src="https://randomuser.me/api/portraits/women/95.jpg"
								alt=""
								className="w-24 h-24 bg-center bg-cover rounded-full"
							/>
							<div>
								<p className="leading-tight">Leroy Jenkins</p>
								<p className="text-sm leading-tight ">Founder, Company</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="slide-item flex flex-col items-center justify-center space-y-4 p-14">
						<p className="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl">
							"I just wanted to share a quick note and let you know that you guys do a really good job. It’s really great how easy your websites are to update and manage."
						</p>
						<div className="flex flex-col justify-center  items-center space-y-3">
							<img
								src="https://randomuser.me/api/portraits/women/85.jpg"
								alt=""
								className="w-24 h-24 bg-center bg-cover rounded-full"
							/>
							<div>
								<p className="leading-tight">Leroy Jenkins</p>
								<p className="text-sm leading-tight ">Founder, Company</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
				



			</Swiper>
		</section>
        </>
    );
};

export default Testimonial;