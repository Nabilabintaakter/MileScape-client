import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // Import icons for Edit and Trash

const ApplicationTableRow = ({ apply ,index}) => {
    // Destructuring the properties from the apply object
    const { marathonTitle, marathonStartDate, distance, location, phone } = apply || {};

    return (
        <tr>
            {/*sl no */}
            <td className='py-3 px-6 text-sm font-medium text-blue-600'>
                {index + 1}.
            </td>
            {/* Marathon Title */}
            <td className='py-3 px-6 text-sm text-gray-700'>
                {marathonTitle}
            </td>

            {/* Start Date */}
            <td className='py-3 px-6 text-sm text-gray-700'>
                {new Date(marathonStartDate).toLocaleDateString()}
            </td>

            {/* Distance */}
            <td className='py-3 px-6 text-sm text-gray-700'>
                {distance}
            </td>

            {/* Location */}
            <td className='py-3 px-6 text-sm text-gray-700'>
                {location}
            </td>

            {/* Actions (Update/Delete buttons) */}
            <td className='py-3 px-6 text-sm text-gray-700'>
                <div className='flex items-center justify-start gap-4'>
                    <button className='flex items-center gap-x-2 bg-green-500 text-white btn btn-sm  rounded-md hover:bg-green-700'>
                        <FaEdit />
                        Update
                    </button>
                    <button className='flex items-center gap-x-2 bg-red-500 text-white btn btn-sm rounded-md hover:bg-red-700'>
                        <FaTrashAlt />
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default ApplicationTableRow;
