import axios from 'axios';
import React from 'react';
import { Fade } from 'react-awesome-reveal'; 
import Swal from 'sweetalert2';

const UpdateModal = ({onClose, apply,reload,setReload }) => {

    const {
        _id,
        marathonTitle,
        marathonStartDate,
        email,
        firstName,
        lastName,
        phone,
        additionalInfo,
    } = apply || {};

    const formattedDate = new Date(marathonStartDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    const handleUpdateForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(e.target);
        const updatedData = {
            myApplicationId: _id,
            marathonTitle,
            marathonStartDate,
            email: formData.get('email'),
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            phone: formData.get('phone'),
            additionalInfo: formData.get('additionalInfo'),
        };
        console.log(updatedData);
    
        // send data to server
        axios
            .put(`http://localhost:5000/marathon-registrations/${_id}`, updatedData)
            .then((data) => {
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Update Successful!",
                        text: "Your registration details have been successfully updated.",
                        showConfirmButton: false,
                        timer: 2000,
                    })

                    .then(() => {
                        setReload(!reload)
                        onClose();
                    });
                    form.reset();
                }

            })
            .catch(error=>{
                    console.log(error);
            })
    };
    

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
            <Fade duration={700} cascade>
                <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-2xl mx-auto my-20 animate-fade-in">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-yellow-500">
                        <span className="text-gray-800">UPDATE</span> YOUR REGISTRATION
                    </h2>
                    <p className="text-center text-gray-600 mb-8">
                        Modify your details below to keep your marathon registration up-to-date.
                    </p>
                    <form
                        onSubmit={handleUpdateForm}
                        className="w-full bg-white"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your first name"
                                    name="firstName"
                                    defaultValue={firstName}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your last name"
                                    name="lastName"
                                    defaultValue={lastName}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    name="email"
                                    defaultValue={email}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone</label>
                                <input
                                    type="number"
                                    placeholder="Enter your phone number"
                                    name="phone"
                                    defaultValue={phone}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Marathon Title</label>
                                <input
                                    type="text"
                                    name="marathonTitle"
                                    defaultValue={marathonTitle}
                                    readOnly
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Start Date</label>
                                <input
                                    type="text"
                                    name="startDate"
                                    defaultValue={formattedDate}
                                    readOnly
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                                />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-700">Additional Info (Optional)</label>
                                <textarea
                                    placeholder="Write any additional notes here..."
                                    name="additionalInfo"
                                    defaultValue={additionalInfo}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                                ></textarea>
                            </div>
                        </div>
                        <div className="flex justify-end gap-4 mt-8">
                            <button
                                type="button"
                                className="bg-gray-300 px-4 py-2 rounded-sm hover:bg-gray-400 transition duration-300"
                                onClick={onClose}
                            >
                                Close
                            </button>
                            <button
                                type="submit"
                                className="bg-yellow-500 text-white px-4 py-2 rounded-sm hover:bg-yellow-600 transition duration-300"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </Fade>
        </div>
    );
};

export default UpdateModal;
