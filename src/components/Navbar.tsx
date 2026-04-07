import { motion } from 'motion/react';
import { Search, Bell } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-zinc-950/60 backdrop-blur-xl"
    >
      <nav className="flex justify-between items-center px-8 py-4 w-full">
        <div className="flex items-center gap-12">
          <span className="text-2xl font-black tracking-tighter text-primary">CINEMATIC</span>
          <div className="hidden md:flex gap-8 items-center text-sm tracking-wide font-medium">
            <a className="text-primary font-bold border-b-2 border-primary pb-1" href="#">Browse</a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#">Movies</a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#">Series</a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#">New</a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#">My List</a>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center bg-surface-container-low rounded-full px-4 py-1.5 gap-2 border border-outline-variant/15">
            <Search className="w-4 h-4 text-on-surface-variant" />
            <input 
              className="bg-transparent border-none focus:outline-none text-sm w-48 text-on-surface placeholder:text-on-surface-variant" 
              placeholder="Search titles..." 
              type="text"
            />
          </div>
          <button className="hover:scale-110 transition-transform duration-200 text-on-surface-variant hover:text-on-surface">
            <Bell className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/30 hover:scale-105 transition-transform cursor-pointer">
            <img 
              alt="User profile avatar" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAv5WkmG6zWE14-1XLqgdeIkDatundBYZx6WLQz_8wgD4YN3YBwFfHeqhcUgZDmUAK6mvWSJoLn_wNU5acSnwlVEfxOx2-RxongSX2iCvu1wwWpqcTyeGCqbzml4qZsqMepmhHCHdnPmaW9eLatLsLG6O3TPQM-9O3PvhHtOZEJjbIXO_COeSLD1hzHmzYSuOEn4DzjIzvG4zic3WHbfrYIOPFtQJ56lwrIRa0-9zMxX5zLz9P0YmHco5Ifg5A0yAVFIPCIWRRaaN6"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
