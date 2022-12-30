import { FaAngleDoubleLeft, FaAngleDoubleRight, FaBars } from 'react-icons/fa';
import Logo from '../Shared/Logo';

const Header = ({close, setClose}) => {
    return (
        <header className="p-4 bg-white border-b-2">
            <div className="container flex justify-between items-center h-10 mx-auto">
                <div onClick={()=>setClose(!close)}>
                        {close ? <div className='flex items-center cursor-pointer'><FaBars className='text-3xl mr-2'/><Logo width={10} height={10} color={"text-black"}/></div> : <button className='btn-primary btn-outline rounded-md p-2'>
                                <FaAngleDoubleLeft className='text-2xl'/>
                            </button>}
                </div>
                <div className="flex items-center md:space-x-4">
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                                <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-500">
                                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                </svg>
                            </button>
                        </span>
                        <input type="search" name="Search" placeholder="Search..." className="w-full py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none" />
                    </div>
                </div>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" class="bi bi-plus" viewBox="0 0 16 16"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/> </svg>
                        </button>
                    </span>
                    <button className="bg-blue-200 py-2 pl-10 pr-2 text-sm rounded-md text-blue-600 font-semibold">New Upload</button>
                </div>

                <button title="Open menu" type="button" className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;