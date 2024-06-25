import React, { useState, useEffect } from "react";
import ImageUSer from "../assets/react.svg"
import { FaCartPlus, FaConnectdevelop, FaEye, FaIdCard, FaPhone, FaStar } from "react-icons/fa";
import { NavLink ,useParams} from 'react-router-dom';
import axios from "../axios/axios";

export default function UserProfile(){
    const { userId } = useParams();
    const [userData, setUserData] = useState({}); 
    const [aboutus ,setAboutus]=useState(false);
    const [service ,setservice]=useState(false);
    const [review ,setreview]=useState(false);

    
    const [projects ,setprojects]=useState(false);
    function handlereview(){
        setservice(false)
        setprojects(false)
        setAboutus(false)
        setreview(!review)
    }

    function handleAboutus(){
        setservice(false)
        setprojects(false)
        setreview(false)
        setAboutus(!aboutus)
    }
    function handleservice(){
        setAboutus(false)
        setprojects(false)
        setreview(false)

        setservice(!service)
    }
    function handleprojects(){
        setAboutus(false)
        setservice(false)
        setreview(false)

        setprojects(!projects)
    }
   
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`users/${userId}`); // Assuming API endpoint for user profile
        setUserData(response.data);
      } catch (error) {
        console.error(error); // Handle errors appropriately
      }
    };
    fetchUserData();
  }, [userId]);
    return (
        <>
      
        
       <section className="container m-auto md:mt-4 bg-gray-50">
        
        <div className="  text-center flex flex-col items-center">
           
            <div className="bg-white md:w-64 w-72 flex flex-col items-center p-4 m-2  shadow-lg ">
                
                <img
                
                    src={"http://localhost:8000/" + userData.image}
                  
                 alt="" className="bg-green-300 block  rounded-full w-32 h-32"  />
                    <div className="">
                         <p className="text-xl m-2"> {userData.firstName}</p>
                         <span> {userData.Specialization}</span>
                         <span> |{userData.user_type} </span>
                         <div className="flex flex-row justify-center gap-1 m-2">
                               <FaStar color="gray"/> <FaStar color="gray"/> <FaStar color="gray"/> <FaStar/> <span className="text-[12px]">(0.0)</span>


                         </div>
                         <div>
                          
                            <p className="text-[15px]">اخر ظهور : <span>منذ يوم</span> <FaEye className="inline"/></p>  
                            <button className="px-11 py-2 mt-2 shadow-md border-none outline-none  rounded-md bg-amber-500">
                               
                                    <NavLink to="/message"> <FaPhone className="inline ml-2"/>اتواصل معي</NavLink>
                            </button>
                        
                         </div>
                      
                   
                    </div>
               
               
            </div>

   <div className="flex flex-row justify-start bg-white shadow-xl border-2 w-full  ">
    <div className="w-1/4 hover:bg-gray-200 py-4 px-2 border-l-2  ">
        <button onClick={handleAboutus}>
              <NavLink> نبذة عني</NavLink>
        </button>
       
          
          

      
    
    </div>
    <div className="w-1/4 hover:bg-gray-200 py-3 px-1 border-l-2  ">
    <button onClick={handleservice}>
              <NavLink> الخدمات</NavLink>
        </button>
       
    </div>
    <div className="w-1/4 hover:bg-gray-200 py-3 px-1 border-l-2  ">
    <button onClick={handleprojects}>
              <NavLink> المشاريع</NavLink>
        </button>
       
    </div>
    <div className="w-1/4 hover:bg-gray-200 py-3 px-1 border-l-2  ">
         <NavLink>
    <button onClick={handlereview}>
              التقييمات والاراء
        </button>
       </NavLink>
    </div>


  

        </div>

        </div>
        {
            aboutus ? (<>
            <div>
             <p className="text-2xl font-body border-b-2 w-32 pb-2 mt-4">نبذة عني</p>
             <div>
                <p className="p-2  shadow-sm  bg-white">
                {userData.summary}
                </p>
             </div>
            </div>

            <div>
             <p className="text-2xl font-body border-b-2 w-32 pb-2 mt-4"> مهاراتي</p>
             <div className="  bg-white text-right flex justify-start gap-2 flex-wrap m-2 p-4  ">
             <div className=" w-fit border-2 shadow-md  p-2">
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
            </div>
            </div>

            <div>
             <p className="text-2xl font-body border-b-2 w-32 pb-2 mt-4"> الاحصائيات</p>
             <div className="  bg-white text-right flex flex-col justify-start gap-2 flex-wrap m-2 p-4  ">
             <div className="flex flex-row justify-between pt-2 pb-2 border-b-2">
                <p>التقييمات</p>
                <p className="text-gray-200 inline"><FaStar className="inline"/> <FaStar className="inline"/><FaStar className="inline"/><FaStar className="inline"/> <span className="text-[12px] text-amber-200">(0.0) </span> </p>
            </div>
            <div className="flex flex-row justify-between pt-2 pb-2 border-b-2">
            <p>تاريخ إنشاء الحساب</p>
                <p>2020-2-20</p>
            </div>
            <div className="flex flex-row justify-between pt-2 pb-2 border-b-2">
            <p>اخر ظهور</p>
                <p>الامس</p>
            </div>
            <div className="flex flex-row justify-between pt-2 pb-2 border-b-2">
            <p>مشاريع المكتملة </p>
                <p>12</p>
            </div>
            <div className="flex flex-row justify-between pt-2 pb-2 border-b-2">
            <p> عدد مشاريع يعمل عليها حاليا </p>
                <p>12</p>
            </div>

            </div>
            </div>
            <div className="bg-white shadow-xl p-4 mt-2 ">
            
            <p className="text-xl  border-b-2 p-4 m-2">توثيق الحساب</p>


            <div className="border-t-2">
                <div className="flex flex-col gap-2 ">
                  
                   
                    
                    <p className="  p-2" > <FaPhone className="inline ml-1"/>
                    <NavLink to=""> رقم الهاتف  </NavLink> </p>
                    <span className="text-[12px]">لم يتم التوثيق بعد</span>
                    <p className="  p-2"><FaIdCard className="inline ml-1"/> <NavLink to=""> الهوية الوطنية  </NavLink> </p>
                    <span className="text-[12px]">لم يتم التوثيق بعد</span>

                </div>

            </div>
        </div>
            </>):(<></>)
        }

{
            service ? (<>
            <div>
             <p className="text-2xl font-body border-b-2 w-32 pb-2 mt-4">خدماتي </p>
             <div className="flex justify-center mt-2 h-fit w-full">
                 <div className="bg-white shadow-lg rounded-lg w-72   ">
      <img src={ImageUSer} alt="Service" className=" w-full  " />
      <div className="p-4">
      
        <p>عمل متجر إلكتروني شديد الإحترافية، وخلال ساعات قليلة</p> 
       
     
      </div>
     
     
      
      <div className="border-t-2 flex justify-between  border-amber-500">
      <div className="flex flex-row  ">
        <div>
             <img src={ImageUSer} alt="Provider Icon" className="w-8 h-8 rounded-full mr-2 block mt-3" />
        
        </div>
        <div className=" ">
              <h4 className="text-xl font-semibold mr-2">محمد</h4>
              <div className="flex flex-row justify-between ">
                  <p className="text-gray-600 mb-2 mr-2 ">مهندس برمجيات</p>
                 
              </div>
             
            
        </div>
       
         
        </div>
      
        <div className="flex flex-col  items-end m-2">
            <div className="flex gap-2">
            <p className="text-green-500 font-semibold ">300$</p>
              <span>(0)</span>  <FaCartPlus className="mt-1 inline-block" />
            </div>
        
        <div className="flex m-2 text-gray-300 justify-end w-full ">
            <FaStar/><FaStar/><FaStar/><FaStar/>
        </div>
        
        </div>
       
        
    
      </div>
       <NavLink to="/details-service"> 
      <button className="p-2 text-center bg-amber-500 rounded-md shadow-sm w-full hover:bg-amber-400">
       تصفح
        </button></NavLink>
    </div>
             </div>
             <div>

               
             </div>
            </div>
            </>):(<></>)
        }
        {
            projects ? (<>
            <div className="bg-gray-50 m-4">
            <p className="text-2xl font-body border-b-2 w-32 pb-2 mt-4">المشاريع </p>

            <div className="border-2 mt-4">

     <div className=" bg-white flex flex-row gap-1   justify-start   ">
            <img src={ImageUSer} alt="" className="w-10 h-10 rounded-full m-2 "  />
               <div className="flex flex-col items-start  m-2">
                       <p className="text-lg pb-1"> <spanc className="text-red-800 font-bold shadow-sm bg-gray-600 p-1 text-[12px] border-2">مكتمل </spanc> |علي احمد</p> 
                           <p className="text-sm">مطور مواقع</p>
               </div>
              
       
              
               </div>
            <div className=" bg-white flex flex-col items-start w-full ">
                <p className="text-xl m-2 ">
                   <NavLink to="/detailsProject">
                      تصميم وتطوير موقع الالكتروني         
                   </NavLink> </p>
        </div>
        <div className=" bg-white flex flex-row-reverse justify-evenly border-t-2 p-3  ">
                <p>الزمن :يومين</p>
                <p>العروض : 10</p>
                <p>الميزانية :50$-$100</p>
                <p>الزمن :منذو ساعتين</p>


            </div>
                </div>

       
            <div className="border-2 mt-4">
      <div className=" bg-white flex flex-row gap-1   justify-start    ">
            <img src={ImageUSer} alt="" className="w-10 h-10 rounded-full m-2 "  />
               <div className="flex flex-col items-start  m-2">
                       <p className="text-lg pb-1"> <spanc className="text-red-800 font-bold shadow-sm bg-gray-600 p-1 text-[12px] border-2">مكتمل </spanc> |علي احمد</p> 
                           <p className="text-sm">مطور مواقع</p>
               </div>
              
       
              
               </div>
            <div className=" bg-white flex flex-col items-start w-full ">
                <p className="text-xl m-2 ">
                   <NavLink to="/detailsProject">
                      تصميم وتطوير موقع الالكتروني         
                   </NavLink> </p>
        </div>
        <div className=" bg-white flex flex-row-reverse justify-evenly border-t-2 p-3  ">
                <p>الزمن :يومين</p>
                <p>العروض : 10</p>
                <p>الميزانية :50$-$100</p>
                <p>الزمن :منذو ساعتين</p>


            </div>

            </div>
      
         
            </div>
            
            </>):(<></>)

            
        }

{
                review ? (<>
                <div className="border-2 border-white mt-6 shadow-sm p-2 bg-white ">
      <h2 className="text-xl font-bold mb-4">تقييمات العملاء</h2>
      <div className=" bg-white flex flex-row gap-1   justify-start   ">
            <img src={ImageUSer} alt="" className="w-8 h-8 rounded-full m-2 "  />
               <div className="flex flex-col items-start w-1/2   m-2">
                       <p className="text-sm pb-1"> <spanc className="text-red-800 font-bold shadow-sm bg-gray-600 p-1 text-[12px] border-2">مكتمل </spanc> |علي احمد</p> 
                      

               </div>
              <p className="mt-1 text-left pl-1 w-1/2 text-gray-600">منذ اسبوع</p>
              
       
              
               </div>
            <div className=" bg-white flex flex-col items-start w-full ">
                <p className="text-md mt-[-10px] mr-[50px] text-gray-600  ">
                   <NavLink to="/detailsProject">
                      تصميم وتطوير موقع الالكتروني         
                   </NavLink> </p>
        </div>
        <div className="flex flex-col gap-2 mr-12 mt-2  text-gray-800 p-2 bg-white">
            <div className="flex justify-between">
                <p>التواصل والمتابعة</p>
                <div className="flex gap-1 text-gray-400">
                   <FaStar/>  <FaStar/> <FaStar/> <FaStar/> 
                </div>
            </div>
            <div className="flex justify-between">
                <p> جودة العمل المسلّم</p>
                <div className="flex gap-1 text-gray-400">
                   <FaStar/>  <FaStar/> <FaStar/> <FaStar/> 
                </div>
            </div>  <div className="flex justify-between">
                <p> الخبرة بمجال المشروع</p>
                <div className="flex gap-1 text-gray-400">
                   <FaStar/>  <FaStar/> <FaStar/> <FaStar/> 
                </div>
            </div>  <div className="flex justify-between">
                <p> التسليم فى الموعد</p>
                <div className="flex gap-1 text-gray-400">
                   <FaStar/>  <FaStar/> <FaStar/> <FaStar/> 
                </div>
            </div>
        </div>
    
        <div  className="flex items-center mb-4">
          <img src={ImageUSer} alt="" className="w-10 h-10 rounded-full mr-4" />
          <div>
            <h4 className="text-sm mt-4 font-semibold mr-2">صاحب المشروع</h4>
            <p className="text-gray-600 mr-2">مبرمج محترف ومتعاون وعمل التعديلات المطلوبة بسرعة وجودة عالية</p>
          </div>
          <hr className="my-2" />
        </div>
      
    </div>
                
                </>):(<></>)
            }
        


     
       


       </section>
        
        </>
    )
}