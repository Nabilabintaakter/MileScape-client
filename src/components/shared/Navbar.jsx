import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logoo.png';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import { FaSignOutAlt } from 'react-icons/fa';
import { ImMenu } from 'react-icons/im';
import { CgMenuHotdog } from 'react-icons/cg';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const Navbar = () => {
    const { user, handleSignOut } = useContext(AuthContext);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const signOutHandler = () => {
        handleSignOut()
            .then(() => {
                navigate('/login')
            })
    }

    const links = <>
        <li>
            <NavLink
                onClick={scrollToTop}
                to='/'
                className={({ isActive }) =>
                    `relative pb-1 transition-all duration-300 
                ${isActive ? 'font-medium border-b-2 border-[#fae102]' : 'hover:font-semibold'}
                after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#fae102] 
                after:transition-all after:duration-500 hover:after:w-full`
                }>
                HOME
            </NavLink>
        </li>
        <li>
            <NavLink
                onClick={scrollToTop}
                to='/marathons'
                className={({ isActive }) =>
                    `relative pb-1 transition-all duration-300 
                ${isActive ? 'font-medium border-b-2 border-[#fae102]' : 'hover:font-semibold'}
                after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#fae102] 
                after:transition-all after:duration-500 hover:after:w-full`
                }>
                MARATHONS
            </NavLink>
        </li>
        <li className={`${user ? 'block' : 'hidden'}`}>
            <NavLink
                onClick={scrollToTop}
                to='/dashboard/addMarathon'
                className={({ isActive }) =>
                    `relative pb-1 transition-all duration-300 
                ${isActive ? 'font-medium border-b-2 border-[#fae102]' : 'hover:font-semibold'}
                after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#fae102] 
                after:transition-all after:duration-500 hover:after:w-full`
                }>
                DASHBOARD
            </NavLink>
        </li>
        <li>
            <NavLink
                onClick={scrollToTop}
                to='/aboutUs'
                className={({ isActive }) =>
                    `relative pb-1 transition-all duration-300 
                ${isActive ? 'font-medium border-b-2 border-[#fae102]' : 'hover:font-semibold'}
                after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#fae102] 
                after:transition-all after:duration-500 hover:after:w-full`
                }>
                ABOUT US
            </NavLink>
        </li>
    </>;



    return (
        <div
            className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white bg-opacity-90 backdrop-blur-md' : 'bg-white'
                }`}>
            <div className="navbar w-[90%] mx-auto max-w-7xl p-0">
                <div className="navbar-start">
                    {/* mobile */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden">
                            <CgMenuHotdog className='text-4xl p-1 rounded text-white bg-blue-950 hover:bg-blue-900 transition-all duration-300' />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>

                    <Link onClick={scrollToTop} to='/' className=' items-center gap-2 hidden lg:flex'>
                        <img className='w-8 lg:w-10' src={logo} alt="" />
                        <p className="text-2xl lg:text-[28px] font-bold text-black">MILE<span className='text-[#f7c53a] font-medium'>SCAPE</span></p>
                    </Link>
                </div>
                <div className='navbar-center'>
                    <Link onClick={scrollToTop} to='/' className=' items-center gap-2 flex lg:hidden'>
                        <img className='w-8' src={logo} alt="" />
                        <p className="text-[28px] font-bold text-black">MILE<span className='text-[#f7c53a] font-medium'>SCAPE</span></p>
                    </Link>
                    <ul className="hidden lg:flex items-center gap-3 lg:gap-5">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-5">
                    <div className='flex items-center gap-2'>
                        <DarkModeToggle></DarkModeToggle>
                        {
                            user ?
                                <div className='flex items-center gap-2 lg:gap-4'>
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="w-10 h-10  btn-circle avatar border-2 border-blue-800 mt-1">
                                            <div className="w-full rounded-full ">
                                                <img
                                                    referrerPolicy="no-referrer"
                                                    alt="user"
                                                    src={user?.photoURL} />
                                            </div>
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="menu menu-sm dropdown-content bg-base-100 rounded z-[1] mt-3 w-52 p-2 shadow">
                                            <li className='flex justify-center items-center text-xl text-black font-bold mb-2'>{user?.displayName}</li>
                                            <li className='px-2 block  lg:hidden'>
                                                <button onClick={signOutHandler} className='bg-red-500  rounded border-[1px] border-red-500 shadow-none text-white font-medium w-full py-1 px-2 md:py-[6px] md:px-4 flex md:hidden justify-center items-center hover:bg-white hover:text-red-500 transition-all duration-300 gap-2'><FaSignOutAlt></FaSignOutAlt> Logout</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <button onClick={signOutHandler} className='bg-red-500  rounded border-[1px] border-red-500 shadow-none text-white font-medium py-1 px-2 md:py-[6px] md:px-4 hidden md:flex items-center hover:bg-white hover:text-red-500 transition-all duration-300 gap-2'><FaSignOutAlt></FaSignOutAlt> Logout</button>
                                </div>
                                :
                                <div className='flex items-center gap-2'>
                                    <Link to='/login' className='bg-blue-500 text-base font-normal rounded py-1 md:py-[6px] px-4  border-[1px] border-blue-500 shadow-none text-white hover:text-blue-600 hover:bg-white transition-all duration-300'>Login</Link>
                                    <Link to='/register' className='bg-[#fae102] hidden md:block py-1 px-2 md:py-[6px] md:px-4 rounded border-none shadow-none text-base font-normal hover:bg-yellow-500 transition-all duration-300'>Register</Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
