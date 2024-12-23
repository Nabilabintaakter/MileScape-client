import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../../components/shared/Header';
import MarathonCard from './MarathonCard';

const Marathons = () => {
    const marathons = useLoaderData();
    return (
        <div className='w-[95%] md:w-[90%] mx-auto max-w-7xl mb-5 md:mb-10'>
            <div className='mt-3 mb-5 md:mt-5 md:mb-10 lg:mb-14'>
                <Header title='Your Ultimate 2025 Marathon Guide!' subTitle='Find your perfect challenge'></Header>
            </div>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        marathons.map(marathon=> <MarathonCard key={marathon._id} marathon={marathon}></MarathonCard>)
                    }
                </div>
        </div>
    );
};

export default Marathons;