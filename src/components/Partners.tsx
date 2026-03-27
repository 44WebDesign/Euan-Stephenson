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
  const featuredPartner = { name: "KDR European", logo: kdrLogo };
  
  const otherPartners = [
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

      {/* Main Layout Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Featured Partner: KDR (Left Side) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 group relative"
        >
          <div className="h-full min-h-[320px] bg-white/5 border-2 border-primary/30 hover:border-primary rounded-3xl p-8 flex flex-col justify-center items-center transition-all duration-500 hover:shadow-[0_0_30px_rgba(189,15,15,0.3)] bg-gradient-to-br from-white/10 to-transparent">
            <span className="absolute top-4 left-6 text-primary font-bold text-xs uppercase tracking-widest">Title Partner</span>
            <div className="w-full h-full relative flex items-center justify-center p-8 bg-white rounded-2xl overflow-hidden shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
              <img
                src={featuredPartner.logo}
                alt={`${featuredPartner.name} Logo`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <h4 className="mt-6 text-xl font-bold italic tracking-tight">{featuredPartner.name}</h4>
          </div>
        </motion.div>

        {/* Other Partners: 2x2 Grid (Right Side) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {otherPartners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="h-40 bg-white/5 border border-white/10 hover:border-white/30 rounded-2xl p-4 flex justify-center items-center group cursor-pointer transition-all duration-300"
            >
              <div className="w-full h-full relative flex items-center justify-center p-4 bg-white/80 rounded-xl overflow-hidden group-hover:bg-white transition-colors duration-300">
                <img
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
