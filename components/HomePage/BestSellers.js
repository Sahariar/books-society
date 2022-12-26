import Image from "next/image";

const BestSellers = () => {
	return (
		<section className="books-selling-section my-10">
			<div className="p-12 my-10 container mx-auto">
				<h2 className="text-4xl font-bold text-center pt-5">
					Best Selling Books
				</h2>
			</div>
			<div className="container mx-auto bg-base-00">
				<div className="grid grid-cols-3 gap-4 mx-auto">
					<div className="first-section gap-2">
						<div className="flex flex-row gap-2 mb-10">
							<div className="card w-60 bg-base-100 shadow-xl">
								<figure className="px-2 pt-2">
									<Image
										src="https://i.ibb.co/k9nS3Cq/Living-in-the-Light.jpg"
										alt="img"
										width="120"
										height="150"
									/>
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title">
										Living in the Light: A guide to personal transformation
									</h2>
								</div>
							</div>
							<div className="card w-60 bg-base-100 shadow-xl">
								<figure className="px-2 pt-2">
									<Image
										src="https://i.ibb.co/8bfgSSV/Give-and-Take.jpg"
										alt="img"
										width="120"
										height="150"
									/>
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title">
                                    Give and Take: Why Helping Others Drives Our Success
									</h2>
								</div>
							</div>
						</div>
                        <div className="flex flex-row gap-2 mt-10">
							<div className="card w-60 bg-base-100 shadow-xl">
								<figure className="px-2 pt-2">
									<Image
										src="https://i.ibb.co/XstCs7d/8c763848a19615e858bee15ad828e858.jpg"
										alt="img"
										width="120"
										height="150"
									/>
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title">
                                    The Complete Yoga Poses
									</h2>
								</div>
							</div>
							<div className="card w-60 bg-base-100 shadow-xl">
								<figure className="px-2 pt-2">
									<Image
										src="https://i.ibb.co/tbWSWpS/0a651ad3962e9c34fef58a56e9001f16.jpg"
										alt="img"
										width="120"
										height="150"
									/>
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title">
                                    Drawing Cartoons & Comics for Dummies
									</h2>
								</div>
							</div>
						</div>
					</div>

					<div className="middle-section">
                    <div className="card bg-base-100 shadow-xl min-h-full">
								<figure>
									<Image
										src="https://i.ibb.co/qYrrxs3/Product-1.jpg"
										alt="img"
										width="300"
										height="500"
									/>
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title">
                                    How to Kill Your Family
									</h2>
                                    <h5>Book by Bella Mackie</h5>
                                    <p>
                                    How To Kill Your Family follows Grace who is on a mission to get rid of the family who wronged her and take their fortune. However, she is currently serving 
                                    </p>
								</div>
							</div>
					</div>
					<div className="last-section">
                    <div className="flex flex-row gap-2 mb-10">
							<div className="card w-60 bg-base-100 shadow-xl">
								<figure className="px-2 pt-2">
									<Image
										src="https://i.ibb.co/2czdDHZ/4d35b9671c7a9c43bc332ab2a4d08d4b.jpg"
										alt="img"
										width="120"
										height="150"
									/>
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title">
                                    Hillbilly Elegy: A Memoir of a Family and Culture in Crisis
									</h2>
								</div>
							</div>
							<div className="card w-60 bg-base-100 shadow-xl">
								<figure className="px-2 pt-2">
									<Image
										src="https://i.ibb.co/drMvQ08/0a4d18c8aea6e359314e2c608bb0fa7b.jpg"
										alt="img"
										width="120"
										height="150"
									/>
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title">
                                    Handbook of Medicinal Herbs
									</h2>
								</div>
							</div>
						</div>
                        <div className="flex flex-row gap-2 mt-10">
							<div className="card w-60 bg-base-100 shadow-xl">
								<figure className="px-2 pt-2">
									<Image
										src="https://i.ibb.co/BKmMQ5t/whattosay.jpg"
										alt="img"
										width="120"
										height="150"
									/>
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title">
                                    What To Say When You Talk To Yourself
									</h2>
								</div>
							</div>
							<div className="card w-60 bg-base-100 shadow-xl">
								<figure className="px-2 pt-2">
									<Image
										src="https://i.ibb.co/ZKJqrw9/You-Are-a-Badass.jpg"
										alt="img"
										width="120"
										height="150"
									/>
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title">
                                    You Are a Badass: How to Stop Doubting
									</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BestSellers;
