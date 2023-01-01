import Head from "next/head";
import Newsletter from "../../components/HomePage/Newsletter";
import Service from "../../components/HomePage/Service";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";
import Spacer from "../../components/Shared/Spacer";
const index = () => {
	return (
		<>
			<Head>
				<title>Blog- Books Society</title>
				<meta name="description" content="Book Society Blog page" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header></Header>

			<main>
				<section className="pb-10">
					<div className="title-area py-5 bg-neutral">
						<div className="container mx-auto">
							<div className="w-6/12 mx-auto text-white">
								<h2 className="text-4xl  font-bold text-center">
									Blog of Books Society
								</h2>
								<div className=" flex justify-center my-10">
									<Spacer></Spacer>
								</div>
								<p className="mx-auto text-center pb-10">
									Improving vocabulary and language skills: Reading exposes you
									to new words and concepts, which can help to expand your
									vocabulary and improve your language skills. Promoting
									concentration and
								</p>
							</div>
						</div>
					</div>
					<div className="container mx-auto py-20">
						<div className="max-w-screen-xl p-5 mx-auto ">
						<div className="p-5 mx-auto sm:p-10 md:p-16 bg-secondary/10">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src="https://source.unsplash.com/random/480x360" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
			<div className="space-y-2">
				<a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl text-white">The Best Activewear from the Nordstrom Anniversary Sale</a>
				<p className="text-xs dark:text-gray-400">By
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline">Leroy Jenkins</a>
				</p>
			</div>
			<div className="dark:text-gray-100">
				<p>Insert the actual text content here...</p>
			</div>
		</div>
	</div>
</div>
						</div>
					</div>

				</section>
				<Service></Service>
			</main>
			<Newsletter></Newsletter>
			<Footer></Footer>
		</>
	);
};

export default index;
