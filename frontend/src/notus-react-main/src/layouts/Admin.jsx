import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// components

// import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import AdminNavbar from "../components/Navbars/AdminNavbar"
// import Sidebar from "components/Sidebar/Sidebar.js";
import Sidebar from "../components/Sidebar/Sidebar"

import HeaderStats from "../components/Headers/HeaderStats"
import FooterAdmin from "../components/Footers/FooterAdmin"

// views
import Login from "../views/auth/Login"
import Register from "../views/auth/Register";

import Dashboard from "../views/admin/Dashboard"
import Maps from "../views/admin/Maps";
import Settings from "../views/admin/Settings";
import Tables from "../views/admin/Tables";



// import Admin from "../layouts/Admin";
import Auth from "../layouts/Auth";
import Landing from "../views/Landing";
import Profile from "../views/Profile";
import Index from "../views/Index";

export default function Admin() {
  return (
    <>
  
      <Sidebar />

      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Routes>
            <Route path="/admin/dashboard" exact element={<Dashboard/>} />
            <Route path="/admin/maps" exact element={<Maps/>} />
            <Route path="/admin/settings" exact element={<Settings/>} />
            <Route path="/admin/tables" exact element={<Tables/>} />
            <Route path="/admin" element={<Navigate replace to="/admin/dashboard" />} />

            <Route path="/auth/login" exact element={<Login/>} />
            <Route path="/auth/register" exact element={<Register/>} />   
            <Route path="/auth" element={<Navigate replace to="/auth/login" />} />


            {/* <Route path="/admin" element={<Admin/>} /> */}
      {/* <Route path="/auth" element={<Auth/>} /> */}
      {/* add routes without layouts */}
      <Route path="/landing" exact element={<Landing/>} />
      <Route path="/profile" exact element={<Profile/>} />
      <Route path="/index" exact element={<Index/>} />

         

          
            {/* <Redirect from="/admin" to="/admin/dashboard" /> */}
          </Routes>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
