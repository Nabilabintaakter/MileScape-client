import React from 'react';
import Banner from './Banner';
import SixMarathons from './SixMarathons';
import FeaturesSection from './FeaturesSection';
import UpcomingMarathons from './UpcomingMarathons';

const Home = () => {
    return (
        <div className='w-full'>
            <Banner></Banner>
            <FeaturesSection></FeaturesSection>
            <SixMarathons></SixMarathons>
            <UpcomingMarathons></UpcomingMarathons>
        </div>
    );
};

export default Home;