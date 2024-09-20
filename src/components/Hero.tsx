"use client";
import Image from "next/image";
import setting from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import { motion } from "framer-motion";
import profilepic from "../assets/profilepic.png";
import React, { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);

  return (
    <div
      className="py-24 relative overflow-hidden bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]"
      ref={containerRef}
    >
      <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>

      <div className="relative">
        <div className="text-8xl font-bold text-center">
          <h1 className="text-[#98B4CE]">Hi, I am</h1>
          <h1 className="text-[#E48A57]">Rahul Dohare</h1>
        </div>

        <motion.div
          className="absolute left-[100px] top-[300px]"
          drag
          dragConstraints={containerRef}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image
            src={setting}
            height={170}
            width={170}
            alt="setting"
            className="cursor-grab"
            draggable="false"
          />
        </motion.div>

        <motion.div
          className="absolute right-[220px] top-[20px]"
          drag
          dragConstraints={containerRef}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image
            src={lightning}
            height={120}
            width={120}
            alt="lightning"
            className="cursor-grab"
            draggable="false"
          />
        </motion.div>

        <p className="text-center text-xl max-w-[900px] mx-auto mt-8 text-white/80">
          Enthusiastic Web Developer with proficiency in Front-end and Back-end
          development, possessing strong skills in React.js, Node.js, Express,
          and MongoDB, along with a solid foundation in programming languages.
          Seeking opportunities to contribute creatively and technically to a
          dynamic team. Eager to apply and expand skills in a real-world
          development environment.
        </p>

        <Image
          src={profilepic}
          alt="profile picture"
          className="h-auto w-auto mx-auto"
        />
      </div>
    </div>
  );
}
