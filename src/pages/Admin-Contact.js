import React, { useEffect, useState } from 'react'
import { useAuth } from "../store/auth";

function AdminContact() {

  const [contacts , setContacts] = useState([]);
  const { authorizationToken } = useAuth();

  const getAllContacts = async()=>{
    try {
      const response = await fetch(`http://localhost:5000/api/admin/contacts`,{
        method:'GET',
        headers:{
          Authorization: authorizationToken,
        }
      })
      
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.log(error);
    }
  }

  // delete the contact 

  const deleteContact = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      const data = await response.json();
      console.log(`contact after deleted ${data}`);
      if(response.ok)
      {
        getAllContacts()
      }
    } catch (error) {
      console.log(error);
    }
  };




  useEffect(()=>{
    getAllContacts()
  },[])


  return (
    <div className="">
      <div className="container">
        <table className="table table-hover table-bordered mt-5">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Message</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.message}</td>
                  <td>
                    <button className="mt-2 cursor-pointer py-2 font-semibold text-white rounded-xl w-40 border border-yellow-500 bg-blue-800">
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteContact(user._id)}
                      className="mt-2 cursor-pointer py-2 font-semibold text-white rounded-xl w-40 border bg-red-700"
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
  )
}

export default AdminContact;