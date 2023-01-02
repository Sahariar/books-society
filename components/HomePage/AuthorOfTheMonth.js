import Image from "next/image";
import Link from "next/link";
import Spacer from "../Shared/Spacer";

const AuthorOfTheMonth = () => {
    return (
        <section className="home-author-section my-10">
        <div className="p-12 mt-10 container mx-auto">
            <h2 className="text-4xl font-bold text-center pt-5">
               Author Of The Month
            </h2>
            <div className=" flex justify-center my-10">
            <Spacer></Spacer>	
            </div>
        </div>

        <div className="container mx-auto pb-10">
            <div className="flex flex-col-reverse xl:flex-row">
                <div className="w-full lg:w-6/12 p-2" data-aos="fade-right">
                <div className="mx-auto">
						<Image className="rounded-lg my-6 border-4 border-primary bg-secondary/40 mx-auto" src='https://i.ibb.co/znmFwxX/belle.jpg' width={600} height={600} alt="teacher" />
				</div>
                </div>
                <div className="w-full lg:w-6/12 p-2" data-aos="fade-left">
                <div className=" p-5 lg:p-20">
						<div className="pb-12">
						<h1 className="text-4xl font-bold pb-3">About Bella Mackie</h1>
					<Spacer></Spacer>
						</div>
						
						<p className="">
                        Bella Mackie is a former journalist who previously worked for The Guardian and Vice News. She writes a twice monthly Vogue column. Her first book, Jog On, was a memoir about mental health and running. It was a number two bestseller (just underneath Michelle Obama, which is a hallowed spot).</p>
                            
						<div className="mt-10 mx-auto">
                            <Link href={'/author/63aea714ef8c2f29f5b59c0f'}>
							<button className="btn btn-primary rounded-lg lg:w-1/2 w-full mx-auto text-center">
								See Author Books
							</button>
                            </Link>
						</div>
					</div>
                </div>
                
            </div>
        </div>
    </section>
    );
};

export default AuthorOfTheMonth;