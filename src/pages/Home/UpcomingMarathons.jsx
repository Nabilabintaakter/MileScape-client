import axios from 'axios';
import bg from '../../assets/upcoming.jpg';
import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import Header from '../../components/shared/Header';
import UpcomingCard from './upcomingCard';

const UpcomingMarathons = () => {
    const [marathons, setMarathons] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/upcomingMarathons')
            .then(data => {
                setMarathons(data.data);
            });
    }, []);
    return (
        <div style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }} className='w-full pt-16 md:pb-20 lg:pb-28'>
            <div className='w-[95%] md:w-[90%] mx-auto max-w-7xl rounded-md '>
                <Fade direction="up" triggerOnce duration={2000}>
                    <Header title='Upcoming Marathons' subTitle='Get Ready to Join the Race'></Header>
                </Fade>

                {/* Marathons Grid */}
                <div className='w-full grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 mt-10 md:mt-16'>
                    {
                        marathons.map((marathon, index) => (
                            <Fade 
                                key={marathon._id} 
                                direction="up" 
                                triggerOnce 
                                duration={1000} 
                                delay={index * 200}  
                            >
                                <UpcomingCard marathon={marathon}></UpcomingCard>
                            </Fade>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default UpcomingMarathons;