import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-hot-toast'
import { Link, useParams } from "react-router-dom";

export const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const result = await axios.get("http://localhost:8080/users");
    // console.log(result.data)
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`)
    loadData();
    toast.success("User removed successfuly")
  }

  return (
    <div className="flex justify-center items-center mt-20">
      <table className="w-10/12 border-collapse border border-gray-300 shadow-lg">
        <caption className="text-lg font-semibold mb-4">
          User Information
        </caption>

        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">#</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Username</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.username}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.email}
                </td>
                <td className="px-4 py-2 border border-gray-300 flex gap-2 justify-evenly">
                  <Link className="bg-blue-500 text-white py-2 px-3 text-xl rounded-lg hover:scale-105 transition-all duration-100"
                  to={`/viewuser/${user.id}`}>
                    View
                  </Link>
                  <Link className="border border-dashed border-blue-500 px-3 text-xl text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white"
                  to={`/edituser/${user.id}`}>
                    Edit
                  </Link>
                  <button className="bg-red-500 text-white py-2 px-3 text-xl rounded-lg hover:scale-105 transition-all duration-100"
                  onClick={() => deleteUser(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
