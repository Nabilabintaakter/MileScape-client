import React from 'react';
import Banner from './Banner';
import SixMarathons from './SixMarathons';
import FeaturesSection from './FeaturesSection';

const Home = () => {
    return (
        <div className='w-full'>
            <Banner></Banner>
            <FeaturesSection></FeaturesSection>
            <SixMarathons></SixMarathons>
        </div>
    );
};

export default Home;