import Lottie from "lottie-react";
import registerLottieData from '../../assets/lottie/register.json'
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";


const Register = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { createUser, handleUpdateProfile,setUser ,setLoading} = useContext(AuthContext);
        useEffect(() => {
            document.title = 'Register |Milescape';
        }, [])

    const handleRegister = e => {
        setError('');
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const conPassword = form.conPassword.value;

        if (password.length < 6) {
            setError("Password must be at least 6 characters long!");
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError("Password must contain at least one lowercase letter!");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError("Password must contain at least one uppercase letter!");
            return;
        }
        
        if (password !== conPassword) {
            setError("password didn't match")
            return;
        }
        const newUser = { name, photo, email, password, conPassword };

        createUser(email, password)
            .then(res => {
                setUser(res.user);
                setLoading(false);
                // update profile
                handleUpdateProfile(name, photo)
                    .then((res) => {
                        setLoading(false);
                        Swal.fire({
                            icon: "success",
                            title: "Successfully Registered!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        setTimeout(() => {
                            navigate('/');
                        }, 2000);
                    })
                    .catch(err => {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: err.message.slice(10),
                            footer: 'Please verify your credentials',
                        });
                        setUser(null);
                    });
            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err.message.slice(10),
                    footer: 'Please verify your credentials',
                });
                setUser(null);
            })
    }
    return (
        <div className="hero min-h-screen w-[90%] mx-auto max-w-7xl">
            <div className="hero-content w-full flex-col lg:flex-row-reverse mt-0 mb-5 md:mb-8 lg:my-10">
                <div className="text-center lg:text-left w-60 md:w-96 lg:w-[700px] lg:flex-1">
                    <Lottie animationData={registerLottieData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-3xl shrink-0 shadow-2xl lg:flex-1">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-4xl font-bold mb-5 flex justify-center">Register now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name*" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" placeholder="photo url*" name="photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email*" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password*" name="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="conPassword*" name="conPassword" className="input input-bordered" required />
                        </div>
                        {
                            error && <p className="text-red-500">{error}</p>
                        }
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <label className="label flex justify-center">
                            <button href="#" className="label-text ">Already have an account? Please <Link to='/login' className="text-blue-600 ml-1 text-xl font-semibold hover:underline "> Login</Link></button>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;