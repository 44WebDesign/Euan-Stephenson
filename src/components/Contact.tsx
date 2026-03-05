import { Mail, MapPin, Share2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section className="py-24 bg-background-dark border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Connect</h3>
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-8">Get in Touch</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-white p-4 outline-none transition-all placeholder:text-white/40"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="email@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-white p-4 outline-none transition-all placeholder:text-white/40"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-white p-4 outline-none transition-all appearance-none">
                  <option className="bg-background-dark">Sponsorship Inquiry</option>
                  <option className="bg-background-dark">Press/Media</option>
                  <option className="bg-background-dark">General Support</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white">Message</label>
                <textarea 
                  rows={5}
                  placeholder="How can we collaborate?"
                  className="w-full bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-white p-4 outline-none transition-all placeholder:text-white/40 resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-primary hover:bg-primary/90 text-white font-black uppercase py-4 rounded-lg transition-all shadow-lg shadow-primary/20 tracking-widest">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-12 lg:pl-12"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <Mail className="text-primary w-8 h-8" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-white tracking-widest mb-1">Email Euan</p>
                  <p className="text-xl font-bold">racing@euanstephenson.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <MapPin className="text-primary w-8 h-8" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-white tracking-widest mb-1">Based In</p>
                  <p className="text-xl font-bold">London, United Kingdom</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <Share2 className="text-primary w-8 h-8" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-white tracking-widest mb-1">Social Networks</p>
                  <div className="flex gap-4 mt-2">
                    <a href="#" className="text-white hover:text-primary transition-colors font-bold">Instagram</a>
                    <span className="text-white/20">|</span>
                    <a href="#" className="text-white hover:text-primary transition-colors font-bold">TikTok</a>
                    <span className="text-white/20">|</span>
                    <a href="#" className="text-white hover:text-primary transition-colors font-bold">YouTube</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
              <p className="italic text-white/80 text-lg mb-6">"Racing isn't just what I do, it's how I see the world. Join me on the grid."</p>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full overflow-hidden border border-white/20">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtcQSRQltSa1MID5VD8HEPdN3bAEfnQEBR4TIugWodOiY8WXHSuKWBwBDm_B6uuhtMsQsO9YhZZaCnn_2bY6YSomG4UW1h3QqGPPYQiS2LFViWzk6icO5JnV2TTzY_-pl4IBVkZOUQzX49q-x9HLN6AXe8DxUswh6iAyTYRj2tFNoTtWbtlNDr3hT6UoAszw5gpBqETRExtZOvdC3gjQ3DjZ32zn1KcMqlTdf4jzI0lop2LtSR_us8QfzrXIvgXXh5oYT895bUM2ma" 
                    alt="Euan" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-white uppercase tracking-tighter">Euan Stephenson</p>
                  <p className="text-xs text-primary font-bold uppercase tracking-widest">Driver</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
