import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";


import Header from "../Header";
import Footer from "../Footer";

const HomePage = () => {
 return (
  <>
  <Header/>
  <Outlet/>
  <Footer/>
  </>
 )
}

export default HomePage