import Nav from "../Pages/Nav";
import { FaStar } from 'react-icons/fa';
import ImageUSer from "../assets/react.svg"
import { NavLink } from 'react-router-dom';
import FilterServices from "./FilterService";

export default function Project(){

    return (
        <>
    
        <section className=" ">
         <div className='flex flex-col md:flex-row'>
      <div className='md:w-[23%]  mr-2 bg-white border-l-2'>
        {/* <FilterServices/> */}
      </div>
     
   
<div>


            <div className="shadow-sm border-2 m-2 flex flex-col  border-b-2 ">

         <div className="flex flex-row gap-1   justify-star   ">
          

            
            <img src={ImageUSer} alt="" className="w-10 h-10 rounded-full m-2 "  />
               <div className="flex flex-col items-end  m-2">
               <NavLink to="/user-profile" className="text-lg pb-1">علي حسن</NavLink>
                           <p className="text-sm">مطور مواقع</p>
               </div>
               <div className="flex flex-row gap-3 text-gray-200 mt-4 mr-12">
                          <FaStar className=""/> <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                       </div>
       
              
               </div>

           
            <div className="flex flex-col items-start w-full ">
                <p className="text-xl m-2">
                   <NavLink to="/detailsProject">
                      تصميم وتطوير موقع الالكتروني         
                   </NavLink>
                 

                        </p>
           
                <p className="text-md m-2 text-right">  اريد مصمم ومطور موقع ويب لعمل صفحة هبوط لشركة ناشئه وتحتوى على صفحات الرئيسية ةصفحة من نحن وصفحة الاتصال بنا وصفحة سيايات الخصوصة وصفحة ماذا نقدم وصفحة عرض الخدمات المطلوبة </p> 
        </div>
        <div className="flex flex-row justify-evenly border-t-2  ">
                <p>الزمن :يومين</p>
                <p>العروض : 10</p>
                <p>الميزانية :50$-$100</p>
                <p>الزمن :منذو ساعتين</p>


            </div>
            </div>
            <div className="shadow-sm border-2 m-2  border-b-2 ">

<div className="flex flex-row gap-1   justify-start ">
   <img src={ImageUSer} alt="" className="w-10 h-10 rounded-full m-2 "  />
      <div className="flex flex-col items-end  m-2">
      <NavLink to="/user-profile">علي حسن</NavLink>
                        <p className="text-sm">مطور مواقع</p>
      </div>
      <div className="flex flex-row gap-3 text-gray-200 mt-4 mr-12">
                 <FaStar className=""/> <FaStar/> <FaStar/> <FaStar/> <FaStar/>
              </div>

     
      </div>

  
   <div className="flex flex-col items-start w-full ">
       <p className="text-xl m-2">تصميم وتطوير موقع الالكتروني</p>
  
       <p className="text-md m-2 text-right">  اريد مصمم ومطور موقع ويب لعمل صفحة هبوط لشركة ناشئه وتحتوى على صفحات الرئيسية ةصفحة من نحن وصفحة الاتصال بنا وصفحة سيايات الخصوصة وصفحة ماذا نقدم وصفحة عرض الخدمات المطلوبة </p>
 
 
</div>
<div className="flex flex-row justify-evenly border-t-2 ">
       <p>الزمن :يومين</p>
       <p>العروض : 10</p>
       <p>الميزانية :50$-$100</p>
       <p>الزمن :منذو ساعتين</p>


   </div>
   </div>
   <div className="shadow-sm border-2 m-2  border-b-2 ">

<div className="flex flex-row gap-1   justify-start ">
   <img src={ImageUSer} alt="" className="w-10 h-10 rounded-full m-2 "  />
      <div className="flex flex-col items-start  m-2">
      <NavLink to="/user-profile">علي حسن</NavLink>
                        <p className="text-sm">مطور مواقع</p>
      </div>
      <div className="flex flex-row gap-3 text-gray-200 mt-4 mr-12">
                 <FaStar className=""/> <FaStar/> <FaStar/> <FaStar/> <FaStar/>
              </div>

     
      </div>

  
   <div className="flex flex-col items-start w-full ">
       <p className="text-xl m-2">

        تصميم وتطوير موقع الالكتروني</p>
  
       <p className="text-md m-2 text-right">  اريد مصمم ومطور موقع ويب لعمل صفحة هبوط لشركة ناشئه وتحتوى على صفحات الرئيسية ةصفحة من نحن وصفحة الاتصال بنا وصفحة سيايات الخصوصة وصفحة ماذا نقدم وصفحة عرض الخدمات المطلوبة </p>
 
 
</div>
<div className="flex flex-row justify-evenly border-t-2 ">
       <p>الزمن :يومين</p>
       <p>العروض : 10</p>
       <p>الميزانية :50$-$100</p>
       <p>الزمن :منذو ساعتين</p>


   </div>
   </div>

   
   </div>
</div>
        </section>
       
        </>
    )
}