import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaNode,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiCplusplus,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss ,
  SiBootstrap,
  SiCodingninjas,
  SiBlender,
} from "react-icons/si";

const skillIcons = [
  { icon: <SiCplusplus size={140} />, label: "C++" },
  { icon: <FaHtml5 size={140} />, label: "HTML" },
  { icon: <FaCss3Alt size={140} />, label: "CSS" },
  { icon: <FaJsSquare size={140} />, label: "JavaScript" },
  { icon: <SiTypescript size={140} />, label: "TypeScript" },
  { icon: <FaReact size={110} />, label: "React.js" },
  { icon: <SiNextdotjs size={140} />, label: "Next.js" },
  { icon: <SiTailwindcss size={140} />, label: "TailwindCSS" },
  { icon: <SiBootstrap size={140} />, label: "Bootstrap" },
  { icon: <FaNode size={140} />, label: "Node.js" },
  { icon: <SiExpress size={140} />, label: "Express.js" },
  { icon: <SiMongodb size={140} />, label: "MongoDB" },
  { icon: <SiMysql size={140} />, label: "MySQL" },
  { icon: <SiCodingninjas size={140} />, label: "Data Structure and Algorithms" },
  { icon: <FaGitAlt size={140} />, label: "Git" },
  { icon: <SiBlender size={140} />, label: "Blender" },
];
export default function Skills() {
  return (
    <div className="bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-20"  id="skills">
      <div className="text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center ">
        <h2 className="text-6xl font-bold mb-4">What I Do</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
          {skillIcons.map((skill, index) => (
            <div
              key={index}
              className="h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl"
            >
              {skill.icon}
              <p className="mt-2">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
