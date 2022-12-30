import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";
import { BiBook } from "react-icons/bi";
import Loading from "../../components/Shared/Loading";
import { getAuthorDetails } from "../api/author/[authorId]";
import Spacer from "../../components/Shared/Spacer";

const authorDetails = ({ authorInfo }) => {
	const router = useRouter();

	// If the page is not yet generated, this will be displayed
	// initially until getStaticProps() finishes running
	if (router.isFallback) {
		return <Loading></Loading>;
	}
	return (
		<>
			<Head>
				<title>{authorInfo.title}</title>
				<meta name="description" content={authorInfo.description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header></Header>

			<main>
				<section className="pb-10">
					<div className="title-area py-5 bg-neutral">
						<div className="container mx-auto">
							<div className="w-6/12 mx-auto text-white">
								<h2 className="text-4xl  font-bold text-center">
									Author Details
								</h2>
								<div className=" flex justify-center my-10">
								<Spacer></Spacer>
								</div>
								<p className="mx-auto text-center pb-10">
									Improving vocabulary and language skills: Reading exposes you
									to new words and concepts.
								</p>
							</div>
						</div>
					</div>
					<div className="container mx-auto py-20">
						<div className="flex flex-col lg:flex-row">
							<div className="lg:w-6/12 mx-auto">
								<div className="pb-1">
									<h2 className="text-7xl font-bold pb-3 text-center">
										{authorInfo.author_name}
									</h2>
								</div>
								<div className=" flex justify-center my-10">
									<Spacer></Spacer>
								</div>
								<div className="xl:p-24 w-8/12 mx-auto bg-secondary/10 rounded-md">
									<Image
										src={authorInfo.author_img}
										width={500}
										height={600}
										alt={authorInfo.author_name}
									></Image>
								</div>
								<div className="py-5">
									<div className="author-Book-List">
										<h4 className="text-2xl text-center">About Author</h4>
										<div className=" flex justify-center my-10">
										<Spacer></Spacer>
										</div>
										<p className="text-lg">
										{authorInfo.author_description}
											</p>
									</div>
								</div>
								<div className="p-20">
									<div className="author-Book-List">
										<h4 className="text-2xl text-center">Books List</h4>
										<div className=" flex justify-center my-10">
										<Spacer></Spacer>
										</div>
										{authorInfo.books.map((book) => (
											<div
												className="card rounded-lg shadow-xl p-12"
												key={book.books_id}
											>
												{book.books_name}
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="container mx-auto pb-20">
						<div className="flex flex-col lg:flex-row">
							<div className="lg:w-6/12 mx-2">
								<div className="bg-neutral text-white  p-10">
									<div className="w-full py-10">
										<h2 className="text-3xl pb-10">Do you Know?</h2>
										<p>
											There are many variations of passages of Lorem Ipsum
											available, but the majority have suffered alteration in
											some form, bypassed injected humour, or randomised words
											which don't look even slightly believable.
										</p>
									</div>
								</div>
							</div>

							<div className="lg:w-6/12 mx-2">
								<div className="bg-accent p-10">
									<div className="w-full py-10">
										<h2 className="text-3xl pb-10">Want To Learn?</h2>
										<p>
											There are many variations of passages of Lorem Ipsum
											available, but the majority have suffered alteration in
											some form, bypassed injected humour, or randomized words
											which don't look even slightly believable.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer></Footer>
		</>
	);
};

export default authorDetails;

export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: true,
	};
};

export const getStaticProps = async (context) => {
	const { params } = context;
	console.log(params);
	try {
		const authorData = await getAuthorDetails(params.authorId);
		console.log("!!!", authorData);
		if (!authorData) {
			return {
				notFound: true,
				revalidate: 60,
			};
		}
		return {
			props: {
				authorInfo: JSON.parse(JSON.stringify(authorData)),
			},
			revalidate: 60,
		};
	} catch (error) {
		console.log(error);
	}
};
