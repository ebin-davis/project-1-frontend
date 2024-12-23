import axios from "axios";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

function SignUpForm() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log("Data being sent:", { username, phone, email, password });
      const response = await axios.post(
        "http://localhost:8000/user/signup",
        {
          username,
          phone,
          email,
          password,
        },
        {
          headers: { "Content-Type": "application/json" }, // Ensure correct headers
        }
      );
      if (response) {
        alert("Registration completed Redirecting to login page");
        navigate("/login");
      } else {
        alert("sign up failed ");
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
        <h1 className="font-roboto font-bold text-[32px]">
          Create An
          <span className="block leading-3">Account</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col max-w-[279px]">
            <label
              htmlFor="name"
              className="font-roboto font-normal text-[14px] text-grey mt-[43px]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full h-[49px] font-roboto rounded-[5px] p-5 border-2 border-grey shadow-lg mt-[8px]"
              onChange={(e) => setUserName(e.target.value)}
            />
            <label
              htmlFor="phone"
              className="font-roboto font-normal text-[14px] text-grey mt-[8px]"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="number"
              name="number"
              required
              className="w-full h-[49px] font-roboto rounded-[5px] p-5 border-2 border-grey shadow-lg mt-[8px]"
              onChange={(e) => setPhone(e.target.value)}
            />
            <label
              htmlFor="email"
              className="font-roboto font-normal text-[14px] text-grey mt-[8px]"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full h-[49px] font-roboto rounded-[5px] p-5 border-2 border-grey shadow-lg mt-[8px]"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="password"
              className="font-roboto font-normal text-[14px] text-grey mt-[8px]"
            >
              Set Password
            </label>
            <div className="relative">
              <span className="absolute top-1/2 right-4" onClick={handleToggle}>
                {isPasswordVisible ? <IoEyeOff /> : <IoEye />}
              </span>
              <input
                type={isPasswordVisible ? "text" :"password"}
                id="password"
                name="password"
                required
                className="w-full h-[49px]  font-roboto rounded-[5px] p-5 border-2 border-grey shadow-lg mt-[8px]"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full h-[49px] bg-lightGreen rounded-[5px] text-white text-center cursor-pointer mt-[42px] hover:bg-[#6fa8a2] transition duration-300 ease-in-out"
            >
              Create An Account
            </button>
            <p className="font-roboto text-[14px] mt-[45px]">
              Already Have an account?{" "}
              <Link to="/login" className="text-lightGreen">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUpForm;
