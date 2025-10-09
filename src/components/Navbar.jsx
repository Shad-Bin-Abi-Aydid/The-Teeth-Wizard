import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-orange-500 font-bold" : " "
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/allTreatments"
        className={({ isActive }) =>
          isActive ? "text-orange-500 font-bold" : " "
        }
      >
        All Treatments
      </NavLink>
      <NavLink
        to="/myAppointments"
        className={({ isActive }) =>
          isActive ? "text-orange-500 font-bold" : " "
        }
      >
        My Appointments
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive ? "text-orange-500 font-bold" : " "
        }
      >
        Profile
      </NavLink>
    </div>
  );
  return (
    <div className="navbar bg-cyan-900 shadow-sm px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Teeth Wizard</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-accent">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
