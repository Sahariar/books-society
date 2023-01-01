import Head from "next/head";
import useSWR from 'swr'
import axios from 'axios'
import Image from "next/image";
import { useRouter } from "next/router";
// import PdfViewer from "../../components/Books/Pdf/PdfViewer";
import Link from "next/link";
import Loading from "../../../components/Shared/Loading";
import Header from "../../../components/Shared/Header";
import Spacer from "../../../components/Shared/Spacer";
import BooksCard from "../../../components/Books/BooksCard";
import Footer from "../../../components/Shared/Footer";

const fetcher = url => axios.get(url).then(res => res.data)
const categoryDetails = () => {
    const router = useRouter();
    const id = router.query.cateId;
    const { data, error } = useSWR(`/api/books/cate/${id}`, fetcher);
	if (error) return <div>failed to load</div>
	if (!data) return <Loading></Loading>
	const booksData = data.bookData
	console.log(booksData , id);
	
	// If the page is not yet generated, this will be displayed
	// initially until getStaticProps() finishes running
	if (router.isFallback) {
		return <Loading></Loading>;
	}


	return (
		<>
			<Head>
				<title>Category Area</title>
				<meta name="description" content="Category Info Area" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header></Header>

            <main>
				<section className="pb-10">
				<div className="title-area py-5 bg-neutral">
					<div className="container mx-auto">
						<div className="w-6/12 mx-auto text-white">
						<h2 className="text-4xl  font-bold text-center">All the Available Books</h2>
						<div className=" flex justify-center my-10">
				<Spacer></Spacer>	
				</div>
						<p className="mx-auto text-center pb-10">
							Improving vocabulary and language skills: Reading exposes you to
							new words and concepts, which can help to expand your vocabulary
							and improve your language skills. Promoting concentration and
						
						</p>
						</div>
						
					</div>
					</div>
					<div className="container mx-auto">
					<div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto">
							{booksData.map((books) => (
								<BooksCard key={books._id} bookData={books}></BooksCard>
							))}
						</div>
					</div>
				</section>
			</main>

			<Footer></Footer>
		</>
	);
};

export default categoryDetails;

