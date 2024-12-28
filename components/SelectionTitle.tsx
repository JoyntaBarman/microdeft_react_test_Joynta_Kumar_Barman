import React from "react";

interface Props {
  title: string;
}

const SectionTitle = ({ title }: Props) => {
  return (
    
        <h2 className="text-3xl font-semibold flex items-center justify-center max-w-2xl w-full gap-4 text-neon-greenish mx-auto">
          <span className="w-1/4 h-[1px] bg-neon-blue/10 inline-flex"> </span>
          {title}
          <span className="w-1/4 h-[1px] bg-neon-blue/10 inline-flex"> </span>
        </h2>
      
  );
};

export default SectionTitle;
