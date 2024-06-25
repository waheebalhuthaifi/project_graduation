import { useEffect, useState } from "react";
import Nav from "../Pages/Nav";
import ImageUSer from "../assets/person.webp"
import axios from "../axios/axios";
import { useAuth } from "../contexts/AuthContext";

export default function Set_username(u){

    const [username, setUsername] = useState('');
    const [Specialization, setSpecialization] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [field, setField] = useState('');
    const[user_type,setUser_type]=useState();
    const [sumbitClick, setSumbitClick] = useState(false);
    const [editUser , setEditUser]=useState(false);
    // const [user,setUser]=useAuth()
    const {user,setUser}=useAuth()
    // const [editUser , setEditUser]=useState(false);

    
    // console.log(Specialization)
    // const [users,setUsers]=useState([])
    // useEffect(() => {
    //   const fetchUser = async () => {
    //     try {
    //       // console.log(user.id);
    //       const response = await fetch(`http://127.0.0.1:8000/api/users/${user.id}`);
    //       const data = await response.json();
    //       setUsers(data);
    //       console.log(users)
        
    //       // console.log(u);
    //     } catch (error) {
    //       console.log('Error fetching users:', error);
    //     }
       

    //   };
    
    //   fetchUser();
    //   // editInformationHandel();

    // }, []);
    useEffect((e)=>{

      editInformationHandel(e)
    },[1])

    const handleEditUser = async (e) => {
      const { username,  user_type,field,Specialization } = e.target.elements;
     
      const body = {
        username: username.value,
        user_type: user_type.value,
        Specialization:Specialization.value,
        field: field.value,
      

      };
      console.log(body)
      try {
        await axios.post(`/users/${user.id}`, body);
      } catch (error) {
        console.error('Error updating user:', error.message);
        console.error('Error details:', error.response.data);
      }
    }
      const editInformationHandel =()=>{
       
        setUsername(u.p.username)
        setSpecialization(u.p.Specialization)
        setField(u.p.field);
        setUser_type(u.p.user_type)
        setEditUser(!editUser)
      


        // console.log("dd",u.firstName)

      }
    

    console.log('slls',u.p.field)

    const [errors, setErrors] = useState({
        username: '',
        Specialization:'',
        user_type:'',
        field:'',
       
      });
      const validateInfo=()=>{
          let formIsValid = true;
        const newErrors = {
           ...errors
        };
        if (!user_type) {
          formIsValid = false;
          errors.user_type='يرجى اختيار خيار واحد على الأقل.';
          // console.log(selectedOption);
        
        }
           if (username.length<=4) {
          formIsValid = false;
          errors.username = '   فضلا ادخل اسم المستخدم اكثر من 3 احرف';
        
        }
         if (Specialization.trim()==='') {
            formIsValid = false;
            errors.Specialization = '   اختار التخصصك';
          
          }
          if (field.trim()==='') {
            formIsValid = false;
            errors.field = '   اختار المسمي الوظيفي';
           
          }
          console.log(field)
          // console.log(selectedOption);
        setErrors(errors);
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        setSumbitClick(true)
        if (validateInfo()){
          //Api use
          console.log(username,field,Specialization, user_type)
          handleEditUser(event);
        }
    
        // التحقق من الحقول الفارغة
      
        // handleEditUser(event);
    }

    return (<>

    <section className=" container m-auto">
    <button className="py-2 px-6 bg-red-700 text-white float-end m-2 shadow-md rounded-md " onClick={editInformationHandel} >Edite</button>

        
        <div className="flex flex-col items-center ">
        <div className=" mb-4 mt-4 ">
        <img
          src={"http://localhost:8000/" + u.p.image}
          alt="صورة شخصية"
          className="rounded-full w-24 h-24"
        />
      </div>
            <form onSubmit={handleSubmit} action="" method="post" >


      <div className="mb-4   ">
        <label htmlFor="lastName" className="block text-sm  mb-2">
           اسم المستخدم (باللغة العربية)
        </label>
        <input
          type="text"
          readOnly={editUser}
          id="username"
          className={` w-full border ${
            errors.username ? 'border-red-500' : 'border-gray-300'
          } px-4 py-2 rounded-md`}
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        {!username  && (
          <p className="text-red-500 mt-1">{errors.username}</p>
        )}
      </div>


      <div className=" mb-2">

      <div>
    <label htmlFor="" className="mb-2 block">نوع الحساب</label>
    <div className="mb-3">
      <input
        type="radio"
        readOnly={editUser}

        name="user_type"
        value='freelancer'
        checked={user_type === "freelancer"}
        onChange={(event) => setUser_type(event.target.value)}
        id="Employer"
      />
      <label htmlFor="Employer" className="mr-2 text-sm">
        مشتري: هل أنت صاحب مشروع أو مشتري أو تبيع الخدمات
      </label>
    </div>
    <div>
      <input
        type="radio"
        name="user_type"
        readOnly={editUser}
        value='client'
        checked={user_type === "client"}
        onChange={(event) => setUser_type(event.target.value)}
        id="Freelancer"
      />
            {console.log("user_type : ",user_type)}

      <label htmlFor="Freelancer" className="mr-2 text-sm">
        مستقل: هل أنت منفذ المشاريع أو مشتري أو تبيع الخدمات
      </label>
      {!user_type && <p className="text-red-500 mt-1">{errors.user_type}</p>}
    </div>
  </div>
                <div className="w-full  p-2">
                <label htmlFor="" className="mb-2 mt-2 block ">المسمي الوظيفي </label>

                    <input type="text" readOnly={editUser} value={Specialization} name="Specialization"  onChange={(event)=>setSpecialization(event.target.value) }  className="w-full   " placeholder ="مثل : مهندس تقنية معلومات"  />
                    {!Specialization  &&  <p className="text-red-500 mt-1">{errors.Specialization}</p>}


                </div>
                <div className="mb-4 w-full ">
        <label htmlFor="gender" className="block  mt-4 mb-2">
           تخصصك
        </label>
        <select
          id="specialization"
          readOnly={editUser}
          className={`w-full text-sm  border ${
            errors.field ? 'border-red-500' : 'border-gray-300'
          } px-4 py-2 rounded-md`}
          value={field}
          name="field"
          onChange={(event) => setField(event.target.value)}
        >
          <option value="" disabled>اختر تخصصك</option>
          <option value="تطوير الويب ">برمجة و تطوير</option>
          <option value="تسويق ومبيعات">تسويق ومبيعات</option>
          <option value="كتابة والترجمة">كتابة والترجمة</option>
          <option value="التدريب والاستشارات">التدريب والاستشارات </option>

          <option value="التصميم الجرافيكي"> التصميم الجرافيكي</option>


        </select>
        
        {!field &&  <p className="text-red-500 mt-1">{errors.field}</p>}
      </div>
              
               


            </div>
            {
              !editUser ?
              (<div className="w-full bg-amber-500 p-2">
              <input type="submit"  value="تحديث بيانات" className="w-full  " />
          </div>) : ""
            }
               
            </form>
        </div>
    </section>
    
    </>)

}