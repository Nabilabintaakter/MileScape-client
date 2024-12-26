import React, { useEffect, useState } from 'react';
import { Fade } from "react-awesome-reveal";
import Header from '../../components/shared/Header';
import MarathonCard from './MarathonCard';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Marathons = () => {
    const axiosSecure = useAxiosSecure();
    const [marathons, setMarathons] = useState([]);
    const [sort, setSort] = useState('');

    useEffect(() => {
        axiosSecure.get(`/allMarathons?sort=${sort}`)
            .then(data => {
                setMarathons(data.data);
            })
        document.title = 'Marathons | MileScape';
    }, [sort]);

    return (
        <div className='w-[95%] md:w-[90%] mx-auto max-w-7xl mb-5 md:mb-10'>
            <Fade direction="up" triggerOnce duration={2000}>
                <div className='mt-3 mb-5 md:mt-5 md:mb-10 lg:mb-14'>
                    <Header title='Your Ultimate 2025 Marathon Guide!' subTitle='Find your perfect challenge'></Header>
                </div>
            </Fade>
            <div className="flex flex-row flex-wrap justify-end items-center gap-5 -mt-4 lg:-mt-12 mb-3">

                {/* Sort by Created At */}
                <div>
                    <select
                        name="sort"
                        id="sort"
                        className=" border p-2 md:p-4 rounded-md bg-gradient-to-br from-pink-400 to-purple-400"
                        onChange={(e) => setSort(e.target.value)}
                    >
                        <option value="">Sort By Created At</option>
                        <option value="asc">Ascending Order</option>
                        <option value="dsc">Descending Order</option>
                    </select>
                </div>
            </div>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    marathons.map((marathon, index) => (
                        <Fade
                            key={marathon._id}
                            triggerOnce
                            duration={1000}
                            delay={index * 50}  // Dynamic delay for each card
                        >
                            <MarathonCard marathon={marathon} />
                        </Fade>
                    ))
                }
            </div>
        </div>
    );
};

export default Marathons;
