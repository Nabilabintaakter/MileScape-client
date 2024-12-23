import React from 'react';

const MarathonCard = ({ marathon }) => {
    const { image, title, location, startRegDate, endRegDate } = marathon || {};

    return (
        <div className=" rounded overflow-hidden shadow-lg bg-white transform transition duration-300 group">
            {/* Image Section */}
            <div className="relative ">
                <img
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                    src={image}
                    alt={title}
                />
                <div className="absolute bottom-0 w-full bg-gray-800 bg-opacity-75 text-white py-3 text-center">
                    <h3 className="font-bold text-xl group-hover:text-[#fae102] transition duration-300">
                        {title}
                    </h3>
                    <p className="text-sm group-hover:text-[#fae102] transition duration-300">
                        {location}
                    </p>
                </div>
            </div>
            {/* Content Section */}
            <div className="p-6 text-center">
                <div className="mt-4">
                    <p className="text-sm text-gray-700 font-medium">
                        Registration:{" "}
                        <span className="text-gray-900">
                            {new Date(startRegDate).toLocaleDateString()} -{" "}
                            {new Date(endRegDate).toLocaleDateString()}
                        </span>
                    </p>
                </div>
                {/* Button Section */}
                <div className="mt-6">
                    <button className="bg-[#f0d802] text-white py-2 px-6 rounded-sm btn btn-sm border-none hover:bg-[#d3be01] transition duration-300 font-semibold  hover:shadow-lg">
                        See Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MarathonCard;
