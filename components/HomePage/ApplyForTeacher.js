import Image from 'next/image';
import teacher from '../../public/home/teacher.png';

const ApplyForTeacher = () => {
    return (
        <div className='bg-blue-100'>
            <div className="w-11/12 mx-auto py-20">
                <div className='grid gap-10 grid-cols-1 md:grid-cols-2'>
                    <div>
                        <Image className='w-full' src={teacher} alt=""/>
                    </div>
                    <div>
                        <h1 className='pb-5 text-4xl font-bold'>
                            Apply For Teaching
                        </h1>
                        <p>
                            A teaching method comprises the principles and methods used by teachers to enable student learning. These strategies are determined partly on subject matter to be taught and partly by the nature of the learner. For a particular teaching method to be appropriate and efficient it has take into account the learner, the nature of the subject matter, and the type of learning it is supposed to bring about.
                            <br />
                            <br />
                            A teacher, also called a schoolteacher or formally an educator, is a person who helps students to acquire knowledge, competence, or virtue, via the practice of teaching.
                        </p>
                        <div className='mt-10'>
                            <button className='btn btn-outline btn-primary rounded w-1/2'>Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplyForTeacher;