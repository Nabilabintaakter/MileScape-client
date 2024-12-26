import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import UpdateMarathon from './UpdateMarathon';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const MarathonTableRow = ({marathons,setMarathons, marathon, index ,reload,setReload}) => {
    const { _id, title, marathonStartDate, location, distance } = marathon || {};
    const axiosSecure = useAxiosSecure();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/myMarathons/${_id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            console.log(data.data);
                            const remaining = marathons.filter(marathon => marathon._id !== id);
                            setMarathons(remaining);
                        }
                    })
            }
        });
    }

    return (
        <>
            <tr>
                <td className="py-3.5 px-6 text-sm font-medium text-blue-600">{index + 1}.</td>
                <td className="py-3.5 px-4 text-sm text-gray-700">{title}</td>
                <td className="py-3.5 px-4 text-sm text-gray-700">{location}</td>
                <td className="py-3.5 px-4 text-sm text-gray-700">{distance}</td>              
                <td className="py-3.5 px-4 text-sm text-gray-700">{new Date(marathonStartDate).toLocaleDateString()}</td>
                <td className="py-3.5 px-4 text-sm text-gray-700 flex items-center justify-start gap-4">
                    <button
                        className="flex items-center gap-x-2 bg-green-500 text-white btn btn-sm rounded-md hover:bg-green-700"
                        onClick={openModal}
                    >
                        <FaEdit />
                        <p className='hidden lg:block'>Update</p>
                    </button>
                    <button onClick={() => handleDelete(_id)} className="flex items-center gap-x-2 bg-red-500 text-white btn btn-sm rounded-md hover:bg-red-700">
                        <FaTrashAlt />
                        <p className='hidden lg:block'>Delete</p>
                    </button>
                </td>
            </tr>
            {/* Modal for Update */}
            {isModalOpen && <UpdateMarathon reload={reload} setReload={setReload} setMarathons={setMarathons} marathon={marathon} isOpen={isModalOpen} onClose={closeModal} />}
        </>
    );
};

export default MarathonTableRow;
