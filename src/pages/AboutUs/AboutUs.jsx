import React, { useEffect } from "react";
import { FaRunning, FaUsers, FaChartLine } from "react-icons/fa";
import { Fade } from "react-awesome-reveal"; // Removed Slide for immediate appearance
import Header from "../../components/shared/Header";

const AboutUs = () => {
    useEffect(() => {
        document.title = `About Us | Milescape`;
    }, [])
    return (
        <div className="bg-gray-100 text-gray-800 px-8 pb-8 md:px-16 md:pb-16 pt-6">
            <div className="w-[95%] md:w-[90%] mx-auto max-w-7xl mb-5 md:mb-10">
                <Fade direction="up" triggerOnce duration={2000}>
                    <div className='mt-3 mb-5 md:mt-5 md:mb-8'>
                        <Header title='Who we are' subTitle='About Us'></Header>
                    </div>
                </Fade>
                <Fade triggerOnce direction="up">
                    <p className="text-center text-lg leading-relaxed mb-8">
                        Welcome to <span className="font-bold text-blue-600 ">Milescape</span>,
                        your ultimate platform for organizing and participating in marathon
                        events. Whether you're an event organizer looking to streamline
                        your processes or a participant eager to join inspiring marathons,
                        Milescape connects you with the tools and community you need.
                    </p>
                </Fade>

                <div className="grid md:grid-cols-3 gap-8">
                    <Fade direction="up" triggerOnce duration={1500}>
                        <div className="bg-blue-100 shadow-md rounded p-6 text-center">
                            <FaRunning className="text-6xl text-blue-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
                            <p>
                                To inspire fitness and community engagement through
                                well-organized marathon events.
                            </p>
                        </div>
                    </Fade>

                    <Fade direction="up" triggerOnce duration={1500}>
                        <div className="bg-green-100 shadow-md rounded p-6 text-center">
                            <FaUsers className="text-6xl text-green-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-semibold mb-2">Our Community</h3>
                            <p>
                                Join a growing community of runners and event organizers
                                dedicated to promoting health and well-being.
                            </p>
                        </div>
                    </Fade>

                    <Fade direction="up" triggerOnce duration={1500}>
                        <div className="bg-purple-100 shadow-md rounded p-6 text-center">
                            <FaChartLine className="text-6xl text-purple-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
                            <p>
                                To become the go-to platform for marathon management and
                                participation worldwide.
                            </p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
