import { motion } from 'framer-motion'; // Changed from 'motion/react' to the standard 'framer-motion'
// @ts-ignore
import martelloLogo from '../assets/partners/martello.jpg'; 
// @ts-ignore
import kdrLogo from '../assets/partners/kdr.jpg';
// @ts-ignore
import itcLogo from '../assets/partners/itc.jpg';
// @ts-ignore
import platinumLogo from '../assets/partners/platinum.png';
// @ts-ignore
import transportLogo from '../assets/partners/transport.png';
// Note: removed webdesignLogo to keep it to 4 small + 1 big

export default function Partners() {
  const otherPartners = [
    { name: "KDR European", logo: kdrLogo },
    { name: "Ipswich Trade Centre", logo: itcLogo },
    { name: "Platinum Sports & Prestige", logo: platinumLogo },
    { name: "Transport LTD", logo: transportLogo }
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Featured Partner: Martello */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 flex"
        >
          <div className="w-full bg-white/5 border-2 border-primary/20 hover:border-primary/60 rounded-3xl p-2 flex justify-center items-center group transition-all duration-500 hover:shadow-[0_0_40px_rgba(189,15,15,0.15)] overflow-hidden">
            <div className="w-full h-full min-h-[350px] md:min-h-[450px] relative flex items-center justify-center p-12 bg-white rounded-[1.25rem] shadow-inner transition-transform duration-700 group-hover:scale-[1.01]">
              <img
                src={martelloLogo}
                alt="Martello"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* Small Partners Grid (2x2) */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          {otherPartners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full min-h-[170px] md:min-h-[215px] bg-white/5 border border-white/10 hover:border-primary/40 rounded-2xl p-2 flex justify-center items-center transition-all duration-300">
                <div className="w-full h-full relative flex items-center justify-center p-6 bg-white/90 rounded-xl overflow-hidden group-hover:bg-white transition-all duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
