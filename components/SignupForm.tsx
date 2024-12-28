"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Spinner from "@/components/share/Spinner";
import { setLocalStorageToken } from "@/lib";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Metadata } from "next";
import { welcomeImg } from "@/app/assets/images";

const SignupForm = () => {
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);
    const [isFormLoading, setIsFormLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // Set loading 
      setIsFormLoading(true);
      setErrorMessage('');
      // form Data
      const formData = new FormData(event.currentTarget);
  
      // field values
      const name = formData.get('name');
      const email = formData.get("email");
      const password = formData.get('password');
  
      // Make a request
      const response = await fetch("https://react-interview.crd4lc.easypanel.host/api/register", {
        method: "POST",
        headers: {
          Accept: 'application/json',
          "content-type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      });
  
      // make response to object
      const data = await response.json();
  
      // set user
      if (data.status) {
        setLocalStorageToken("authToken", data?.data?.token);
        router.push('/');
      } else {
        setErrorMessage(data?.message)
      }
      // set loading false
      setIsFormLoading(false);
    };
  
    const tagglePasswordVisible = () => {
      setIsVisiblePassword((prev) => !prev);
    };
    return (
      <div className="min-h-[80vh]  w-full">
        <div className="grid md:grid-cols-2 gap-5 p-5 h-full">
          {/* Login form */}
          <div className="border border-neon-blue/10 rounded-lg p-5 flex justify-center items-center flex-col gap-4 w-full h-full">
            <div className="md:p-4 lg:w-2/3">
              <h1 className="text-2xl font-bold">Sign Up</h1>
              <p className="text-sm text-medium-gray">
                please inter your right personal information.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="w-full px-4 lg:w-2/3 space-y-5">
              {/* name field */}
              <div className="w-full">
                <label htmlFor="name">Name:</label>
                <br />
                <input
                  type="name"
                  id="name"
                  name="name"
                  placeholder="Enter your Name."
                  autoComplete="none"
                  required
                  className="px-3 py-1 outline-none rounded-md bg-black text-very-light-gray border border-neon-greenish w-full"
                />
              </div>
  
              {/* Email field */}
              <div className="w-full">
                <label htmlFor="email">Email:</label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email."
                  autoComplete="none"
                  required
                  className="px-3 py-1 outline-none rounded-md bg-black text-very-light-gray border border-neon-greenish w-full"
                />
              </div>
              {/* password field */}
              <div className="w-full ">
                <label htmlFor="password">Password:</label>
                <br />
  
                <div className="relative">
                  <input
                    type={isVisiblePassword ? "text" : "password"}
                    id="password"
                    name="password"
                    required
                    placeholder="Enter your password."
                    className="pl-3 pr-8 py-1 outline-none rounded-md bg-black text-very-light-gray border border-neon-greenish w-full"
                  />
                  {/* Eye */}
                  <div className="absolute top-0 right-2 flex h-full items-center">
                    {isVisiblePassword ? (
                      <FaEyeSlash
                        onClick={tagglePasswordVisible}
                        className="cursor-pointer hover:text-neon-blue duration-300"
                      />
                    ) : (
                      <FaEye
                        onClick={tagglePasswordVisible}
                        className="cursor-pointer hover:text-neon-blue duration-300"
                      />
                    )}
                  </div>
                </div>
                <p className="text-sm">if you already have an account. <Link href={'/login'} className="text-neon-blue hover:text-neon-greenish duration-300 font-semibold underline">Log In</Link></p>
              </div>
              <button
                            type="submit"
                            disabled = {isFormLoading}
                className="bg-neon-greenish hover:bg-neon-blue duration-500 text-black px-5 py-2 rounded-lg font-bold w-full flex items-center justify-center"
              >
                {
                  isFormLoading ? <Spinner/> : "Sign Up"
                }
              </button>
            </form>
            {
              errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>
            }
          </div>
  
          {/* login image */}
          <div className="hidden md:block p-5">
            <div className="bg-medium-gray/10 flex items-center justify-center rounded-lg">
              <Image src={welcomeImg} alt="Microdeft" className="" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SignupForm;