import { IoArrowForwardOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const MarathonCard = ({ marathon }) => {
    const { _id, image, title, location, startRegDate, endRegDate, createdAt } = marathon || {};

    return (
        <div className=" rounded overflow-hidden hover:shadow-2xl transform transition duration-300 group">
            {/* Image Section */}
            <div className="relative ">
                <img
                    className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110 ease-in-out"
                    src={image}
                    alt={title}
                />
                <div className="absolute bottom-0 w-full bg-gray-800 dark:bg-white bg-opacity-75 text-white dark:text-gray-800 py-3 text-center">
                    <h3 className="font-bold group-hover:text-[#fae102] group-hover:dark:text-yellow-500 transition duration-500">
                        {title}
                    </h3>
                    <p className="text-sm group-hover:text-[#fae102] group-hover:dark:text-yellow-500 transition duration-500">
                        {location}
                    </p>
                </div>
            </div>
            {/* Content Section */}
            <div className="p-3 text-center bg-white dark:bg-[#242424]">
                <div className="mt-4">
                    <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">
                        Registration:{" "}
                        <span className="text-gray-900 dark:text-white">
                            {new Date(startRegDate).toLocaleDateString()} -{" "}
                            {new Date(endRegDate).toLocaleDateString()}
                        </span>
                    </p>
                </div>
                <div>
                    <h1 className='text-sm font-medium text-yellow-600'><span className='text-gray-600 dark:text-gray-200'>Created At :</span> {createdAt.slice(0, 10)}</h1>
                </div>

                {/* Button Section */}
                <div className="mt-4">
                    <Link
                        to={`/marathons/${_id}`}
                        className="bg-[#f0d802] text-black py-2 px-6 rounded btn btn-sm border-none hover:bg-[#d3be01] transition duration-500 font-semibold hover:shadow-lg flex items-center gap-2"
                    >
                        See Details <IoArrowForwardOutline />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MarathonCard;
