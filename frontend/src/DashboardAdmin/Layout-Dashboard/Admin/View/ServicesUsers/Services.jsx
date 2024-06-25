import React, { useState, useEffect } from 'react';
import axios from '../../../../../axios/axios';

const Services = () => {
  const [services, setServices] = useState([]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'text-green-600';
      case 'Inactive':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };


  useEffect(() => {
    // Fetch services data from the database or API
    const fetchServicesData = async () => {
      try {
        const response = await axios.get('/services');
        const data = response.data;
        setServices(data);
        console.log(services)
      } catch (error) {
        console.log(error);
      }
    };

    fetchServicesData();
  }, []);

  return (
    <div className=' overflow-x-auto '>
    <div className="container mx-auto p-4">
      <h3 className="text-xl font-bold mb-2">الخدمات المتوفرة</h3>
      <table className="w-full ">
        <thead>
          <tr className='bg-red-600 py-2 px-4 border-2 shadow'>
          <th className=" ">ID</th>
          {/* <th className="py-2 px-4 bg-gray-200">Name</th> */}
            <th className="">image</th>
            <th className=" ">Title</th>
            <th className="">Description</th>
            <th className="">Price</th>
            <th className="">Category</th>
            <th className="">Status</th>
            <th className=" ">Execution Time</th>
           
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}  className='border-2'>
                  <td className="py-2 px-4">{service.id}</td>
              {/* <td className="py-2 px-4">{service.name}</td> */}
              <td className="py-2 px-4">
                <img src={service.image} alt={service.id} className="w-24 h-auto" />
              </td>
              <td className="py-2 bg-green-700 px-4">{service.title}</td>
              <td className="py-2 px-4">{service.description}</td>
              <td className="py-2 px-4">${service.price}</td>
              <td className={`px-3 py-2  ${getStatusColor(service.status)}`}>
                    {service.status}
                  </td>
              <td className="py-2 px-4">{service.category}</td>
              <td className="py-2 px-4">{service.delivery_time} days</td>
           
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Services;