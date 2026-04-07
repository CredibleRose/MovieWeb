import { motion } from 'motion/react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="flex-none w-48 md:w-64 group cursor-pointer"
    >
      <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3 transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-primary/10">
        <img 
          alt={movie.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          src={movie.posterUrl}
          referrerPolicy="no-referrer"
        />
        
        {movie.is4K && (
          <div className="absolute top-3 right-3 bg-zinc-950/80 backdrop-blur-md px-2 py-1 rounded-lg">
            <span className="text-[10px] font-bold text-primary tracking-widest">4K</span>
          </div>
        )}
        
        {movie.isTop10 && (
          <div className="absolute top-3 right-3 bg-zinc-950/80 backdrop-blur-md px-2 py-1 rounded-lg">
            <span className="text-[10px] font-bold text-tertiary tracking-widest">TOP 10</span>
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <h3 className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors truncate">
        {movie.title}
      </h3>
      <div className="flex gap-2 mt-1">
        <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter">{movie.genre}</span>
        <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter">•</span>
        <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter">{movie.duration}</span>
      </div>
    </motion.div>
  );
}
