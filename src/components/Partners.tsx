import { motion } from 'motion/react';

export default function Partners() {
  const partners = [
    "VELOCITY", "APEX", "NITRO", "CIRCUIT", 
    "PODIUM", "GRID", "LUBRICANTS", "ENGINEERING"
  ];

  return (
    <section id="partners" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Strategic Alliances</h3>
        <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">Partners</h2>
        <div className="h-1 w-20 bg-primary mx-auto mt-4"></div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-80">
        {partners.map((partner, index) => (
          <motion.div 
            key={partner} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="w-full grayscale hover:grayscale-0 transition-all duration-300 p-8 bg-white/5 rounded-xl flex justify-center h-32 items-center group cursor-pointer hover:bg-white/10"
          >
            <span className="text-2xl font-black text-white/40 group-hover:text-white transition-colors">{partner}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
