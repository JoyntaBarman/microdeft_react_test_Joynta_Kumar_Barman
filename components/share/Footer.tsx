import React from "react";
import Container from "../Container";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import BorderEffect from "../BorderEffect";
import Link from "next/link";
import NeonEffect from "../NeonEffect";
import Image from "next/image";
import { logo } from "@/app/assets/images";

const Footer = () => {
  return (
    <Container
      id={"footer"}
      className="py-24 bg-medium-gray/50 dark:bg-black-bg"
    >
      <NeonEffect left={true} right={true}>
        <div className="dark:bg-black-bg py-10">
          <div className="flex justify-center items-center ">
            <Link href="/" className="flex items-center gap-2">
              <Image src={logo} alt="logo" className="w-8 lg:w-12 container" />
              <span className="font-bold text-xl md:text-2xl text-neon-greenish">
                Microdeft
              </span>
            </Link>
          </div>
          {/* middle */}
          <div className="grid md:grid-cols-2 gap-5 mt-5">
            <div className="flex  justify-center items-center gap-5">
              <h1 className="text-2xl text-medium-gray">Say Something: </h1>

              <button>
                <div className=" bg-neon-blue/10 hover:bg-neon-blue/15 duration-300 rounded-lg p-1">
                  <Link href={"mailto:joyntabarman00@gmail.com"}>
                    <div className="relative w-8 h-8">
                      <BorderEffect className="w-8 absolute top-1/2" />
                      <BorderEffect
                        className={`w-8 absolute left-0 top-1/2 rotate-90 `}
                      />
                    </div>
                  </Link>
                </div>
              </button>
            </div>
            <div className="flex gap-4 items-center text-2xl text-medium-gray justify-center">
              <FaLinkedin />

              <FaGithub />

              <FaWhatsapp />
            </div>
          </div>

          <p className="text-center text-sm mt-5 text-medium-gray">
            @ coppy right by 2024
          </p>
        </div>
      </NeonEffect>
    </Container>
  );
};

export default Footer;
