import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="relative">
        <img
          className="object-cover w-full h-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_large.jpg"
          alt="logo"
        />
        <div className="absolute inset-0 bg-black/50">
          <div className="bg-black/60 p-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-2/6 h-auto md:h-[75%] rounded-md">
            <form className="flex flex-col">
              <h1 className="text-3xl font-bold text-white px-2 mb-5">
                {isSignInForm ? "Sign In" : "Sign Up"}
              </h1>
              {!isSignInForm && <input
                className="m-2 p-4 text-white bg-slate-800/40 border border-slate-500 rounded-md"
                type="text"
                placeholder="Full name"
              />}
              <input
                className="m-2 p-4 text-white bg-slate-800/40 border border-slate-500 rounded-md"
                type="text"
                placeholder="Email Address"
              />
              <input
                className="m-2 p-4 text-white bg-slate-800/40 border border-slate-500 rounded-md"
                type="text"
                placeholder="Password"
              />
              <button className="p-2 m-2 font-bold bg-[rgb(229,9,20)] hover:bg-red-700 transition-colors text-white text-md rounded-md">
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>
              <h3
                className={
                  isSignInForm ? "text-slate-300 my-2 text-center" : "hidden"
                }
              >
                OR
              </h3>
              <button
                className={
                  isSignInForm
                    ? "p-2 m-2 font-bold bg-slate-400/35 hover:bg-slate-400/25 transition-colors text-white text-md rounded-md"
                    : "hidden"
                }
              >
                Use a sign-in code
              </button>
              <p className="mx-2 mt-4 text-slate-300">
                {isSignInForm ? "New to Netflix?" : "Already registered?"}
                <b
                  className="text-white hover:underline cursor-pointer"
                  onClick={toggleSignInForm}
                >
                  {isSignInForm ? "Sign Up Now" : "Sign in now"}
                </b>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
