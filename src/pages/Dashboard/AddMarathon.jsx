import React, { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Header from '../../components/shared/Header';
import AuthContext from '../../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { Fade } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import LoadingSpinner from '../../components/shared/LoadingSpinner';

const AddMarathon = () => {
    const axiosSecure = useAxiosSecure();
    const [startRegDate, setStartRegDate] = useState(null);
    const [endRegDate, setEndRegDate] = useState(null);
    const [marathonStartDate, setMarathonStartDate] = useState(null);
    const { user, loading, setLoading } = useContext(AuthContext)
    const navigate = useNavigate();
    useEffect(() => {
        document.title = 'Add New Marathon | MileScape';
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(e.target);
        const newMarathon = {
            title: formData.get('title'),
            startRegDate,
            endRegDate,
            marathonStartDate,
            location: formData.get('location'),
            distance: formData.get('distance'),
            description: formData.get('description'),
            image: formData.get('image'),
            createdAt: new Date(),
            organizer_email: user?.email,
            totalRegistrations: 0
        };
        console.log(newMarathon);


        axiosSecure.post('/marathons', newMarathon)
            .then(data => {
                if (data.data.insertedId) {
                    setLoading(false);
                    Swal.fire({
                        icon: "success",
                        title: "Marathon created successfully!",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    form.reset();
                    setTimeout(() => {
                        navigate('/dashboard/myMarathonList')
                    }, 2000)
                };
            })
    };
    if (loading) return <LoadingSpinner></LoadingSpinner>
    return (
        <div className="w-full  mx-auto  mt-2 ">
            <Fade direction="up" triggerOnce duration={2000}>
                <Header title='Create and Manage Marathon Events' subTitle='Add New Marathon'></Header>
            </Fade>
            <Fade triggerOnce delay='10'>
                <form onSubmit={handleSubmit} className="bg-blue-50 shadow-md rounded-lg p-6 md:p-4 lg:p-8 space-y-6">
                    {/* Marathon Title */}
                    <div>
                        <label className="block text-lg font-semibold text-gray-800 mb-2">Marathon Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter marathon title"
                            className="input input-bordered w-full text-base p-3"
                            required
                        />
                    </div>

                    {/* Registration Dates */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="w-full">
                            <label className="block text-lg font-semibold text-gray-800 mb-2">Start Registration Date</label>
                            <DatePicker
                                selected={startRegDate}
                                onChange={(date) => setStartRegDate(date)}
                                className="input input-bordered w-full text-base p-3"
                                placeholderText="Select start date"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label className="block text-lg font-semibold text-gray-800 mb-2">End Registration Date</label>
                            <DatePicker
                                selected={endRegDate}
                                onChange={(date) => setEndRegDate(date)}
                                className="input input-bordered w-full text-base p-3"
                                placeholderText="Select end date"
                                required
                            />
                        </div>
                    </div>

                    {/* Marathon Start Date */}
                    <div className="w-full">
                        <label className="block text-lg font-semibold text-gray-800 mb-2">Marathon Start Date</label>
                        <DatePicker
                            selected={marathonStartDate}
                            onChange={(date) => setMarathonStartDate(date)}
                            className="input input-bordered w-full text-base p-3"
                            placeholderText="Select marathon start date"
                            required
                        />
                    </div>



                    {/* Location */}
                    <div>
                        <label className="block text-lg font-semibold text-gray-800 mb-2">Location</label>
                        <input
                            type="text"
                            name="location"
                            placeholder="Enter location"
                            className="input input-bordered w-full text-base p-3"
                            required
                        />
                    </div>

                    {/* Running Distance */}
                    <div>
                        <label className="block text-lg font-semibold text-gray-800 mb-2">Running Distance</label>
                        <select
                            name="distance"
                            className="select select-bordered w-full text-base p-3"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>
                                Select distance
                            </option>
                            <option value="25k">25k</option>
                            <option value="10k">10k</option>
                            <option value="3k">3k</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-lg font-semibold text-gray-800 mb-2">Description</label>
                        <textarea
                            name="description"
                            placeholder="Enter description"
                            className="textarea textarea-bordered w-full text-base p-3"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    {/* Marathon Image */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Marathon Image</label>
                        <input
                            type="url"
                            name="image"
                            placeholder="Enter marathon image URL"
                            className="file-input file-input-bordered w-full mt-1 p-3"
                            required
                        />
                    </div>


                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="btn w-full bg-blue-600 border-[1px] border-blue-600 text-white font-bold  hover:bg-white hover:border-blue-600 hover:text-blue-700 transition-all duration-300 ease-out"
                        >
                            Submit Marathon
                        </button>
                    </div>
                </form>
            </Fade>
        </div>
    );
};

export default AddMarathon;
