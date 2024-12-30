import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-hot-toast'

export const AddUser = () => {
  const [newUser, setNewUser] = useState({ name: "", username: "", email: "" });

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

     await axios.post("http://localhost:8080/user", newUser);
     navigate("/")
     toast.success("New user added successfully")

  };

  return (
    <div className="flex justify-center items-center mt-20">
      <form
        onSubmit={handleSubmit}
        className="w-1/2 p-6 border border-gray-300 rounded-lg bg-gray-100 shadow-md"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Add New User</h2>

        <label className="block mb-4">
          <p className="mb-2 font-semibold">Name</p>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={newUser.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>

        <label className="block mb-4">
          <p className="mb-2 font-semibold">Username</p>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            value={newUser.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>

        <label className="block mb-4">
          <p className="mb-2 font-semibold">Email</p>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={newUser.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>

        <div className="flex justify-between w-9/12 gap-5 mx-auto">
          <button
            type="submit"
            className="w-1/2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-150"
          >
            Submit
          </button>

          <NavLink
            className="w-1/2 text-center bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-all duration-150"
            to="/"
          >
            Cancel
          </NavLink>
        </div>
      </form>
    </div>
  );
};
