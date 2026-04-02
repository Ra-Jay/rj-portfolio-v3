import { motion } from 'motion/react';
import { ExternalLink, Github, Layers, ShoppingCart, Cpu, Coffee } from 'lucide-react';

const projects = [
  {
    title: "Easy Boat Deals",
    description: "Full-stack boat marketplace with real-time listings, advanced filtering, and a seamless bidding system.",
    tech: ["TypeScript", "GraphQL", "Payload CMS", "Tailwind"],
    image: "/projects/easyboat.png",
    live: "https://www.easyboatdeals.com/",
    icon: <ShoppingCart className="w-6 h-6" />
  },
  {
    title: "LSC Inspector",
    description: "AI-powered Laser Soldering Qualitative Inspector using YOLOv8 for real-time defect detection in micro-components.",
    tech: ["Next.js", "Tailwind", "Flask", "YOLOv8"],
    image: "/projects/lscinspector.png",
    github: "https://github.com/Ra-Jay/next_lsc_inspector",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "Zero-X Café",
    description: "Zero Limits. A modern Japandi tech haven in Cebu designed for peak productivity and premium coffee.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/projects/zerox.png",
    live: "https://zero-x-cafe.vercel.app/",
    icon: <Coffee className="w-6 h-6" />
  },
  {
    title: "HueMann Café",
    description: "German Precision. Cebu Passion. A premium coffee brand where tender steaks meet creamy sips.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/projects/huemann.png",
    live: "https://hue-mann.vercel.app/",
    icon: <Coffee className="w-6 h-6" />
  },
  {
    title: "Coffee & Desserts",
    description: "Indulge Slowly. Escape Deeply. A Korean-soul inspired escape where fresh taiyaki meets cookie butter lattes.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/projects/coffeedesserts.png",
    live: "https://coffee-and-desserts.vercel.app/",
    icon: <Coffee className="w-6 h-6" />
  },
  {
    title: "Miracle Nutritional Products",
    description: "High-performance e-commerce platform for nutritional supplements with complex product variations and secure checkout.",
    tech: ["React", "Tailwind CSS", "E-commerce"],
    image: "/projects/miracle.png",
    icon: <Layers className="w-6 h-6" />
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-500 text-sm font-semibold mb-4"
          >
            Portfolio
          </motion.div>
          <h2 className="text-4xl font-bold dark:text-white tracking-tight">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative glass rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/10 transition-all"
            >
              {/* Image Container */}
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white text-navy-900 flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white text-navy-900 flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold dark:text-white">{project.title}</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-navy-700 text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
