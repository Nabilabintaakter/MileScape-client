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
      });
    document.title = 'My Apply List | MileScape';
  }, [user?.email, reload]);

  return (
    <div className='w-full mx-auto mt-2 '>
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
        <div className="flex flex-row flex-wrap justify-center items-center gap-5 mt-5">
          {/* Filter by location */}
          <div>
            <select
              name="location"
              id="location"
              className="border p-4 rounded-lg"
            >
              <option value="">Filter By Location</option>
              <option value="Engineering">Dhaka</option>
              <option value="Marketing">Chattogram</option>
              <option value="Finance">Sylhet</option>
              <option value="Teaching"> Rajshahi</option>
              <option value="Management">Khulna</option>
              <option value="Development">Narsingdi</option>
              <option value="Data Science">Barishal</option>
              <option value="Design">Cox's Bazar</option>
              <option value="Development">Comilla</option>
              <option value="Development">Gazipur</option>
              <option value="Development">Rangpur</option>
              <option value="Development">Jessore</option>
              <option value="Development">Mymensingh</option>
              <option value="Development">Pabna</option>             
              <option value="Development"> Tangail</option>
            </select>
          </div>

          {/* Search Form */}
          <form>
            <div className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-3 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                type="text"
                name="search"
                placeholder="Enter Marathon title"
                aria-label="Enter Marathon title"
                value=""
              />
              <button
                type="submit"
                className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        {/* Table Section */}
        <Fade triggerOnce delay='20'>
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
                      {applies.map((apply, index) => (
                        <ApplicationTableRow
                          key={apply._id}
                          apply={apply}
                          index={index}
                          applies={applies}
                          setApplies={setApplies}
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
      </section>
    </div>
  );
};

export default MyApplyList;