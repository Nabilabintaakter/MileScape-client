import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Header from '../../components/shared/Header';
import AuthContext from '../../context/AuthContext/AuthContext';

const AddMarathon = () => {
    const [startRegDate, setStartRegDate] = useState(null);
    const [endRegDate, setEndRegDate] = useState(null);
    const [marathonStartDate, setMarathonStartDate] = useState(null);
    const {user}= useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData(event.target);
        const marathonDetails = {
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
        console.log(marathonDetails);

        // Success message & save data to the database
        alert('Marathon created successfully!');
        // Add your database integration logic here
    };

    return (
        <div className="w-[95%] mx-auto max-w-4xl mt-2 ">
            <Header title='Create and Manage Marathon Events' subTitle='Add New Marathon'></Header>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 md:p-4 lg:p-8 space-y-6">
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
                        type="file"
                        name="image"
                        className="file-input file-input-bordered w-full mt-1"
                        accept="image/*"
                        required
                    />
                </div>


                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="btn btn-primary w-full bg-blue-600 text-white text-lg font-bold  hover:bg-blue-700"
                    >
                        Submit Marathon
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddMarathon;
