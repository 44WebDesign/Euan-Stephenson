import { ArrowRight, PlayCircle, ChevronsDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-bg-2.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/Go_Kart_Video_Clip_Generated-2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-background-dark/80 via-background-dark/50 to-background-dark/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 opacity-80"
        >
          <ChevronsDown className="text-primary w-12 h-12 animate-bounce" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight mb-6 uppercase italic"
        >
          The Speed <br />
          <span className="text-primary">of Vision</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-xl text-lg md:text-xl text-white/90 font-light mb-10 leading-relaxed"
        >
          Witness the ascent of a champion. From the first turn to the global stage, Euan Stephenson is redefining karting excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="bg-primary hover:bg-primary/80 hover:shadow-[0_0_15px_rgba(189,15,15,0.4)] text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 group transition-all duration-300 uppercase tracking-wide cursor-pointer">
            Explore the Journey
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <a href="#contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all duration-300 uppercase tracking-wide cursor-pointer">
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
