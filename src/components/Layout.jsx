import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <section className="bg-[#fff7ed]">
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
}

export default Layout;
