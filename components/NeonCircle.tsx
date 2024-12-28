import React from "react";

const NeonCircle = () => {
  return (
    <div
      className="absolute top-2/4 w-full h-full flex items-center justify-center opacity-80"
      aria-readonly
    >
      <div className="w-1/2 h-1/2 flex items-center justify-center relative">
        <div className="absolute w-full h-full bg-neon-blue/30 rounded-full blur-3xl" />
        <div className="absolute w-1/2 h-1/2 bg-neon-greenish/30 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default NeonCircle;
