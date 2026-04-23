import React from "react";
import { Link, NavLink } from "react-router";

const HostNav = () => {
  return (
    <>
      <nav className="flex justify-start items-center gap-5">
        <NavLink
          to={"/host"}
          end
          className={({ isActive }) => (isActive ? "underline font-bold" : "")}
        >
          Dahsboard
        </NavLink>
        <NavLink
          to={"/host/income"}
          className={({ isActive }) => (isActive ? "underline font-bold" : "")}
        >
          Income
        </NavLink>
        <NavLink
          to={"/host/reviews"}
          className={({ isActive }) => (isActive ? "underline font-bold" : "")}
        >
          Reviews
        </NavLink>
      </nav>
    </>
  );
};

export default HostNav;
