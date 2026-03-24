import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

// Dynamically load all images from the race-week folder
// @ts-ignore - Vite specific feature
const imagesContext = import.meta.glob('../assets/race-week/*.{jpg,jpeg,png,webp}', { eager: true });

// Convert to array and handle the resolved URL (Vite default exports)
const rawImages = Object.entries(imagesContext).map(([path, module]: [string, any]) => ({
  path,
  url: module?.default || module
}));

// Sort descending by filename so newly added images (alphabetically last) show first
rawImages.sort((a, b) => b.path.localeCompare(a.path));

// Map dynamically loaded images to the format expected by the component
const dynamicRaces = rawImages.map((img, index, arr) => ({
  id: index + 1,
  name: `Race Highlight ${index + 1}`,
  image: img.url as string
}));

const races = dynamicRaces.length > 0 ? dynamicRaces : [
  {
    id: 1,
    name: "Monza Circuit",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2H0nsuAEzlHe_pNBBLah770vQ5NPGml5weDEwwi0ClVYPEFM-kMRKBXGYURaWXtJVw2lSEcUcTrdUhUBmvLV588SGz8mwNoUy8Abbt-j-DOernc6yfdSQ-tNzqPiOzNs5dXCa_Y0xWImf3C6Oe5tdnSorKu7ZKIp15BP2aBgsfT28Q_UE8ZpVx4LOqGcb5h-RQsm6W5iRb7Ool2v98y7F11toKmIMEMhrPA9huqLrUnLF6-oYCe3eKE9Hh2jsBn7R_Z-afR3T-1_J"
  }
];

export default function RaceWeek() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const canPrev = currentIndex > 0;
  // If there are less than 3 items, we can't go next. Otherwise, we can go next as long as the 3 items shown don't cover the end.
  const canNext = currentIndex < Math.max(0, races.length - 3);

  const handlePrev = () => {
    if (canPrev) setCurrentIndex(prev => prev - 1);
  };

  const handleNext = () => {
    if (canNext) setCurrentIndex(prev => prev + 1);
  };

  const visibleRaces = races.slice(currentIndex, currentIndex + 3);

  return (
    <section id="racing" className="py-24 bg-[#0a0404]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Live Action</h3>
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">Race Week</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              disabled={!canPrev}
              className="p-3 border border-white/10 rounded-full hover:bg-primary/20 hover:border-primary/50 transition-colors duration-300 text-white cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              disabled={!canNext}
              className="p-3 border border-white/10 rounded-full hover:bg-primary/20 hover:border-primary/50 transition-colors duration-300 text-white cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
          <AnimatePresence mode="popLayout">
            {visibleRaces.map((race) => (
              <motion.div
                key={race.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="aspect-[3/4] rounded-2xl overflow-hidden relative group cursor-pointer"
              >
                <img
                  src={race.image}
                  alt={race.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
