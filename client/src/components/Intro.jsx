import { motion } from 'framer-motion';

export default function Intro({ onComplete }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, display: "none" }}
      transition={{ duration: 0.8, delay: 2, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary"
    >
      <div className="absolute top-8 left-8">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl font-bold tracking-widest text-white/80"
        >
          Shivaay
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.9 }}
        animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="text-center px-4 z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
          Building <span className="text-gradient">scalable experiences</span> <br className="hidden md:block"/> with code.
        </h2>
      </motion.div>

      {/* Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-[120px]" 
        />
      </div>
    </motion.div>
  );
}
