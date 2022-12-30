import Head from "next/head";
import Newsletter from "../../components/HomePage/Newsletter";
import Service from "../../components/HomePage/Service";
import Divider from "../../components/Shared/Divider";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";
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
									<Divider></Divider>
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
							<div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
								<div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500">
									<div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
									<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
										<a
											rel="noopener noreferrer"
											href="#"
											className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined"
										>
											Politics
										</a>
										<div className="flex flex-col justify-start text-center dark:text-gray-100">
											<span className="text-3xl font-semibold leading-none tracking-wide">
												04
											</span>
											<span className="leading-none uppercase">Aug</span>
										</div>
									</div>
									<h2 className="z-10 p-5">
										<a
											rel="noopener noreferrer"
											href="#"
											className="font-medium text-md hover:underline dark:text-gray-100"
										>
											{" "}
											Autem sunt tempora mollitia magnam non voluptates
										</a>
									</h2>
								</div>
								<div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500">
									<div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
									<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
										<a
											rel="noopener noreferrer"
											href="#"
											className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined"
										>
											Health
										</a>
										<div className="flex flex-col justify-start text-center dark:text-gray-100">
											<span className="text-3xl font-semibold leading-none tracking-wide">
												01
											</span>
											<span className="leading-none uppercase">Aug</span>
										</div>
									</div>
									<h2 className="z-10 p-5">
										<a
											rel="noopener noreferrer"
											href="#"
											className="font-medium text-md hover:underline dark:text-gray-100"
										>
											Inventore reiciendis aliquam excepturi
										</a>
									</h2>
								</div>
								<div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500">
									<div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
									<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
										<a
											rel="noopener noreferrer"
											href="#"
											className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined"
										>
											Science
										</a>
										<div className="flex flex-col justify-start text-center dark:text-gray-100">
											<span className="text-3xl font-semibold leading-none tracking-wide">
												28
											</span>
											<span className="leading-none uppercase">Jul</span>
										</div>
									</div>
									<h2 className="z-10 p-5">
										<a
											rel="noopener noreferrer"
											href="#"
											className="font-medium text-md hover:underline dark:text-gray-100"
										>
											Officiis mollitia dignissimos commodi optio vero animi
										</a>
									</h2>
								</div>
								<div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500">
									<div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
									<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
										<a
											rel="noopener noreferrer"
											href="#"
											className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined"
										>
											Sports
										</a>
										<div className="flex flex-col justify-start text-center dark:text-gray-100">
											<span className="text-3xl font-semibold leading-none tracking-wide">
												19
											</span>
											<span className="leading-none uppercase">Jul</span>
										</div>
									</div>
									<h2 className="z-10 p-5">
										<a
											rel="noopener noreferrer"
											href="#"
											className="font-medium text-md hover:underline dark:text-gray-100"
										>
											Doloribus sit illo necessitatibus architecto
											exercitationem enim
										</a>
									</h2>
								</div>
							</div>
						</div>
					</div>
					<div className="container mx-auto py-20">
						<div className="max-w-screen-xl p-5 mx-auto">
							<div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
								<div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500">
									<div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
									<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
										<a
											rel="noopener noreferrer"
											href="#"
											className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined"
										>
											Politics
										</a>
										<div className="flex flex-col justify-start text-center dark:text-gray-100">
											<span className="text-3xl font-semibold leading-none tracking-wide">
												04
											</span>
											<span className="leading-none uppercase">Aug</span>
										</div>
									</div>
									<h2 className="z-10 p-5">
										<a
											rel="noopener noreferrer"
											href="#"
											className="font-medium text-md hover:underline dark:text-gray-100"
										>
											{" "}
											Autem sunt tempora mollitia magnam non voluptates
										</a>
									</h2>
								</div>
								<div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500">
									<div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
									<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
										<a
											rel="noopener noreferrer"
											href="#"
											className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined"
										>
											Health
										</a>
										<div className="flex flex-col justify-start text-center dark:text-gray-100">
											<span className="text-3xl font-semibold leading-none tracking-wide">
												01
											</span>
											<span className="leading-none uppercase">Aug</span>
										</div>
									</div>
									<h2 className="z-10 p-5">
										<a
											rel="noopener noreferrer"
											href="#"
											className="font-medium text-md hover:underline dark:text-gray-100"
										>
											Inventore reiciendis aliquam excepturi
										</a>
									</h2>
								</div>
								<div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500">
									<div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
									<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
										<a
											rel="noopener noreferrer"
											href="#"
											className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined"
										>
											Science
										</a>
										<div className="flex flex-col justify-start text-center dark:text-gray-100">
											<span className="text-3xl font-semibold leading-none tracking-wide">
												28
											</span>
											<span className="leading-none uppercase">Jul</span>
										</div>
									</div>
									<h2 className="z-10 p-5">
										<a
											rel="noopener noreferrer"
											href="#"
											className="font-medium text-md hover:underline dark:text-gray-100"
										>
											Officiis mollitia dignissimos commodi optio vero animi
										</a>
									</h2>
								</div>
								<div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500">
									<div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
									<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
										<a
											rel="noopener noreferrer"
											href="#"
											className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined"
										>
											Sports
										</a>
										<div className="flex flex-col justify-start text-center dark:text-gray-100">
											<span className="text-3xl font-semibold leading-none tracking-wide">
												19
											</span>
											<span className="leading-none uppercase">Jul</span>
										</div>
									</div>
									<h2 className="z-10 p-5">
										<a
											rel="noopener noreferrer"
											href="#"
											className="font-medium text-md hover:underline dark:text-gray-100"
										>
											Doloribus sit illo necessitatibus architecto
											exercitationem enim
										</a>
									</h2>
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
