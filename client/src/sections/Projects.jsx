import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const projects = [
  {
    title: "SocialGraph",
    description: "A complex network visualization tool mapping relationships using graph algorithms. Built with Node.js and sophisticated data structures.",
    tech: ["JavaScript", "Node.js", "Graph Algorithms"],
    github: "#",
    demo: "#"
  },
  {
    title: "CivicSync",
    description: "Municipal reporting platform for reporting local issues with real-time updates and location-based filtering.",
    tech: ["MongoDB", "Express", "Node.js", "React"],
    github: "#",
    demo: "#"
  },
  {
    title: "Nexus Analytics",
    description: "Responsive analytics dashboard built with React and Material UI featuring dynamic charts and dark mode management.",
    tech: ["React", "Material UI", "Charts"],
    github: "#",
    demo: "#"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold">Selected <span className="text-gradient">Works</span></h2>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-accent-cyan hover:text-white transition-colors group flex items-center"
          >
            View All Repos
            <FiExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              variants={item}
              className="glass-panel p-8 flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,240,255,0.15)] hover:border-accent-cyan/30 transition-all duration-300 group"
            >
              <div className="flex justify-between items-center mb-6">
                <FiFolder className="text-4xl text-accent-cyan" />
                <div className="flex space-x-4">
                  <a href={project.github} className="text-gray-400 hover:text-accent-cyan transition-colors">
                    <FiGithub className="text-xl" />
                  </a>
                  <a href={project.demo} className="text-gray-400 hover:text-accent-cyan transition-colors">
                    <FiExternalLink className="text-xl" />
                  </a>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent-cyan transition-colors">{project.title}</h3>
              <p className="text-gray-400 mb-6 flex-grow leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-mono text-accent-purple bg-accent-purple/10 px-3 py-1 rounded-full border border-accent-purple/20">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
