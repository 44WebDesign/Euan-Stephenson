import { motion } from 'motion/react';
// @ts-ignore - Vite will resolve these images
import kdrLogo from '../assets/partners/kdr.jpg';
// @ts-ignore
import itcLogo from '../assets/partners/itc.jpg';
// @ts-ignore
import platinumLogo from '../assets/partners/platinum.png';
// @ts-ignore
import transportLogo from '../assets/partners/transport.png';
// @ts-ignore
import webdesignLogo from '../assets/partners/58webdesign.png';

export default function Partners() {
  const partners = [
    { name: "KDR European", logo: kdrLogo },
    { name: "Ipswich Trade Centre", logo: itcLogo },
    { name: "Platinum Sports & Prestige", logo: platinumLogo },
    { name: "Transport LTD", logo: transportLogo },
    { name: "58 Web Design", logo: webdesignLogo }
  ];

  return (
    <section id="partners" className="py-24 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Team Euan</h3>
        <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">Powered By</h2>
        <div className="h-1 w-20 bg-primary mx-auto mt-4"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-center justify-items-center">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="w-full h-40 bg-white/5 border border-white/10 hover:border-primary/50 rounded-2xl p-6 flex justify-center items-center group cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(189,15,15,0.2)]"
          >
            <div className="w-full h-full relative flex items-center justify-center p-4 bg-white/90 rounded-xl overflow-hidden shadow-inner group-hover:bg-white transition-colors duration-300">
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
