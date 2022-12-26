

const NewsSletter = () => {
  return (
    <div>
      <section className="py-6 ">
	<div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
		<div className="flex flex-col space-y-4 text-center lg:text-left">
			<h1 className="text-5xl font-bold leading-none">Get 10% Off Your Order!</h1>
			<p className="text-lg">Enter your email and receive a 10% discount on your next order!
</p>
		</div>
		<div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
			<div className="flex flex-row">
				<input type="text" placeholder="Type your Email" className="w-3/5 p-3 rounded-l-lg sm:w-2/3"/>
				<button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-blue-400">Subscribe</button>
			</div>
		</div>
	</div>
</section>
    </div>
  );
};

export default NewsSletter;