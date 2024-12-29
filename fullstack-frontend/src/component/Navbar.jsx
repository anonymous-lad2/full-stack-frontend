import React from "react";

export const Navbar = () => {
  return (
    <div className="bg-blue-500">
      <div className="w-10/12 mx-auto flex justify-between p-5 text-white text-2xl items-center">
        <h1>Navbar</h1>
        <button className="border border-white p-2">Add User</button>
      </div>
    </div>
  );
};
