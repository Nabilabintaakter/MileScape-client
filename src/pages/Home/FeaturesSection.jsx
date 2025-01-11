import React from "react";
import { FaAward, FaUserCheck, FaUsers } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaAward className="text-5xl text-yellow-400" />,
      title: "Best Running Club",
      description:
        "Join a top-rated running club that hosts exciting and professional marathon events regularly.",
    },
    {
      icon: <FaUserCheck className="text-5xl text-yellow-400" />,
      title: "Certified Instructors",
      description:
        "Our certified instructors are here to guide and motivate you to reach your fitness goals easily.",
    },
    {
      icon: <FaUsers className="text-5xl text-yellow-400" />,
      title: "1000+ Active Members",
      description:
        "Be part of a growing network of active runners and fitness lovers from around the world.",
    },
  ];

  // Check screen width for conditional animation
  const isMobile = window.innerWidth < 768;

  return (
    <div className="bg-[#202020] py-8 md:py-10">
      <div className="w-[95%] md:w-[90%] max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"> 
        {features.map((feature, index) => (
          <Fade
            key={index}
            direction="up"
            duration={1500}
            delay={isMobile ? index * 450 : index * 400}
            triggerOnce
          >
            <div className="bg-[#202020] p-6 rounded-lg shadow-lg flex">
              {/* Icon Section */}
              <div className="mr-4">{feature.icon}</div>
              {/* Text Section */}
              <div>
                <h3 className="text-yellow-400 font-bold text-xl md:text-2xl mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 font-medium">{feature.description}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
