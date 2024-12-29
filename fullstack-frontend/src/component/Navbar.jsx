import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="bg-blue-500">
      <div className="w-10/12 mx-auto flex justify-between p-5 text-white text-2xl items-center">
        <h1>Navbar</h1>
        <NavLink className="border border-white p-2" to='/adduser'>Add User</NavLink>
      </div>
    </div>
  );
};
