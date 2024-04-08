import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";


function AdminUser() {
  const [users, setUsers] = useState([]);

  const { authorizationToken } = useAuth();

  const getAllUSers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      // console.log(`${data}`)
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  // delete the user on delete button

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      const data = await response.json();
      console.log(`users after deleted ${data}`);
      if(response.ok)
      {
        getAllUSers()
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUSers();
  }, []);

  return (
    <div className>
      <div className="container">
        <table className="table table-hover table-bordered mt-5">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button className="mt-2 cursor-pointer py-2 font-semibold text-white rounded-xl w-40 border border-yellow-500 bg-zinc-700">
                      <Link to="/admin/users/update">Edit</Link>
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="mt-2 cursor-pointer py-2 font-semibold text-white rounded-xl w-40 border bg-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <h1 className="text-white">Data not found</h1>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminUser;
