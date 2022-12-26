import { FaEdit, FaBook, FaPenSquare, FaEnvelopeOpenText, FaAngleRight } from 'react-icons/fa';
const HowDoesItWorks = () => {
    return (
        <div className='bg-blue-100 py-10'>
            <div className="container mx-auto pb-10">
                <h1 className='text-center pb-16 pt-20 text-4xl font-bold'>
                    How Does It Works
                </h1>
                <div className="grid gap-5 grid-cols-2 md:grid-cols-4">
                    <div className="bg-white p-5 rounded-lg shadow-lg howDoesWorks">
                      
                        <div className='flex justify-center items-center h-32'>
                            <span><FaEdit className='text-6xl text-primary' /></span>
                        </div>
                        <h3 className='text-3xl font-semibold text-center mb-4'>Register</h3>
                        <p className='text-base text-center'>user can Register for free or Pay Half yearly, yearly</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-lg howDoesWorks">
                        <div className='flex justify-center items-center h-32'>
                            <span><FaBook className='text-6xl text-primary' /></span>
                        </div>
                        <h3 className='text-3xl font-semibold text-center mb-4'>Choose Books To Read</h3>
                        <p className='text-base text-center'>The user can Read books and take notes for books.</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-lg howDoesWorks">
                        <div className='flex justify-center items-center h-32'>
                            <span><FaPenSquare className='text-6xl text-primary' /></span>
                        </div>
                        <h3 className='text-3xl font-semibold text-center mb-4'>Participate In The Test</h3>
                        <p className='text-base text-center'>user can Participate in a Test on the book he finished reading and get feedback</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-lg howDoesWorks">
                        <div className='flex justify-center items-center h-32'>
                            <span><FaEnvelopeOpenText className='text-6xl text-primary' /></span>
                        </div>
                        <h3 className='text-3xl font-semibold text-center mb-4'>Chat With Other Readers</h3>
                        <p className='text-base text-center'>Users can chat with others who read the same books and help each other.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowDoesItWorks;