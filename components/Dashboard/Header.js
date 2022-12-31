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
                
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" class="bi bi-plus" viewBox="0 0 16 16"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/> </svg>
                        </button>
                    </span>
                    <button className="bg-blue-200 py-2 pl-10 pr-2 text-sm rounded-md text-blue-600 font-semibold">New Upload</button>
                </div>
            </div>
        </header>
    );
};

export default Header;