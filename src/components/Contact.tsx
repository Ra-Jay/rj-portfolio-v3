import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-500 text-sm font-semibold mb-6">
              Get In Touch
            </div>
            <h2 className="text-5xl font-bold dark:text-white tracking-tight mb-8">
              Let's build something <span className="text-gradient">extraordinary</span> together.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
              Whether you have a specific project in mind or just want to say hi, I'm always open to discussing new opportunities and innovative ideas.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-1">Email Me</p>
                  <a href="mailto:rauljayyanson@gmail.com" className="text-xl font-bold dark:text-white hover:text-cyan-500 transition-colors">
                    rauljayyanson@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-1">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/raul-jay-yanson-16536a1a7/" className="text-xl font-bold dark:text-white hover:text-cyan-500 transition-colors">
                    linkedin.com/in/rjyanson
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                  <ExternalLink className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-1">Upwork</p>
                  <a href="https://www.upwork.com/freelancers/~010aab282927cd2536" className="text-xl font-bold dark:text-white hover:text-cyan-500 transition-colors">
                    Hire Me on Upwork
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2.5rem] shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600 dark:text-slate-300">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-700 focus:border-cyan-500 outline-hidden transition-all dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600 dark:text-slate-300">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-700 focus:border-cyan-500 outline-hidden transition-all dark:text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600 dark:text-slate-300">Subject</label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-700 focus:border-cyan-500 outline-hidden transition-all dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600 dark:text-slate-300">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-700 focus:border-cyan-500 outline-hidden transition-all dark:text-white resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-3"
              >
                Send Message <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
