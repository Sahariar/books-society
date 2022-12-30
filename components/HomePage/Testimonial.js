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
					
					<h2 className="text-5xl">
						Testimonials
					</h2>
					
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