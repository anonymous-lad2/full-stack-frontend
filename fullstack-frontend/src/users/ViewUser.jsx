import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const ViewUser = () => {
  const [user, setUser] = useState({ name: "", username: "", email: "" });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/user/${id}`);
      setUser(result.data);
    } catch (error) {
      console.error("Error loading user data:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-[88vh] bg-blue-50">
      <form
        className="w-full max-w-md p-8 border border-gray-300 rounded-lg bg-white shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700">View User</h2>

        <div className="block mb-4">
          <p className="text-lg font-semibold text-gray-600 text-center">Name</p>
          <p className="w-full px-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            {user.name}
          </p>
        </div>

        <div className="block mb-4">
          <p className="text-lg font-semibold text-gray-600 text-center">Username</p>
          <p className="w-full px-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            {user.username}
          </p>
        </div>

        <div className="block mb-4">
          <p className="text-lg font-semibold text-gray-600 text-center">Email</p>
          <p className="w-full px-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            {user.email}
          </p>
        </div>

        <div className="flex justify-between gap-4">
          <NavLink
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all duration-150 text-center"
            to="/"
          >
            Back to Users
          </NavLink>
        </div>
      </form>
    </div>
  );
};
