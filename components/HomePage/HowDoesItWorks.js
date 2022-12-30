import {
	FaEdit,
	FaBook,
	FaPenSquare,
	FaEnvelopeOpenText,
	FaAngleRight,
} from "react-icons/fa";
import Divider from "../Shared/divider";
const HowDoesItWorks = () => {
	return (
		<>
		<section className="bg-secondary/10">
		<div className="p-12 pb-0 mt-10 container mx-auto">
				<h2 className="text-4xl font-bold text-center pt-5">
				How Does It Works
				</h2>
				<div className=" flex justify-center my-10">
				<Divider></Divider>		
				</div>
			</div>
	<div className="container max-w-5xl px-4 py-12 mx-auto">
		<div className="grid gap-4 mx-4 sm:grid-cols-12">
			<div className="col-span-12 sm:col-span-3">
				<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-primary">
					<h3 className="text-3xl font-semibold">Our Steps</h3>
			
				</div>
			</div>
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-primary">
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary">
						<h3 className="text-xl font-semibold tracking-wide">Register </h3>
						
						<p className="mt-3">User can Register for free or Pay Half yearly, yearly</p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary">
						<h3 className="text-xl font-semibold tracking-wide">Choose Books To Read</h3>
						
						<p className="mt-3">The user can Read books and take notes for books.</p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary">
						<h3 className="text-xl font-semibold tracking-wide">Participate In The Test</h3>
						
						<p className="mt-3">User can Participate in a Test on the book he finished reading and get feedback</p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary">
						<h3 className="text-xl font-semibold tracking-wide">Chat With Other Readers</h3>
						
						<p className="mt-3">Users can chat with others who read the same books and help each other.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
{/* 	<div className="bg-secondary/10">
			<div className="w-11/12 mx-auto pb-10">
				<h1 className="text-center pb-16 pt-20 text-4xl font-bold">
					How Does It Works
				</h1>
				<div className="grid gap-8 grid-cols-1 md:grid-cols-4">
					<div className="bg-white p-5 rounded-lg shadow-lg howDoesWorks relative">
						<div className="absolute bottom-[-20px] md:bottom-auto left-1/2 md:left-auto translate-x-[-50%] md:translate-x-1 md:translate-y-[-50%] rotate-90 md:rotate-0 md:right-[-20px] md:top-2/4">
							<span className="w-12 h-12 bg-white flex justify-center items-center rounded-full border border-blue-300">
								<FaAngleRight className="text-3xl text-primary" />
							</span>
						</div>
						<div className="flex justify-center items-center h-32">
							<span>
								<FaEdit className="text-6xl text-primary" />
							</span>
						</div>
						<h3 className="text-3xl font-semibold text-center mb-4">
							Register
						</h3>
						<p className="text-base text-center mb-5 md:mb-0">
							user can Register for free or Pay Half yearly, yearly
						</p>
					</div>
					<div className="bg-white p-5 rounded-lg shadow-lg howDoesWorks relative">
						<div className="absolute bottom-[-20px] md:bottom-auto left-1/2 md:left-auto translate-x-[-50%] md:translate-x-1 md:translate-y-[-50%] rotate-90 md:rotate-0 md:right-[-20px] md:top-2/4">
							<span className="w-12 h-12 bg-white flex justify-center items-center rounded-full border border-blue-300">
								<FaAngleRight className="text-3xl text-primary" />
							</span>
						</div>
						<div className="flex justify-center items-center h-32">
							<span>
								<FaBook className="text-6xl text-primary" />
							</span>
						</div>
						<h3 className="text-3xl font-semibold text-center mb-4">
							Choose Books To Read
						</h3>
						<p className="text-base text-center mb-5 md:mb-0">
							The user can Read books and take notes for books.
						</p>
					</div>
					<div className="bg-white p-5 rounded-lg shadow-lg howDoesWorks relative">
						<div className="absolute bottom-[-20px] md:bottom-auto left-1/2 md:left-auto translate-x-[-50%] md:translate-x-1 md:translate-y-[-50%] rotate-90 md:rotate-0 md:right-[-20px] md:top-2/4">
							<span className="w-12 h-12 bg-white flex justify-center items-center rounded-full border border-blue-300">
								<FaAngleRight className="text-3xl text-primary" />
							</span>
						</div>
						<div className="flex justify-center items-center h-32">
							<span>
								<FaPenSquare className="text-6xl text-primary" />
							</span>
						</div>
						<h3 className="text-3xl font-semibold text-center mb-4">
							Participate In The Test
						</h3>
						<p className="text-base text-center mb-5 md:mb-0">
							user can Participate in a Test on the book he finished reading and
							get feedback
						</p>
					</div>
					<div className="bg-white p-5 rounded-lg shadow-lg howDoesWorks">
						<div className="flex justify-center items-center h-32">
							<span>
								<FaEnvelopeOpenText className="text-6xl text-primary" />
							</span>
						</div>
						<h3 className="text-3xl font-semibold text-center mb-4">
							Chat With Other Readers
						</h3>
						<p className="text-base text-center mb-5 md:mb-0">
							Users can chat with others who read the same books and help each
							other.
						</p>
					</div>
				</div>
			</div>
		</div> */}
</>
	
	);
};

export default HowDoesItWorks;
