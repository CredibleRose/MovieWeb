import { motion } from 'motion/react';
import { Play, Info, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Dune Movie Background" 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeRsLfm3NfJgMZsd_7trESMuOxXyiPjWn1H5IPbH1G4FLEf8E0uNLTDrKTEsSIYxZbRk8fTpwaO3n7PGZRupxlcFscXgI_Js1MqiVuzcLIsLXXsVRVvRNXJUg9zGPHJmkHA_2RM9zAdilZ3Z5rnfJhsmo-E-rCby3p5iixw0kDg9uZTcuBILO4v0cgq52gA4p8lLu_WPfViHAKxmnXGq8vQaTbFt2GWK3X9WR01Rw5z4xQFwcqoP-tUGz8mHpiQ6LLAYtvkNHlF_zD"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">Trending Now</span>
          <span className="text-on-surface-variant text-xs flex items-center gap-1">
            <Star className="w-3 h-3 fill-primary text-primary" /> 4.9 Rating
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-none"
        >
          Dune: Part Two
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-on-surface-variant mb-8 max-w-xl leading-relaxed"
        >
          Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-4"
        >
          <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20">
            <Play className="w-5 h-5 fill-current" />
            Watch Now
          </button>
          <button className="bg-surface-container-highest/40 backdrop-blur-md border border-outline-variant/15 text-on-surface px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all">
            <Info className="w-5 h-5" />
            More Info
          </button>
        </motion.div>
      </div>
    </section>
  );
}
