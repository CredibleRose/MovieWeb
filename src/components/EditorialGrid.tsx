import { motion } from 'motion/react';
import { Stars } from 'lucide-react';
import { EDITORIAL_ITEMS } from '../constants';

export default function EditorialGrid() {
  const main = EDITORIAL_ITEMS.find(i => i.type === 'main')!;
  const secondary = EDITORIAL_ITEMS.find(i => i.type === 'secondary')!;
  const club = EDITORIAL_ITEMS.find(i => i.type === 'club')!;

  return (
    <section className="px-8 md:px-16">
      <h2 className="text-2xl font-bold tracking-tight mb-8">Curated Editorial</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">
        {/* Main Feature */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="md:col-span-2 relative rounded-xl overflow-hidden group cursor-pointer h-[300px] md:h-full"
        >
          <img 
            alt={main.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            src={main.imageUrl}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <span className="text-tertiary font-bold text-xs tracking-widest uppercase mb-2 block">{main.subtitle}</span>
            <h3 className="text-3xl font-black mb-2 tracking-tighter">{main.title}</h3>
            <p className="text-on-surface-variant text-sm max-w-md">{main.description}</p>
          </div>
        </motion.div>

        {/* Secondary & Club */}
        <div className="flex flex-col gap-6 h-full">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="flex-1 relative rounded-xl overflow-hidden group cursor-pointer bg-surface-container-low p-6 flex flex-col justify-end min-h-[200px]"
          >
            <div className="absolute inset-0 opacity-40">
              <img 
                alt={secondary.title} 
                className="w-full h-full object-cover" 
                src={secondary.imageUrl}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative z-10">
              <h4 className="font-bold text-xl mb-1">{secondary.title}</h4>
              <p className="text-xs text-on-surface-variant">{secondary.subtitle}</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="flex-1 relative rounded-xl overflow-hidden group cursor-pointer border border-outline-variant/10 flex flex-col justify-center items-center text-center p-8 bg-surface-container-high min-h-[200px]"
          >
            <Stars className="w-10 h-10 text-primary mb-4" />
            <h4 className="font-bold text-xl mb-2">{club.title}</h4>
            <p className="text-xs text-on-surface-variant mb-4">{club.description}</p>
            <button className="text-xs font-bold text-primary border border-primary/30 px-4 py-2 rounded-full hover:bg-primary hover:text-on-primary transition-all">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
