import React from "react";
import SignInForm from "../components/SignInPageComponents/SignInForm";

function SignInPage() {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-[55%] bg-lightGreen flex justify-center items-center">
            <img src="./image 1.png" alt="image" className="w-[450px] h-auto" />
        </div>
        <div className="w-[45%] bg-white flex justify-center mt-6 ">
            <SignInForm/>
        </div>
      </div>
    </>
  );
}

export default SignInPage;
