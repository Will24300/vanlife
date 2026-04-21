import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="bg-[#FFF7ED] flex justify-between items-center py-7 px-5">
      <h1 className="font-black text-[25px]">#VANLIFE</h1>
      <ul className="flex justify-end items-center gap-6 text-[#4D4D4D]">
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Van
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
