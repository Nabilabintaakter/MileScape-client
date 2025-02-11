import { Link, useLoaderData } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaClock, FaRunning, FaInfoCircle } from 'react-icons/fa';
import Fade from "react-awesome-reveal";
import bg from '../../assets/upcoming.jpg';
import { useEffect } from 'react';
import CountdownTimer from '../../components/shared/CountdownTimer';

const Details = () => {
    const marathon = useLoaderData();
    useEffect(() => {
        document.title = `${marathon.title} | Milescape`;
    }, [])
    const {
        _id,
        image,
        title,
        location,
        startRegDate,
        endRegDate,
        marathonStartDate,
        description,
        distance,
        totalRegistrations,
    } = marathon;

    const isRegistrationOpen = new Date() >= new Date(startRegDate) && new Date() <= new Date(endRegDate);
    console.log(startRegDate);
    return (
        <div className="flex justify-center items-center py-8 md:py-10" style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <Fade triggerOnce>
                <div className="bg-white rounded shadow-lg overflow-hidden w-[90%] mx-auto md:max-w-7xl transition transform hover:scale-102 hover:shadow-xl duration-300 ease-in-out ">
                    <div className="md:flex">
                        <div className="md:w-1/2 relative">
                            <img src={image} alt={title} className="w-full h-[250px] md:h-full object-cover" />
                            {/* Countdown Timer Section */}
                            <Fade triggerOnce delay={750} direction="up">
                                <div className="absolute bottom-[1px] left-[1px] text-white p-4 rounded shadow-lg w-full">
                                    <CountdownTimer marathonStartDate={marathonStartDate} />
                                </div>
                            </Fade>

                        </div>
                        <div className="md:w-1/2 p-4 bg-yellow-50">
                            <Fade triggerOnce delay={100} direction="down">
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 tracking-wide">{title}</h2>
                            </Fade>
                            <div className="space-y-4 mb-6">
                                <Fade triggerOnce delay={200} direction="down">
                                    <div className="flex items-start text-lg text-gray-800">
                                        <FaInfoCircle className="mr-3 mt-1 text-xl" style={{ color: '#00bcd4' }} />
                                        <div className="prose lg:prose-lg">
                                            <p className="">{description}</p>
                                        </div>
                                    </div>
                                </Fade>
                                <Fade triggerOnce delay={300} direction="left">
                                    <div className="flex items-center text-lg text-gray-800">
                                        <FaMapMarkerAlt className="mr-3 text-xl" style={{ color: '#f44336' }} /> <span className="font-medium mr-1">Location:</span> {location}
                                    </div>
                                </Fade>
                                <Fade triggerOnce delay={400} direction="right">
                                    <div className="flex items-center text-lg text-gray-800">
                                        <FaCalendarAlt className="mr-3 text-xl" style={{ color: '#2196f3' }} /> <span className="font-medium mr-1">Marathon Date:</span>
                                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(new Date(marathonStartDate))}
                                    </div>
                                </Fade>
                                <Fade triggerOnce delay={500} direction="up">
                                    <div className="flex items-center text-lg text-gray-800">
                                        <FaClock className="mr-3 text-xl" style={{ color: '#ff9800' }} /> <span className="font-medium mr-1">Registration:</span>
                                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(new Date(startRegDate))} - {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(new Date(endRegDate))}
                                    </div>
                                </Fade>
                                <Fade triggerOnce delay={600} direction="right">
                                    <div className="flex items-center text-lg text-gray-800">
                                        <FaRunning className="mr-3 text-xl" style={{ color: '#4caf50' }} /> <span className="font-medium mr-1">Distance:</span> {distance}
                                    </div>
                                </Fade>
                                <Fade triggerOnce delay={700} direction="up">
                                    <div className="flex items-center text-lg text-gray-800">
                                        <FaUsers className="mr-3 text-xl" style={{ color: '#9c27b0' }} /> <span className="font-medium mr-1">Total Registrations:</span> {totalRegistrations}
                                    </div>
                                </Fade>

                            </div>
                            <Fade triggerOnce delay={800} direction="down">
                                <Link to={`/registration/${_id}`}
                                    className={`bg-blue-600 text-white hover:bg-gray-100 hover:text-blue-800 hover:border-2 hover:border-blue-800 border-2 border-blue-600 btn rounded text-lg w-full md:w-auto transition duration-500 ${isRegistrationOpen ? '' : 'opacity-50 cursor-not-allowed'}`}
                                    disabled={!isRegistrationOpen}
                                >
                                    {isRegistrationOpen ? 'Register Now' : 'Registration Closed'}
                                </Link>
                            </Fade>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Details;
