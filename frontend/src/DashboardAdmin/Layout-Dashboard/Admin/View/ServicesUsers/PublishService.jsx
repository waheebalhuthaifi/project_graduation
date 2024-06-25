import React, { useState, useEffect } from "react";
import axios from "../../../../../axios/axios";



// const RequestCard = ({ request }) => {

//   const handleApprove = () => {
//     const response=axios.post(`/service/${request.id}/approve`);
//     const data=response.data;
//     // fetch(`/api/requests/${request.id}/approve`, {
//     //   method: "PUT",
//     // })
//     //   .then((response) => response.json())
//     //   .then(() => {
//     //     // Update requests state to reflect approval
//     //   });
//   };

//   const handleReject = () => {
//     const response=axios.post(`/service/${request.id}/reject`);
//     const data=response.data;

//     // fetch(`/api/requests/${request.id}/reject`, {
//     //   method: "PUT",
//     // })
//     //   .then((response) => response.json())
//     //   .then(() => {
//     //     // Update requests state to reflect rejection
//     //   });
//   };

//   return (
//     // <div className="bg-white rounded-md shadow-md p-4">
//     //   <h3 className="text-lg font-bold mb-2">{request.title}</h3>
//     //   <p className="text-gray-600 mb-3">{request.description}</p>
//     //   <div className="flex flex-col gap-2">
//     //     {/* Display category, status, images, and other details */}
//     //     <div className="flex items-center">
//     //       <span className="text-gray-700">الفئة:</span>
//     //       <span className="text-sm font-medium ml-2">{request.category}</span>
//     //     </div>
//     //     <div className="flex items-center">
//     //       <span className="text-gray-700">الحالة:</span>
//     //       <span className="text-sm font-medium ml-2">
//     //         {request.status === "pending"
//     //           ? "معلق"
//     //           : request.status === "approve"
//     //           ? "مقبول"
//     //           : "مرفوض"}
//     //       </span>
//     //     </div>
//     //     {/* Display images if available */}
//     //     {/* ... */}
//     //   </div>
//     //   <div className="flex justify-between items-center mt-4">
//     //     <button
//     //       className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none"
//     //       onClick={handleApprove}
//     //     >
//     //       قبول الطلب
//     //     </button>
//     //     <button
//     //       className="bg-gray-500 text-white px-4 py-2 rounded-md focus:outline-none ml-2"
//     //       onClick={handleReject}
//     //     >
//     //       رفض الطلب
//     //     </button>
//     //   </div>
//     // </div>
//   );
// };

const PublishService = () => {
  const [services,setServices]=useState([]);
  // const requests = [
  //   {
  //     id: 1,
  //     title: "تصميم موقع ويب متجر إلكتروني",
  //     description: "أحتاج إلى تصميم موقع ويب متجر إلكتروني لبيع منتجاتي...",
  //     category: "تصميم مواقع ويب",
  //     status: "pending",
  //   },
  //   {
  //     id: 2,
  //     title: "كتابة مقالات SEO",
  //     description: "أحتاج إلى كاتب مقالات SEO لإنشاء محتوى لموقعي...",
  //     category: "كتابة المحتوى",
  //     status: "pending",
  //   },
  //   // Add more request objects here
  // ];
  
  useEffect(() => {
    // Fetch services data from the database or API
    const fetchServicesData = async () => {
      try {
        const response = await axios.get('/services/pending');
        const data = response.data;
        setServices(data);
        console.log(services)
      } catch (error) {
        console.log(error);
      }
    };

    fetchServicesData();
  }, []);
  const handleApprove = (e,request) => {
    const response=axios.post(`/service/${request.id}/status`,{status:'approved'});
    const data=response.data;
   
  };

  const handleReject = (e,request) => {
    e.preventDefault();
    // console.log(request.id)
    const response=axios.post(`/service/${request.id}/status`,{status:'refund'});
    const data=response.data;

  
  };
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">لوحة تحكم طلبات الخدمات</h1>

      <div className="list">
        {services.map((request) => (
          <>
           <div className="bg-white rounded-md shadow-md p-4">
      <h3 className="text-lg font-bold mb-2">{request.title}</h3>
      <p className="text-gray-600 mb-3">{request.description}</p>
      <div className="flex flex-col gap-2">
        {/* Display category, status, images, and other details */}
        <div className="flex items-center">
          <span className="text-gray-700">الفئة:</span>
          <span className="text-sm font-medium ml-2">{request.category}</span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-700">الحالة:</span>
          <span className="text-sm font-medium ml-2">
            {request.status === "pending"
              ? "معلق"
              : request.status === "approved"
              ? "مقبول"
              : "مرفوض"}
          </span>
        </div>
        {/* Display images if available */}
        {/* ... */}
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none"
          onClick={((e)=>handleApprove(e,request))}
        >
          قبول الطلب
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-md focus:outline-none ml-2"
          // onClick={handleReject(e,request)}
          onClick={((e)=>handleReject(e,request))}
        >
          رفض الطلب
        </button>
      </div>
    </div>

          </>
          // <li className="list-item p-2 rounded-md shadow-md" key={request.id}>
          //   <RequestCard request={request} />
          // </li>
        ))}
      </div>
    </div>
  );


  
}




export default PublishService;