import React, { useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';

const WhyChooseUs = () => {
    useEffect(() => {
        document.title = `Why Choose Us | Milescape`;
    }, [])
    return (
        <div className='w-[95%] md:w-[90%] mx-auto max-w-7xl mb-5 md:mb-10'>
            <Fade direction="up" triggerOnce duration={2000}>
                <div className=" text-center bg-gradient-to-r from-blue-100 to-blue-200 pt-5 pb-12 px-6 rounded shadow-lg">
                    <h2 className="text-2xl md:text-4xl font-bold text-blue-700 mb-6">Why Choose Milescape?</h2>
                    <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
                        Milescape is more than just a marathon platform—it's a movement designed to bring people together through fitness and wellness. Whether you're a runner looking to track your progress or an event organizer managing marathons, we offer a range of tools and resources that elevate your marathon experience.
                        <br />
                        <span className="font-semibold text-xl mt-6">Here’s why you should choose Milescape:</span>
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <ul className="text-left space-y-6">
                            <li className="flex items-start space-x-3">
                                <span className="text-2xl text-blue-600">✔️</span>
                                <p className="text-lg font-medium text-gray-800">
                                    <span className="font-semibold">Seamless Event Management:</span> Organizers can easily set up, track, and manage marathon events.
                                </p>
                            </li>
                            <li className="flex items-start space-x-3">
                                <span className="text-2xl text-blue-600">✔️</span>
                                <p className="text-lg font-medium text-gray-800">
                                    <span className="font-semibold">Wide Selection of Events:</span> Discover a variety of marathon events, from casual runs to elite competitions.
                                </p>
                            </li>
                        </ul>

                        <ul className="text-left space-y-6">
                            <li className="flex items-start space-x-3">
                                <span className="text-2xl text-blue-600">✔️</span>
                                <p className="text-lg font-medium text-gray-800">
                                    <span className="font-semibold">Real-time Tracking:</span> Track your progress in real-time with personalized dashboards.
                                </p>
                            </li>
                            <li className="flex items-start space-x-3">
                                <span className="text-2xl text-blue-600">✔️</span>
                                <p className="text-lg font-medium text-gray-800">
                                    <span className="font-semibold">Community Engagement:</span> Join a growing network of passionate runners and wellness advocates.
                                </p>
                            </li>
                            <li className="flex items-start space-x-3">
                                <span className="text-2xl text-blue-600">✔️</span>
                                <p className="text-lg font-medium text-gray-800">
                                    <span className="font-semibold">Post-Event Analysis:</span> Get detailed insights into your performance, including comparisons with past results.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <p className="text-lg mt-8 text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Whether you're a first-time marathoner or a seasoned runner, Milescape is your partner in achieving your fitness goals and making your marathon experience unforgettable. Join us today!
                    </p>
                </div>
            </Fade>
        </div>
    );
};

export default WhyChooseUs;