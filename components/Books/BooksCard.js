import Link from "next/link";
import ReviewStar from "../Shared/ReviewStar";
import {BiBook} from "react-icons/bi";
import {BsStar } from "react-icons/bs";
const BooksCard = ({bookData}) => {
    const { picture, title, author_name, description, average_rating, _id } = bookData;
    return (
        <div className="card bg-base-100 border-2 hover:shadow-xl my-10">
        <figure className="bg-secondary/10 p-10">
            <img src={picture} alt={title} className="h-60" />
        </figure>
        <div className="card-body">
            <h2 className="card-title capitalize">{title}</h2>
            <div className="books flex flex-nowrap items-center justify-start">
						<h5 className="text-lg text-neutral flex items-center justify-start">
						<span className="pr-2">
                            <BiBook className="text-amber-400" size={22}/>
                            </span>	Author
						</h5>
						<p className="text-lg px-2">{author_name}</p>
					</div>
                    <div className="books flex items-center justify-start">
						<h5 className="text-lg text-neutral flex items-center justify-start">
						<span className="pr-2">
                            <BsStar className="text-amber-400" size={22}/>
                            </span>	Ratting :
						</h5>
						<div className="text-lg px-2"><ReviewStar reviewScore={average_rating}></ReviewStar></div>
					</div>
           
            <div className="card-actions">
               
                    <Link href={`/books/${_id}`}> <button className="btn btn-primary btn-block">Read More  </button></Link> 
                   
            </div>
        </div>
    </div>
    );
};

export default BooksCard;