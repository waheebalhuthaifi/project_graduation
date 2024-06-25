import React, { useState, useEffect } from "react";
import axios from "axios";
import UserDropdown from "../../../Component/UserDropdown";
export default function Tableuser(){

//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // استدعاء البيانات من API أو مصدر البيانات الخاص بك
//     axios.get("https://api.example.com/users")
//       .then(response => {
//         setUsers(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   const handleDeleteUser = (userId) => {
//     // قم بإجراء طلب لحذف المستخدم باستخدام معرف المستخدم
//     axios.delete(`https://api.example.com/users/${userId}`)
//       .then(response => {
//         // قم بتحديث قائمة المستخدمين بعد الحذف
//         setUsers(users.filter(user => user.id !== userId));
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   const handleEditUser = (userId) => {
//     // قم بتوجيه المستخدم إلى صفحة التعديل باستخدام معرف المستخدم
//     // يمكنك استخدام React Router لتنفيذ هذا الأمر
//     // مثال: history.push(`/edit-user/${userId}`);
//   };

const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      accountType: "مستقل",
      email: "moh@gmail.com",
      creationDate: "2022-01-01",
    //   status: "Active"
    },
    // قائمة المستخدمين الأخرى
  ]);

  const handleAccept = (userId) => {
    // تنفيذ الإجراء المناسب عند النقر على زر القبول بناءً على معرف المستخدم
    console.log("Accepted status for user with ID:", userId);
  };

  const handleReject = (userId) => {
    // تنفيذ الإجراء المناسب عند النقر على زر الرفض بناءً على معرف المستخدم
    console.log("Rejected status for user with ID:", userId);
  };
  return (
    <>

 <div className="overflow-x-auto ">
<table className="min-w-full divide-y text-center  divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 bg-gray-50  text-xs font-medium text-gray-500 uppercase tracking-wider">
            ID
          </th>
          <th className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">
            اسم المستخدم
          </th>
          <th className="px-6 py-3 bg-gray-50  text-xs font-medium text-gray-500 uppercase tracking-wider">
            نوع الحساب
          </th>
          <th className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">
            الايميل
          </th>
          <th className="px-6 py-3 bg-gray-50  text-xs font-medium text-gray-500 uppercase tracking-wider">
            تاريخ انشاء الحساب
          </th>
          <th className="px-6 py-3 bg-gray-50  text-xs font-medium text-gray-500 uppercase tracking-wider">
            الحالة
          </th>
         
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {users.map((user) => (
          <tr key={user.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {user.id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {user.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {user.accountType}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {user.email}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {user.creationDate}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
             <button onClick={() => handleAccept(user.id)}
 className="bg-green-600 py-2 rounded-lg text-white px-4 border-2">قبول </button>
             <button  onClick={() => handleReject(user.id)} className="bg-red-600 py-2 rounded-lg text-white px-4 border-2">رفض</button>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </>
  );
}

