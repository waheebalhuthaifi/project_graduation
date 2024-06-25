import Nav from '../Pages/Nav';
import {  useState , useEffect } from 'react';

import axios from '../axios/axios';
import { useAuth } from '../contexts/AuthContext';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Add_service(){
  const { user } = useAuth();
  // const [user, setUser]=useState();
  const [userid, setUserid] = useState();
  const [categories, setCategories] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // Stores the uploaded image


  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get('/categories');
        setCategories(response.data);
       
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategory();
  }, []);

  useEffect(() => {
    setUserid(user.id);
   
  }, []);



  const [formData, setFormData] = useState({
    title: '', // Add a default value for the 'title' property
    description: '',
    category: '',
    price: '',
    delivery_time: '',
    // userid:'',
    file: '',
  });


      const [errors, setErrors] = useState({
        title: '',
        description: '',
        category: '',
        price: '',
        delivery_time: '',
        file: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleImageChange = (e) => {
        const selectedFile = e.target.files[0];
        const updatedFormData = { ...formData, file: selectedFile };
        setFormData(updatedFormData);
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => setSelectedImage(e.target.result); // Set image data in state
        reader.readAsDataURL(file);
        console.log(selectedFile);
        console.log(categories);
      };
    
      const handleSubmit =  (e) => {
        console.log(user.id)
  
        e.preventDefault();
    
        const data = new FormData();
        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('category_id', formData.category);
        data.append('price', formData.price);
        data.append('delivery_time', formData.delivery_time);
        data.append('file', formData.file);
        // data.append('category', formData.category);
      
    console.log(formData.category)
        axios.post('/add-service',data)
          .then((response) => {
            // تم إنشاء الخدمة بنجاح
            toast.success('!  تم إضافه الخدمة بنجاح, بإنتظار مراجعتها من قبل الادارة ');
            // setFormData('')
            console.log(response.data.message);
          })
          .catch((error) => {
            if (error.response.status === 422) {
                console.log(error.response.data.errors);
                if (error.response.data.errors.title) {
                setErrors(error.response.data.errors.title[0]);
                } else {
                setErrors('');
                }
                if (error.response.data.errors.description) {
                setErrors(error.response.data.errors.description[0]);
                } else {
                setErrors('');
                }
                if (error.response.data.errors.price) {
                setErrors(error.response.data.errors.price[0]);
                } else {
                setErrors('');
                }
                if (error.response.data.errors.delivery_time) {
                setErrors(error.response.data.errors.delivery_time[0]);
                } else {
                setErrors('');
                }
                if (error.response.data.errors.category) {
                  setErrors(error.response.data.errors.category[0]);
                  } else {
                  setErrors('');
                  }
                if (error.response.data.errors.file) {
                setErrors(error.response.data.errors.file[0]);
                } else {
                setErrors('');
                }
                }

          });
     };

    return (<>
<div className='container mx-auto mt-4 p-2 bg-slate-100'>
    <h1 className="text-xl mt-2 mb-4 ">  إضافة خدمة جديدة </h1>
    </div>

    <div className="container md:w-[70%] border-1 shadow-md mx-auto p-4">
      <form onSubmit={handleSubmit} >
        {/* <input type="text" name="userid"  value={formData.userid}
             onChange={handleChange} /> */}
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium mb-1">
            عنوان الخدمة (مختصر)
          </label>

          <input
            type="text"
            placeholder='عنوان الخدمة مثل:  لوحة اعلانية'
            id="title"
            name="title"
            value={formData.title}
             onChange={handleChange}
            className={`w-full px-4 py-2 rounded border`
          }
          />
          {errors.title ? (<p className="text-red-500 text-sm mt-1">{errors.title}</p>) : (<><p className='text-[12px] text-gray-400'>أدخل عنواناً واضحاً باللغة العربية يصف الخدمة التي تريد أن تقدمها. لا تدخل رموزاً أو كلمات مثل حصريا،لأول مرة،لفترة محدود.. الخ.</p></>)}

          {/* {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>} */}
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-medium mb-1">
          تفاصيل الخدمة
          </label>
          <textarea
          cols="30" rows="10"
          
            id="description"
            placeholder='ادخال توصيف بشكل مفصل حول الخدمة التي تريد بيعها '
            name="description" value={formData.description} onChange={handleChange}
            className={`w-full min-h-[100px] h-auto resize-none px-4 py-2 rounded border overflow-y-auto`}
          ></textarea>
          {errors.description ? (<p className="text-red-500 text-sm mt-1">{errors.description} </p>) : (<><p className='text-[12px] text-gray-400'>أدخل وصف الخدمة بدقة يتضمن جميع المعلومات والشروط . يمنع وضع البريد الالكتروني، رقم الهاتف أو أي معلومات اتصال أخرى</p></>)}
        </div>

        <div className="mb-4">
          <label htmlFor="placeholder" className="block font-medium mb-1">
               إدخل المهارات المطلوبة(اختياري)
          </label>
          <textarea
        //   cols="30" rows="10"
          
            id="skills"
            value={formData.skills} onChange={handleChange}

            className={`w-full min-h-[100px] h-auto resize-none px-4 py-2 rounded border
           
            overflow-y-auto`}
          ></textarea>
                    {errors.skills &&<p className="text-red-500 text-sm mt-1">{errors.skills} </p>}

          {/* {formError && !skills && (
            <p className="text-red-500 text-sm mt-1">
              ادخل المهارات المطلوبة
            </p>
          )} */}
        </div>
        <div className='md:flex justify-around gap-4 mb-2'>
            <div className="mb-4">
          <label htmlFor="category" className="block font-medium mb-1">
            حدد تصنيف الخدمة 
          </label>
          <select
            id="category"
            name='category'
            value={formData.category} onChange={handleChange}
            className={`w-full px-4 py-3    bg-transparent border-0 border-b-2 border-emerald-400 appearance-none `}

          >
             <option disabled>اختار التصنيف الخدمة</option>
               {categories.map((category) => (
               
            <option key={category.id} value={category.id} >  {category.name} </option>
           
            ))}
          </select>
        
          {errors.category &&<p className="text-red-500 text-sm mt-1">{errors.category} </p>}

        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block font-medium mb-1">
            حدد السعر المتوقعة
          </label>
          <select
            id="price"
            className={`w-full px-4 py-3    bg-transparent border-0 border-b-2 border-emerald-400 appearance-none `}

            name="price" value={formData.price} onChange={handleChange}
            // className={`w-full px-4 py-2 rounded border ${
            //   formError && !price ? 'border-red-500' : 'border-gray-300'
            // } focus:outline-none focus:ring ${
            //   formError && !price ? 'ring-red-500' : 'ring-blue-200'
            // }`}
          >
            <option value="" disabled> حدد السعر المتوقع للخدمة</option>
            <option value="100.0">5$</option>
            <option value="100.0">10$</option>
            <option value="90.0">15$</option>
            <option value="10.0">20$</option>
            <option value="40.4">25$</option>
            <option value="10.0">30$</option>
            <option value="10.0">40$</option>
            <option value="10.0">50$</option>
            <option value="10.0">75$</option>
            <option value="10.0">100$</option>
            <option value="10.0">150$</option>

          </select>
          {errors.price ? (<p className="text-red-500 text-sm mt-1"> {errors.price} </p>) : (<><p className='text-[12px] text-gray-400'>حدد السعر المناسب</p></>)}

          {errors.price &&  (
            <p className="text-red-500 text-sm mt-1">
           {errors.price}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block font-medium mb-1">
           حدد المدة المتوقعة لتسليم الخدمة (عدد الايام)
          </label>
          <input
            type="date"
            id="time"
            name="delivery_time" value={formData.delivery_time} onChange={handleChange}
            className={`w-full px-4 py-3    bg-transparent border-0 border-b-2 border-emerald-400 appearance-none `}

            />
                      {errors.delivery_time ? (<p className="text-red-500 text-sm mt-1"> {errors.delivery_time} </p>) : (<><p className='text-[12px] text-gray-400'>حدد مدة تسليم مناسبة لك. يستطيع المشتري إلغاء الخدمة مباشرة في حال التأخر بتسليم الخدمة في الموعد المحدد</p></>)}

            {errors.delivery_time &&
              <p className="text-red-500 text-sm mt-1">
               {errors.delivery_time}
              </p>
            }
        </div>
        </div>
      
        <div className="mb-4">
          <label htmlFor="file" className="block font-medium mb-1">
            ارفق ملفات حول الخدمة
          </label>
          {/* <input
            type="file"
            id="file" 
           
            name="file" onChange={handleImageChange}
            // className={`${
            //   formError && !file ? 'border-red-500' : 'border-gray-300'
            // }`}
          /> */}
            <div className="shrink-0">
    <img className="h-16 w-16 object-cover rounded-full" src={selectedImage} alt="Current profile photo" />
  </div>
  <label className="block">
    <span className="sr-only">Choose profile photo</span>
    <input  id="file"  name="file" onChange={handleImageChange}
     type="file" className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
  </label>
          {errors.file &&
            <p className="text-red-500 text-sm mt-1">
             {errors.file}
            </p>
          }
        </div>
        <button
          type="submit"
          className="bg-blue-500 w-full hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          نشر
        </button>
      </form>
    </div>

    </>)
}