import { Link, NavLink, useNavigate } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { useContext, useState } from "react";
import logo from '/web-logo.png'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../provider/AuthProvider";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { user, logOut, darkMode, setDarkMode } = useContext(AuthContext)
    const notify = () => toast.error("User Signed Out!");
    const navigate = useNavigate()

    const handleSignOut = () => {
        logOut()
            .then(result => {
                navigate('/')
            })
            .then(notify)
            .catch()
    }

    const links = <>
        <ul className={`flex flex-col gap-2 duration-300 top-12 absolute lg:static ${open ? 'left-0' : '-left-60'} lg:bg-inherit p-10 lg:p-0 shadow-lg lg:shadow-none no-underline lg:gap-6 text-base lg:text-lg z-10`}>
            <li className="pb-1 lg:pb-0"><NavLink className={'focus:border-b-2 '} to='/'>Home</NavLink></li>
            {
                user ?
                    <li className="rounded-md lg:hidden focus:border-b-2" onClick={handleSignOut}>Sign Out</li>
                    :
                    <li className="rounded-md lg:hidden">
                        <NavLink to='/login' className={'focus:border-b-2 '}>Login</NavLink>
                    </li>
            }
            <li className="lg:hidden"><NavLink className={'focus:border-b-2 '} to='/'>Register</NavLink></li>
            {
                user ?
                    <li className="pb-2 lg:pb-0"><NavLink className={'focus:border-b-2'} to='/blogs'>Blogs</NavLink></li>
                    :
                    ""
            }
            {
                user ?
                    <li className="pb-2 lg:pb-0"><NavLink className={'focus:border-b-2'} to='/bookmarks'>Bookmarks</NavLink></li>
                    :
                    ""
            }
            {
                user ?
                    <li className="pb-2 lg:pb-0"><NavLink className={' focus:border-b-2'} to='/profile'>Profile</NavLink></li>
                    :
                    ""
            }


        </ul>
    </>


    return (
        <nav className="flex items-center px-2 lg:px-4 py-2 lg:py-4 justify-between text-xl font-medium ">
            <div className="flex items-center lg:hidden">
                <div className="lg:hidden" onClick={() => setOpen(!open)}>
                    {
                        open == true ? <IoMdClose className="text-2xl " /> : <RiMenu2Line className="text-2xl " />
                    }
                </div>

                <div className="logo flex text-base lg:hidden items-center">
                    <img src={logo} alt="" className="w-48 pl-2" />
                </div>
            </div>

            <div className="logo hidden lg:flex items-center ">
                <img src={logo} alt="" className="w-52" />
            </div>

            <div className="lg:pr-16">
                {links}
            </div>

            <div className="flex gap-1 items-center z-10">
                <div>
                    {
                        darkMode ?
                            <button className="btn btn-sm bg-inherit border-none text-white text-2xl pr-1 mt-1 shadow-none" onClick={() => setDarkMode(!darkMode)}>
                                <MdLightMode />
                            </button>

                            :
                            <button className="btn btn-sm bg-inherit border-none text-gray-800 text-2xl shadow-none pr-1 mt-1" onClick={() => setDarkMode(!darkMode)}>
                                <MdDarkMode />
                            </button>

                    }
                </div>
                <div>
                    {
                        user ?
                            <div className="tooltip tooltip-bottom tooltip-info" data-tip={user.displayName}><img src={user.photoURL} alt="" className="w-[38px] h-[38px] object-cover object-top rounded-full " /></div>

                            :
                            <FaUserCircle className="text-3xl" />

                    }
                </div>

                <div className="hidden lg:flex">
                    {
                        user ?
                            <button className=" btn btn-sm btn-active btn-ghost rounded-md text-sm lg:text-base" onClick={handleSignOut}>Sign Out</button>
                            :
                            <button className="btn btn-sm btn-active btn-ghost rounded-md text-sm lg:text-base">
                                <Link to='/login'>Login</Link>
                            </button>
                    }
                </div >

                <div className="hidden lg:flex">
                    <button className=" btn btn-sm btn-active btn-ghost rounded-md text-sm lg:text-base" ><Link to='/register'>Register</Link></button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;