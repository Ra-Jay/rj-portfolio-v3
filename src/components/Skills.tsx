import { motion } from 'motion/react';
import { Code2, Server, Terminal, Cpu, Database, Cloud, Layers, ShieldCheck } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"]
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6" />,
    skills: ["Node.js", "Python", ".NET", "MongoDB", "GraphQL", "PostgreSQL"]
  },
  {
    title: "Other Tech",
    icon: <Terminal className="w-6 h-6" />,
    skills: ["Java", "ASP.NET", "AWS", "Docker", "CI/CD", "Flask", "YOLOv7 (ML)"]
  },
  {
    title: "Soft Skills",
    icon: <Layers className="w-6 h-6" />,
    skills: ["Agile", "Team Leadership", "Problem Solving", "Communication", "UI/UX Design"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-navy-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-500 text-sm font-semibold mb-4"
          >
            Expertise
          </motion.div>
          <h2 className="text-4xl font-bold dark:text-white tracking-tight">Technical Arsenal</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold dark:text-white mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-xl bg-white dark:bg-navy-700 text-slate-600 dark:text-slate-300 text-xs font-semibold shadow-sm border border-slate-100 dark:border-navy-600 hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
