import React from 'react';
import Banner from './Banner';
import SixMarathons from './SixMarathons';

const Home = () => {
    return (
        <div className='w-full'>
            <Banner></Banner>
            <SixMarathons></SixMarathons>
        </div>
    );
};

export default Home;