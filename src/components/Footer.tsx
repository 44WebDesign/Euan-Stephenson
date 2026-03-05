import { Flag, Share2, AtSign, Camera } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="border-t border-primary/10 py-12 px-6 bg-black"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <Flag className="text-primary w-6 h-6" />
          <p className="font-bold uppercase tracking-tighter text-white">Euan Stephenson Racing</p>
        </div>
        
        <div className="flex gap-6 text-white">
          <a href="#" className="hover:text-primary transition-colors p-2 bg-white/5 rounded-full"><Share2 size={18} /></a>
          <a href="#" className="hover:text-primary transition-colors p-2 bg-white/5 rounded-full"><AtSign size={18} /></a>
          <a href="#" className="hover:text-primary transition-colors p-2 bg-white/5 rounded-full"><Camera size={18} /></a>
        </div>
        
        <p className="text-white/60 text-sm font-medium">© 2024 Euan Stephenson. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}
