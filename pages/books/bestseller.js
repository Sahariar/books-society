
import Head from "next/head";
import Link from "next/link";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";
import { getBooks } from "../api/books";

const bestseller = ({ booksData }) => {

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

                <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto">
                    {booksData.map((books) => (
                        <div className="card bg-base-100 shadow-xl my-10" key={books._id}>
                            <figure>
                                <img src={books.picture} alt={books.title} className="h-60" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{books.title}</h2>
                                <p>{books.author}</p>
                                <p>{books?.description.slice(0, 100)}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">
                                        <Link href={`/books/${books._id}`}>Read More</Link> 
                                        </button>
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

export default bestseller;


export async function getStaticProps() {
    try {
        const booksData = await getBooks("bookOfTheMonth")
        console.log('!!!', booksData);
        if (!booksData) {
            return {
                notFound: true,
                revalidate: 60,
            };
        }
        return {
            props: {
                booksData: JSON.parse(JSON.stringify(booksData)),
            },
            revalidate: 60,
        };

    } catch (error) {
        console.log(err);
    }
}


