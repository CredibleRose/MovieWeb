import { motion } from 'motion/react';
import { PlayCircle, Star } from 'lucide-react';
import { Movie } from '../types';

interface ClassicCardProps {
  movie: Movie;
}

export default function ClassicCard({ movie }: ClassicCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="flex-none w-64 md:w-80 group cursor-pointer"
    >
      <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
        <img 
          alt={movie.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          src={movie.posterUrl}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <PlayCircle className="w-12 h-12 text-on-surface" />
        </div>
      </div>
      
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-sm">{movie.title}</h3>
          <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">
            {movie.year} • {movie.genre}
          </p>
        </div>
        <div className="flex items-center gap-1 bg-surface-container-highest px-2 py-1 rounded">
          <Star className="w-3 h-3 fill-primary text-primary" />
          <span className="text-[10px] font-bold">{movie.rating}</span>
        </div>
      </div>
    </motion.div>
  );
}
