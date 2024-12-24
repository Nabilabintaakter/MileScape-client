import bg from '../../assets/upcoming.jpg';
import { useLoaderData } from 'react-router-dom';

const Registration = () => {
      const marathon = useLoaderData();

  
      const {
          _id,
          image,
          title,
          location,
          startRegDate,
          endRegDate,
          marathonStartDate,
          description,
          distance,
          totalRegistrations,
      } = marathon;  
    return (
        <div className="flex justify-center items-center py-5 md:py-10" style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>
            <h1 className='text-3xl text-red-700'>this is the registration form of {title}</h1>
        </div>
    );
};

export default Registration;