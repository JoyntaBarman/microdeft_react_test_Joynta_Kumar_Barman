"use client";
import { welcomeImg } from "@/app/assets/images";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Spinner from "./share/Spinner";
import { setLocalStorageToken } from "@/lib";

const LoginForm = () => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // set loading
    setIsFormLoading(true);
    setErrorMessage("");

    // field dat
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    // Fetch data
    try {
      const response = await fetch(
        "https://react-interview.crd4lc.easypanel.host/api/login",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      const data = await response.json();

      if (data.status) {
        console.log("this is trigered.");
        setLocalStorageToken("authToken", data?.data?.token);
        router.push("/");
      } else {
        setErrorMessage(data?.status_message);
      }
    } catch (error) {
    } finally {
      setIsFormLoading(false);
    }
  };

  // Taggle function
  const tagglePasswordVisible = () => {
    setIsVisiblePassword((prev) => !prev);
  };

  return (
    <div className="min-h-[80vh]  w-full">
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
          <form onSubmit={handleSubmit} className="w-2/3 space-y-5">
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

            {/* Password field */}
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

              {/* Sign up link */}
              <p className="text-sm">
                If you does not have an account{" "}
                <Link
                  href={"/signup"}
                  className="text-neon-blue hover:text-neon-blue duration-300 font-semibold underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
            <button
              type="submit"
              disabled={isFormLoading}
              className="bg-neon-greenish hover:bg-neon-blue duration-500 text-black px-5 py-2 rounded-lg font-bold w-full flex justify-center items-center"
            >
              {isFormLoading ? <Spinner /> : "Log In"}
            </button>
          </form>
          {/* Error text */}
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
