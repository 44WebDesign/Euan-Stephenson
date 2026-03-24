import { Flag, Trophy } from 'lucide-react';
import { motion } from 'motion/react';

export default function Timeline() {
  return (
    <section id="journey" className="pt-24 pb-12 bg-[#0a0404]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 tracking-tighter italic">Journey to the Podium</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto"></div>
        </div>

        <div className="relative space-y-0">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-primary/20 z-0"></div>

          {/* Item 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between mb-24 pl-12 md:pl-0"
          >
            <div className="md:w-[45%] text-left md:text-right hidden md:block">
              <span className="text-sm font-black text-primary uppercase tracking-[0.2em]">The Beginning</span>
              <h4 className="text-2xl font-bold mt-2">The First Spark</h4>
              <p className="text-white/80 mt-3">Started Karting at local club level, immediately showing natural pace.</p>
            </div>

            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 size-10 md:size-14 rounded-full bg-primary flex items-center justify-center text-white ring-8 ring-background-dark">
              <Flag className="w-5 h-5 md:w-6 md:h-6" />
            </div>

            <div className="md:w-[45%] text-left mt-0 md:mt-0">
              <span className="text-4xl font-black text-primary/30">2018</span>
              <div className="md:hidden mt-2">
                <span className="text-xs font-black text-primary uppercase tracking-[0.2em] block mb-1">The Beginning</span>
                <h4 className="text-2xl font-bold">The First Spark</h4>
                <p className="text-white/80 mt-2">Started Karting at local club level.</p>
              </div>
            </div>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 flex flex-col md:flex-row-reverse items-start md:items-center justify-between mb-0 pl-12 md:pl-0"
          >
            <div className="md:w-[45%] text-left hidden md:block">
              <span className="text-sm font-black text-primary uppercase tracking-[0.2em]">Achievement</span>
              <h4 className="text-2xl font-bold mt-2">Regional Champion</h4>
              <p className="text-white/80 mt-3">Secured the championship with 5 consecutive wins.</p>
            </div>

            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 size-10 md:size-14 rounded-full bg-primary flex items-center justify-center text-white ring-8 ring-background-dark">
              <Trophy className="w-5 h-5 md:w-6 md:h-6" />
            </div>

            <div className="md:w-[45%] text-left md:text-right mt-0 md:mt-0">
              <span className="text-4xl font-black text-primary/30">2020</span>
              <div className="md:hidden mt-2 text-left">
                <span className="text-xs font-black text-primary uppercase tracking-[0.2em] block mb-1">Achievement</span>
                <h4 className="text-2xl font-bold">Regional Champion</h4>
                <p className="text-white/80 mt-2">First major title win.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
