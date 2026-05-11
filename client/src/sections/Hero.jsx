import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }} // delay after intro
          className="space-y-6"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan text-sm font-medium shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            <span className="w-2 h-2 rounded-full bg-accent-cyan mr-2 animate-pulse"></span>
            Available For Projects
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-md">
            Shivam Kumar
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 font-medium flex items-center gap-2">
            Software Engineer <span className="text-accent-purple/50">|</span> DSA Enthusiast
          </h2>
          
          <h2 className="text-xl md:text-2xl text-gray-300 font-medium flex items-center gap-2">
            Full Stack Developer <span className="text-accent-purple/50">|</span> DSA Enthusiast
          </h2>
          
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            Building scalable digital experiences through architectural precision and high-performance code.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              View Projects
            </button>
            <button onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3.5 rounded-full border border-white/20 hover:border-accent-purple hover:bg-white/5 transition-all text-white font-medium hover:shadow-[0_0_20px_rgba(191,0,255,0.3)]">
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* Right Content - Floating Cards */}
        <div className="relative h-[500px] hidden lg:block">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.7 }}
          >
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 right-10 glass-panel p-6 shadow-2xl z-20 w-64 border-accent-cyan/20"
            >
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-accent-cyan/20 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                  <span className="text-accent-cyan text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-white">400+</h3>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Problems Solved</p>
                </div>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded-full mt-4 overflow-hidden">
                <div className="bg-gradient-to-r from-accent-cyan to-accent-purple w-[85%] h-full rounded-full relative">
                  <div className="absolute inset-0 bg-white/20 w-1/2 animate-[marquee-right_2s_linear_infinite]"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.9 }}
          >
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-10 glass-panel p-6 shadow-2xl z-10 w-80 border-accent-purple/20"
            >
              <div className="flex space-x-2 mb-4 border-b border-white/10 pb-3">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="font-mono text-sm text-gray-300 leading-relaxed">
                <p><span className="text-accent-purple">const</span> developer = {'{'}</p>
                <p className="ml-4">name: <span className="text-accent-cyan">'Shivaay'</span>,</p>
                <p className="ml-4">role: <span className="text-accent-cyan">'Full Stack'</span>,</p>
                <p className="ml-4">passion: <span className="text-accent-cyan">'Code'</span></p>
                <p>{'}'};</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-purple/20 rounded-full blur-[120px] -z-10 mix-blend-screen"></div>
        </div>
      </div>
    </section>
  );
}
