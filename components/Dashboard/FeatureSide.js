import Image from "next/image";
import fetaure from '../../public/feaTURE.png';

const FeatureSide = () => {
    return (
        <div className="min-h-screen p-3 bg-white border-l-2">
            <h2 className="uppercase text-2xl text-center my-5">Featured Books</h2>
            <Image src={fetaure} className='w-full' />
            <h3 className="uppercase text-xl text-center my-5">How to kill your family</h3>
            <div className="flex items-center space-x-2 overflow-x-auto overflow-y-hidden flex-nowrap bg-slate-200 rounded-lg">
                <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 p-2 text-sm font-semibold">Class Details</a>
                <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 p-2 text-sm font-semibold text-gray-500">Assignments</a>
                <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 p-2 text-sm font-semibold text-gray-500">Projects</a>
                <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 p-2 text-sm font-semibold text-gray-500">Exams</a>
            </div>
            <div>
                <p className="text-sm font-semibold my-3">
                    Every lesson brings to life how illustration can be a tool to commiunicate message. You”ll explore
                </p>
                <ul className="text-sm font-semibold text-gray-500 list-disc ml-4">
                    <li>Inspiration and resources</li>
                    <li>The power of simple shapes, both in sketching and digital illustration</li>
                </ul>
            </div>
        </div>
    );
};

export default FeatureSide;