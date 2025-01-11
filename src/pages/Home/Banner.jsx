import { useState, useEffect, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Track the active slide index
    const swiperRef = useRef(null);

    const slides = [
        {
            id: 1,
            image: "https://i.ibb.co/kgBbmVg/footer.jpg",
        },
        {
            id: 2,
            image: "https://i.ibb.co/HCVTT1b/tokyo-tokyo-marathon-event-239493.jpg",
        },
        {
            id: 3,
            image: "https://i.ibb.co/wg3TMpP/landscape-78058-1280.jpg",
        },
    ];

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.on("slideChange", () => {
                setActiveIndex(swiperRef.current.swiper.realIndex); // Update active slide index
            });
        }
    }, []);

    return (
        <div className="w-full">
            <Swiper
                ref={swiperRef}
                spaceBetween={30}
                effect={"fade"}
                navigation={false}
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
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative h-[400px] lg:h-[450px] flex items-center overflow-hidden">
                            {/* Background Image with Zoom-in Effect */}
                            <div
                                className={`absolute inset-0 transform transition-transform duration-[6000ms] ease-out ${
                                    activeIndex === index ? "scale-110" : "scale-100"
                                }`}
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>
                            <div className="flex justify-start flex-col w-[90%] mx-auto max-w-7xl relative z-10 text-white">
                                <div className="max-w-4xl">
                                    <Fade triggerOnce duration={1000} direction="left" delay={0}>
                                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 w-full md:w-[70%]">
                                            Empower Marathon Enthusiasts
                                        </h1>
                                    </Fade>
                                    <Fade triggerOnce direction="left" duration={1000} delay={200}>
                                        <div className="my-4 md:my-6 w-24 h-1 bg-[#fae102] rounded"></div>
                                    </Fade>
                                    <Fade triggerOnce direction="left" duration={1000} delay={400}>
                                        <p className="w-full md:w-[50%] text-base md:text-lg font-semibold mb-6">
                                            Connect with passionate runners, manage events
                                            effortlessly, and celebrate victories together.
                                        </p>
                                    </Fade>
                                    <Fade triggerOnce direction="left" duration={1000} delay={600}>
                                        <Link to='/marathons' className="px-6 py-2 bg-yellow-500 text-black text-sm md:text-base font-semibold rounded hover:bg-yellow-600 transition-all">
                                            Join Now
                                        </Link>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
