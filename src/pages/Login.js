import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const {storeTokeninLS} = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "post",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res_data = await response.json();
      if (response.ok) {
        
        console.log("res from server  ",res_data);
        // stored the token in local storage
        storeTokeninLS(res_data.token)
        // localStorage.setItem("token",res_data.token)
        setUser({ email: " ", password: "" });
        toast.success("User login successfully!")
        navigate('/')
      } else {
        toast.error("Invalid credentials")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex overflow-x-auto items-center justify-center h-[100vh] bg-[#282c34]">
      <div className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
        <h1 className="text-center text-2xl font-bold ">Login Page</h1>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-semibold">
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
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-semibold">
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
        </div>

        <button
          type="submit"
          className="mt-2 bg-yellow-800 hover:bg-yellow-500 transition-all ease-in-out duration-300 cursor-pointer py-2 font-semibold text-lg"
          onClick={submitForm}
        >
          Login
        </button>

        <p className="text-center">
          Donot have an account ?{" "}
          <Link to="/signup" className="cusror-pointer text-accent">
            signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
