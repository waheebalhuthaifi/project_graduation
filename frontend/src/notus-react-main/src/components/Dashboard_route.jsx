
import React from 'react'
import { useState } from 'react';

import {  Routes, Route  ,Navigate } from "react-router-dom";

import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "assets/styles/tailwind.css";

// layouts

import Admin from "../layouts/Admin";
import Auth from "../layouts/Auth";

// views without layouts

import Landing from "../views/Landing";
import Profile from "../views/Profile";
import Index from "../views/Index";

export default function Dashboard_route() {
return (
    <>
 
     <Routes>
      {/* add routes with layouts */}
      <Route path="/admin" element={<Admin/>} />
      <Route path="/auth" element={<Auth/>} />
      {/* add routes without layouts */}
      <Route path="/landing" exact element={<Landing/>} />
      <Route path="/profile" exact element={<Profile/>} />
      {/* <Route path="/" exact element={<Index/>} /> */}
      {/* add redirect for first page */}
      {/* <Redirect from="*" to="/" /> */}
      {/* <Route path="/*" element={<Navigate replace to="/" />} /> */}

      </Routes>
 
    </>
)
 
 
}