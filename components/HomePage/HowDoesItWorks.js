import {
	FaEdit,
	FaBook,
	FaPenSquare,
	FaEnvelopeOpenText,
	FaAngleRight,
} from "react-icons/fa";
const HowDoesItWorks = () => {
	return (
		<div className="bg-secondary/10">
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
		</div>
	);
};

export default HowDoesItWorks;
