import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Fade } from 'react-awesome-reveal';

const UpdateMarathon = ({ onClose, marathon, reload, setReload }) => {
    const { _id, title, startRegDate, endRegDate, marathonStartDate, description, image, location, distance } = marathon || {};

    const [formData, setFormData] = useState({
        distance: distance || '', // DB থেকে আসা distance বা খালি স্টেট
        title: title || '',
        startRegDate: startRegDate ? new Date(startRegDate) : null,
        endRegDate: endRegDate ? new Date(endRegDate) : null,
        marathonStartDate: marathonStartDate ? new Date(marathonStartDate) : null,
        location: location || '',
        description: description || '',
        image: image || ''
    });

    useEffect(() => {
        if (marathon) {
            setFormData({
                distance: marathon?.distance || '', // Ensure it is correct
                title: marathon?.title || '',
                startRegDate: marathon?.startRegDate ? new Date(marathon.startRegDate) : null,
                endRegDate: marathon?.endRegDate ? new Date(marathon.endRegDate) : null,
                marathonStartDate: marathon?.marathonStartDate ? new Date(marathon.marathonStartDate) : null,
                location: marathon?.location || '',
                description: marathon?.description || '',
                image: marathon?.image || ''
            });
        }
    }, [marathon]);

    console.log(formData);  // Debugging log


    const handleDateChange = (date, field) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: date,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedData = {
            marathonId: _id,
            title: formData.title,
            startRegDate: formData.startRegDate,
            endRegDate: formData.endRegDate,
            marathonStartDate: formData.marathonStartDate,
            location: formData.location,
            distance: formData.distance,
            description: formData.description,
            image: formData.image,
        };

        axios
            .put(`http://localhost:5000/myMarathons/${_id}`, updatedData)
            .then((data) => {
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Update Successful!",
                        text: "Your marathon details have been successfully updated.",
                        showConfirmButton: false,
                        timer: 2000,
                    }).then(() => {
                        setReload(!reload);
                        onClose();
                    });
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <Fade duration={700} cascade>
                <div className="relative bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 mx-4 overflow-y-auto">
                    <h2 className="text-2xl font-bold text-center mb-4">Update Marathon</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Marathon Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    placeholder="Enter marathon title"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Start Registration Date</label>
                                <DatePicker
                                    selected={formData.startRegDate}
                                    onChange={(date) => handleDateChange(date, 'startRegDate')}
                                    dateFormat="MM/dd/yyyy"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">End Registration Date</label>
                                <DatePicker
                                    selected={formData.endRegDate}
                                    onChange={(date) => handleDateChange(date, 'endRegDate')}
                                    dateFormat="MM/dd/yyyy"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Marathon Start Date</label>
                                <DatePicker
                                    selected={formData.marathonStartDate}
                                    onChange={(date) => handleDateChange(date, 'marathonStartDate')}
                                    dateFormat="MM/dd/yyyy"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    placeholder="Enter location"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Running Distance</label>
                                <select
                                    name="distance"
                                    value={formData.distance}
                                    onChange={(e) => setFormData({ ...formData, distance: e.target.value })}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                >
                                    <option value="">Select distance</option>
                                    <option value="5km">5km</option>
                                    <option value="10km">10km</option>
                                    <option value="21km">21km</option>
                                    <option value="42km">42km</option>
                                </select>
                            </div>

                            <div className="col-span-2">
                                <label className="block text-sm font-medium">Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    placeholder="Enter description"
                                    rows="3"
                                    required
                                ></textarea>
                            </div>
                            <div className="col-span-2">
                                <label className="block text-sm font-medium">Marathon Image</label>
                                <input
                                    type="url"
                                    name="image"
                                    value={formData.image}
                                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    placeholder="Enter marathon image URL"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex justify-end mt-6">
                            <button
                                type="button"
                                onClick={onClose}
                                className="mr-4 px-4 py-2 bg-gray-300 text-gray-800 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Update Marathon
                            </button>
                        </div>
                    </form>
                </div>
            </Fade>
        </div>
    );
};

export default UpdateMarathon;
