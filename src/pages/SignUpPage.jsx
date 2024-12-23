import React from 'react'
import SignUpForm from '../components/SignInPageComponents/SignUpForm'

function SignUpPage() {
  return (
    <>
    <div className="flex h-screen">
        <div className="w-[55%] bg-lightGreen flex justify-center items-center">
            <img src="./image 1.png" alt="image" className="w-[450px] h-auto" />
        </div>
        <div className="w-[45%] bg-white flex justify-center mt-4 ">
            <SignUpForm/>
        </div>
      </div>
    </>
  )
}

export default SignUpPage