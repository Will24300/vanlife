import React from "react";
import { Link, NavLink } from "react-router";

const HostNav = () => {
  return (
    <>
      <nav className="flex justify-start items-center gap-5 px-8 mt-5 text-[#4D4D4D]">
        <NavLink
          to={"."}
          end
          className={({ isActive }) =>
            isActive ? "underline font-bold text-black" : ""
          }
        >
          Dahsboard
        </NavLink>
        <NavLink
          to={"income"}
          className={({ isActive }) =>
            isActive ? "underline font-bold text-black" : ""
          }
        >
          Income
        </NavLink>
        <NavLink
          to={"vans"}
          className={({ isActive }) =>
            isActive ? "underline font-bold text-black" : ""
          }
        >
          Vans
        </NavLink>
        <NavLink
          to={"reviews"}
          className={({ isActive }) =>
            isActive ? "underline font-bold text-black" : ""
          }
        >
          Reviews
        </NavLink>
      </nav>
    </>
  );
};

export default HostNav;
