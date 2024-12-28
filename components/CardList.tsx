"use client";
import { getLocalStorageToken } from "@/lib";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Card from "./Card";


const CardList = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState<string | null>(getLocalStorageToken("authToken"));
  const [courses, setCourses] = useState([]);
  const pathName = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      
      const response = await fetch(
        "https://react-interview.crd4lc.easypanel.host/api/course",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "content-type": "application/json",
            authorization: `bearer ${user}`,
          },
        }
      );
      const data = await response.json();
      if (data.status) {
        setCourses(data?.data?.data);
      } else {
        setErrorMessage(data?.message);
      }
    };
    fetchData();
  }, [pathName]);

    
  if (errorMessage) {
    return (
      <div className="w-full text-center mt-4">
        <span className="text-2xl font-bold text-neon-blue">{errorMessage}</span>
        <p>
          Please Log In!
        </p>
      </div>
    );
  }
  if (!courses.length) {
    return <div className="w-full text-center mt-4">{" No card found!"}</div>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
      {courses.map((course, index) => (
        <div key={index}>
          <Card course={course} />
        </div>
      ))}
      asdf
    </div>
  );
};

export default CardList;
