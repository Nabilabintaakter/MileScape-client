import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div className="w-[95%] lg:w-[90%] mx-auto max-w-7xl mt-4 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-6 bg-white  rounded-lg overflow-hidden">
                {/* Sidebar */}
                <div className="bg-blue-100 p-2 md:p-3 lg:p-4 col-span-1 flex flex-col gap-1 md:gap-3 border-r-2 border-gray-200">
                    <h2 className="text-xl font-semibold text-blue-600 mb-4">
                        Navigation
                    </h2>
                    <NavLink
                        to="/dashboard/addMarathon"
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-4 py-3 rounded-md transition ${
                                isActive
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-700 hover:bg-blue-200'
                            }`
                        }
                    >
                        ➕ Add Marathon
                    </NavLink>
                    <NavLink
                        to="/dashboard/myMarathonList"
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-4 py-3 rounded-md transition ${
                                isActive
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-700 hover:bg-blue-200'
                            }`
                        }
                    >
                        📋 My Marathon List
                    </NavLink>
                    <NavLink
                        to="/dashboard/myApplyList"
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-4 py-3 rounded-md transition ${
                                isActive
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-700 hover:bg-blue-200'
                            }`
                        }
                    >
                        🏃 My Apply List
                    </NavLink>
                </div>

                {/* Main Content */}
                <div className="md:col-span-2 lg:col-span-3 p-2 rounded-md">
                    <div className="h-full">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
