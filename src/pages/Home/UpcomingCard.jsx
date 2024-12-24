import React from "react";
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt, FaRunning } from "react-icons/fa";

const UpcomingCard = ({ marathon }) => {
    const {
        image,
        title,
        location,
        startRegDate,
        endRegDate,
        marathonStartDate,
        ticketPrice,
        category,
        distance,
        totalRegistrations,
    } = marathon || {};

    // Format dates to show only readable format (e.g., December 14, 2024)
    const formatDate = (date) =>
        date
            ? new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
              })
            : "TBD";

    return (
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-md overflow-hidden h-auto md:h-64  lg:h-60">
            <div className="w-full md:w-2/5">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="text-xs lg:text-base w-full md:w-3/5 flex flex-col md:flex-row ">
                <div className="flex-1 p-6 bg-[#202020] text-white">
                    <h2 className="text-xl font-bold mb-4 text-yellow-400">
                        {title || "Marathon Title"}
                    </h2>
                    <ul className=" text-gray-300 flex flex-col gap-2 md:gap-0 md:justify-between h-full">
                        <li className="flex items-center gap-2">
                            <FaCalendarAlt className="text-yellow-400" />
                            <span>
                                <strong>Registration Start:</strong>{" "}
                                {formatDate(startRegDate)}
                            </span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCalendarAlt className="text-yellow-400" />
                            <span>
                                <strong>Registration End:</strong>{" "}
                                {formatDate(endRegDate)}
                            </span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCalendarAlt className="text-yellow-400" />
                            <span>
                                <strong>Marathon Date:</strong>{" "}
                                {formatDate(marathonStartDate)}
                            </span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaRunning className="text-yellow-400" />
                            <span>
                                <strong>Category:</strong> {category || "General"}
                            </span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-yellow-400" />
                            <span>
                                <strong>Location:</strong>{" "}
                                {location || "Location Not Available"}
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="bg-[#424242] flex flex-col justify-center items-center w-full md:w-[35%] p-4 border-l-[1px] border-dashed border-l-yellow-400">
                    <p className="text-4xl font-bold text-yellow-400">
                        ${ticketPrice || "Free"}
                    </p>
                    <p className=" text-gray-400 mt-2">
                        Distance: {distance || "TBD"} km
                    </p>
                    <p className=" text-gray-400">
                        Participants: {totalRegistrations || "0"}
                    </p>
                    <button className="mt-4 flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-md text-sm hover:bg-yellow-500">
                        Register Now <FaArrowRight></FaArrowRight>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpcomingCard;
