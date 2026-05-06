import { User2 } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#fff7ed] flex justify-between items-center px-8 py-5">
      <h1 className="font-black text-[25px]">
        <Link to={"/"}>#VANLIFE</Link>
      </h1>
      <ul className="flex justify-end items-center gap-6 text-[#4D4D4D]">
        <li>
          <NavLink
            to={"/host"}
            className={({ isActive }) =>
              isActive ? "underline font-bold" : ""
            }
          >
            Host
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? "underline font-bold" : ""
            }
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/vans"}
            className={({ isActive }) =>
              isActive ? "underline font-bold" : ""
            }
          >
            Vans
          </NavLink>
        </li>
        <Link to={"login"}>
          <User2 />
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
