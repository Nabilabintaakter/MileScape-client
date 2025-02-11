import Lottie from "lottie-react";
import loginLottieData from '../../assets/lottie/login.json'
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";

import { FcGoogle } from "react-icons/fc";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || '/';
    const emailRef = useRef();
    const { handleLogin, setUser, handleGoogleSignIn, setLoading } = useContext(AuthContext);

    useEffect(() => {
        document.title = 'Login |Milescape';
    }, [])

    const handleSubmit = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        handleLogin(email, password)
            .then(res => {
                setLoading(false);
                setUser(res.user);
                Swal.fire({
                    icon: "success",
                    title: "Successfully Logged in to your account!",
                    showConfirmButton: false,
                    timer: 3000
                });
                setTimeout(() => {
                    navigate(from)
                }, 3000)
            })
            .catch(err => {
                setLoading(false);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err.message.slice(10),
                    footer: 'Please verify that your email and password are entered correctly.',
                });

                setUser(null)
            })
    }

    const googleLoginHandler = () => {
        handleGoogleSignIn()
            .then(res => {
                setUser(res.user)
                Swal.fire({
                    icon: "success",
                    title: "Successfully Logged in to your account!",
                    showConfirmButton: false,
                    timer: 3000
                });
                setTimeout(() => {
                    navigate(from)
                }, 3000)

            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err.message.slice(10),
                    footer: 'Please verify that your email and password are entered correctly.',
                });
                setUser(null)
            })
    }
    return (
        <div className="hero min-h-screen w-[95%] md:w-[90%] mx-auto max-w-7xl">
            <div className="hero-content w-full flex-col lg:flex-row-reverse mt-0 mb-5 md:mb-8 lg:my-10">
                <div className="text-center lg:text-left w-60 md:w-96 lg:w-[700px] lg:flex-1">
                    <Lottie animationData={loginLottieData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-3xl shrink-0 shadow-2xl lg:flex-1 p-6">
                    <form onSubmit={handleSubmit} className="space-y-6 ">
                        <h1 className="text-4xl font-bold mb-5 flex justify-center">Login now!</h1>
                        <div className="form-control">
                            <label className="block text-lg font-semibold text-gray-800 mb-2">Email Address:</label>
                            <input
                                type="email"
                                name="email"
                                ref={emailRef}
                                placeholder="Enter your email"
                                className="input input-bordered w-full py-3 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                required
                            />
                        </div>
                        <div className="form-control relative">
                            <label className="block text-lg font-semibold text-gray-800 mb-2">Password:</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full py-3 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                required
                            />
                            {
                                showPassword ?
                                    <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute bg-white border-none right-4 top-[50px]'>
                                        <IoMdEyeOff className='text-lg' />
                                    </button>
                                    :
                                    <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute bg-white border-none right-4 top-[50px]'>
                                        <IoMdEye className='text-lg' />
                                    </button>
                            }
                        </div>
                        <div className="form-control mt-4">
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-md text-lg font-semibold border-[1px] border-blue-600 hover:text-blue-600 hover:border-blue-600 hover:bg-gradient-to-r hover:from-white hover:to-slate-50 duration-500 transition-all hover:font-bold "
                            >
                                Log In
                            </button>
                        </div>
                    </form>
                    <div className="divider text-gray-600">Or</div>
                    <div className="form-control">
                        <button
                            onClick={googleLoginHandler}
                            className="flex items-center justify-center gap-3 bg-red-500 text-white py-3 rounded-md text-lg font-semibold border-[1px] border-red-500 hover:bg-white hover:text-red-500 hover:border-red-500 hover:font-bold transition-all duration-500"
                        >
                            <FcGoogle className="text-2xl" />
                            Log in with Google
                        </button>
                    </div>
                    <p className="text-center mt-6 text-gray-600">
                        New to Milescape? Please
                        <NavLink
                            to="/register"
                            className="text-blue-600 ml-1 text-xl font-semibold hover:underline"
                        >
                            Register
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;