"use client";
import React, { useEffect, useRef, useState } from "react";
import BorderEffect from "./BorderEffect";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  top?: boolean;
  left?: boolean;
  right?: boolean;
  buttom?: boolean;
  className?: string
}

const NeonEffect = ({
  children,
  top = true,
  left = true,
  right = true,
  buttom = true,
  className
}: Props) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // console.log(parentRef.current?.clientHeight);
    setHeight(parentRef.current?.clientHeight as number);
  }, []);

  return (
    <div
      ref={parentRef}
      className={twMerge("relative w-full h-full flex justify-center items-center px-4 py-2", className)}
    >
      <div className="relative w-full">{children}
      {left && (
          <BorderEffect
          style={{ width: `${height + ((height*15)/100)}px` }} className={`absolute left-0 top-1/2 rotate-90 -translate-x-1/2 `} />
      )}
      {right && (
        <BorderEffect style={{ width: `${height + ((height*15)/100)}px` }} className=" absolute right-0 top-1/2 rotate-90 translate-x-1/2" />
      )}
      </div>
      {top && <BorderEffect className="w-full absolute top-0 " />}
      {buttom && <BorderEffect className="w-full absolute bottom-0" />}
    </div>

    // This is for reserve
    // <div
    //   ref={parentRef}
    //   className="relative w-full h-full flex justify-center items-center"
    // >
    //   {children}
    //   {top && <BorderEffect className="w-full absolute top-0 " />}
    //   {buttom && <BorderEffect className="w-full absolute bottom-0" />}
    //   {left && (
    //     <BorderEffect className={`absolute left-0 top-1/2 rotate-90 -translate-x-1/2 `} />
    //   )}
    //   {right && (
    //     <BorderEffect className=" absolute right-0 top-1/2 rotate-90 translate-x-1/2" />
    //   )}
    // </div>
  );
};

export default NeonEffect;
