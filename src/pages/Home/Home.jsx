import React, { useEffect } from 'react';
import Banner from './Banner';
import SixMarathons from './SixMarathons';
import FeaturesSection from './FeaturesSection';
import UpcomingMarathons from './UpcomingMarathons';
import Testimonial from './Testimonial';
import FAQ from '../FAQ/FAQ';

const Home = () => {

    useEffect(() => {
        document.title = 'Home | MileScape';
    }, [])
    return (
        <div className='w-full'>
            <Banner></Banner>
            <FeaturesSection></FeaturesSection>
            <SixMarathons></SixMarathons>
            <UpcomingMarathons></UpcomingMarathons>
            <Testimonial></Testimonial>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;