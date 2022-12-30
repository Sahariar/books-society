import Head from "next/head";
import AuthorCard from "../../components/Author/AuthorCard";
import Divider from "../../components/Shared/divider";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";
import { getAuthor } from "../api/author";

const index = ({authorsData}) => {
  

    return (

<>
			<Head>
				<title>Authors</title>
				<meta name="description" content="All Authors List" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header></Header>

			<main>
				<section className="pb-10">
				<div className="title-area py-5 bg-neutral">
					<div className="container mx-auto">
						<div className="w-6/12 mx-auto text-white">
						<h2 className="text-4xl  font-bold text-center">All Author's List</h2>
						<div className=" flex justify-center my-10">
				<Divider></Divider>		
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
							{authorsData.map((author) => (
                <AuthorCard key={author._id}
                authorData={author}> 
                </AuthorCard>
							
							))}
						</div>
					</div>
				</section>
			</main>

			<Footer></Footer>
		</>
    );
};

export async function getStaticProps() {
	try {
		const authorData = await getAuthor();
		if (!authorData) {
			return {
				notFound: true,
				revalidate: 60,
			};
		}
		return {
			props: {
				authorsData: JSON.parse(JSON.stringify(authorData)),
			},
			revalidate: 60,
		};
	} catch (error) {
		console.log(error);
	}
}

export default index;