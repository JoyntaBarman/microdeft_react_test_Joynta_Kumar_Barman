
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  style?: object
}

const BorderEffect = ({ className, style }: Props) => {
  return (
    <span
      style={style}
      className={twMerge(
        "block w-1/2 h-[2px] dark:gradiantBGcolor lightThemegradiantBGcolor backdrop-blur-3xl",
        className
      )}
    ></span>
    // <span className="block w-1/2 h-[2px] gradiantBGcolor backdrop-blur-3xl"></span>
  );
};

export default BorderEffect;
