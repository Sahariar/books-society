import Image from "next/image";
import Spacer from "../Shared/Spacer";


const ApplyForTeacher = () => {
	return (
		<div className="bg-neutral text-white">
			<div className="container mx-auto">
				<div className="grid gap-10 grid-cols-1 md:grid-cols-2">
					<div className="w-10/12 lg:w-full mx-auto">
						<Image className="rounded-lg my-6 border-4 border-primary" src='https://i.ibb.co/4T5kpsH/behind.jpg' width={600} height={380} alt="teacher" />
					</div>
					<div className="p-5 lg:p-20">
						<div className="pb-12">
						<h1 className="text-4xl font-bold pb-3">Apply For Teaching</h1>
						<Spacer></Spacer>
						</div>
						
						<p className="">
							A teaching method comprises the principles and methods used by
							teachers to enable student learning. These strategies are
							determined partly on subject matter to be taught and partly by the
							nature of the learner. </p>
                            
						<div className="mt-10 mx-auto">
							<button className="btn btn-primary rounded-lg w-full lg:w-1/2 mx-auto text-center">
								Apply Now
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ApplyForTeacher;
