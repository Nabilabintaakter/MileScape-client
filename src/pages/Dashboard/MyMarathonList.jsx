import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import Header from '../../components/shared/Header';
import { Fade } from 'react-awesome-reveal';
import MarathonTableRow from './MarathonTableRow';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import { FaRunning } from 'react-icons/fa';
import { Bounce } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const MyMarathonList = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading, setLoading } = useContext(AuthContext);
  const [marathons, setMarathons] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    axiosSecure.get(`/myMarathons?email=${user.email}`)
      .then(data => {

        setMarathons(data.data);
        setLoading(false);
      });
    document.title = 'My Marathon List | MileScape';
  }, [user?.email, reload]);
  if (loading) return <LoadingSpinner></LoadingSpinner>
  return (
    <div className='w-full mx-auto mt-2'>
      <Fade direction="up" triggerOnce duration={2000}>
        <Header title='My Marathon List' subTitle='Track your Lists here'></Header>
      </Fade>

      {/* Design Updated Section */}
      <section className='w-full my-8'>
        <div className='flex flex-col items-center text-center'>
          {marathons && marathons.length > 0 && <span className='mt-2 px-4 py-1 text-sm font-medium text-yellow-600 bg-yellow-100 rounded-full'>
            {marathons.length} Marathons Added to your list
          </span>}
        </div>

        {/* Table Section */}
        {
          marathons && marathons.length > 0 ? (
            <Fade triggerOnce delay={20}>
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
                              Marathon Title
                            </th>
                            <th
                              scope='col'
                              className='py-3.5 px-4 text-sm font-semibold text-left text-gray-700'
                            >
                              Location
                            </th>
                            <th
                              scope='col'
                              className='py-3.5 px-4 text-sm font-semibold text-left text-gray-700'
                            >
                              Distance
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
                          {marathons.map((marathon, index) => (
                            <MarathonTableRow
                              key={marathon._id}
                              marathon={marathon}
                              index={index}
                              marathons={marathons}
                              setMarathons={setMarathons}
                              reload={reload}
                              setReload={setReload}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          ) : (
            <Bounce triggerOnce>
              <div className='flex flex-col items-center justify-center mt-10'>
                <FaRunning className='text-6xl text-blue-500 mb-4' />
                <p className='text-xl font-semibold text-gray-700'>
                  No marathons added yet!
                </p>
                <p className='text-gray-500 mt-2'>
                  Start your journey by adding a marathon to track your goals.
                </p>
                <Link to={`/dashboard/addMarathon`}
                  className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'
                >
                  Add a Marathon
                </Link>
              </div>
            </Bounce>
          )
        }
      </section>
    </div>
  );
};

export default MyMarathonList;