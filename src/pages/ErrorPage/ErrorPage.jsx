import { Link } from "react-router-dom";
import bg from '../../assets/err2.png'


const ErrorPage = () => {
    return (
        <div className='w-full '>
            <div className='w-full flex justify-center items-center'>

                <div className="relative min-h-screen rounded-[5px] flex justify-center items-center">
                    <img src={bg} alt="" />
                    <Link to='/' className='absolute bottom-24 md:bottom-1 btn btn-sm  w-fit mx-auto shadow-none bg-yellow-500 border-none my-8 md:my-13'>Back to Home
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;