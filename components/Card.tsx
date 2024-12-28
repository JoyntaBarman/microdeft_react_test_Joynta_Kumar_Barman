import Image from "next/image";
import React from "react";

const Card = ({ course }: any) => {
  console.log(course);
  return (
    <div className={`border border-neon-greenish/20 rounded-lg p-5 `}>
      {/* iamge */}
      <div className="relative ">
        <Image
          src={course?.image}
          alt="Microdeft"
          width={500}
          height={500}
          className="rounded-lg object-cover w-full h-48"
              />
              <div className="absolute top-1 left-2 bg-neon-blue text-black  p-2 rounded-lg">
                  <p className="font-semibold">{course?.instructor_name}</p>
              </div>
      </div>
      <div className="mt-5 space-y-2">
              <h1 className={ `cardTitle`}>{course?.title}</h1>
              <p className="text-medium-gray line-clamp-4 h-24">{course?.description}</p>
              <p className="text-neon-blue">{course?.badge_text}</p>
              <button
              onClick={() => alert("Click on "+ course?.title)}
              className="bg-neon-greenish hover:bg-neon-blue duration-500 text-black px-5 py-2 rounded-lg font-bold w-full flex items-center justify-center"
            >
              view course details
            </button>
      </div>
    </div>
  );
};

export default Card;
