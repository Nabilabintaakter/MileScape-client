import { useEffect, useState } from "react";
import MarathonCard from "../Marathons/MarathonCard";
import axios from "axios";
import { Fade } from "react-awesome-reveal"; // Import animation components

const SixMarathons = () => {
    const [marathons, setMarathons] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/marathons')
            .then(data => {
                setMarathons(data.data);
            });
    }, []);

    return (
        <div style={{
            backgroundImage: `url(https://i.ibb.co.com/XXJT5SN/sports-210661-1280.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }} className='w-full py-16 md:py-20 lg:py-28'>
            <div className='w-[95%] md:w-[90%] mx-auto max-w-7xl bg-white/60 p-6 md:p-8 lg:p-16 rounded-md backdrop-blur-sm'>
                <Fade direction="left" triggerOnce duration={2000}>
                    <div className="mb-8 lg:mb-10">
                        {/* Section Title */}
                        <h3 className="font-semibold text-gray-600 uppercase">
                            Featured Marathons
                        </h3>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 md:mt-4">
                            Discover, Register & Participate
                        </h1>
                        {/* Underline */}
                        <div className="mt-4 lg:mt-8 w-24 h-1 bg-[#fae102] rounded"></div>
                    </div>
                </Fade>

                {/* Marathons Grid */}
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                    {
                        marathons.map((marathon, index) => (
                            <Fade 
                                key={marathon._id} 
                                direction="up" 
                                triggerOnce 
                                duration={1000} 
                                delay={index * 200}  // Dynamic delay for each card
                            >
                                <MarathonCard marathon={marathon} />
                            </Fade>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default SixMarathons;
