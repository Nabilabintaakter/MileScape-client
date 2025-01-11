import React from "react";
import { Fade } from "react-awesome-reveal";

const CountdownTimer = ({ marathonStartDate }) => {
  const targetDate = new Date(marathonStartDate); // Convert the marathon start date to a Date object

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const remainingTime = Math.max((targetDate.getTime() - now) / 1000, 0); // Calculate remaining time in seconds
    const days = Math.floor(remainingTime / (3600 * 24));
    const hours = Math.floor((remainingTime % (3600 * 24)) / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = Math.floor(remainingTime % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  // Update the timer every second
  React.useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerInterval); // Cleanup interval on component unmount
  }, []);

  return (
    <Fade triggerOnce delay={300}>
      <div className="relative flex flex-col justify-center items-center mt-10 bg-white/20 backdrop-blur-md z-50 rounded-lg shadow-lg p-6 w-full max-w-xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-white to-blue-200 rounded-lg opacity-90"></div>
        <div className="text-center text-blue-800 text-2xl md:text-3xl font-semibold mb-4 z-10">
        The Race Begins In...
        </div>
        <div className="flex justify-center space-x-6 text-gray-900 text-4xl font-bold z-10">
          <div className="text-center">
            <div className="text-yellow-500">{timeLeft.days}</div>
            <div className="text-sm font-medium text-gray-900">Days</div>
          </div>
          <div className="text-center">
            <div className="text-yellow-500">{timeLeft.hours}</div>
            <div className="text-sm font-medium text-gray-900">Hours</div>
          </div>
          <div className="text-center">
            <div className="text-yellow-500">{timeLeft.minutes}</div>
            <div className="text-sm font-medium text-gray-900">Minutes</div>
          </div>
          <div className="text-center">
            <div className="text-yellow-500">{timeLeft.seconds}</div>
            <div className="text-sm font-medium text-gray-900">Seconds</div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default CountdownTimer;
