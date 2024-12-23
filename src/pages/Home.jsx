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
      <h1>Home Page</h1>
      <button onClick={handleLogOut}>Log Out</button>
    </>
  );
}

export default Home;
