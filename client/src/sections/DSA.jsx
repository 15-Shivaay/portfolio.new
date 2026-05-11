import { motion } from 'framer-motion';

export default function DSA() {
  return (
    <section id="dsa" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-cyan/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm font-medium mb-6">
              Problem Solving
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Algorithm <span className="text-gradient">Architect</span></h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Strong foundation in Data Structures and Algorithms with a proven track record of solving complex computational problems efficiently.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="glass-panel p-4 border-l-2 border-l-accent-cyan">
                <h4 className="text-3xl font-bold text-white mb-1">400+</h4>
                <p className="text-sm text-gray-400">Total Problems Solved</p>
              </div>
              <div className="glass-panel p-4 border-l-2 border-l-accent-purple">
                <h4 className="text-3xl font-bold text-white mb-1">Strong</h4>
                <p className="text-sm text-gray-400">Algorithmic Thinking</p>
              </div>
            </div>



            <div className="flex flex-wrap gap-4">
              <a href="#" className="px-6 py-2.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-sm font-medium">
                View LeetCode
              </a>
              <a href="#" className="px-6 py-2.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-sm font-medium">
                View GeeksForGeeks
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center relative w-full h-full min-h-[400px]"
          >
            <a 
              href="https://codolio.com/profile/shivaay" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative w-full max-w-md block"
            >
              {/* Highlight Background Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
              
              {/* Main Card */}
              <div className="relative glass-panel p-10 flex flex-col items-center justify-center gap-8 rounded-3xl bg-[#0a0a0a]/90 hover:bg-[#0a0a0a] transition-colors border border-white/20">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-accent-cyan to-accent-purple flex items-center justify-center shadow-[0_0_40px_rgba(0,240,255,0.6)] group-hover:scale-110 transition-transform duration-500">
                  <span className="text-4xl text-white font-black tracking-tighter">C</span>
                </div>
                
                <div className="text-center">
                  <h3 className="text-3xl font-extrabold text-white mb-3 tracking-wide">Codolio Profile</h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    View my complete competitive programming journey and detailed contest analytics.
                  </p>
                </div>
                
                <div className="mt-2 w-full py-4 rounded-xl bg-white text-black font-extrabold text-center uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] group-hover:-translate-y-1 transition-all duration-300">
                  Explore Now
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
