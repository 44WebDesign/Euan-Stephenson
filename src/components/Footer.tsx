import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
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
          <img src="/eb160d0c-176c-46fd-ba17-365a954fa949.jpg" alt="ES Logo" className="w-8 h-8 object-cover rounded-md" />
          <p className="font-bold uppercase tracking-tighter text-white">Euan Stephenson Racing</p>
        </div>

        <div className="flex gap-6 text-white">
          <a href="https://www.facebook.com/rocketracing51" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors p-2 bg-white/5 rounded-full"><Facebook size={18} /></a>
          <a href="https://x.com/euan_racing?t=lj0paaYc0VDwtpMoxlwlhQ&s=09" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors p-2 bg-white/5 rounded-full"><Twitter size={18} /></a>
          <a href="https://www.instagram.com/euanstephensonracing/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors p-2 bg-white/5 rounded-full"><Instagram size={18} /></a>
          <a href="https://www.youtube.com/channel/UC36zcFNoVGe_4q2YoDtuB_g" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors p-2 bg-white/5 rounded-full"><Youtube size={18} /></a>
        </div>

        <p className="text-white/60 text-sm font-medium">© 2026 Euan Stephenson. All rights reserved. Website by <a href="https://58webdesign.co.uk">58WebDesign</a></p>
      </div>
    </motion.footer>
  );
}
