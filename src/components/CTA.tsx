import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-primary rounded-3xl p-12 text-center relative overflow-hidden group shadow-2xl"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 grayscale mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1547544289-51c4413ba521?q=80&w=1000&auto=format&fit=crop')" }}
        />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight italic">Be Part of the Story</h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg mb-10 font-medium">
            Sponsorship opportunities are available for brands looking to align with performance, precision, and the future of motorsport.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-10 py-4 rounded-xl font-black uppercase text-sm hover:bg-white/90 transition-colors tracking-wide">
              Partner with Euan
            </button>
            <button className="bg-background-dark text-white px-10 py-4 rounded-xl font-black uppercase text-sm hover:bg-background-dark/80 transition-colors tracking-wide border border-white/10">
              Get in Touch
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
