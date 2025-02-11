import { Link } from 'react-router-dom';
import footer from '../../assets/footer.jpg';
import logo from '../../assets/logoo.png';
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${footer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="text-white relative"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="w-[90%] max-w-7xl mx-auto py-10 relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <div className="flex items-center gap-3">
            <img className="w-10 md:w-14" src={logo} alt="Milescape Logo" />
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold">MILE<span className='text-[#e0ce26] font-medium'>SCAPE</span></h2>
          </div>
          <p className="mt-4 text-sm md:text-base">
            Discover and track marathons worldwide. Join the journey towards a healthier lifestyle with our dedicated community.
          </p>
          <p className="mt-4 flex items-center text-sm md:text-base">
            <MdEmail className="mr-2 text-yellow-400" /> support@milescape.com
          </p>
          <p className="flex items-center text-sm md:text-base">
            <MdPhone className="mr-2 text-yellow-400" /> +1 234 567 890
          </p>
        </div>



        {/* Support */}
        <div className="md:flex md:justify-center">
          <div>
            <h3 className="text-lg md:text-xl font-bold">Our Services</h3>
            <ul className="mt-4 space-y-2 text-sm md:text-base">
            <li>
                <Link to={'/marathons'} className="hover:text-yellow-300">
                  Upcoming Marathons
                </Link>
              </li>
              <li>
                <Link to={'/faq'} className="hover:text-yellow-300">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to={'/aboutUs'} className="hover:text-yellow-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to={'/whyChooseUs'} className="hover:text-yellow-300">
                  Why Choose Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="text-lg md:text-xl font-bold">Subscribe Newsletter</h3>
          <p className="mt-4 text-sm md:text-base">
            Subscribe to get updates about upcoming events, news, and insights.
          </p>
          <form className="mt-6 flex flex-col lg:flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 mb-4 lg:mb-4 rounded-md text-black"
            />
            <button
              type="submit"
              className="bg-yellow-400 px-4 py-2 rounded-md text-black font-bold hover:bg-yellow-300"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 py-6 text-center relative z-10">
        <p className="text-sm md:text-base">&copy; 2024 Milescape, All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;