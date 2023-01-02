import useSWR from 'swr'
import axios from 'axios'
import BooksCard from '../Books/BooksCard';
const fetcher = url => axios.get(url).then(res => res.data)

const ShareBook = ({cateId}) => {
    const { data, error } = useSWR(`/api/books/cate/${cateId}`, fetcher);
	if (!data) return <Loading></Loading>
	if (error) return <div>failed to load</div>
	const booksData = data.bookData
    return (
        <div className="container mx-auto">
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto">
                {booksData.map((books) => (
                    <BooksCard key={books._id} bookData={books}></BooksCard>
                ))}
            </div>
</div>
    );
};

export default ShareBook;