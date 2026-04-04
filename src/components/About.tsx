import { motion } from 'motion/react';
import { User, MapPin, Briefcase, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-navy-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                <User className="w-5 h-5" />
              </div>
              <h2 className="text-3xl font-bold dark:text-white tracking-tight">About Me</h2>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              "I'm a passionate full-stack developer with 4+ years of experience building scalable web applications and mobile solutions. I love turning complex problems into simple, beautiful designs."
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-cyan-500" />
                <span className="text-slate-600 dark:text-slate-400">Cebu, Philippines</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-cyan-500" />
                <span className="text-slate-600 dark:text-slate-400">Full-Stack Dev & Software Engineer</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-cyan-500" />
                <span className="text-slate-600 dark:text-slate-400">Computer Science</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-video rounded-3xl overflow-hidden glass shadow-2xl relative z-10">
              <img
                src="https://dreamcyberinfoway.com/blog/wp-content/uploads/ai-in-web-development.jpg"
                alt="Workspace"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy-900/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="text-sm font-semibold opacity-80 uppercase tracking-widest mb-1">Current Focus</p>
                  <p className="text-2xl font-bold">Scalable Architecture & AI Integration</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500/10 blur-2xl rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600/10 blur-2xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
