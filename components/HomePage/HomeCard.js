import ReviewStar from "../Shared/ReviewStar";
import {BsStar } from "react-icons/bs";
import { BiBookOpen,BiBook,BiTime } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
const HomeCard = ({ book }) => {
	const { picture, title, author_name, description, average_rating  , _id} = book;
	return (
		<div className="card xl:card-side hover:shadow-xl border-2">
			<figure className="xl:w-4/12 ">
			<Image 
                            src={picture}
                            width="243"
                            height="380" 
							className="h-96 rounded-lg border-2"
                            alt={title}
                            />
			</figure>
			<div className="card-body xl:w-8/12">
				<h2 className="card-title text-3xl">{title}</h2>
				
                <p>{description.slice(0, 150)}..</p>
        
				<div className="flex flex-col justify-center">
                <div className="books flex items-center justify-start">
						<h5 className="text-lg text-neutral flex items-center justify-start">
						<span className="pr-2">
                            <BiBook className="text-amber-400" size={22}/>
                            </span>	Author :
						</h5>
						<p className="text-lg px-2">{author_name}</p>
					</div>
					<div className="pages flex items-center justify-start">
						<h5 className="text-xl text-neutral flex items-center justify-center">
							<span className="pr-2">
                            <BiBookOpen className="text-amber-400" size={22}/>
							</span>
							Pages:
						</h5>
						<p className="text-lg px-2">234 pages</p>
					</div>
                    <div className="length flex items-center justify-start">
						<h5 className="text-xl text-neutral flex items-center justify-center">
							<span className="pr-2">
                            <BiTime className="text-amber-400" size={22}/>
							</span>{" "}
							Length:
						</h5>
						<p className="text-lg px-2">10 hours</p>
					</div>
                    <div className="rating flex items-center justify-start space-x-3">
						<h5 className="text-xl text-neutral flex items-center justify-center">
							<span className="pr-2">
                            <BsStar className="text-amber-400"size={22}/>
							</span>{" "}
							Rating:
						</h5>
						<div className="text-lg"><ReviewStar reviewScore={average_rating}></ReviewStar></div>
					</div>
				</div>
      
				<div className="card-actions justify-start">
				<button className="btn btn-primary btn-wide">
                    <Link href={`/books/${_id}`}>Read More</Link> 
                    </button>
				</div>
			</div>
		</div>
	);
};

export default HomeCard;
