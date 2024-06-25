import React, { useState, useEffect } from "react";
// import axios from "axios";
import axios from "../../../../axios/axios";

// import InfoUserDropDown from "../../../Component/UserDropdown";
import InfoUserDropDown from "../../../Component/DropDown/InfoUserDropDown";
import {  FaEllipsisV } from "react-icons/fa";
export default function Tableuser(){
    
  const InfoUSerTable = [
    { label: " حذف المستخدم", href: "/admin/dashboard/show-user" },
    { label: "   تعديل ", href: "/admin/dashboard/edite-user" },
    { label: "تفاصيل المستخدم ", href: "/admin/dashboard/user-permissions" },
    { label: " حظر المستخدم  ", href: "/admin/dashboard/user-block" },
  ];
//   const [users, setUsers] = useState([]);
const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/users")
      .then(response => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },[]);

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




  const handleOptions = (userId) => {
    // تنفيذ الإجراء المناسب عند النقر على الخيارات بناءً على معرف المستخدم
    console.log("Options clicked for user with ID:", userId);
  };
  return (
    
    <>
 <div className="overflow-x-auto ">
<table className="ww-1/2 divide-y text-center  divide-gray-200">
      <thead>

        <tr>
          <th className="px-6 py-3 bg-gray-50  text-xs font-medium text-gray-500 uppercase tracking-wider">
            ID
          </th>
          <th className="px-6 py-3 bg-gray-50  text-xs font-medium text-gray-500 uppercase tracking-wider">
            اسم المستخدم
          </th>
          <th className="px-6 py-3 bg-gray-50  text-xs font-medium text-gray-500 uppercase tracking-wider">
            الصورة
          </th>
          <th className="px-6 py-3 bg-gray-50  text-xs font-medium text-gray-500 uppercase tracking-wider">
            نوع الحساب
          </th>
          <th className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">
            البريد الالكتروني
          </th>
          <th className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">
           المدينة
          </th>
          <th className="px-6 py-3 bg-gray-50  text-xs font-medium text-gray-500 uppercase tracking-wider">
            تاريخ انشاء الحساب
          </th>
          <th className="px-6 py-3 bg-gray-50  text-xs font-medium text-gray-500 uppercase tracking-wider">
          التخصص
          </th>
          <th className="px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">
            خيارات
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {users.map((user) => (
          <tr key={user.id}>
            <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
              {user.id}
            </td>
            <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
              {user.firstName}   {user.lastName}
            </td>
            <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
              {user.image}
            </td>
            <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
              {user.user_type}
            </td>
            <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
              {user.email}
            </td>
            <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
              {user.city}
            </td>
            <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
              {user.created_at}
            </td>
            <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
              {user.field}
            </td>
            <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
              <button
                className="text-indigo-600 hover:text-indigo-900"
                onClick={() => handleOptions(user.id)}
              >
  
                <InfoUserDropDown data={InfoUSerTable} image={<FaEllipsisV/>}/>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </>
  );
}

