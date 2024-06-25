import Sidebar_Dashboard from "../../Component/Sidbar-Dashboard";
import Navbar from "../../Component/Navbar-Dashboard";
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Tableuser from "./View/Tableuser";
import UserBlock from "./View/UserBlock";
import UserPermission from "./View/UserPermissions";
import SkillsUSer from "./View/SkillUser";
import VerifyUser from "./View/VerifyUsers";
import RegRequest from "./View/registrationRequest";
import UserProfile from "./View/UsersProfile";
import { useState } from "react";
import WithdrawalsHistory from './View/Withdrawals/Withdrawal';

export default function Admin() {
    // const [content, setContent] = useState(null);

    return (
      <>
   
 <Sidebar_Dashboard/>
{/*    
    <Routes>
             <Route path="/admin/dashboard/show-user" exact element={<Tableuser/>} />
             <Route path="/admin/dashboard/user-permissions" exact element={<UserPermission/>} />
             <Route path="/admin/dashboard/registration-requests" exact element={<RegRequest/>} />
             <Route path="/admin/dashboard/user-block" exact element={<UserBlock/>} />
             <Route path="/admin/dashboard/verify-users" exact element={<VerifyUser/>} />
             <Route path="/admin/dashboard/UserProfile" exact element={<UserProfile/>} />
             <Route path="/admin/dashboard/skills-user" exact element={<SkillsUSer/>} /> 
    </Routes> */}
    <Routes>
    



    </Routes>
    
         
         
      </>
    );
  }
  