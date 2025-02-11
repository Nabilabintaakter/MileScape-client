import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { FaClipboardList, FaRunning, FaUsers, FaChartLine, FaRegCheckCircle, FaRegEdit } from "react-icons/fa";
import Header from "../../components/shared/Header";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
    useEffect(() => {
        document.title = "Why Choose Us | Milescape";
    }, []);

    return (
        <div className="w-full bg-[#fae10215] pb-10">
            <div className="pt-4 pb-8 px-8 text-center w-[90%] mx-auto max-w-7xl">
                <Fade direction="up" triggerOnce duration={1000}>
                    <div className='mt-3 mb-5 md:mt-5 md:mb-10'>
                        <Header title='Our Story!' subTitle='Why Choose Us' />
                    </div>
                </Fade>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                    {[
                        {
                            title: "Effortless Event Management",
                            description: "Easily create, manage, and track marathons with our intuitive tools.",
                            icon: <FaClipboardList className="text-blue-600 text-2xl" />
                        },
                        {
                            title: "Real-Time Performance Tracking",
                            description: "Monitor your stats, progress, and milestones with precision.",
                            icon: <FaRunning className="text-blue-600 text-2xl" />
                        },
                        {
                            title: "Diverse Marathon Selection",
                            description: "From fun runs to elite races, find the perfect event for you.",
                            icon: <FaUsers className="text-blue-600 text-2xl" />
                        },
                        {
                            title: "Community & Networking",
                            description: "Connect with like-minded runners, trainers, and event organizers.",
                            icon: <FaUsers className="text-blue-600 text-2xl" />
                        },
                        {
                            title: "Smart Analytics & Insights",
                            description: "Get detailed post-race reports to analyze and improve your performance.",
                            icon: <FaChartLine className="text-blue-600 text-2xl" />
                        },
                        {
                            title: "Seamless Registration Process",
                            description: "Sign up and participate in events effortlessly, without any hassle.",
                            icon: <FaRegEdit className="text-blue-600 text-2xl" />
                        }
                    ].map((feature, index) => (
                        <Fade key={index} triggerOnce delay={index * 200}>
                            <div className="bg-white p-6 rounded shadow-md hover:shadow-xl border-[1px] border-white hover:border-blue-800 transition-all duration-700 flex flex-col h-full hover:scale-105">
                                <div className="flex items-center space-x-3">
                                    {feature.icon}
                                    <h3 className="text-xl font-semibold text-blue-900">{feature.title}</h3>
                                </div>
                                <p className="text-gray-700 mt-3 flex-grow">{feature.description}</p>
                            </div>
                        </Fade>
                    ))}
                </div>

                {/* Call to Action */}
                <p className="text-lg mt-10 text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    Join <Link to="/marathons" className="text-blue-700 font-semibold hover:underline">
                        Milescape
                    </Link> today and take your marathon experience to the next level!
                </p>
            </div>
        </div>
    );
};

export default WhyChooseUs;
