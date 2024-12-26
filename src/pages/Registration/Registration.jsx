import { useContext, useEffect } from 'react';
import bg from '../../assets/upcoming.jpg';
import { useLoaderData, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const Registration = () => {
    const marathon = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        document.title = 'Registration form | MileScape';
    }, [])
    const {
        _id,
        title,
        marathonStartDate,
        location,
        distance,
    } = marathon;

    const formattedDate = new Date(marathonStartDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const handleRegistration = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(e.target);
        const registrationData = {
            marathonId: _id,
            location,
            distance,
            marathonTitle: formData.get('marathonTitle'),  // Get title
            marathonStartDate: marathonStartDate,  // Use formatted date for marathon start
            email: user?.email,  // Email from the logged-in user
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            phone: formData.get('phone'),
            additionalInfo: formData.get('additionalInfo'),

        };

        axios.post('http://localhost:5000/marathon-registrations', registrationData)
            .then(data => {
                if (data.data.insertedId) {
                    form.reset();
                    Swal.fire({
                        icon: "success",
                        title: "Registration Successful!",
                        text: "You have been successfully registered for the marathon.",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    setTimeout(() => {
                        navigate('/dashboard/myApplyList')
                    }, 3000)
                };
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: error.response.data,
                    icon: "error",
                    draggable: true
                });
            });
    };

    return (
        <div
            className="flex justify-center items-center py-5 md:py-10"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <form
                onSubmit={handleRegistration}
                className="w-[95%] mx-auto md:max-w-4xl bg-white shadow-lg p-8 rounded-md"
            >
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                    COMPLETE YOUR RACE <span className="text-yellow-500">REGISTRATION FORM</span>
                </h2>
                <p className="text-center text-gray-600 mb-6">
                    Fill out the form below to secure your spot in the marathon.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            placeholder="first name*"
                            name="firstName"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            placeholder="last name*"
                            name="lastName"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="email*"
                            name="email"
                            value={user?.email}
                            readOnly
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            type="number"
                            placeholder="phone*"
                            name="phone"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Marathon Title</label>
                        <input
                            type="text"
                            name="marathonTitle"
                            value={title}
                            readOnly
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Start Date</label>
                        <input
                            type="text"
                            name="startDate"
                            value={formattedDate}
                            readOnly
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                        />
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Additional Info (Optional)</label>
                        <textarea
                            placeholder="Write any additional notes here..."
                            name="additionalInfo"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                        ></textarea>
                    </div>
                </div>
                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full btn bg-yellow-500 text-white font-medium rounded-md shadow hover:bg-yellow-50 border-yellow-500 hover:text-yellow-600 hover:border-2 transition-all duration-300 hover:border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                    >
                        REGISTER NOW!
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Registration;
