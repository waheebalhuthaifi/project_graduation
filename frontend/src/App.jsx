
import React, { useEffect ,useState } from 'react'
import './App.css'
import { BrowserRouter as Router , Routes, Route ,Navigate  } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Project from "./Layouts/Project";
import Home from "./Layouts/Home";

import Services from './Layouts/Services';
import Slider from './Layouts/Slider';
import Nav from './Pages/Nav';
import Footer from './Layouts/Footer';


import ProtectedLayout from './components/Common/ProtectedLayout';
import GuestLayout from './components/Common/GuestLayout';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Profile from './Layouts/Profile';
import About from './Layouts/About';
import { AuthProvider } from './contexts/AuthContext';
import DetailsProject from './Pages/DetailsProject';
import UserProfile from './Pages/UserProfile';
import DetailsService from './Pages/DetailsService';
import Dashboard_user from './Panel_Users/Dashboard';
import Addproject from './Panel_Users/add_project';
import Add_service from './Panel_Users/add_service';
import Add_my_work from './Panel_Users/add_my_work';
import InformationUSer from './Layouts/indormation_user';
import Set_username from './Panel_Users/set_username';
import RecoveryPassword from './components/auth/RecoveryPassword';
import MessageThread from './Pages/MessageThread';
import NotFoundPage from './Pages/404';
import {useAuth } from './contexts/AuthContext';
// import Profile from './Layouts/Profile';

// import Sidebar_Dashboard from './DashboardAdmin/Component/Sidbar-Dashboard';
import Admin from './DashboardAdmin/Layout-Dashboard/Admin/Route-dashboard';
import Tableuser from './DashboardAdmin/Layout-Dashboard/Admin/View/Tableuser';
import FilterServices from './Layouts/FilterService';
import axios from './axios/axios';
import Sidebar_Dashboard from './DashboardAdmin/Component/Sidbar-Dashboard';
// import { useAuth } from './contexts/AuthContext';
import EditService from './Panel_Users/EditeService';
import Portfolio from './Layouts/portfolio/Portfolio';
import { AddPortfolio } from './Layouts/portfolio/add_portoflio';
import { EditePortfolio } from './Layouts/portfolio/editePortfoilo';
// import Chat from "/Chat/Messanger"
import Messanger from './Chat/Messanger';
import EmailVerification from './components/auth/EmailVerification';
function App() {
  // const [userRole, setUserRole] = useState();
  const { user} = useAuth();
  //   JSON.parse(localStorage.getItem('user'))?.role || null
  // 
  // const role = userRole && userRole.role;
  // console.log(JSON.parse(localStorage.getItem('user'))?.role || null)

  // useEffect(()=>{

  //   setUserRole(JSON.parse(localStorage.getItem('user'))?.role || null)


  // })

  // const isAdmin =false;
  const [userRole, setUserRole] = useState()
  useEffect(()=>{
    setUserRole(JSON.parse(localStorage.getItem('user'))?.role || null)
    console.log(userRole);
 },[userRole])
    
  return (
    <>
   
   
  {/* <Dashboard_route/> */}
     {/* <Navbar/> */}
     {/* <Admin/> */}
        <AuthProvider>
        
      {/* {console.log(user)} */}
        {userRole ? (
          <>
            {/* <Sidebar_Dashboard/> */}
            <Admin/>
         {/* <Sidebar_Dashboard/> */}
            
             <Routes>
             {/* <Route  path="/admin/dashboard" element={ <Admin/>} /> */}

             {/* <Route  path="/admin/dashboard/show-user" element={<Tableuser/>} /> */}

             </Routes>
           
          </>
        ) :(
      

          <>
          <Nav/>
          <Routes>
         
                 {/* <Route  path="/Dashboard-admin" element={<Dashboard/>} /> */}
                 {/* <Route  path="/Slider" element={<Slider/>} /> */}
           
                 <Route path="*" element={<NotFoundPage/>}/>
                 <Route  path="/services" element={<Services/>} />
                 <Route  path="/services/:categoryName" element={<FilterServices/>} />
                 <Route  path="/edite/:id/service" element={<EditService/>} />


                 <Route  path="/chat/:id" element={<Messanger/>} />


                 
                

                 

                 <Route  path="/project" element={<Project/>} />
                 <Route  path="/detailsProject" element={<DetailsProject/>} />
                 <Route  path="/user-profile/:userId" element={<UserProfile/>} />

                
                 <Route  path="/details-service/:id" element={<DetailsService/>} />
                <Route  path="/portfolio/:id" element={<Portfolio/>} />
                <Route  path="/add-portfolio" element={<AddPortfolio/>} />
                <Route  path="/edite/:id/portfolio" element={<EditePortfolio/>} />

                

                

                 <Route  path="/add_project" element={<Addproject/>} />
                 <Route  path="/add_service" element={<Add_service/>} />
                 <Route  path="/add_my_work" element={<Add_my_work/>} />
                 <Route  path="/set-username" element={<Set_username/>} />
                 <Route  path="/recovery-password" element={<RecoveryPassword/>} />
                 <Route  path="/message" element={<MessageThread/>} />
                 {/* <Route  path="/profile" element={<Profile/>} /> */}
         
                 
                 <Route  path="/home" element={<GuestLayout><Home /></GuestLayout>} />
                 <Route  path="/login" element={<GuestLayout><Login /></GuestLayout>} />
                 <Route path="/register" element={<GuestLayout><Register /></GuestLayout>} />
                 <Route path="/email-verification" element={  <EmailVerification />} />
                 
                 {/* <Route path="/about" element={<ProtectedLayout><About /></ProtectedLayout>} /> */}

                 {/* <Route path="/profile" element={<ProtectedLayout><Profile /></ProtectedLayout>} /> */}
                 <Route path="/dashboard" element={<ProtectedLayout />}>
                 {/* <Route path="profile" element={<Profile />} /> */}
                 <Route  path="profile" element={<Dashboard_user/>} />
                
               </Route>
                 </Routes>
            
         
         
             

                  <Footer/>
          </>
        )}
         <ToastContainer />
    </AuthProvider>
        
        
   
      
    </>
  )
}

export default App
