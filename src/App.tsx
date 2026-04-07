import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieCard from './components/MovieCard';
import ClassicCard from './components/ClassicCard';
import EditorialGrid from './components/EditorialGrid';
import Footer from './components/Footer';
import { TRENDING_MOVIES, TOP_RATED_CLASSICS } from './constants';

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />
      
      <main className="relative">
        <Hero />
        
        <div className="relative z-20 -mt-32 pb-24 space-y-24">
          {/* Trending Rail */}
          <section className="pl-8 md:pl-16">
            <div className="flex items-end gap-4 mb-6">
              <h2 className="text-2xl font-bold tracking-tight">Trending Now</h2>
              <a className="text-primary text-xs font-bold hover:underline mb-1 transition-all" href="#">View All</a>
            </div>
            <div className="flex gap-6 overflow-x-auto hide-scrollbar pr-16 pb-4">
              {TRENDING_MOVIES.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </section>

          {/* Editorial Grid */}
          <EditorialGrid />

          {/* Top Rated Rail */}
          <section className="pl-8 md:pl-16">
            <div className="flex items-end gap-4 mb-6">
              <h2 className="text-2xl font-bold tracking-tight">Top Rated Classics</h2>
            </div>
            <div className="flex gap-6 overflow-x-auto hide-scrollbar pr-16 pb-4">
              {TOP_RATED_CLASSICS.map(movie => (
                <ClassicCard key={movie.id} movie={movie} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
