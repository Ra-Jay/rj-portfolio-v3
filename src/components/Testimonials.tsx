import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Molar Inc",
    role: "Upwork Client",
    text: "Raul is a skilled engineer who consistently delivered quality work throughout our engagement. He quickly got up to speed on our systems and tackled tickets with efficiency and attention to detail. His communication was clear and professional, and he required minimal oversight to get things done. Raul would be a strong addition to any engineering team, and I wouldn't hesitate to work with him again.",
    avatar: "https://ui-avatars.com/api/?name=Molar+Inc&background=06b6d4&color=fff"
  },
  {
    name: "Michael Chen",
    role: "Upwork Client",
    text: "Working with RJ was a breeze. His technical expertise combined with his eye for design makes him a rare find in the full-stack world.",
   avatar: "https://ui-avatars.com/api/?name=Micheal+Chen&background=06b6d4&color=fff"
  },
  {
    name: "Elena Rodriguez",
     role: "Upwork Client",
    text: "The e-commerce platform RJ built for us exceeded all expectations. Our conversion rates have increased by 25% since launch.",
   avatar: "https://ui-avatars.com/api/?name=Elena+Rod&background=06b6d4&color=fff"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-navy-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-500 text-sm font-semibold mb-4"
          >
            Testimonials
          </motion.div>
          <h2 className="text-4xl font-bold dark:text-white tracking-tight">What Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl relative group"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-cyan-500/10 group-hover:text-cyan-500/20 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cyan-500 text-cyan-500" />
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-8 italic leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-cyan-500/20" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold dark:text-white">{t.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
