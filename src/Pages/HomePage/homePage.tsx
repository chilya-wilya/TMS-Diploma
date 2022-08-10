import React from "react";
import { Outlet } from "react-router-dom";

import { Header, Footer } from "../../Components";

const HomePage = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomePage;
