import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";
import { getBookDetails } from "../api/books/[bookId]";
import { BiBook } from "react-icons/bi";
import Loading from "../../components/Shared/Loading";
import Spacer from "../../components/Shared/Spacer";
// import PdfViewer from "../../components/Books/Pdf/PdfViewer";
import Link from "next/link";
import { useSession } from "next-auth/react";

const booksDetails = ({ bookInfo }) => {
	const router = useRouter();
	const { data: session } = useSession();
	// If the page is not yet generated, this will be displayed
	// initially until getStaticProps() finishes running
	if (router.isFallback) {
		return <Loading></Loading>;
	}

	console.log(bookInfo.local_pdf);
	return (
		<>
			<Head>
				<title>{bookInfo.title}</title>
				<meta name="description" content={bookInfo.description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header></Header>

			<main>
				<section className="pb-10">
					<div className="title-area py-5 bg-neutral">
						<div className="container mx-auto">
							<div className="w-6/12 mx-auto text-white">
								<h2 className="text-4xl  font-bold text-center">
									Books Details
								</h2>
								<div className=" flex justify-center my-10">
									<Spacer />
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
							<div className="lg:w-6/12">
								<div className="xl:p-24 w-8/12 mx-auto bg-secondary/10 rounded-md">
									<Image
										src={bookInfo.picture}
										width={500}
										height={600}
										alt={bookInfo.title}
									></Image>
								</div>
							</div>

							<div className="lg:w-6/12">
								<div className="p-20">
									<div className="pb-1">
										<h2 className="text-4xl font-bold pb-3">
											{bookInfo.title}
										</h2>
										<Spacer></Spacer>
									</div>
									<div className="free-section pb-12">
										<p className="text-3xl text-primary font-bold">
											Free With Subscription
										</p>
										<div className="books flex flex-nowrap items-center justify-start">
											<h5 className="text-lg text-neutral flex items-center justify-start">
												<span className="pr-2">
													<BiBook className="text-amber-400" size={22} />
												</span>{" "}
												Author
											</h5>
											<p className="text-lg px-2">{bookInfo.author_name}</p>
										</div>
									</div>

									<p className="text-lg">{bookInfo.description}</p>

									<div className="mt-10 mx-auto">
										{session ? (
											<Link href={`/books/pdf/${bookInfo._id}`}>
												<button className="btn btn-primary rounded-lg w-1/2 mx-auto text-center">
													Link To Read
												</button>
											</Link>
										) : (
											<Link href={`/login`}>
												<button className="btn btn-primary rounded-lg w-1/2 mx-auto text-center">
													Subscribe Now To Read
												</button>
											</Link>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="container mx-auto"></div>
					<div className="container mx-auto pb-20">
						<div className="flex flex-col lg:flex-row">
							<div className="lg:w-6/12">
								<div className="py-6 bg-neutral text-white text-center rounded-xl w-1/3 mx-auto">
									Books Information
								</div>

								<div className="w-full py-10">
									<h2 className="text-3xl pb-10">
										Do you offer discounts for education?
									</h2>
									<p>
										There are many variations of passages of Lorem Ipsum
										available, but the majority have suffered alteration in some
										form, bypassed injected humour, or randomised words which
										don't look even slightly believable.
									</p>
								</div>
							</div>

							<div className="lg:w-6/12">
								<div className="">
									<div className="py-6 border-neutral bg-secondary/10 border-2 text-neutral text-center rounded-xl w-1/3 mx-auto">
										Additional Information
									</div>
									<div className="w-full py-10">
										<h2 className="text-3xl pb-10">Is this book for me?</h2>
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

export default booksDetails;

export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: true,
	};
};

export const getStaticProps = async (context) => {
	const { params } = context;
	console.log(params.booksId);
	try {
		const bookData = await getBookDetails(params.booksId);

		if (!bookData) {
			return {
				notFound: true,
				revalidate: 60,
			};
		}
		return {
			props: {
				bookInfo: JSON.parse(JSON.stringify(bookData)),
			},
			revalidate: 60,
		};
	} catch (error) {
		console.log(error);
	}
};
