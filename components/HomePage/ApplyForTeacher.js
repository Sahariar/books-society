import Image from "next/image";
import Divider from "../Shared/divider";

const ApplyForTeacher = () => {
	return (
		<div className="bg-neutral text-white">
			<div className="container mx-auto">
				<div className="grid gap-10 grid-cols-1 md:grid-cols-2">
					<div className="">
						<Image className="rounded-lg my-6 border-4 border-primary" src='https://i.ibb.co/4T5kpsH/behind.jpg' width={600} height={380} alt="teacher" />
					</div>
					<div className="p-20">
						<div className="pb-12">
						<h1 className="text-4xl font-bold pb-3">Apply For Teaching</h1>
						<Divider></Divider>
						</div>
						
						<p className="">
							A teaching method comprises the principles and methods used by
							teachers to enable student learning. These strategies are
							determined partly on subject matter to be taught and partly by the
							nature of the learner. </p>
                            
						<div className="mt-10 mx-auto">
							<button className="btn btn-primary rounded-lg w-1/2 mx-auto text-center">
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
