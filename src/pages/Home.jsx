import React from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axios/axios";

function Home() {
  const navigate = useNavigate();

  const handleLogOut = () => {
    sessionStorage.removeItem("jwtToken");
    navigate("/login");
  };
  const handleData=async(e)=>{
    const response=await axiosInstance.get("http://localhost:8000/user/allusers")
    console.log(response.data.users)
  }
  return (
    <>
      <div className="flex justify-between ">
        <h1 className="font-roboto text-4xl">Home Page</h1>
        <button
          onClick={handleLogOut}
          className="bg-red text-white text-col px-6 py-2 rounded-xl mr-2 mt-2 font-semibold"
        >
          Log Out
        </button>
      </div>
      <div className="flex">
      <button className="bg-lightGreen text-white text-col px-6 py-2 rounded-xl mx-auto font-semibold" onClick={handleData}>
        Get User Details
      </button>
      </div>
    </>
  );
}

export default Home;
