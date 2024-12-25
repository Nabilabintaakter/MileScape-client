import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import Header from '../../components/shared/Header';
import axios from 'axios';
import { Fade } from 'react-awesome-reveal';
import ApplicationTableRow from './ApplicationTableRow';

const MyApplyList = () => {
    const { user, setLoading } = useContext(AuthContext);
    const [applies, setApplies] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {

        axios.get(`http://localhost:5000/marathon-registrations?email=${user.email}`)
            .then(data => {
                console.log(data.data);
                setApplies(data.data);
                setLoading(false);
            })

    }, [user?.email,reload]);

    return (
        <div className='w-full mx-auto mt-2'>
            <Fade direction="up" triggerOnce duration={2000}>
                <Header title='My Marathon Registrations' subTitle='Track your progress here'></Header>
            </Fade>

            {/* Design Updated Section */}
            <section className='w-full my-8'>
                <div className='flex flex-col items-center text-center'>
                    <span className='mt-2 px-4 py-1 text-sm font-medium text-yellow-600 bg-yellow-100 rounded-full'>
                        {applies.length || 0} Applications Found
                    </span>
                </div>

                {/* Table Section */}
                <div className='mt-6'>
                    <div className='overflow-x-auto'>
                        <div className='inline-block min-w-full py-2 align-middle'>
                            <div className='overflow-hidden border border-gray-200 md:rounded-lg'>
                                <table className='min-w-full divide-y divide-gray-200 table-striped'>
                                    <thead className='bg-gray-50'>
                                        <tr>
                                            <th
                                                scope='col'
                                                className='py-3.5 px-4 text-sm font-semibold text-left text-gray-700'
                                            >
                                                SL No.
                                            </th>
                                            <th
                                                scope='col'
                                                className='py-3.5 px-4 text-sm font-semibold text-left text-gray-700'
                                            >
                                                Participant Name
                                            </th>
                                            <th
                                                scope='col'
                                                className='py-3.5 px-4 text-sm font-semibold text-left text-gray-700'
                                            >
                                                Email
                                            </th>
                                            <th
                                                scope='col'
                                                className='py-3.5 px-4 text-sm font-semibold text-left text-gray-700'
                                            >
                                                Marathon Title
                                            </th>
                                            <th
                                                scope='col'
                                                className='py-3.5 px-4 text-sm font-semibold text-left text-gray-700'
                                            >
                                                Start Date
                                            </th>
                                            <th
                                                scope='col'
                                                className='py-3.5 px-4 text-sm font-semibold text-left text-gray-700'
                                            >
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-white divide-y divide-gray-200'>
                                        {
                                            applies.map((apply, index) => (
                                                <ApplicationTableRow
                                                    key={apply._id}
                                                    apply={apply}
                                                    index={index}
                                                   applies={applies}
                                                   setApplies={setApplies}
                                                   reload={reload}
                                                   setReload={setReload}
                                                />
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyApplyList;
