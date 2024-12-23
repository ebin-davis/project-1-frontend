import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    sessionStorage.removeItem("jwtToken");
    navigate("/login");
  };
  return (
    <>
    <div className="flex justify-between ">
      <h1 className="font-roboto text-4xl">Home Page</h1>
      <button onClick={handleLogOut} className="bg-red text-white text-col px-6 py-2 rounded-xl mr-2 mt-2 font-semibold">Log Out</button>
    </div>
    </>
  );
}

export default Home;
