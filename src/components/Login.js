import React from "react";
import { useState } from "react";
import { BG_URL } from "../utils/constant";
const Login = () => {

  const [isSignInForm , setSignInForm] = useState(true);

  const toggleSignInForm = (e)=>{
    e.preventDefault();
      setSignInForm(!isSignInForm);
  }
  return (
   //Background Image
   <div className="">
      <div className="absolute z-0">
        <img className="w-screen h-screen" src={BG_URL} alt="logo" />
      </div>
       
      <div className="w-screen h-screen flex justify-evenly items-center">
        <form className="absolute w-[30vw] p-14 h-[80vh] flex flex-col  gap-6  bg-black  text-white rounded-lg bg-opacity-80 ">
        <h1 className="text-[2vw] font-bold">{isSignInForm ? "Sign In" : "Sign up"}</h1>
          <input
            className="w-full p-3 text-lg rounded-lg bg-black bg-opacity-25 border border-1 border-white required"
            type="text"
            placeholder="Full Name"
          />
         { !isSignInForm && 
            <input
            className="w-full p-3 text-lg rounded-lg bg-black bg-opacity-25 border border-1 border-white required"
            type="text"
            placeholder="Email Address"
          />}
          <input
            className="w-full p-3 text-lg rounded-lg bg-black bg-opacity-25 border border-1 border-white"
            type="text"
            placeholder="Password"
          />
          <button className=" w-full p-3 rounded-lg bg-red-600 text-lg font-semibold" onClick={(e)=>e.preventDefault()} >{isSignInForm ? "Sign Up" : "Sign In"}</button>
          <p className="text-lg" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? " : "Already registered? "}<span className="font-bold cursor-pointer">{isSignInForm ? "Sign up Now" : "Sign in"}</span> </p>

        </form>

      </div>
    </div>
  );
};

export default Login;
