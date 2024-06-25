import React, { useState } from 'react';
import Nav from '../Pages/Nav';

    
        export default function Addproject() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [time, setTime] = useState('');
  const [file, setFile] = useState(null);  
  const [skills, setSkills] = useState('');

  const [formError, setFormError] = useState(false);
  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
  const MIN_DESCRIPTION_LENGTH = 30;
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !price || !time || !file) {
        setFormError(true);
        return;
      }
    
  if (!file.type.match('image/*')) {
    setFormError(true);
    return;
  }
      setFormError(false);
    console.log('Submitted:', { name, description, price, time, file });
  };

  return (
    <>
    
    
  
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">اضف المشروع </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-1">
            عنوان المشروع (مختصر)
          </label>
          <input
            type="text"
            placeholder='عنوان المشروع مثل: مصمم لتصميم لوحة اعلانية'
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full px-4 py-2 rounded border ${
              formError && !name ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring ${
              formError && !name ? 'ring-red-500' : 'ring-blue-200'
            }`}
          />
          {formError && !name && (
            <p className="text-red-500 text-sm mt-1">Please enter a name</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-medium mb-1">
            وصف المشروع  (مفصل)
          </label>
          <textarea
          cols="30" rows="10"
          
            id="description"
            placeholder='ادخال توصيف بشكل مفصل حول المشروع '
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={`w-full min-h-[100px] h-auto resize-none px-4 py-2 rounded border ${
              formError && !description ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring ${
              formError && !description ? 'ring-red-500' : 'ring-blue-200'
            } overflow-y-auto`}
          ></textarea>
          {formError && !description && (
            <p className="text-red-500 text-sm mt-1">
              Please enter a description
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="placeholder" className="block font-medium mb-1">
               إدخل المهارات المطلوبة
          </label>
          <textarea
        //   cols="30" rows="10"
          
            id="skils"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className={`w-full min-h-[100px] h-auto resize-none px-4 py-2 rounded border ${
              formError && !skills ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring ${
              formError && !skills ? 'ring-red-500' : 'ring-blue-200'
            } overflow-y-auto`}
          ></textarea>
          {formError && !skills && (
            <p className="text-red-500 text-sm mt-1">
              ادخل المهارات المطلوبة
            </p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block font-medium mb-1">
            حدد السعر المتوقعة
          </label>
          <select
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={`w-full px-4 py-2 rounded border ${
              formError && !price ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring ${
              formError && !price ? 'ring-red-500' : 'ring-blue-200'
            }`}
          >
            <option value="" disabled>Select a price</option>
            <option value="100">20$-50$</option>
            <option value="100">50$-100$</option>
            <option value="100">100$-150$</option>
            <option value="100">150$-200$</option>
            <option value="100">200$-400$</option>
            <option value="100">400$-600$</option>
            <option value="100">600$-1000$</option>
            <option value="100">1000$-1500$</option>

          </select>
          {formError && !price && (
            <p className="text-red-500 text-sm mt-1">
              Please select a price
            </p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block font-medium mb-1">
           حدد المدة المتوقعة لاستلم المشروع (عدد الايام)
          </label>
          <input
            type="data"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className={`w-full px-4 py-2 rounded border ${
                formError && !time ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring ${
                formError && !time ? 'ring-red-500' : 'ring-blue-200'
              }`}
            />
            {formError && !time && (
              <p className="text-red-500 text-sm mt-1">
                Please enter a time to implement
              </p>
            )}
        </div>
        <div className="mb-4">
          <label htmlFor="file" className="block font-medium mb-1">
            ارفق ملفات (إختياري)
          </label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
            className={`${
              formError && !file ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {formError && !file && (
            <p className="text-red-500 text-sm mt-1">
              Please upload a file
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 w-full hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          نشر
        </button>
      </form>
    </div>
    </> );
};

