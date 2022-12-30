import Image from "next/image";
import Divider from '../Shared/Divider';

const BooksCategories = () => {
	return (
		<section className="books-cat-section py-10">

			<div className="pb-12 mb-10 container mx-auto">
				<h2 className="text-4xl font-bold text-center pt-5">
					Books Categories
				</h2>
				<div className=" flex justify-center my-10">
				<Divider></Divider>		
				</div>
			</div>
		<div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
				<div className="card items-center">
					<div className="avatar">
						<div className="w-80 h-80 rounded-xl shadow-xl">
                            <Image 
                            src="https://i.ibb.co/Qr5JP34/clem-onojeghuo-0-PPKx-Wt-Yh0g-unsplash.jpg"
                            width="300"
                            height="300" alt="img"
                            />
                            

                        </div>
					</div>
					<h2 className="text-2xl text-center font-bold mt-5 cursor-pointer   rounded-xl px-4">
						Teachers Picks
					</h2>
				</div>
				<div className="card items-center">
					<div className="avatar">
						<div className="w-80 h-80 rounded-xl shadow-xl">
                        <Image 
                            src="https://i.ibb.co/wMkTWVz/alex-lvrs-2z-Dw14y-CYqk-unsplash.jpg"
                            width="300"
                            height="300" alt="img"
                            />

                        </div>
					</div>
					<h2 className="text-2xl text-center font-bold mt-5 cursor-pointer   rounded-xl px-4">
                    Most Popular
					</h2>
				</div>
				<div className="card items-center">
					<div className="avatar">
						<div className="w-80 h-80 rounded-xl shadow-xl">
                        <Image 
                            src="https://i.ibb.co/M95dg39/debby-hudson-ERb-JXVw-Afo-unsplash.jpg"
                            width="300"
                            height="300" alt="img"
                            />
                        </div>
					</div>
					<h2 className="text-2xl text-center font-bold mt-5 cursor-pointer   rounded-xl px-4">
                    Personal Growth
					</h2>
				</div>
				<div className="card items-center">
					<div className="avatar">
						<div className="w-80 h-80 rounded-xl shadow-xl">
                        <Image 
                            src="https://i.ibb.co/8s4Xz01/taylor-heery-LNk-Pw-NVAdm-A-unsplash.jpg"
                            width="300"
                            height="300" alt="img"
                            />
                        </div>
					</div>
					<h2 className="text-2xl text-center font-bold mt-5 cursor-pointer   rounded-xl px-4">
                    Lifestyle
					</h2>
				</div>
				<div className="card items-center">
					<div className="avatar">
						<div className="w-80 h-80 rounded-xl shadow-xl">
                        <Image 
                            src="https://i.ibb.co/ngn5vv6/brooke-lark-Gw-Nsgn-SAf-QM-unsplash-1.jpg"
                            width="300"
                            height="300" alt="img"
                            />
                        </div>
					</div>
					<h2 className="text-2xl text-center font-bold mt-5 cursor-pointer   rounded-xl px-4">
                    Health & Fitness
					</h2>
				</div>
				<div className="card items-center">
					<div className="avatar">
						<div className="w-80 h-80 rounded-xl shadow-xl">
                        <Image 
                            src="https://i.ibb.co/WVgtHSz/matt-ridley-H-LIL57-PHCc-unsplash.jpg"
                            width="300"
                            height="300" alt="img"
                            />
                        </div>
					</div>
					<h2 className="text-2xl text-center font-bold mt-5 cursor-pointer   rounded-xl px-4">
                    Science & Research
					</h2>
				</div>
			</div>
        </div>
		</section>
	);
};

export default BooksCategories;
