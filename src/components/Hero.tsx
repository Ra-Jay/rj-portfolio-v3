import { motion } from 'motion/react';
import { ArrowRight, Download, Linkedin, Github } from 'lucide-react';
import { useEffect, useState } from 'react';

const headline = "Full-Stack Developer | Software Developer";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  const [isDark, setIsDark] = useState(true);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Initial check
    setIsDark(document.documentElement.classList.contains('dark'));

    // Observe theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDark(document.documentElement.classList.contains('dark'));
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (index < headline.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + headline[index]);
        setIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Parallax Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full glass text-cyan-500 text-sm font-semibold mb-6"
          >
            👋 Available for new opportunities
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 dark:text-white leading-tight">
            I'm <span className="text-gradient">RJ Yanson</span>
          </h1>
          <div className="min-h-fit mb-6">
            <p className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
              {displayText}
              <span className="animate-pulse inline-block w-1 h-6 bg-cyan-500 ml-1" />
            </p>
          </div>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-lg">
            Turning complex problems into elegant, high-performance digital experiences that drive real business results.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="https://www.linkedin.com/in/raul-jay-yanson-16536a1a7/" // Placeholder
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-xl shadow-cyan-500/20 flex items-center gap-2"
            >
              Hire Me on Upwork <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl glass dark:text-white font-bold flex items-center gap-2"
            >
              View My Projects
            </motion.a>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <a href="https://github.com/Ra-Jay" className="text-slate-400 hover:text-cyan-500 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/raul-jay-yanson-16536a1a7/" className="text-slate-400 hover:text-cyan-500 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <div className="h-6 w-px bg-slate-200 dark:bg-navy-700" />
             <a href="https://www.dropbox.com/scl/fi/yah0n7wly3a5ni1f748h5/Yanson_Resume.pdf?rlkey=jdu5ejhxns59qpe6yuh44mmtz&st=zjij965k&dl=0" className="text-slate-400 hover:text-cyan-500 transition-colors">
            <button className="text-sm font-semibold flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition-colors">
              <Download className="w-4 h-4" /> Download Resume
            </button>
             </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-cyan-400 to-blue-600 blur-2xl opacity-30 animate-pulse" />
            
            {/* Profile Image Container */}
            <div 
              className="relative w-full h-full rounded-full border-4 border-white dark:border-navy-800 overflow-hidden shadow-2xl z-10 group cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={isHovered 
                  ? (isDark ? "/projects/avatar-light.jpeg" : "/projects/avatar.jpeg")
                  : (isDark ? "/projects/avatar.jpeg" : "/projects/avatar-light.jpeg")
                }
                alt="RJ Yanson"
                className="w-full h-full object-cover transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass p-3 rounded-2xl shadow-lg z-20"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs font-bold dark:text-white">Full-Stack</span>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 glass p-3 rounded-2xl shadow-lg z-20"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold dark:text-white">4+ Years Exp</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
