import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
 import ReviewStar from "../Shared/ReviewStar";
const AddReviewForm = () => {
  const [rating, setRating] = useState(null);
   const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
   const onSubmit = data =>{ 
      console.log(data);
     }
     console.log(rating);
  return (
    <div className="flex container mx-auto gap-3 lg:flex-row  justify-evenly">
      <div   className="flex flex-col  p-8 shadow-sm rounded-xl lg:p-12 border-2 my-6 mx-auto">
	<div className="flex flex-col items-center w-full">
		<h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
		<div className="flex flex-col items-center py-6 space-y-3">
			<span className="text-center">How was your experience?</span>
		<div className="rating rating-lg  " >
      <input type="radio" onClick={e => setRating(e.target.value)} value="1" name="rating-8" className="mask mask-star-2 bg-orange-400"  />
      <input type="radio" onClick={e => setRating(e.target.value)}  value="2" name="rating-8" className="mask mask-star-2 bg-orange-400"  />
      <input type="radio" onClick={e => setRating(e.target.value)}  value="3" name="rating-8" className="mask mask-star-2 bg-orange-400"  />
      <input type="radio" onClick={e => setRating(e.target.value)}  value="4" name="rating-8" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" onClick={e => setRating(e.target.value)}  value="5" name="rating-8" className="mask mask-star-2 bg-orange-400" />
    </div>
		</div>
		<form onSubmit={handleSubmit(onSubmit)}  className="flex flex-col w-full">
			<textarea    {...register("message",  {required: true})} rows="3" placeholder="Message..." id="message" className="p-4 rounded-md resize-none border-2" spellcheck="false"></textarea>
    {errors.message && <p className='text-red-400'>Please provide your valuable message</p>} 

			<button type="submit" className="py-4 my-8 font-semibold rounded-md bg-secondary text-white">Submit </button>
		</form>
	</div>

</div>

       <div className=" mt-5  lg:w-2/3 w-full border-2 mb-5 rounded-lg  ">
	
	<div className="flex flex-col space-y-4 p-3 md:space-y-0 md:space-x-6 md:flex-col">
       <div className='flex gap-3 '>
        		<Image src="https://www.rokomari.com/static/200/images/svg/user.svg" alt="" width ={50} height={50} className="self-center flex-shrink-0 w-10 h-10 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" ></Image>
			<h4 className="text-lg font-semibold text-center md:text-left"></h4>
      <p className='flex flex-col mt-2'><span className=''>Rubel RRana</span> 
      <ReviewStar></ReviewStar> </p>
      <p className='mt-2'>12/12/12</p>
       </div>
		<div className="flex flex-row">
			<p className="text-gray-500 ml-8" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos provident minus voluptatum, sit odio. </p>
		</div>
	</div>
	<div className="flex flex-col space-y-4 p-3 md:space-y-0 md:space-x-6 md:flex-col">
       <div className='flex gap-3 '>
        		<Image src="https://www.rokomari.com/static/200/images/svg/user.svg" alt="" width ={50} height={50} className="self-center flex-shrink-0 w-10 h-10 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" ></Image>
			<h4 className="text-lg font-semibold text-center md:text-left"></h4>
      <p className='flex flex-col mt-2'><span className=''>Rubel RRana</span> 
      <ReviewStar></ReviewStar> </p>
      <p className='mt-2'>12/12/12</p>
       </div>
		<div className="flex flex-row">
			<p className="text-gray-500 ml-8" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos provident minus voluptatum, sit odio. </p>
		</div>
	</div>
	<div className="flex flex-col space-y-4 p-3 md:space-y-0 md:space-x-6 md:flex-col">
       <div className='flex gap-3 '>
        		<Image src="https://www.rokomari.com/static/200/images/svg/user.svg" alt="" width ={50} height={50} className="self-center flex-shrink-0 w-10 h-10 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" ></Image>
			<h4 className="text-lg font-semibold text-center md:text-left"></h4>
      <p className='flex flex-col mt-2'><span className=''>Rubel RRana</span> 
      <ReviewStar></ReviewStar> </p>
      <p className='mt-2'>12/12/12</p>
       </div>
		<div className="flex flex-row">
			<p className="text-gray-500 ml-8" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos provident minus voluptatum, sit odio. </p>
		</div>
	</div>

 
</div>
    </div>
  );
};

export default AddReviewForm;