import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../../components/Shared/Logo";
import {AiFillWechat, AiOutlineBook, AiOutlineDashboard, AiOutlineLogout, AiOutlineMessage, AiOutlinePlus, AiOutlineUnorderedList, AiOutlineUserAdd, AiOutlineUsergroupAdd} from 'react-icons/ai';

const Sidebar = () => {
    const router = useRouter();
    function handleSignout(){
        signOut()
      }
    return (
        <div className="min-h-screen w-60 p-3 space-y-2 bg-white border-r-2">
            <div className="mb-10">
                <Link href={'/'}>
                <Logo width={10} height={10} color={"text-black"} />
                </Link>
               
            </div>
            <div className="flex items-center p-2 space-x-4">
                <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                <div>
                    <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
                    <span className="flex items-center space-x-1">
                        <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">View profile</a>
                    </span>
                </div>
            </div>
            <div className="divide-y divide-gray-700">
                <ul className="pt-2 pb-4 space-y-1 text-sm">
                    <li className={router.pathname == '/dashboard' ? 'font-bold border-l-4 border-gray-600' : ''}>
                        <Link href="/dashboard" className="flex items-center p-2 space-x-3 rounded-md">
                            <AiOutlineDashboard className='text-2xl' />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className={router.pathname == '/dashboard/addBook' ? 'font-bold border-l-4 border-gray-600' : ''}>
                        <Link href="/dashboard/addBook" className="flex items-center p-2 space-x-3 rounded-md">
                            <AiOutlinePlus className='text-2xl' />
                            <span>Add Book</span>
                        </Link>
                    </li>
                    <li className={router.pathname == '/dashboard/allBooks' ? 'font-bold border-l-4 border-gray-600' : ''}>
                        <Link href="/dashboard/allBooks" className="flex items-center p-2 space-x-3 rounded-md">
                            <AiOutlineUnorderedList className='text-2xl' />
                            <span>All Books</span>
                        </Link>
                    </li>
                    <li className={router.pathname == '/dashboard/myBooks' ? 'font-bold border-l-4 border-gray-600' : ''}>
                        <Link href="/dashboard/myBooks" className="flex items-center p-2 space-x-3 rounded-md">
                            <AiOutlineBook className='text-2xl' />
                            <span>My Books</span>
                        </Link>
                    </li>
                    <li className={router.pathname == '/dashboard/allReviews' ? 'font-bold border-l-4 border-gray-600' : ''}>
                        <Link href="/dashboard/allReviews" className="flex items-center p-2 space-x-3 rounded-md">
                            <AiOutlineUnorderedList className='text-2xl' />
                            <span>All Reviews</span>
                        </Link>
                    </li>
                    <li className={router.pathname == '/dashboard/myReviews' ? 'font-bold border-l-4 border-gray-600' : ''}>
                        <Link href="/dashboard/myReviews" className="flex items-center p-2 space-x-3 rounded-md">
                            <AiOutlineMessage className='text-2xl' />
                            <span>My Reviews</span>
                        </Link>
                    </li>
                    <li className={router.pathname == '/dashboard/addAuthor' ? 'font-bold border-l-4 border-gray-600' : ''}>
                        <Link href="/dashboard/addAuthor" className="flex items-center p-2 space-x-3 rounded-md">
                            <AiOutlineUserAdd className='text-2xl' />
                            <span>Add Author</span>
                        </Link>
                    </li>
                    <li className={router.pathname == '/dashboard/allUsers' ? 'font-bold border-l-4 border-gray-600' : ''}>
                        <Link href="/dashboard/allUsers" className="flex items-center p-2 space-x-3 rounded-md">
                            <AiOutlineUsergroupAdd className='text-2xl' />
                            <span>All Users</span>
                        </Link>
                    </li>
                    <li className={router.pathname == '/dashboard/chat' ? 'font-bold border-l-4 border-gray-600' : ''} >
                        <Link href='/dashboard/chat' className="flex items-center p-2 space-x-3 rounded-md">
                            <AiFillWechat className='text-2xl' />
                            <span>Chat</span>
                        </Link>
                    </li>
                    
                    <li onClick={handleSignout} className="cursor-pointer">
                        <span className="flex items-center p-2 space-x-3 rounded-md">
                            <AiOutlineLogout className='text-2xl' />
                            <span>Logout</span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;