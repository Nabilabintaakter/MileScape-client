import { Link } from 'react-router-dom';

const MarathonCard = ({ marathon }) => {
    const { _id, image, title, location, startRegDate, endRegDate ,createdAt} = marathon || {};

    return (
        <div className=" rounded overflow-hidden shadow-lg bg-white transform transition duration-300 group">
            {/* Image Section */}
            <div className="relative ">
                <img
                    className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110 ease-in-out"
                    src={image}
                    alt={title}
                />
                <div className="absolute bottom-0 w-full bg-gray-800 bg-opacity-75 text-white py-3 text-center">
                    <h3 className="font-bold group-hover:text-[#fae102] transition duration-500">
                        {title}
                    </h3>
                    <p className="text-sm group-hover:text-[#fae102] transition duration-500">
                        {location}
                    </p>
                </div>
            </div>
            {/* Content Section */}
            <div className="p-3 text-center">
                <div className="mt-4">
                    <p className="text-sm text-gray-700 font-medium">
                        Registration:{" "}
                        <span className="text-gray-900">
                            {new Date(startRegDate).toLocaleDateString()} -{" "}
                            {new Date(endRegDate).toLocaleDateString()}
                        </span>
                    </p>
                </div>
                <div>
                    <h1 className='text-sm font-medium text-yellow-600'><span className='text-gray-600'>Created At :</span> {createdAt.slice(0,10)}</h1>
                </div>
                
                {/* Button Section */}
                <div className="mt-4">
                    <Link to={`/marathons/${_id}`} className="bg-[#f0d802] text-white py-2 px-6 rounded btn btn-sm border-none hover:bg-[#d3be01] transition duration-500 font-semibold  hover:shadow-lg">
                        See Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MarathonCard;
