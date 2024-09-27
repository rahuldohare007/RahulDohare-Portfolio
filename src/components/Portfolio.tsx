"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import project1 from "../assets/proj1.jpg";
import project2 from "../assets/proj2.jpg";
import project3 from "../assets/proj3.png";
import project4 from "../assets/proj4.jpg";

const projects = [
  {
    title: "Rahul Portfolio",
    desc: "It's my personal portfolio website.",
    devStack:
      "React.js, Next.js, TailwindCSS, Framer Motion, Typescript and Vercel",
    link: "https://cyborgcoding.com",
    git: "https://github.com/rahuldohare007/RahulDohare-Portfolio",
    scr: project1,
  },
  {
    title: "Expenza (Expenses Controller)",
    desc: "Manage Your Expense Control Your Money Start Creating your budget and save tons of money.",
    devStack:
      "React.js, TailwindCSS, JavaScript, Node.js, Express.js, MongoDB, ReactCharts and Vercel",
    link: "https://expenza.vercel.app/",
    git: "https://github.com/rahuldohare007/Expenza",
    scr: project2,
  },
  {
    title: "TextBuddy (Text Utility)",
    desc: "TextBuddy, a comprehensive text analyser, word counter, and text converter using React.js.",
    devStack: "React.js, TailwindCSS, JavaScript, Flowbite and Vercel",
    link: "https://textbuddy.vercel.app/",
    git: "https://github.com/rahuldohare007/TextBuddy",
    scr: project3,
  },
  {
    title: "Stomify (Weather App)",
    desc: "Designed and developed a web application that provides real-time weather information for a given location.",
    devStack: "React.js, TailwindCSS, JavaScript and Vercel",
    link: "https://stomify.vercel.app/",
    git: "https://github.com/rahuldohare007/WeatherApp",
    scr: project4,
  },
];

export default function Portfolio() {
  return (
    <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-16">
      <h1
        className="text-white text-6xl w-full text-center font-semibold my-2"
        id="projects"
      >
        Selected <span className="text-orange-400 ml-4">Projects</span>
      </h1>

      <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-20 space-y-24 ">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`mt-4 flex flex-col ${
              index % 2 === 1 ? "md:flex-row-reverse gap-12" : "md:flex-row"
            }`}
          >
            <div className="space-y-2 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">
                {project.desc}
              </p>
              <p className="text-xl text-orange-400 font-semibold">
                {project.devStack}
              </p>
              <div className="w-64 h-[1px] bg-gray-400 my-4">
                <a href={project.link} className="mr-6">
                  Link
                </a>
                <a href={project.git} className="mr-6">
                  Git
                </a>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <Image
                src={project.scr}
                alt={project.title}
                className="h-[350px] w-[500px] object-cover border rounded border-gray-700"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
