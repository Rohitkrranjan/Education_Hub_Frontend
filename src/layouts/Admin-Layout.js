import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { MdPermContactCalendar } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";

function AdminLayout() {
  return (
    <div className="flex gap-10">
      <div className="bg-[#C93636] h-screen p-5 pt-8 w-60">
        <div className="pt-2">
          <ul className="">
            <li className="flex text-gray-300 items-center gap-x-4 p-2 cursor-pointer gap-5 text-2xl hover:border hover:border-red-600 hover:rounded-2xl hover:bg-indigo-700 hover:text-white hover:text-xl">
              <NavLink to="/admin/users" className="flex">
                {" "}
                <FaUser />
                User
              </NavLink>
            </li>
            <li className="flex text-gray-300 text-2xl items-center gap-x-4 p-2 cursor-pointer gap-5 hover:border hover:border-red-600 hover:rounded-2xl hover:bg-indigo-700 hover:text-white hover:text-xl">
              <NavLink to="/admin/contacts" className="flex">
                {" "}
                <MdPermContactCalendar />
                Contact
              </NavLink>
            </li>
            <li className="flex text-gray-300 text-2xl items-center gap-x-4 p-2 cursor-pointer gap-5 hover:border hover:border-red-600 hover:rounded-2xl hover:bg-indigo-700 hover:text-white hover:text-xl">
              <NavLink to="/auth/service" className="flex">
                {" "}
                <MdHomeRepairService />
                Service
              </NavLink>
            </li>
            <li className="flex text-gray-300 text-2xl items-center gap-x-4 p-2 cursor-pointer gap-5 hover:border hover:border-red-600 hover:rounded-2xl hover:bg-indigo-700 hover:text-white hover:text-xl">
              <NavLink to="/" className="flex">
                {" "}
                <FaHome />
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default AdminLayout;
