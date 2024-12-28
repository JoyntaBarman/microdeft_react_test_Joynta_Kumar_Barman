"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container";
import Link from "next/link";
import NeonEffect from "../NeonEffect";
import { MdMenu } from "react-icons/md";
import Image from "next/image";
import { logo } from "@/app/assets/images";
import { deleteLocalStorageToken, getLocalStorageToken } from "@/lib";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExistUser, setIsExistUser] = useState<string | null>(null);
  const pathName = usePathname();

  useEffect(() => {
    const user = getLocalStorageToken("authToken");
    setIsExistUser(user);
  }, [pathName]);

  const handleLogout = () => {
    const user = getLocalStorageToken("authToken");

    setIsExistUser(null);
    deleteLocalStorageToken("authToken");
  };

  const taggleMenu = () => {
    setIsVisible((prev) => !prev);
  };

  const navlinks = [
    { path: "/", text: "Home" },
    {path: "/addcourse", text: "Add Course"},
    { path: "/signup", text: "Sign Up" },
  ];

  return (
    <div>
      <Container className="relative">
        <div className="shadow-md shadow-neon-blue/10">
          <nav className="flex justify-between items-center px-4 py-4 bg-medium-gray/60 dark:bg-black-bg text-very-light-gray z-50 relative">
            <div>
              <Link href="/" className="flex items-center ">
                <Image
                  src={logo}
                  alt="logo"
                  className="w-12 mb-3 object-cover"
                />
                <span className="font-bold md:text-2xl text-neon-greenish">
                  Microdeft
                </span>
              </Link>
            </div>
            <div className="hidden md:block">
              <NeonEffect left={false} right={false}>
                <div className="flex items-center px-12 overflow-visible">
                  {navlinks.map((link, index) => {
                    return (
                      <Link
                        key={index}
                        href={link?.path}
                        className=" px-3 font-semibold hover:text-neon-greenish duration-500"
                      >
                        {link?.text}
                      </Link>
                    );
                  })}
                </div>
              </NeonEffect>
            </div>
            <div className="flex items-center gap-5 relative">
              <NeonEffect className="px-5">
                {isExistUser ? (
                  <button
                    onClick={handleLogout}
                    className="px-4 hover:text-neon-greenish duration-500"
                  >
                    Log Out
                  </button>
                ) : (
                  <Link
                    href={"login"}
                    className="px-4 hover:text-neon-greenish duration-500"
                  >
                    Log In
                  </Link>
                )}
              </NeonEffect>
              <button
                onClick={taggleMenu}
                className=" inline-block md:hidden hover:text-neon-blue duration-300 "
              >
                <MdMenu size={32} />
              </button>

              {/* mobile menu */}
              {isVisible && (
                <div className="absolute top-full right-0 bg-medium-gray rounded-lg py-2 px-4 flex flex-col z-50">
                  {navlinks.map((link, index) => {
                    return (
                      <Link
                        key={index}
                        href={link?.path}
                        className=" p-2 font-semibold hover:text-neon-greenish duration-500"
                      >
                        {link?.text}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
