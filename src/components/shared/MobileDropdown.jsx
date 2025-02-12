import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; // New cross icon
import { CgMenuHotdog } from "react-icons/cg";

const MobileDropdown = ({ links }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="dropdown">
            <div
                tabIndex={0}
                role="button"
                className="lg:hidden"
                onClick={() => setDropdownOpen(true)}
            >
                <CgMenuHotdog className="text-4xl p-1 rounded text-white dark:text-[#1A1A1A] bg-[#1A1A1A] dark:bg-white hover:bg-[#1A1A1A] hover:dark:bg-blue-50 transition-all duration-300" />
            </div>
            {dropdownOpen && (
                <ul
                    tabIndex={0}
                    className="pt-10 menu menu-sm dropdown-content bg-gray-100 dark:bg-[#1A1A1A] rounded-xl z-[1] mt-5 w-52 p-3 shadow relative"
                >
                    {/* Close Button */}
                    <button
                        onClick={() => setDropdownOpen(false)}
                        className="absolute top-0 right-0 p-2 text-2xl text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-all"
                    >
                        <AiOutlineClose className="text-2xl bg-white dark:bg-gray-800 rounded-full p-1"/>
                    </button>
                    {links}
                </ul>
            )}
        </div>
    );
};

export default MobileDropdown;
