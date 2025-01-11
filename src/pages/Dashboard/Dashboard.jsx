import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaPlus, FaList, FaRunning } from 'react-icons/fa'; 
import { Fade } from 'react-awesome-reveal'; 

const Dashboard = () => {
    return (
        <div className="w-[95%] lg:w-[90%] mx-auto max-w-7xl mt-4 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2 lg:gap-6 bg-white rounded-lg overflow-hidden">
                {/* Sidebar */}
                <div className="bg-blue-50 p-2  lg:p-4 col-span-1 flex flex-col gap-2 ">
                    <Fade direction="left" triggerOnce duration={1000}>
                        <h2 className="text-xl md:text-xl lg:text-2xl font-bold text-blue-900 text-center mb-6">Navigation</h2>
                    </Fade>
                    <NavLink
                        to="/dashboard/addMarathon"
                        className={({ isActive }) =>
                            `flex items-center gap-1 lg:gap-3 px-2 lg:px-4 py-3 rounded-md transition duration-300 ${
                                isActive
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
                            `flex items-center gap-1 lg:gap-3 px-2 lg:px-4 py-3 rounded-md transition duration-300 ${
                                isActive
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
                            `flex items-center gap-1 lg:gap-3 px-2 lg:px-4 py-3 rounded-md transition duration-300 ${
                                isActive
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'text-gray-800 hover:bg-blue-200'
                            }`
                        }
                    >
                        <FaRunning className="text-xs lg:text-base" />
                        <span className="text-xs lg:text-base font-medium ">My Apply List</span>
                    </NavLink>
                </div>
                <div className="md:col-span-4 p-3 rounded-md">
                    <div className="min-h-screen">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
