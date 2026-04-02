import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-navy-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold">
              RJ
            </span>
            <span className="font-bold dark:text-white tracking-tight">RJ Yanson</span>
          </div>

          <div className="flex items-center gap-8">
            <a href="https://github.com/Ra-Jay" className="text-slate-400 hover:text-cyan-500 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/raul-jay-yanson-16536a1a7/" className="text-slate-400 hover:text-cyan-500 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-cyan-500 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="mailto:rauljayyanson@gmail.com" className="text-slate-400 hover:text-cyan-500 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
            &copy; 2025 RJ Yanson | Cebu.
          </p>
        </div>
      </div>
    </footer>
  );
}
