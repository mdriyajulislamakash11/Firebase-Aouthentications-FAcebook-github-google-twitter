import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Contact-Us
            </NavLink>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">Aouthes</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary mr-4" : "mr-4"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-primary mr-4" : "mr-4"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-primary mr-4" : "mr-4"
            }
          >
            Contact-Us
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="mr-4 btn btn-primary">Account</Link>
      </div>
    </div>
  );
};

export default Header;
