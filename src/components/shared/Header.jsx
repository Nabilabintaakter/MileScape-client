import React from 'react';

const Header = ({title, subTitle}) => {
    return (
        <div className="text-center mb-3 md:mb-6 lg:mb-8">
            {/* Section Title */}
            <h3 className="text-sm md:text-base font-semibold text-gray-600 dark:text-gray-300 uppercase">
                {title}
            </h3>
            <h1 className="text-3xl md:text-[42px] font-bold text-gray-900 dark:text-white mt-2 md:mt-4">
                {subTitle}
            </h1>
            {/* Underline */}
            <div className="mt-4 lg:mt-8 w-24 h-1 mx-auto bg-[#fae102] rounded"></div>
        </div>
    );
};

export default Header;
