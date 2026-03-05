import { Trophy, Timer } from 'lucide-react';
import { motion } from 'motion/react';

export default function Profile() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border-2 border-primary/20">
            <img 
              src="https://aistudio.google.com/_/upload/716dee2a-82b9-4354-ba60-0ed5ff9ea966/attachment/1772686115.203802000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::7541a1c95fdbbc41:000001ee28d018bc:00064c3fa62b879f" 
              alt="Euan Stephenson in racing gear" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-xl hidden lg:block shadow-2xl shadow-primary/20">
            <p className="text-4xl font-black text-white">01</p>
            <p className="text-sm font-bold text-white/80 uppercase tracking-widest">Driver Profile</p>
          </div>
        </motion.div>

        {/* Text Side */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Introduction</h3>
            <h2 className="text-4xl md:text-6xl font-black leading-tight uppercase italic">
              Born for the <br/>Apex.
            </h2>
          </div>
          
          <p className="text-white/80 text-lg leading-relaxed">
            At just 14 years old, Euan Stephenson has already demonstrated a level of precision and tactical awareness that rivals veteran drivers. His journey isn't just about speed; it's about the discipline of the line and the hunger for the podium.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-5 hover:border-primary/60 transition-colors group">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Trophy className="text-primary w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="text-4xl font-black text-white">12</p>
                <p className="text-xs uppercase text-white font-bold tracking-widest">Podium Finishes</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-5 hover:border-primary/60 transition-colors group">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Timer className="text-primary w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="text-4xl font-black text-white">04</p>
                <p className="text-xs uppercase text-white font-bold tracking-widest">Track Records</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
