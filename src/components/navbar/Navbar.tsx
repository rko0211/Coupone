import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-gray-300">
            MyApp
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/Sign-in"
            className={({ isActive }) =>
              isActive
                ? "text-gray-200 font-semibold underline"
                : "hover:text-gray-300"
            }
          >
            Sign In
          </NavLink>
          <NavLink
            to="/forget-password"
            className={({ isActive }) =>
              isActive
                ? "text-gray-200 font-semibold underline"
                : "hover:text-gray-300"
            }
          >
            Forgot Password
          </NavLink>
          <NavLink
            to="/Sign-up"
            className={({ isActive }) =>
              isActive
                ? "text-gray-200 font-semibold underline"
                : "hover:text-gray-300"
            }
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/emailverification"
            className={({ isActive }) =>
              isActive
                ? "text-gray-200 font-semibold underline"
                : "hover:text-gray-300"
            }
          >
            Email Verification
          </NavLink>
          <NavLink
            to="/phoneverification"
            className={({ isActive }) =>
              isActive
                ? "text-gray-200 font-semibold underline"
                : "hover:text-gray-300"
            }
          >
            Phone Verification
          </NavLink>
          <NavLink
            to="/changeverificationmode"
            className={({ isActive }) =>
              isActive
                ? "text-gray-200 font-semibold underline"
                : "hover:text-gray-300"
            }
          >
            Change Verification
          </NavLink>
          <NavLink
            to="/createnewpassword"
            className={({ isActive }) =>
              isActive
                ? "text-gray-200 font-semibold underline"
                : "hover:text-gray-300"
            }
          >
            Create Password
          </NavLink>
          <NavLink
            to="/checkemail"
            className={({ isActive }) =>
              isActive
                ? "text-gray-200 font-semibold underline"
                : "hover:text-gray-300"
            }
          >
            Check Email
          </NavLink>

          <NavLink
            to="/form"
            className={({ isActive }) =>
              isActive
                ? "text-gray-200 font-semibold underline"
                : "hover:text-gray-300"
            }
          >
            Form
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white hover:text-gray-300 focus:outline-none"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 space-y-2 px-4 py-4">
          <NavLink
            to="/Sign-in"
            className="block hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Sign In
          </NavLink>
          <NavLink
            to="/forget-password"
            className="block hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Forgot Password
          </NavLink>
          <NavLink
            to="/Sign-up"
            className="block hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/emailverification"
            className="block hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Email Verification
          </NavLink>
          <NavLink
            to="/phoneverification"
            className="block hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Phone Verification
          </NavLink>
          <NavLink
            to="/changeverificationmode"
            className="block hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Change Verification
          </NavLink>
          <NavLink
            to="/createnewpassword"
            className="block hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Create Password
          </NavLink>
          <NavLink
            to="/checkemail"
            className="block hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Check Email
          </NavLink>
          <NavLink
            to="/form"
            className="block hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Form
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
