import Head from "next/head";
import Newsletter from "../../components/HomePage/Newsletter";
import Service from "../../components/HomePage/Service";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";
import Spacer from "../../components/Shared/Spacer";
import Team from "../../components/Shared/Team";
const index = () => {
	return (
		<>
			<Head>
				<title>Books</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header></Header>

			<main>
				<section className="pb-10">
					<div className="title-area py-5 bg-neutral">
						<div className="container mx-auto">
							<div className="w-6/12 mx-auto text-white">
								<h2 className="text-4xl  font-bold text-center">
									About Books Society
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
					<div className="container mx-auto"></div>
				</section>
				<Team></Team>
			</main>
			<Newsletter></Newsletter>
			<Footer></Footer>
		</>
	);
};

export default index;
