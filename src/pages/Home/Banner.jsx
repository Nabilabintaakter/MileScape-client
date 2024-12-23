import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="w-full">
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Navigation, Pagination, EffectFade]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <div
                        className="hero h-[400px] lg:h-[500px] font-sans"
                        style={{
                            backgroundImage: `url(https://i.ibb.co.com/hV3NfQD/11.webp)`,
                        }}>
                        <div className="hero-overlay bg-opacity-80"></div>
                        <Fade cascade damping={0.1} duration={2000}>
                            <div className="hero-content text-neutral-content text-center">
                                <div className="text-white">
                                    <h1 className=" w-full mb-5 text-3xl md:text-4xl font-bold max-w-5xl ">SUPPORT A SHARED WORKSPACE FOR STARTUPS</h1>
                                    <p className="mb-5 text-sm md:text-base font-sans max-w-3xl mx-auto">
                                        Help us build a dynamic and inclusive space designed to empower aspiring entrepreneurs. This is more than just a workplace—it's a hub for creativity, collaboration, and innovation, where individuals can share ideas, develop skills, and bring their visions to life.
                                    </p>
                                    <Link to='/' className="font-sans btn bg-[#FFA71D] border-none">Join the mission</Link>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div
                    className="hero h-[400px] lg:h-[500px] font-sans"
                    style={{
                        backgroundImage: `url(https://i.ibb.co.com/VDtRZb0/10.webp)`,
                    }}>
                    <div className="hero-overlay bg-opacity-80"></div>
                    <Fade>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="text-white">
                                <h1 className=" w-full mb-5 text-3xl md:text-4xl font-bold max-w-5xl">EMERGENCY FUNDS FOR FIRE VICTIMS</h1>
                                <p className="mb-5 text-sm md:text-base font-sans max-w-3xl mx-auto">
                                    Help families rebuild their lives after losing their homes in a devastating fire. Your generous contributions can provide them with the resources they need to recover, rebuild, and start anew. Every donation counts!
                                </p>
                                <Link to='/' className="font-sans btn bg-[#FFA71D] border-none">Support a Family</Link>
                            </div>
                        </div>
                    </Fade>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero h-[400px] lg:h-[500px] font-sans"
                        style={{
                            backgroundImage: `url(https://i.ibb.co.com/V9k0GJ6/5.webp)`,
                        }}>
                        <div className="hero-overlay bg-opacity-80"></div>
                        <Fade>
                            <div className="hero-content text-neutral-content text-center">
                                <div className="text-white">
                                    <h1 className=" w-full mb-5 text-3xl md:text-4xl font-bold max-w-5xl">GREEN SPACE FOR ALL</h1>
                                    <p className="text-sm md:text-base mb-5 font-sans max-w-3xl mx-auto">
                                        Join us in creating a community garden that promotes sustainable urban living. By supporting this initiative, you help provide a green space for residents to grow their own food, connect with nature, and foster a sense of community in our city.
                                    </p>
                                    <Link to='/' className="font-sans btn bg-[#FFA71D] border-none">Contribute Now</Link>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
export default Banner;
