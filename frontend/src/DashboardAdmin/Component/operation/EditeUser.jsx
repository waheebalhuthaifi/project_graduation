import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EditeUser = ({ userId="1" }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user from Laravel API
    axios.get(`/api/users/${userId}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [userId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Send user update to Laravel API
    axios.put(`/api/users/${userId}`, user)
      .then(response => {
        console.log('User updated successfully');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleInputChange = (e) => {
    setUser(prevUser => ({
      ...prevUser,
      [e.target.name]: e.target.value
    }));
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-1/2 mx-auto">
    <h2 className="text-2xl font-bold  mt-10 mb-4">تعديل بيانات المستخدم </h2>
    <form onSubmit={handleFormSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
           الاسم الاول
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={handleInputChange}
          className="border py-2 px-3 rounded-lg w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
           اسم العائلة
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={handleInputChange}
          className="border py-2 px-3 rounded-lg w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          البريد الالكتروني
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          className="border py-2 px-3 rounded-lg w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="role" className="block text-gray-700 font-bold mb-2">
          الدور
        </label>
        <select
          id="role"
          name="role"
          value={user.role}
          onChange={handleInputChange}
          className="border py-2 px-3 rounded-lg w-full"
        >
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="user">User</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
       حفظ التغيرات
      </button>
    </form>
  </div>
  );
}
export default EditeUser;