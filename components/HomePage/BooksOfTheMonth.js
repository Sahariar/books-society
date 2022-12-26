import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Image from "next/image";
const BooksOfTheMonth = () => {
	return (
		<section className="home-featured-section my-10">
			<div className="p-12 my-10 container mx-auto">
				<h2 className="text-4xl font-bold text-center pt-5">
					Books Of The Month
				</h2>
			</div>

			<div className="container mx-auto">
				<div className="flex flex-col-reverse xl:flex-row">
					<div className="xl:w-4/12">
						<div className="card w-10/12  shadow-xl min-h-full bg-gradient-to-tr from-primary/10 to-indigo-200">
                            <div className="card-body items-center justify-center">
                            <div className="flex flex-col space-y-5">
								<h2 className="text-6xl">Best Books</h2>
								<p className="text-2xl">That can Transform your Life</p>
							</div>
                            </div>
						
						</div>
					</div>
					<div className="xl:w-8/12 p-2">
						<Swiper
							cssMode={true}
							spaceBetween={10}
							navigation={true}
							loop={true}
							pagination={true}
							autoplay={{
								delay: 2500,
								disableOnInteraction: false,
							}}
							breakpoints={{
								640: {
									slidesPerView: 2,
									spaceBetween: 20,
								},
								768: {
									slidesPerView: 2,
									spaceBetween: 40,
								},
								1024: {
									slidesPerView: 3,
									spaceBetween: 50,
								},
							}}
							modules={[Navigation, Pagination, Autoplay]}
							className="mySwiper"
						>
							<SwiperSlide>
								<div className="w-full card mx-auto  bg-base-100 shadow-xl">
									<figure>
										<Image
											src="https://i.ibb.co/k9nS3Cq/Living-in-the-Light.jpg"
											alt=""
											width="230"
											height="400"
										/>
									</figure>
									<div className="card-body text-center">
										<h2 className="card-title">
											Living in the Light: A guide to personal transformation
										</h2>
										<div className="card-actions justify-start items-center">
											{" "}
										</div>
										<div className="card-actions">
											<button
												className="btn btn-primary btn-block"
												onClick={() => {
													handleNavigate(item.id);
												}}
											>
												See Details
											</button>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="w-full card mx-auto  bg-base-100 shadow-xl">
									<figure>
										<Image
											src="https://i.ibb.co/8bfgSSV/Give-and-Take.jpg"
											alt=""
											width="230"
											height="400"
										/>
									</figure>
									<div className="card-body text-center">
										<h2 className="card-title">
											Give and Take: Why Helping Others Drives Our Success
										</h2>
										<div className="card-actions justify-start items-center">
											{" "}
										</div>
										<div className="card-actions">
											<button
												className="btn btn-primary btn-block"
												onClick={() => {
													handleNavigate(item.id);
												}}
											>
												See Details
											</button>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="w-full card mx-auto  bg-base-100 shadow-xl">
									<figure>
										<Image
											src="https://i.ibb.co/BKmMQ5t/whattosay.jpg"
											alt=""
											width="230"
											height="400"
										/>
									</figure>
									<div className="card-body text-center">
										<h2 className="card-title">
											What To Say When You Talk To Yourself
										</h2>
										<div className="card-actions justify-start items-center">
											{" "}
										</div>
										<div className="card-actions">
											<button
												className="btn btn-primary btn-block"
												onClick={() => {
													handleNavigate(item.id);
												}}
											>
												See Details
											</button>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="w-full card mx-auto  bg-base-100 shadow-xl">
									<figure>
										<Image
											src="https://i.ibb.co/ZKJqrw9/You-Are-a-Badass.jpg"
											alt=""
											width="230"
											height="400"
										/>
									</figure>
									<div className="card-body text-center">
										<h2 className="card-title">
											You Are a Badass: How to Stop Doubting
										</h2>
										<div className="card-actions justify-start items-center">
											{" "}
										</div>
										<div className="card-actions">
											<button
												className="btn btn-primary btn-block"
												onClick={() => {
													handleNavigate(item.id);
												}}
											>
												See Details
											</button>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="w-full card mx-auto  bg-base-100 shadow-xl">
									<figure>
										<Image
											src="https://i.ibb.co/J7cghfz/artofwar.jpg"
											alt=""
											width="230"
											height="400"
										/>
									</figure>
									<div className="card-body text-center">
										<h2 className="card-title">
											The Art of War: Complete Text and Commentaries
										</h2>
										<div className="card-actions justify-start items-center">
											{" "}
										</div>
										<div className="card-actions">
											<button
												className="btn btn-primary btn-block"
												onClick={() => {
													handleNavigate(item.id);
												}}
											>
												See Details
											</button>
										</div>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BooksOfTheMonth;
