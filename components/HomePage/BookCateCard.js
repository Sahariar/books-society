import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookCateCard = ({book}) => {
    console.log('book' , book);
    const {
        category_name,
         cate_img,
        category_id
    } = book
    return (
        <>
        <Link href={`books/category/${category_id}`}>
      
           	<div className="card items-center border-2 w-80 pb-10 bg-base-100/70 hover:shadow-xl">
					<div className="avatar">
						<div className="w-80 h-80">
                            <Image 
                            src={cate_img}
                            width="300"
                            height="300" alt={category_name}
                            />
                            

                        </div>
					</div>
					<h2 className="text-2xl text-center font-bold mt-5 cursor-pointer rounded-xl px-4">
						{category_name}
					</h2>
				</div> 
                </Link>
        </>
    );
};

export default BookCateCard;