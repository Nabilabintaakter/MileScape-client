import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Fade } from "react-awesome-reveal";

const testimonials = [
    {
        id: 1,
        text: "The Marathon Management System has made tracking my training progress seamless. I can easily register for events and monitor my race times. It’s the perfect platform for any runner looking to manage their journey from start to finish.",
        name: "Jessica Jane",
        role: "Runner",
        image: "https://i.ibb.co.com/j6t83bZ/review-1.jpg",
    },
    {
        id: 2,
        text: "As a coach, I’ve found the Marathon Management System invaluable for organizing training schedules and race strategies for my team. The ease of communication and tracking race results has greatly enhanced our performance.",
        name: "John Doe",
        role: "Coach",
        image: "https://i.ibb.co.com/7gqZN3K/review-3.jpg",
    },
    {
        id: 3,
        text: "The platform is incredibly user-friendly. It allows me to register for multiple events and access all race details in one place. The best part is the real-time race tracking that keeps me motivated during competitions.",
        name: "Emily Clark",
        role: "Marathoner",
        image: "https://i.ibb.co.com/n7pRrm0/review-5.jpg",
    },
    {
        id: 4,
        text: "Managing events for large groups of runners is now so much easier. The Marathon Management System helps us streamline registrations, track participants' progress, and manage results efficiently. It’s an essential tool for event organizers.",
        name: "Michael Brown",
        role: "Event Organizer",
        image: "https://i.ibb.co.com/DQ2t8mx/360-F-224869519-a-Rae-Lneq-ALf-PNBzg0xx-MZXghtv-BXkf-IA.jpg",
    },
    {
        id: 5,
        text: "As an entrepreneur in the sports industry, I rely on the Marathon Management System for managing event logistics and participant engagement. It’s been a game-changer for scaling up our events and ensuring a smooth experience for everyone involved.",
        name: "Sarah Lee",
        role: "Event Organizer",
        image: "https://i.ibb.co.com/jw0c0Zt/360-F-298288984-8i0-PB7s9a-WPzi1-Leu-NGGrnj-Xkm-XRpc-Zn.jpg",
    },
];


const Testimonial = () => {
    return (
        <div className="bg-[#1a1a1a] dark:bg-white text-white dark:text-[#1a1a1a]  py-12 lg:py-20 pb-8 md:pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-[90%] mx-auto max-w-7xl">
                {/* Left Section */}
                <Fade direction="left" triggerOnce>
                    <div>
                        <p className="uppercase text-sm font-semibold mb-2">Testimonials</p>
                        <h2 className="text-2xl lg:text-4xl font-bold mt-2 md:mt-4">
                            Our Members Satisfaction
                        </h2>
                        <div className="w-16 h-1 bg-yellow-400 mt-4 lg:mt-8 mb-4 md:mb-6"></div>
                        <Fade direction="left" triggerOnce>
                        <p className="text-gray-400 w-full md:w-[70%]">
                            Discover how our Marathon Management System has transformed the way runners, coaches, and event organizers interact with our platform. Read firsthand experiences from our satisfied users!
                        </p>
                        </Fade>
                    </div>
                </Fade>

                {/* Right Section */}
                <div>
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 2500 }}
                        loop={true}
                        slidesPerView={1}
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="flex flex-col items-start space-y-4 lg:space-y-8">
                                    <p className="text-gray-100 dark:text-gray-600 opacity-70 lg:text-xl font-semibold italic">"{testimonial.text}"</p>
                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex items-center gap-4">
                                            <img
                                                className="w-12 h-12 lg:w-[72px] lg:h-[72px] rounded-full object-cover"
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                            />
                                            <div>
                                                <p className="font-bold text-lg">{testimonial.name}</p>
                                                <p className="text-gray-400 md:text-lg ">{testimonial.role}</p>
                                            </div>
                                        </div>
                                        <FaQuoteLeft className="text-4xl lg:text-6xl text-yellow-400" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
