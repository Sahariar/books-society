import { FaAngleDoubleLeft, FaAngleDoubleRight, FaBars } from 'react-icons/fa';
import Logo from '../Shared/Logo';

const Header = ({close, setClose}) => {
    return (
        <header className="p-4 bg-white border-b-2">
            <div className="container flex justify-between items-center h-10 mx-auto">
                <div onClick={()=>setClose(!close)}>
                        {close ? <div className='flex items-center cursor-pointer'>
                            <FaBars className='text-3xl mr-2'/>
                            <Logo width={10} height={10} color={"text-black"}/></div> : <button className='btn-primary btn-outline rounded-md p-2'>
                                <FaAngleDoubleLeft className='text-2xl'/>
                            </button>}
                </div>
            
            </div>
        </header>
    );
};

export default Header;