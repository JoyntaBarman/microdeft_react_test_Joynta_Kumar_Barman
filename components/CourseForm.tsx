"use client";
import React, { useEffect, useState } from "react";
import Spinner from "./share/Spinner";
import { getLocalStorageToken } from "@/lib";
import { usePathname } from "next/navigation";
import path from "path";


const CourseForm = () => {
  const [isFormLoading, setIsFormLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
  const [user, setUser] = useState<string | null>(null);
  const pathName = usePathname();


 
  useEffect(() => {
    setUser(getLocalStorageToken('authToken'));
  }, [pathName]);
    
  const handleSubmit = async (event: React.FocusEvent<HTMLFormElement>) => {
    event.preventDefault();

    //   Set loading
    setIsFormLoading(true);
      setErrorMessage("");
      setSuccessMessage('')

    const formData = new FormData(event.currentTarget);

    //   field data
    const title = formData.get("title");
    const description = formData.get("description");
    const badge_text = formData.get("badgeText");
    const badge_color = formData.get("badgeColor");
    const instructor_name = formData.get("instructorName");

    try {
      const response = await fetch(
        "https://react-interview.crd4lc.easypanel.host/api/course",
        {
          method: "POST",
          headers: {
            Accept: "authorization/json",
            "content-type": "application/json",
            authorization: `bearer ${user}`,
          },
          body: JSON.stringify({
            title,
            description,
            badge_text,
            badge_color,
            instructor_name,
          }),
        }
      );
      const data = await response.json();
      if (data.status) {
          setSuccessMessage("Successfully add course?");
          event.target.reset();
      } else {
        setErrorMessage(data?.status_message);
      }
    } catch (error) {

        setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsFormLoading(false);
    }
  };

    if (!user) {
        
        return <div className="text-2xl text-neon-blue font-semibold">Please login then add your course!</div>
    }
    
  return (
    <div className="min-h-[80vh] w-full lg:w-4/5 border border-neon-blue/20 rounded-lg flex justify-center flex-col items-center py-10 space-y-5">
      <h1 className="text-2xl font-bold text-neon-greenish mt-4">
        Add your course.
      </h1>
      <form onSubmit={handleSubmit} className="w-4/5 md:w-2/3 space-y-5">
        {/* Title field */}
        <div className="w-full">
          <label htmlFor="title">Course title:</label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter your Course title."
            autoComplete="none"
            required
            className="px-3 py-1 outline-none rounded-md bg-black text-very-light-gray border border-neon-greenish w-full"
          />
        </div>

        {/* description field */}
        <div className="w-full">
          <label htmlFor="description">Description:</label>
          <br />
          <textarea
            id="description"
            name="description"
            placeholder="Enter your Course Description."
            autoComplete="none"
            required
            rows={4}
            className="px-3 py-1 outline-none rounded-md bg-black text-very-light-gray border border-neon-greenish w-full"
          />
        </div>

        {/* badge text field */}
        <div className="w-full">
          <label htmlFor="badgeText">Badge Text:</label>
          <br />
          <input
            type="text"
            id="badgeText"
            name="badgeText"
            placeholder="Enter your Badge Text."
            autoComplete="none"
            required
            className="px-3 py-1 outline-none rounded-md bg-black text-very-light-gray border border-neon-greenish w-full"
          />
        </div>

        {/* badge color field */}
        <div className="w-24">
          <label htmlFor="badgeColor">Badge color:</label>
          <br />
          <input
            type="color"
                      id="badgeColor"
                      defaultValue={"#ff0000"}
            name="badgeColor"
            placeholder="Enter your Badge hex color."
            autoComplete="none"
            required
            className="px-3 py-1 outline-none rounded-md bg-black text-very-light-gray border border-neon-greenish w-full"
          />
        </div>

        {/* badge name field */}
        <div className="w-full">
          <label htmlFor="instructorName">Instructor Name:</label>
          <br />
          <input
            type="text"
            id="instructorName"
            name="instructorName"
            placeholder="Enter your instructor name."
            autoComplete="none"
            required
            className="px-3 py-1 outline-none rounded-md bg-black text-very-light-gray border border-neon-greenish w-full"
          />
        </div>

        <button
          type="submit"
          disabled={isFormLoading}
          className="bg-neon-greenish hover:bg-neon-blue duration-500 text-black px-5 py-2 rounded-lg font-bold w-full flex justify-center items-center"
        >
          {isFormLoading ? <Spinner /> : "Add"}
        </button>
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
      </form>
    </div>
  );
};

export default CourseForm;
