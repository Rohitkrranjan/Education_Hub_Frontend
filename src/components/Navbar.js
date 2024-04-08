import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";


function Navbar() {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <header className="flex justify-around bg-white w-full h-16">
        <div className="text-2xl text-[#262525] font-bold flex items-center">
          DronacharyaWay2ITs
        </div>
        <div className="px-2 py-2  text-white font-bold cursor-pointer ml-24">
          <ul className="md:flex hidden font-semibold gap-8">
            <li className="mt-3 cursor-pointer text-lg text-[#393131] hover:text-orange-500 ">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="mt-3 cursor-pointer text-lg text-[#393131] hover:text-orange-500">
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li className="mt-3 cursor-pointer text-lg text-[#393131] hover:text-orange-500">
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li className="mt-3 cursor-pointer text-lg text-[#393131] hover:text-orange-500">
              <NavLink to="/service">Service</NavLink>
            </li>
            {isLoggedIn ? (
              <li className="mt-3 cursor-pointer text-lg text-[#393131] hover:text-orange-500">
                <NavLink to="/logout">Logout</NavLink>
              </li>
            ) : (
              <>
                <li className="mt-3 cursor-pointer text-lg text-[#393131] hover:text-orange-500">
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li className="mt-3 cursor-pointer text-lg text-[#393131] hover:text-orange-500">
                  <NavLink to="/signup">Register</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </header>
 
    </div>
  );
}

export default Navbar;
