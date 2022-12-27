import Head from "next/head";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";
import clientPromise from "../../lib/mongodb";

const index = ({ booksData }) => {
	return (
		<>
			<Head>
				<title>Books</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header></Header>

			<main>
				<section className="container mx-auto py-10">
					<div className="title-area py-20 bg-gradient-to-r from-primary to-primary/10">
						<h2 className="text-4xl text-white font-bold text-center">
							{" "}
							Books
						</h2>
					</div>

					<div className="grid grid-cols-4 gap-4 mx-auto">
						{booksData.map((books) => (
							<div className="card bg-base-100 shadow-xl my-10" key={books._id}>
								<figure>
									<img src={books.picture} alt={books.title} />
								</figure>
								<div className="card-body">
									<h2 className="card-title">{books.title}</h2>
									<p>{books.author}</p>
									<p>{books?.description.slice(0, 100)}</p>
									<div className="card-actions justify-end">
										<button className="btn btn-primary">Read More</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>
			</main>

			<Footer></Footer>
		</>
	);
};

export async function getStaticProps() {
	try {
		const client = await clientPromise;
		const booksCollection = client.db("booksdb").collection("bsCollect");
		let query = {};
		const booksData = await booksCollection.find(query).toArray();
		return {
			props: { booksData: JSON.parse(JSON.stringify(booksData)) },
		};
	} catch (e) {
		console.error(e);
	}
}

export default index;
