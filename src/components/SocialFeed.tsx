import { motion } from 'motion/react';
import { ExternalLink, Instagram, Heart, MessageCircle } from 'lucide-react';
import instagramData from '../data/instagram.json';

export default function SocialFeed() {
  return (
    <section className="pt-12 pb-24 bg-[#0a0404] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
              <Instagram size={16} /> Social Feed
            </h3>
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-4">Inside the Grid</h2>
            <p className="text-white/80 max-w-xl">Follow the daily grind, training sessions, and latest news straight from the paddock.</p>
          </div>

          <a
            href="https://www.instagram.com/euanstephensonracing/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/80 hover:shadow-[0_0_15px_rgba(189,15,15,0.4)] text-white px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 uppercase tracking-wide cursor-pointer whitespace-nowrap"
          >
            Follow on Instagram
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* CSS Multi-Column Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {instagramData.map((post, index) => (
            <motion.a
              key={post.id}
              href={`https://www.instagram.com/p/${post.id}/`}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid relative group block overflow-hidden rounded-2xl cursor-pointer"
            >
              {/* Note: In a production React app, using unauthenticated display_url JSON scraping might throw CORS/expiries on the image CDN after a few days. For this demo, it perfectly achieves the aesthetic requirement. */}
              <img
                src={post.image}
                alt="Instagram post"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-[2px]">
                <div className="flex items-center gap-2 text-white font-bold text-lg">
                  <Heart className="fill-white" size={24} />
                  <span>{post.likes}</span>
                </div>
                {post.comments > 0 && (
                  <div className="flex items-center gap-2 text-white font-bold text-lg">
                    <MessageCircle className="fill-white" size={24} />
                    <span>{post.comments}</span>
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
