import axios from "axios";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../axios/axios";
function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log("Data being sent:", { email, password });
      const response = await axiosInstance.post(
        "http://localhost:8000/user/login",
        {
          email,
          password,
        },
        {
          headers: { "Content-Type": "application/json" }, // Ensure correct headers
        }
      );
      const token = response.data.token;
      
      if (response) {
        alert("Login successfull");
        navigate("/home");
      } else {
        console.log("sign in failed ");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleToggle = () => {
    setIsPasswordVisible((prev) => !prev);
  };
  return (
    <>
      <div className="">
        <div className="mb-[69px] ml-[279px]">
          <IoMdClose size={36} />
        </div>
        <h1 className="font-roboto font-bold text-[32px]">Sign In</h1>
        <form className="" onSubmit={handleSubmit}>
          <div className="flex flex-col max-w-[279px]">
            <label
              htmlFor="email"
              className="font-roboto font-normal text-[14px] text-grey mt-[42px]"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full h-[49px] font-roboto rounded-[5px] p-5 border-2 border-grey shadow-lg mt-[8px]"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="password"
              className="font-roboto font-normal text-[14px] text-grey mt-[8px]"
            >
              Password
            </label>
            <div className="relative">
              <span className="absolute top-1/2 right-4" onClick={handleToggle}>
                {isPasswordVisible ? <IoEyeOff /> : <IoEye />}
              </span>
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                name="password"
                required
                className="w-full h-[49px] font-roboto rounded-[5px] p-5 border-2 border-grey shadow-lg mt-[8px]"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full h-[49px] bg-lightGreen rounded-[5px] text-white text-center cursor-pointer mt-[42px] hover:bg-[#6fa8a2] transition duration-300 ease-in-out"
            >
              Sign In
            </button>
            <p className="font-roboto text-[14px] mt-[45px]">
              Don't have an account?{" "}
              <Link to="/register" className="text-lightGreen">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignInForm;
