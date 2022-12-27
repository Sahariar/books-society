import Image from "next/image";
import teacher from "../../public/home/teacher.jpg";

const ApplyForTeacher = () => {
	return (
		<div className="bg-secondary/10">
			<div className="mx-auto">
				<div className="grid gap-10 grid-cols-1 md:grid-cols-2">
					<div className="">
						<Image className="w-full" src={teacher} alt="teacher" />
					</div>
					<div className="lg:mt-24 p-10">
						<h1 className="pb-5 text-4xl font-bold">Apply For Teaching</h1>
						<p className="text-xl">
							A teaching method comprises the principles and methods used by
							teachers to enable student learning. These strategies are
							determined partly on subject matter to be taught and partly by the
							nature of the learner. </p>
                            <p className="text-xl">For a particular teaching method to be
							appropriate and efficient it has take into account the learner,
							the nature of the subject matter, and the type of learning it is
							supposed to bring about. A teacher, also called a schoolteacher or
							formally an educator, is a person who helps students to acquire
							knowledge, competence, or virtue, via the practice of teaching.
						</p>
						<div className="mt-10 mx-auto">
							<button className="btn btn-primary rounded w-1/2 mx-auto text-center">
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
