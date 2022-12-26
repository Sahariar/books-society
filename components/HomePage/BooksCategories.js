import Image from "next/image";

const BooksCategories = () => {
	return (
		<section className="books-cat-section py-10 bg-secondary/10">
			<div className="pb-12 mb-10 container mx-auto">
				<h2 className="text-4xl font-bold text-center pt-5">
					Books Categories
				</h2>
			</div>
		<div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-7 gap-10">
				<div className="card items-center">
					<div className="avatar">
						<div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <Image 
                            src="https://i.ibb.co/Qr5JP34/clem-onojeghuo-0-PPKx-Wt-Yh0g-unsplash.jpg"
                            width="128"
                            height="128" alt="img"
                            />
                            

                        </div>
					</div>
					<h2 className="text-2xl text-center font-bold mt-5 cursor-pointer hover:bg-secondary px-4">
						Teachers Picks
					</h2>
				</div>
				<div className="card items-center">
					<div className="avatar">
						<div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <Image 
                            src="https://i.ibb.co/wMkTWVz/alex-lvrs-2z-Dw14y-CYqk-unsplash.jpg"
                            width="128"
                            height="128" alt="img"
                            />

                        </div>
					</div>
					<h2 className="text-2xl text-center font-bold mt-5 cursor-pointer hover:bg-secondary rounded-xl px-4">
                    Most Popular
					</h2>
				</div>
				<div className="card items-center">
					<div className="avatar">
						<div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <Image 
                            src="https://i.ibb.co/M95dg39/debby-hudson-ERb-JXVw-Afo-unsplash.jpg"
                            width="128"
                            height="128" alt="img"
                            />
                        </div>
					</div>
					<h2 className="text-2xl text-center font-bold mt-5 cursor-pointer hover:bg-secondary rounded-xl px-4">
                    Personal Growth
					</h2>
				</div>
				<div className="card items-center">
					<div className="avatar">
						<div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <Image 
                            src="https://i.ibb.co/8s4Xz01/taylor-heery-LNk-Pw-NVAdm-A-unsplash.jpg"
                            width="128"
                            height="128" alt="img"
                            />
                        </div>
					</div>
					<h2 className="text-2xl text-center font-bold mt-5 cursor-pointer hover:bg-secondary rounded-xl px-4">
                    Lifestyle
					</h2>
				</div>
				<div className="card items-center">
					<div className="avatar">
						<div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <Image 
                            src="https://i.ibb.co/ngn5vv6/brooke-lark-Gw-Nsgn-SAf-QM-unsplash-1.jpg"
                            width="128"
                            height="128" alt="img"
                            />
                        </div>
					</div>
					<h2 className="text-2xl text-center font-bold mt-5 cursor-pointer hover:bg-secondary rounded-xl px-4">
                    Health & Fitness
					</h2>
				</div>
				<div className="card items-center">
					<div className="avatar">
						<div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <Image 
                            src="https://i.ibb.co/WVgtHSz/matt-ridley-H-LIL57-PHCc-unsplash.jpg"
                            width="128"
                            height="128" alt="img"
                            />
                        </div>
					</div>
					<h2 className="text-2xl text-center font-bold mt-5 cursor-pointer hover:bg-secondary rounded-xl px-4">
                    Science & Research
					</h2>
				</div>
				<div className="card items-center">
					<div className="avatar">
						<div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <Image 
                            src="https://i.ibb.co/nL7hLVX/roberta-errani-kn-TUUJ8i-P2-U-unsplash.jpg"
                            width="128"
                            height="128" alt="img"
                            />
                        </div>
					</div>
					<h2 className="text-2xl text-center font-bold mt-5 cursor-pointer hover:bg-secondary rounded-xl px-4">
                    Technology
					</h2>
				</div>
			</div>
        </div>
		</section>
	);
};

export default BooksCategories;
