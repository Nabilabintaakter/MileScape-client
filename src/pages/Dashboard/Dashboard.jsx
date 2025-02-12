import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaPlus, FaList, FaRunning } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div className='bg-white dark:bg-[#1A1A1A]'>
            <div className="w-[90%] mx-auto max-w-7xl pb-8 md:pb-16">
                <div className="grid grid-cols-1 md:grid-cols-5 overflow-hidden">
                    {/* Sidebar */}
                    <div className="bg-blue-50 p-2 lg:p-4 col-span-1 flex flex-col gap-1 md:gap-2 ">
                        <NavLink
                            to="/dashboard/addMarathon"
                            className={({ isActive }) =>
                                `flex items-center gap-1 lg:gap-3 px-1 lg:px-2 py-2 rounded-md transition duration-300 ${isActive
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'text-gray-800 hover:bg-blue-200'
                                }`
                            }
                        >
                            <FaPlus className="text-xs lg:text-base" />
                            <span className="text-xs lg:text-base font-medium">Add Marathon</span>
                        </NavLink>
                        <NavLink
                            to="/dashboard/myMarathonList"
                            className={({ isActive }) =>
                                `flex items-center gap-1 lg:gap-3 px-1 lg:px-2 py-2 rounded-md transition duration-300 ${isActive
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'text-gray-800 hover:bg-blue-200'
                                }`
                            }
                        >
                            <FaList className="text-xs lg:text-base" />
                            <span className="text-xs lg:text-base font-medium ">My Marathon List</span>
                        </NavLink>
                        <NavLink
                            to="/dashboard/myApplyList"
                            className={({ isActive }) =>
                                `flex items-center gap-1 lg:gap-3 px-1 lg:px-2 py-2 rounded-md transition duration-300 ${isActive
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'text-gray-800 hover:bg-blue-200'
                                }`
                            }
                        >
                            <FaRunning className="text-xs lg:text-base" />
                            <span className="text-xs lg:text-base font-medium ">My Apply List</span>
                        </NavLink>
                    </div>
                    <div className="md:col-span-4 px-3 pt-3 bg-white dark:bg-[#1A1A1A]">
                        <div className="min-h-screen">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
