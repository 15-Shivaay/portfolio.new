import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import DSA from './sections/DSA';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-primary text-white font-sans selection:bg-accent-cyan selection:text-black min-h-screen">
      {!introFinished && <Intro onComplete={() => setIntroFinished(true)} />}
      
      <div className={introFinished ? 'opacity-100 transition-opacity duration-1500' : 'opacity-0 h-screen overflow-hidden'}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <DSA />
          <Contact />
        </main>
        <Footer />
      </div>

      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
