import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Software Engineer",
    company: "Kyocera",
    period: "July 2024 - Present",
    location: "Cebu, PH (Full-time)",
    description: "Architecting and developing new features for core software applications. Focused on seamless frontend integration with server-side APIs, ensuring high performance, and maintaining codebase integrity through rigorous optimization.",
    skills: ["Software Development", "API Integration", "System Maintenance", "Problem Solving"]
  },
  {
    title: "Software Engineer",
    company: "Fintech Startup (Dubai-based)",
    period: "Jan 2025 - Jan 2026",
    location: "Remote (Part-time)",
    description: "Engineered critical features for a Dubai-based financial web application. Specialized in integrating complex server APIs, ensuring secure data handling, and resolving high-priority issues to maintain platform stability.",
    skills: ["Fintech", "Next.js", "API Integration", "Security"]
  },
  {
    title: "Full-Stack Developer",
    company: "Marine Trade (US-based)",
    period: "Dec 2023 - April 2025",
    location: "Remote",
    description: "Spearheaded the development of new features for a US-based marine trade web application using Next.js. Focused on end-to-end feature implementation, API orchestration, and long-term project maintenance for scalability.",
    skills: ["Next.js", "Full-Stack", "API Orchestration", "Project Maintenance"]
  },
  {
    title: "Junior Software Developer",
    company: "UglyRobot (DocsBotAI)",
    period: "July 2023 - Aug 2023",
    location: "Remote (US-based)",
    description: "Contributed to the evolution of DocsBotAI by developing features in Next.js and Python. Managed technical support, implemented robust testing suites, and streamlined CI/CD processes to accelerate deployment cycles.",
    skills: ["Next.js", "Python", "CI/CD", "Automated Testing"]
  },
  {
    title: "Junior Software Developer",
    company: "Increment Technologies Inc.",
    period: "Aug 2022 - Oct 2023",
    location: "Cebu, PH (Full-time)",
    description: "Built and deployed new features for core products using Next.js and React. Actively participated in product strategy, task prioritization, and UI/UX design for both web and mobile platforms.",
    skills: ["React", "Next.js", "UI/UX Design", "Product Strategy"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-500 text-sm font-semibold mb-4"
          >
            My Journey
          </motion.div>
          <h2 className="text-4xl font-bold dark:text-white tracking-tight">Professional Experience</h2>
        </div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-200 dark:before:via-navy-700 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-navy-800 bg-slate-100 dark:bg-navy-700 text-cyan-500 shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase className="w-5 h-5" />
              </div>

              {/* Content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-3xl shadow-xl hover:shadow-cyan-500/5 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl font-bold dark:text-white">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-xs font-semibold text-cyan-500 bg-cyan-500/10 px-3 py-1 rounded-full">
                    <Calendar className="w-3 h-3" /> {exp.period}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <span className="font-bold text-slate-700 dark:text-slate-200">{exp.company}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {exp.location}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-slate-100 dark:bg-navy-700 text-slate-600 dark:text-slate-400 rounded-md">
                      {skill}
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
