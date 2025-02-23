import axios from 'axios';
import bg from '../../assets/upcoming.jpg';
import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import Header from '../../components/shared/Header';
import UpcomingCard from './UpcomingCard';

const UpcomingMarathons = () => {
    const [marathons, setMarathons] = useState([]);

    useEffect(() => {
        axios.get('https://b10-a11-milescape-server.vercel.app/upcomingMarathons')
            .then(data => {
                setMarathons(data.data);
            });
    }, []);

    return (
        <div
            className="w-full pt-16 md:pb-20 transition-all duration-300 bg-cover bg-center bg-no-repeat dark:bg-gray-900"
            style={{
                backgroundImage: `url(${bg})`,
            }}
        >
            <div className="w-[90%] mx-auto max-w-7xl">
                <Fade direction="up" triggerOnce duration={2000}>
                    <Header title="Upcoming Marathons" subTitle="Get Ready to Join the Race" />
                </Fade>

                {/* Marathons Grid */}
                <div className="w-full mx-auto max-w-7xl grid grid-cols-1 gap-4 mt-10 pb-16 md:pb-0 px-0">
                    {marathons.map((marathon, index) => (
                        <Fade 
                            key={marathon._id} 
                            direction="up" 
                            triggerOnce 
                            duration={1000} 
                            delay={index * 200}  
                        >
                            <UpcomingCard marathon={marathon} />
                        </Fade>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UpcomingMarathons;
