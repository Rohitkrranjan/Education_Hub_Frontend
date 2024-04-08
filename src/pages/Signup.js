import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import img from '../images/homePageMainImage.png'
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const {storeTokeninLS} = useAuth();

  // handling input
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const submitForm = async (e) => {
    // e.preventDefault();
    // console.log(user);
    try {
      const response = await fetch(`http://localhost:5000/api/auth/signup`, {
        method: "post",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      const res_data = await response.json();
        console.log("res from server  ",res_data);
      if (response.ok) {
        // stored the token in local storage
        // localStorage.setItem("token",res_data.token)
        storeTokeninLS(res_data.token)
        setUser({ name: "", email: " ", phone: " ", password: " " });
        toast.success("User register successfully!")
        navigate("/");
      }
      else{
        toast.error(res_data.extraDetails)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div className="flex overflow-x-auto items-center justify-center h-[100vh] bg-[#282c34] ">
        {/* <div className="">
              <img src='/images/home.png' alt='home' /> 
            </div> */}
        <div className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
          <h1 className="text-center text-2xl font-bold ">Signup Page</h1>
          <label htmlFor="name" className="text-white font-semibold ">
            FullName
          </label>
          <input
            className="bg-transparent px-2 py-1 border"
            type="text"
            required
            name="name"
            id="name"
            placeholder="Enter your fullname"
            value={user.name}
            onChange={handleInput}
          />
          <label htmlFor="name" className="text-white">
            Email
          </label>
          <input
            className="bg-transparent px-2 py-1 border"
            required
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleInput}
          />
          <label htmlFor="phone" className="text-white">
            Phone
          </label>
          <input
            className="bg-transparent px-2 py-1 border"
            required
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter your phone"
            value={user.phone}
            onChange={handleInput}
          />
          <label htmlFor="name" className="text-white">
            Password
          </label>
          <input
            className="bg-transparent px-2 py-1 border"
            required
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={handleInput}
          />

          <button
            type="submit"
            className="mt-2 bg-yellow-800 hover:bg-yellow-500 transition-all ease-in-out duration-300 cursor-pointer py-2 font-semibold text-lg"
            onClick={submitForm}
          >
            Create account
          </button>

          <p className="text-center">
            Already have an account ?{" "}
            <Link to="/login" className="cusror-pointer text-accent">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Signup;
