import useSWR from 'swr'
import axios from 'axios'
import Image from "next/image";
import Spacer from "../Shared/Spacer";
import Loading from '../Shared/Loading';
import BookCateCard from './BookCateCard';
const fetcher = url => axios.get(url).then(res => res.data)
const BooksCategories = () => {
	const { data, error } = useSWR('api/books/booksCate', fetcher);
	if (error) return <div>failed to load</div>
	if (!data) return <Loading></Loading>
	const bookData = data.booksCateData
	return (
		<section className="books-cat-section py-10">

			<div className="pb-12 mb-10 container mx-auto">
				<h2 className="text-4xl font-bold text-center pt-5">
					Books Categories
				</h2>
				<div className=" flex justify-center my-10">
				<Spacer></Spacer>	
				</div>
			</div>
		<div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
		{
								bookData?.map( book => <BookCateCard
								key={book._id}
								book={book}
								></BookCateCard>)
							}
			</div>
        </div>
		</section>
	);
};

export default BooksCategories;
