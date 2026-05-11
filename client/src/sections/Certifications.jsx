import { motion } from 'framer-motion';

const certs = [
  { 
    name: "Palo Alto Networks", 
    org: "Cybersecurity", 
    color: "from-orange-500 to-red-500",
    link: "https://drive.google.com/file/d/1rhWgDzvHgkqJ51_UcWX0OeQ4Tv3BDD9q/view?usp=drive_link"
  },
  { 
    name: "MongoDB Associate", 
    org: "Database Architecture", 
    color: "from-green-500 to-emerald-500",
    link: "https://drive.google.com/file/d/1RRvVsWRGVAdTO7HT5ekCqBgSYhvbhoV6/view?usp=drive_link"
  },
  { 
    name: "Blockchain Developer", 
    org: "Web3 Foundation", 
    color: "from-purple-500 to-pink-500",
    link: "https://drive.google.com/file/d/1f0W-gXrQpSqEOeogXlyd1XhoJ2xb3fyN/view?usp=sharing"
  },
  { 
    name: "DevUp Certification", 
    org: "Tech Organization", 
    color: "from-blue-500 to-cyan-500",
    link: "https://drive.google.com/file/d/1rbL7HAflektCjH0XWUTghcER08vMWiaW/view?usp=drive_link"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold">
            Validated <span className="text-gradient">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, idx) => (
            <motion.a
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-panel p-6 relative overflow-hidden group cursor-pointer hover:-translate-y-1 hover:shadow-2xl transition-all block"
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.color} rounded-full blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity`}
              ></div>

              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center border border-white/5 mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl text-white">🏆</span>
                </div>
              </div>

              <h3 className="font-bold text-lg text-white mb-1">
                {cert.name}
              </h3>
              <p className="text-sm text-gray-400">{cert.org}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}