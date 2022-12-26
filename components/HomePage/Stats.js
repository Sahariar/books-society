
const Stats = () => {
  return (
    <div>
    <section className="bg-gray-200    ">

	<div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-4">
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">5000+</p>
			<p className="text-sm sm:text-base">Clients</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">60+</p>
			<p className="text-sm sm:text-base">Writer</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">2000+</p>
			<p className="text-sm sm:text-base">Published books</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">100+</p>
			<p className="text-sm sm:text-base">Publications</p>
		</div>
	</div>
</section>
    </div>
  );
};

export default Stats;