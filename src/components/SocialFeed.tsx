import { PlayCircle, Camera } from 'lucide-react';
import { motion } from 'motion/react';

export default function SocialFeed() {
  return (
    <section className="py-24 bg-background-dark overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Social Feed</h3>
          <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-4">Inside the Grid</h2>
          <p className="text-white/80 max-w-xl">Follow the daily grind, training sessions, and raw race clips across TikTok and Instagram.</p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
          
          {/* Item 1 - Tall */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:row-span-2 relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfoVm1I6p0VjMjkdDQpS9V3RMVYsGLuN2qZUX7gNaWXCP6UyiuP9cj47FYGnNomI5G_VulfkS9xvR3evqrpud5qOIBb2spKJbJXBY8_SleASkea_Ib8NetFa_Opx2mK2uO1U0QWw-QUTpzgePHEmQZ3nxbhJ4zDaCTimfgTv6UigitXWXWU_abpyQCqYJ0eFahQNauzS9gdVfg5h7zOK77FAPT5OU0ogDncNNn9pZLReN8zH3_UUrOrTwF2fqkQMEnrAAN3St14bUe" 
              alt="Racing TikTok" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
              <PlayCircle className="text-white w-10 h-10 mb-3" />
              <p className="text-white font-bold text-sm">Pre-race mindset #GoKarting</p>
            </div>
          </motion.div>

          {/* Item 2 - Short */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx4jWTy_4yTotah62QlkFPrCb094R2QdjaXtGp3MIR-_hgLffvuIAT3x-g5u34CpTZavtAK-0Jnh3t35PMadY892q1MVi5UasVEjxh7WtAVcWt8_xtkR6-eAv1BpYhwmXetQW_zPsfQM2kUc3lNABD66pybBPwIXcBwuByy2o7ILMtMpurOdGzW0J3N2N_5VIxWdXvYR9glybZYISleZjpNN9S15FnJgXWH4l43cdHIzEIw-Yjq9hbIgZkQ2W4nJMhfUnknIlTMZhi" 
              alt="Helmet Detail" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-4 right-4 bg-primary p-2 rounded-full">
              <Camera size={16} className="text-white" />
            </div>
          </motion.div>

          {/* Item 3 - Tall */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:row-span-2 relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT-z6cVsha2zXPKaTxUEqIgtxQp0TADKY17LgYm0YDLuBRksi1dAisDFxeHfEKEZdy8dGPk5tK-lYbQiNCJRD_DMseufylrkTzSkLu2KXcMS-I1uDhTzZ8p4H2R8efSqsty_0owON_p6p7b3W8FI6Kak7Kw5fg-1gl9fzvkvz3Ok2BPuJLQfhk-HMmntaIKwH9wB9Q1HxScTQv_ipKKSPO92AFKDXLadON-ozsPbAX_LAtsrvRmjmoVBLrTUrTSe-Qufb5admiSSdo" 
              alt="Track Action" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
              <PlayCircle className="text-white w-10 h-10 mb-3" />
              <p className="text-white font-bold text-sm">Overtake of the weekend 🏎️💨</p>
            </div>
          </motion.div>

          {/* Item 4 - Short */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0XpwUN_SM8tS2d0efwRknh-UQSMBJ-14zLC85FZypsqkQCXfFJhokHJQi5Qs73zIxUpWHpAiLs1cBJ6BS1YK6gZ-24m4_A8DtoGNvqbG-xo_b-XulQUzHvfmu7EpUxKdPWlZsjg0H-gnE296n0G7NKqKMIb09rYMD_yH5D9uwYgqVXjE0fbfa1WSVcLeQxuPs__eamwow8EG72DyvYxQaRQHYiFFtyjpIEyTfeSznUzcG7Cw2Bv6ZdQ8zBlWw0UimuziD2Cw3FiTB" 
              alt="Steering Wheel" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>

          {/* Item 5 - Tall (but constrained by grid) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:row-span-2 relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUA3pMyMTwMcQ2jI1Lt1IFj6d-vpMXHoLgVvcrkmhzDQQquEtm27JKxU9-xDk-pS0Wd_OIFGB0mzASacq6W9EzDGC9J0kfDF1d-55Fj02YM_kdpiUN0-kh_ZBOA-cBudsLQ7RXw4-r2PsDwEnc6n41yXTE4qTtNKNMY33hAhvQwmRYyOWWaXTxbtmmf79UflDCIZHMUuhBAgh_TsmP9yQPW0MWv6DhUY2d60h_PCCL9JM4Ycseu2EEmWQM1s7hngy73-dnuUB0ZfXn" 
              alt="Sunset Track" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-bold tracking-widest uppercase">View Post</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
