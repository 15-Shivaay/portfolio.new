import { motion } from 'framer-motion';
import { SiJavascript, SiPython, SiCplusplus, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiGit, SiGithub, SiMui } from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa';

const techIcons = [
  { icon: FaJava, name: "Java", color: "text-[#007396]" },
  { icon: SiPython, name: "Python", color: "text-[#3776AB]" },
  { icon: SiCplusplus, name: "C++", color: "text-[#00599C]" },
  { icon: SiJavascript, name: "JavaScript", color: "text-[#F7DF1E]" },
  { icon: SiReact, name: "React", color: "text-[#61DAFB]" },
  { icon: SiNodedotjs, name: "Node.js", color: "text-[#339933]" },
  { icon: SiExpress, name: "Express", color: "text-white" },
  { icon: SiMongodb, name: "MongoDB", color: "text-[#47A248]" },
  { icon: SiMysql, name: "MySQL", color: "text-[#4479A1]" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-[#06B6D4]" },
  { icon: SiGit, name: "Git", color: "text-[#F05032]" },
  { icon: SiGithub, name: "GitHub", color: "text-white" },
  { icon: FaHtml5, name: "HTML", color: "text-[#E34F26]" },
  { icon: FaCss3Alt, name: "CSS", color: "text-[#1572B6]" },
  { icon: SiMui, name: "Material UI", color: "text-[#007FFF]" }
];

const bigSkills = "EXPRESS • MONGODB • JAVASCRIPT • TAILWIND CSS • REACT • NODE.JS • DSA • REST APIs • OOPS • DBMS • ";

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Technical <span className="text-gradient">Skills</span></h2>
        </motion.div>
      </div>

      <div className="flex flex-col gap-16 py-10">
        {/* Strip 1: Icons (Left to Right) */}
        <div className="relative w-full overflow-hidden flex group">
          <div className="flex whitespace-nowrap animate-marquee-right group-hover:[animation-play-state:paused]">
            {[...techIcons, ...techIcons, ...techIcons].map((tech, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center justify-center w-28 h-28 md:w-32 md:h-32 mx-4 glass-panel hover:scale-110 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:border-accent-cyan/50 cursor-pointer group/icon"
              >
                <tech.icon className={`text-4xl md:text-5xl ${tech.color} drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] group-hover/icon:drop-shadow-[0_0_15px_currentColor] transition-all`} />
                <span className="text-xs text-gray-400 mt-3 font-medium opacity-0 group-hover/icon:opacity-100 transition-opacity absolute bottom-2">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Strip 2: Text (Right to Left) */}
        <div className="relative w-full overflow-hidden flex py-4">
          <div className="flex whitespace-nowrap animate-marquee-left">
             <span className="text-7xl md:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white/10 to-white/5 px-4 select-none">
                {bigSkills.repeat(4)}
             </span>
          </div>
        </div>
      </div>
    </section>
  );
}
