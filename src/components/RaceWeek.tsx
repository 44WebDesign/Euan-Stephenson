import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const races = [
  {
    id: 1,
    round: "Round 05",
    name: "Monza Circuit",
    date: "September 12-14",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2H0nsuAEzlHe_pNBBLah770vQ5NPGml5weDEwwi0ClVYPEFM-kMRKBXGYURaWXtJVw2lSEcUcTrdUhUBmvLV588SGz8mwNoUy8Abbt-j-DOernc6yfdSQ-tNzqPiOzNs5dXCa_Y0xWImf3C6Oe5tdnSorKu7ZKIp15BP2aBgsfT28Q_UE8ZpVx4LOqGcb5h-RQsm6W5iRb7Ool2v98y7F11toKmIMEMhrPA9huqLrUnLF6-oYCe3eKE9Hh2jsBn7R_Z-afR3T-1_J"
  },
  {
    id: 2,
    round: "Round 06",
    name: "Spa GP",
    date: "October 01-03",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCead5XWi8AH4r1VntlXf7EhnhkxV8BpC8cj389wWQy1G8qfeYCsIHizO-go8NhEXHc0e9lNgBX8VaAlfIc1HbXt7LBjFeuZxIZiBSqb2Qt9JRcOCCUP3Ydjoz0Pk2NzTiOvb3wRAxNdK1yDGuhoc7Od3hyAPEDf_sLwv4CJr9I8ua74jDoaVNtqVZDBXNiBYiLv7NOV1Mix6jHZLtw0Nn8KeHkoxFK0Hm0z7x5c4ZYKWJ-BjpGjFGFq-wAAIL2_zJePpTkbTVc28ff"
  },
  {
    id: 3,
    round: "Round 07",
    name: "Silverstone",
    date: "October 20-22",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkJNz1YrTrVunOMGBWwiPLSp-YnGNU4xVTGh01azUB1D6WMVmcljhom2CInddgq-wddRQflrqzDZkjrzFPwYHkUdixXI4Q6C23TzcxQFTUGTsIh2TzazaE_F0UzIXM1AZ2SO4MgiG9AgcvEBorQK_sda2P3Oz-NCNDRA9xE-m_0bDDwUJUg1tCb_wGzKExa-KpKdpIDiyWAbNt1LH2_Qoave4a570Z1htr5rF2l2AgsN9r9vv3vA2Cc2CN6gg70F4SORHRacFdJXzh"
  }
];

export default function RaceWeek() {
  return (
    <section id="racing" className="py-24 bg-[#0a0404]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Live Action</h3>
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">Race Week</h2>
          </div>
          <div className="flex gap-2">
            <button className="p-3 border border-white/10 rounded-full hover:bg-primary/20 hover:border-primary/50 transition-colors text-white">
              <ChevronLeft size={24} />
            </button>
            <button className="p-3 border border-white/10 rounded-full hover:bg-primary/20 hover:border-primary/50 transition-colors text-white">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {races.map((race, index) => (
            <motion.div 
              key={race.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="aspect-[3/4] rounded-2xl overflow-hidden relative group cursor-pointer"
            >
              <img 
                src={race.image} 
                alt={race.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-8 left-8">
                <span className="text-primary text-xs font-bold uppercase tracking-widest bg-black/60 backdrop-blur-sm px-3 py-1 rounded mb-3 inline-block">
                  {race.round}
                </span>
                <h4 className="text-3xl font-black text-white mt-2 uppercase italic leading-none">{race.name}</h4>
                <p className="text-white/80 text-sm font-medium mt-2">{race.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
