import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 px-6 py-4 lg:px-8 border border-white/10 rounded-full transition-all duration-300 bg-background-dark/80 backdrop-blur-md flex items-center justify-between">
        {/* Added responsive floating navbar */}
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/eb160d0c-176c-46fd-ba17-365a954fa949.jpg" alt="ES Logo" className="h-10 w-auto object-contain rounded-md" />
            <h2 className="text-xl font-black tracking-tighter uppercase hidden lg:block whitespace-nowrap">Euan Stephenson</h2>
          </div>

          <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center gap-6 lg:gap-10">
            {['Home', 'Journey', 'Racing', 'Partners'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 uppercase tracking-wide cursor-pointer"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-4">
            <a href="#contact" className="hidden sm:inline-block bg-primary hover:bg-primary/80 hover:shadow-[0_0_15px_rgba(189,15,15,0.4)] text-white px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 uppercase tracking-wide cursor-pointer whitespace-nowrap text-center">
              Support Euan
            </a>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-primary transition-colors duration-200 cursor-pointer focus:outline-none">
                {isOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[80px] left-0 right-0 bg-background-dark/95 border border-white/10 rounded-2xl p-6 md:hidden flex flex-col gap-6 shadow-2xl backdrop-blur-md"
            >
              {['Home', 'Journey', 'Racing', 'Partners'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-bold text-slate-300 hover:text-white transition-colors duration-200 uppercase cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)} className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-lg text-sm font-bold uppercase w-full transition-colors duration-200 cursor-pointer text-center block">
                Support Euan
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
