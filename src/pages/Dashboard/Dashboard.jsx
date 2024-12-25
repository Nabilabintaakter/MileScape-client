import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaPlus, FaList, FaRunning } from 'react-icons/fa'; // Import icons
import { Fade } from 'react-awesome-reveal'; // Import animation

const Dashboard = () => {
    return (
        <div className="w-[95%] lg:w-[90%] mx-auto max-w-7xl mt-4 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2 lg:gap-6 bg-white rounded-lg overflow-hidden">
                {/* Sidebar */}
                <div className="bg-blue-50 p-4 col-span-1 flex flex-col gap-1">
                    <Fade direction="left" triggerOnce duration={1000}>
                        <h2 className="text-2xl font-bold text-blue-900 text-center mb-6">Navigation</h2>
                    </Fade>
                    <NavLink
                        to="/dashboard/addMarathon"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-md transition duration-300 ${
                                isActive
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'text-gray-800 hover:bg-blue-200'
                            }`
                        }
                    >
                        <FaPlus className="" />
                        <span className="font-medium">Add Marathon</span>
                    </NavLink>
                    <NavLink
                        to="/dashboard/myMarathonList"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-md transition duration-300 ${
                                isActive
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'text-gray-800 hover:bg-blue-200'
                            }`
                        }
                    >
                        <FaList className="" />
                        <span className="font-medium ">My Marathon List</span>
                    </NavLink>
                    <NavLink
                        to="/dashboard/myApplyList"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-md transition duration-300 ${
                                isActive
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'text-gray-800 hover:bg-blue-200'
                            }`
                        }
                    >
                        <FaRunning className="" />
                        <span className="font-medium ">My Apply List</span>
                    </NavLink>
                </div>

                {/* Main Content */}
                <div className="md:col-span-4 p-3 rounded-md">
                    <div className="h-full">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
