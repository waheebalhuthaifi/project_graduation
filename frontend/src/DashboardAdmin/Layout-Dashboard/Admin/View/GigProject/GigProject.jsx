import React from 'react';
import { FaEllipsisV } from 'react-icons/fa';

const GigProject = () => {
    const [selectedGig, setSelectedGig] = React.useState(null);

    const gigs = [
        {
          id: 1,
          title: 'Web Development',
          category: 'Programming',
          price: 100,
          status: 'Active',
          logo: "avater",

          visitors: 100,
          rating: 4.5,
          create_at:'2020-2-20',
          offers:"12"
        },
        {
          id: 2,
          title: 'Logo Design',
          category: 'Design',
          price: 50,
          status: 'Active',
          logo: "logo",
           visitors: 75,
          rating: 4.0,
          create_at:'2020-1-20',
          offers:"1"
        },
        {
          id: 3,
          title: 'Content Writing',
          category: 'Writing',
          price: 80,
          status: 'Inactive',
          logo: "logo",
          visitors: 50,
          rating: 3.8,
          create_at:'2020-2-1',
          offers:"6"
        },
      ];
    
  const handleDelete = (gigId) => {
    // قم بتنفيذ الإجراء لحذف الوظيفة بناءً على الـ gigId
    console.log(`تم حذف الوظيفة بالمعرف: ${gigId}`);
  };

  const handleDetails = (gigId) => {
    // قم بتنفيذ الإجراء لعرض تفاصيل الوظيفة بناءً على الـ gigId
    console.log(`تم عرض تفاصيل الوظيفة بالمعرف: ${gigId}`);
  };
  
 
  const handleActionClick = (gigId, event) => {
    event.stopPropagation();
    setSelectedGig(gigId);
  };
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
    
      return (
        <div className=" overflow-x-auto  ">

        <div className=" bg-red-500 px-2 py-4">
          <h2 className="text-2xl font-bold mb-4">قائمة المشاريع المتاحة</h2>
          <table className="min-w-full   bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="px-3 py-3 border-b">ID</th>
                <th className="px-3 py-3 border-b">Title</th>
                <th className="px-3 py-3 border-b">Category</th>
                <th className="px-3 py-3 border-b">Price</th>
                <th className="px-3 py-3 border-b">Status</th>
                <th className="px-3 py-3 border-b">logo</th>
                <th className="px-3 py-3 border-b">Visitors</th>
                <th className="px-3 py-3 border-b">Rating</th>
                <th className="px-3 py-3 border-b">create_at</th>
                <th className="px-6 py-3 border-b">offers</th>
                <th className="px-3 py-3 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {gigs.map((gig) => (
                <tr key={gig.id}>
                  <td className="px-3 py-2 border-b">{gig.id}</td>
                  <td className="px-3 py-2 border-b">{gig.title}</td>
                  <td className="px-3 py-2 border-b">{gig.category}</td>
                  <td className="px-3 py-2 border-b">{gig.price}</td>
                  <td className={`px-3 py-2 border-b ${getStatusColor(gig.status)}`}>
                    {gig.status}
                  </td>
                  <td className="px-3 py-2 border-b">{gig.logo}</td>
                  <td className="px-3 py-2 border-b">{gig.visitors}</td>
                  <td className="px-3 py-2 border-b">{gig.rating}</td>
                  <td className="px-3 py-2 border-b">{gig.create_at}</td>
                  <td className="px-6 py-4 border-b">{gig.offers}</td>
                  <td className="px-3 py-2 border-b">
  <div className="relative ml-16 z-50">
    {selectedGig === gig.id && (
      <div className="absolute right-0 mt-2 py-2 w-40 bg-white border rounded shadow-md">
        <button
          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-full text-left"
          onClick={() => handleDetails(gig.id)}
        >
          View Details
        </button>
        <button
          className="block px-2 py-2 text-sm text-red-600 hover:bg-gray-200 w-full text-left"
          onClick={() => handleDelete(gig.id)}
        >
          Delete
        </button>
      </div>
    )}
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
      onClick={(event) => handleActionClick(gig.id, event)}
    >
     <FaEllipsisV className='inline-block'/>
    </button>
  </div>
</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          </div>
          
      );
    }
export default GigProject;