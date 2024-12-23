import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logoo.png';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import { FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
    const { user, handleSignOut } = useContext(AuthContext);
    const links = <>
        <li>
            <NavLink
                to='/'
                className={({ isActive }) =>
                    isActive ? 'font-medium border-b-2 border-[#fae102]' : ''
                }>
                HOME
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/marathons'
                className={({ isActive }) =>
                    isActive ? 'font-medium border-b-2 border-[#fae102]' : ''
                }>
                MARATHONS
            </NavLink>
        </li>
        <li className={`${user ? 'block' : 'hidden'}`}>
            <NavLink
                to='/dashboard/addMarathon'
                className={({ isActive }) =>
                    isActive ? 'font-medium border-b-2 border-[#fae102]' : ''
                }>
                DASHBOARD
            </NavLink>
        </li>


    </>
    return (
        <div className='bg-yellow-50'>
            <div className="navbar w-[98%] md:w-[90%] mx-auto max-w-7xl">
                <div className="navbar-start">
                    {/* mobile */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="mr-2 lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className='flex items-center gap-2'>
                        <img className='w-8 lg:w-10' src={logo} alt="" />
                        <p className="text-2xl lg:text-[28px] font-bold">MILESCAPE</p>
                    </Link>
                </div>
                <div className="navbar-end flex items-center gap-5">
                    <ul className="hidden lg:flex items-center gap-3 lg:gap-5">
                        {links}

                    </ul>
                    <div>
                        {
                            user ?
                                <div className='flex items-center gap-2'>
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="w-10 h-10 md:w-12 md:h-12  btn-circle avatar border-2 border-blue-800">
                                            <div className="w-full rounded-full">

                                                <img
                                                    referrerPolicy="no-referrer"
                                                    alt="user"
                                                    src={user?.photoURL} />
                                            </div>
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                                            <li className='flex justify-center items-center text-xl text-blue-800 font-bold mb-2'>{user?.displayName}</li>
                                            
                                        </ul>
                                    </div>

                                    <button onClick={handleSignOut} className='bg-red-500  rounded-none border-none shadow-none text-white font-medium py-1 px-2  md:py-2 md:px-4 flex items-center hover:bg-white hover:text-red-500 transition-all duration-300 gap-2 '><FaSignOutAlt></FaSignOutAlt> Logout</button>
                                </div>

                                :
                                <div className='flex items-center gap-2'>
                                    <Link to='/login' className='bg-blue-400 text-base font-normal btn btn-sm rounded-none border-none shadow-none '>Login</Link>
                                    <Link to='/register' className='bg-[#fae102] btn btn-sm rounded-none border-none shadow-none text-base font-normal'>Register</Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;