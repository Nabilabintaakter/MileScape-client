import React from 'react';

const Header = () => {
    return (
        <div className="text-center mb-3 md:mb-6 lg:mb-8">
            {/* Section Title */}
            <h3 className="font-semibold text-gray-600 uppercase">
                Manage Your Marathons
            </h3>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
                Marathon Dashboard
            </h1>
            {/* Underline */}
            <div className="mt-4 md:mt-6 w-24 h-1 mx-auto bg-[#fae102] rounded"></div>
        </div>
    );
};

export default Header;
