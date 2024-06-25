import Nav from "./Nav";
import { FaStar } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import ImageUSer from "../assets/react.svg"

export default function DetailsProject(){

    return (
        <>
    
        <section className="md:container md:m-auto ">
        <div className="shadow-sm border-2 m-2  border-b-2 ">

<div className="flex flex-row gap-1   justify-start   ">
   <img src={ImageUSer} alt="" className="w-10 h-10 rounded-full m-2 "  />
   
      <div className="flex flex-col items-start  m-2">
         <p className="text-lg pb-1">
        <NavLink to="/user-profile">علي حسن</NavLink>
               </p> 
                  <p className="text-sm">مطور مواقع</p>
      </div>
      <div className="flex flex-row gap-3 text-gray-200 mt-4 mr-12">
                 <FaStar className=""/>  <FaStar/> <FaStar/> <FaStar/>
              </div>

     
      </div>

  <div className="flex md:flex-row flex-col    md:justify-around  ">
  <div className="flex flex-col items-start w-full  ">
       <p className="text-xl m-2">
          <NavLink to="/detailsProject">
             تصميم وتطوير موقع الالكتروني         
          </NavLink></p>
  
       <p className="text-md m-2 text-right ">  اريد مصمم ومطور موقع ويب لعمل صفحة هبوط لشركة ناشئه وتحتوى على صفحات الرئيسية ةصفحة من نحن وصفحة الاتصال بنا وصفحة سيايات الخصوصة وصفحة ماذا نقدم وصفحة عرض الخدمات المطلوبة </p>
 
 
</div> 

   
  </div>
  <div className=" text-xl text-right  ">
  <p className="p-2 text-xl border-t-2 "> المهارات المطلوبة</p>
    </div>
    <div>
  
  <ul className="*:rounded-full *:m-2 *:border *:w-fit *:inline-block *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-black dark:*:border-sky-500/15 dark:*:bg-white">
    <li>JavaSript</li>
    <li>Laravel Php</li>
    <li>HTML</li>
    <li>JavaSript</li>
    <li>Laravel Php</li>
   
   
  </ul>
</div>

  {/* <div className=" text-right flex justify-start gap-4 flex-wrap m-2 mt-4  ">
    <div className=" w-fit border-2 shadow-sm  p-2">
    <p> JavaSript </p>
    </div>
    <div className=" w-fit border-2 shadow-md  p-2">
    <p> Laravel Php</p>
    </div>
    <div className=" w-fit border-2  shadow-md p-2">
    <p> HTML</p>
    </div>
    <div className=" w-fit border-2  shadow-md  p-2">
    <p> HTML</p>
    </div>
   </div> */}
   <div className="text-right  border-b-2 mb-10 ">
    <div>
           <p className="p-2 text-xl border-t-2  text-right" >اضف العرض</p>
    </div>
    <form  action="" method="post">
        <div className="">
            <label htmlFor="" className="block p-2 ">مدة التسليم</label>
            <input type="number" name="" placeholder="مدة التسليم بالايام" id="" />
        </div>
        <div>
            <label htmlFor="" className="block  p-2">قيمة العرض </label>
            <input type="number" name=""  className="" placeholder="مدة التسليم بالايام" id="" />
            <p className="text-sm m-2 text-gray-500">المستحقاتك بعد خصم العمولة : <span>$90</span></p>
        </div>
        <div>
            <label htmlFor="" className="block  p-2">تفاصيل العرض </label>
            <textarea name="" id="" className="w-full h-52 text-right"></textarea>

        </div>
        <input type="submit" value="إرسال العرض" className="border-2 w-full p-2 mt-2 mb-2 hover:bg-amber-600 bg-amber-500 rounded-md text-center" />
    </form>
 


   </div>

   <div className="flex flex-row gap-1   md:justify-start  ">
   
   <img src={ImageUSer} alt="" className="w-10 h-10 rounded-full  "  />
      <div className="flex flex-col items-stretch md:items-end  text-right">
              <p className="text-lg pb-1"> علي احمد</p> 
              
                  <p className="text-sm">مطور مواقع |<span > منذ 22 دقيقة</span></p>
                  <div className="flex flex-row  text-gray-200 text-xl mt-2 justify-end h-full">
                 <FaStar className=""/>  <FaStar/> <FaStar/> <FaStar/>
      </div>
      </div>
     
      <div className="border-2 p-4 mr-10 bg-amber-500  h-fit  py-2 text-left">
                <NavLink to="/profile">وظفني</NavLink>
      </div>


     
      </div>
      <p className="text-md m-2 text-right border-b-2 pb-2">  مرحبا علي يمكنك التواصل معي خاص لدي من مهارات لتنفيذ مشروعك حسب المواصفات  </p>

      <div className="flex flex-row gap-1   md:justify-start   ">
   
   <img src={ImageUSer} alt="" className="w-10 h-10 rounded-full  "  />
      <div className="flex flex-col items-stretch md:items-end  text-right">
              <p className="text-lg pb-1"> علي احمد</p> 
              
                  <p className="text-sm">مطور تطبيقات الاندرويد |<span > منذ 22 دقيقة</span></p>
                  <div className="flex flex-row  text-gray-200 text-xl mt-2 justify-end h-full">
                 <FaStar className=""/>  <FaStar/> <FaStar/> <FaStar/>
      </div>
      </div>
     
      <div className="border-2 p-4 mr-10 bg-amber-500  h-fit  py-2 text-left">
                <NavLink to="">وظفني</NavLink>
      </div>


     
      </div>
      <p className="text-md m-2 text-right ">  اريد مصمم ومطور موقع ويب لعمل صفحة هبوط لشركة ناشئه وتحتوى على صفحات الرئيسية ةصفحة من نحن وصفحة الاتصال بنا وصفحة سيايات الخصوصة وصفحة ماذا نقدم وصفحة عرض الخدمات المطلوبة </p>

  </div>

   
   
        </section>
       
        </>
    )
}