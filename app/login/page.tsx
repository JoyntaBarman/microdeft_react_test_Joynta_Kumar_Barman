import Image from "next/image";
import React from "react";
import { welcomeImg } from "../assets/images";

const Login = () => {
  return (
    <div className="h-[80vh]  w-full">
      <div className="grid md:grid-cols-2 gap-5 p-5 h-full">
        {/* login image */}
        <div className="hidden md:block p-5">
          <div className="bg-medium-gray/10 flex items-center justify-center rounded-lg">
            <Image src={welcomeImg} alt="Microdeft" className="" />
          </div>
        </div>

        {/* Login form */}
        <div className="border border-neon-blue/10 rounded-lg p-5 flex justify-center items-center flex-col gap-4 w-full h-full">
          <div className="w-2/3">
            <h1 className="text-2xl font-bold">Welcome to Log In</h1>
            <p className="text-sm text-medium-gray">
              please inter your right credentials.
            </p>
          </div>
          <form action="" className="w-2/3 space-y-5">
            <div className="w-full">
              <label htmlFor="email">Email:</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                              placeholder="Enter your email."
                              autoComplete= "none"
                              required
                className="px-3 py-1 outline-none rounded-md bg-black text-very-light-gray border border-neon-greenish w-full"
              />
            </div>
            <div className="w-full">
              <label htmlFor="password">Password:</label>
              <br />
              <input
                type="password"
                id="password"
                              name="password"
                              required
                placeholder="Enter your password."
                className="px-3 py-1 outline-none rounded-md bg-black text-very-light-gray border border-neon-greenish w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-neon-greenish hover:bg-neon-blue duration-500 text-black px-5 py-2 rounded-lg font-bold w-full"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
