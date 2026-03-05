import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 lg:px-16 transition-all duration-300 bg-gradient-to-b from-background-dark/80 to-transparent backdrop-blur-[2px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-primary font-black text-3xl tracking-tighter">ES</span>
          <h2 className="text-xl font-black tracking-tighter uppercase hidden sm:block">Euan Stephenson</h2>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {['Home', 'Journey', 'Racing', 'Partners'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wide"
            >
              {item}
            </a>
          ))}
          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 uppercase tracking-wide">
            Support Euan
          </button>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background-dark border-b border-white/10 p-6 md:hidden flex flex-col gap-6 shadow-2xl"
          >
            {['Home', 'Journey', 'Racing', 'Partners'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-lg font-bold hover:text-primary transition-colors uppercase"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-primary text-white px-6 py-3 rounded-lg text-sm font-bold uppercase w-full">
              Support Euan
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
