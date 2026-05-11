import { motion } from 'framer-motion';
import devImage from '../assets/Gemini_Generated_Image_auafiaauafiaauaf.png';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image/Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden glass-panel relative group flex items-center justify-center mx-auto border border-white/10 shadow-[0_0_60px_rgba(0,240,255,0.15)]">

            <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/20 to-accent-purple/20 group-hover:scale-110 transition-transform duration-500 z-10"></div>
            {/* the imag part */}
            <img
              src={devImage}
              alt="Development"
              className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-accent-cyan/30 shadow-[0_0_40px_rgba(0,240,255,0.25)] z-20"
            />
            
          </div>

            {/* Overlay Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 glass-panel p-6 shadow-2xl border-accent-cyan/20 z-20"
            >
              <h4 className="font-bold text-xl text-white mb-1">Athlete</h4>
              <p className="text-gray-400 text-sm">Football & Basketball</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -top-6 -left-6 lg:-top-10 lg:-left-10 glass-panel p-6 shadow-2xl border-accent-purple/20 z-20"
            >
              <h4 className="font-bold text-xl text-white mb-1">Competitive</h4>
              <p className="text-gray-400 text-sm">600+ DSA Solutions</p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 mt-10 lg:mt-0"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About <span className="text-gradient">Me</span></h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                I am a passionate Full Stack Developer and a DSA enthusiast currently pursuing my B.Tech in CSIT at KIET Group of Institutions.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                My focus lies in building scalable web applications with architectural precision. When I'm not writing code, you can find me on the football field or dominating the basketball court.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="glass-panel p-6 hover:-translate-y-1 transition-transform">
                <div className="text-accent-cyan text-3xl mb-3">🎓</div>
                <h3 className="font-bold text-lg text-white">Education</h3>
                <p className="text-sm text-gray-400 mt-1">KIET Group of Institutions<br />B.Tech CSIT</p>
              </div>
              <div className="glass-panel p-6 hover:-translate-y-1 transition-transform">
                <div className="text-accent-purple text-3xl mb-3">⚡</div>
                <h3 className="font-bold text-lg text-white">Focus</h3>
                <p className="text-sm text-gray-400 mt-1">Scalable Architecture<br />Full Stack Dev</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
