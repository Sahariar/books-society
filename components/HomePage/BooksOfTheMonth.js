import useSWR from 'swr'
import axios from 'axios'

import HomeCard from './HomeCard';
import Loading from '../Shared/Loading';
import Spacer from '../Shared/Spacer';


const fetcher = url => axios.get(url).then(res => res.data)
const BooksOfTheMonth = () => {
	const { data, error } = useSWR('/api/books/booksOTM', fetcher);
	if (error) return <div>failed to load</div>
	if (!data) return <Loading></Loading>
	const bookData = data.bOTMData
	// console.log(bookData);
	return (
		<section className="home-featured-section my-10">
			<div className="p-12 mt-10 container mx-auto">
				<h2 className="text-4xl font-bold text-center pt-5">
					Books Of The Month
				</h2>
				<div className=" flex justify-center my-10">
				<Spacer></Spacer>
				</div>
			</div>

			<div className="container mx-auto pb-10">
				<div className="flex flex-col-reverse xl:flex-row">
					<div className="w-full p-2">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{
								bookData?.map( book => <HomeCard
								key={book._id}
								book={book}
								></HomeCard>)
							}
						</div>

					</div>
				</div>
			</div>
		</section>
	);
};

export default BooksOfTheMonth;
