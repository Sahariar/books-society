import React from "react";
import { BsBookFill, BsPencilSquare } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { RiPriceTag3Fill, RiQuillPenFill } from "react-icons/ri";
import { FaBoxOpen } from "react-icons/fa";
import Divider from "../Shared/divider";

const Service = () => {
	return (
		<section className="py-10 bg-secondary/10">
				<div className="p-12 mt-10 container mx-auto">
				<h2 className="text-4xl font-bold text-center pt-5">
					Our Service
				</h2>
				<div className=" flex justify-center my-10">
				<Divider></Divider>		
				</div>
			</div>
	<div className="container flex flex-col-reverse mx-auto lg:flex-row ">
		<div className="flex flex-col px-6 py-8 space-y-6 rounded-tl-xl rounded-bl-xl sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-base-100 ">
			<div className="flex space-x-2 sm:space-x-4">
			<div className=" bg-primary/20 rounded-full p-4">
			<BsBookFill className="text-primary text-6xl"></BsBookFill>
						</div>
				<div className="space-y-2">
					<p className="text-lg font-medium leading-snug">Reading Book</p>
					<p className="leading-snug">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
				</div>
			</div>
			<div className="flex space-x-2 sm:space-x-4">
			<div className=" bg-primary/20 rounded-full p-4">
			<RiQuillPenFill className="text-primary text-6xl"></RiQuillPenFill>
						</div>
				<div className="space-y-2">
					<p className="text-lg font-medium leading-snug">Knowledge Judgement</p>
					<p className="leading-snug">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
				</div>
			</div>
			<div className="flex space-x-2 sm:space-x-4">
			<div className=" bg-primary/20 rounded-full p-4">
			<BsPencilSquare className="text-primary text-6xl"></BsPencilSquare>
						</div>
				<div className="space-y-2">
					<p className="text-lg font-medium leading-snug">Take Notes</p>
					<p className="leading-snug">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
				</div>
			</div>
			<div className="flex space-x-2 sm:space-x-4">
			<div className=" bg-primary/20 rounded-full p-4">
			<FaBoxOpen  className="text-primary text-6xl"></FaBoxOpen>
						</div>
				<div className="space-y-2">
					<p className="text-lg font-medium leading-snug">Free Trial</p>
					<p className="leading-snug">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
				</div>
			</div>
			<div className="flex space-x-2 sm:space-x-4">
			<div className=" bg-primary/20 rounded-full p-4">
			<BiCategory   className="text-primary text-6xl"></BiCategory >
						</div>
				<div className="space-y-2">
					<p className="text-lg font-medium leading-snug">Filter out System</p>
					<p className="leading-snug">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
				</div>
			</div>
			<div className="flex space-x-2 sm:space-x-4">
			<div className=" bg-primary/20 rounded-full p-4">
			<RiPriceTag3Fill  className="text-primary text-6xl"></RiPriceTag3Fill>
						</div>
				<div className="space-y-2">
					<p className="text-lg font-medium leading-snug">Subscriptions</p>
					<p className="leading-snug">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
				</div>
			</div>
		</div>
		<div className="lg:w-1/2 xl:w-3/5 bg-neutral rounded-tr-xl rounded-br-xl">
			<div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
				<img src="https://i.ibb.co/wQnghsk/noteBook.jpg" alt="" className="" />
			</div>
		</div>
	</div>
</section>
	);
};

export default Service;
