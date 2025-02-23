import React from "react";
import { FaAward, FaUserCheck, FaUsers } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaAward className="text-5xl text-yellow-400 dark:text-yellow-500" />,
      title: "Best Running Club",
      description:
        "Join a top-rated running club that hosts exciting and professional marathon events regularly.",
    },
    {
      icon: <FaUserCheck className="text-5xl text-yellow-400 dark:text-yellow-500" />,
      title: "Certified Instructors",
      description:
        "Our certified instructors are here to guide and motivate you to reach your fitness goals easily.",
    },
    {
      icon: <FaUsers className="text-5xl text-yellow-400 dark:text-yellow-500" />,
      title: "1000+ Active Members",
      description:
        "Be part of a growing network of active runners and fitness lovers from around the world.",
    },
  ];
  const isMobile = window.innerWidth < 768;

  return (
    <div className="bg-[#202020] dark:bg-white py-8 md:py-10">
      <div className="w-[90%] max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {features.map((feature, index) => (
          <Fade
            key={index}
            direction="up"
            duration={1500}
            delay={isMobile ? index * 410 : index * 400}
            triggerOnce
          >
            <div className="bg-[#202020] dark:bg-white p-6 h-[170px] sm:h-[160px] lg:h-[200px] xl:h-[150px] rounded shadow-2xl dark:shadow-md flex border-[1px] border-[#202020] dark:border-white hover:border-yellow-400 hover:dark:border-yellow-500 hover:bg-yellow-400 hover:dark:bg-yellow-400 hover:bg-opacity-5 hover:dark:bg-opacity-10 hover:shadow-lg hover:shadow-yellow-400/5 transition-all duration-700">
              {/* Icon Section */}
              <div className="mr-4">{feature.icon}</div>
              {/* Text Section */}
              <div>
                <h3 className="text-yellow-400 dark:text-yellow-500 font-bold text-xl mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 dark:text-gray-700 font-medium text-sm">{feature.description}</p>
              </div>
            </div>

          </Fade>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
