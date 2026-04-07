import { Globe, Rss, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 w-full py-12 px-8">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="text-lg font-black text-zinc-100 tracking-tighter">CINEMATIC</span>
          <p className="text-xs text-zinc-500 text-center md:text-left max-w-xs">
            Curating the world's most breathtaking stories, one frame at a time. Designed for the true cinephile.
          </p>
        </div>
        
        <div className="flex gap-8 text-xs text-zinc-500">
          <a className="hover:text-zinc-300 transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-zinc-300 transition-colors" href="#">Terms of Service</a>
          <a className="hover:text-zinc-300 transition-colors" href="#">Help Center</a>
          <a className="hover:text-zinc-300 transition-colors" href="#">Contact Us</a>
        </div>
        
        <div className="flex gap-6">
          <Globe className="w-5 h-5 text-zinc-500 hover:text-primary cursor-pointer transition-colors" />
          <Rss className="w-5 h-5 text-zinc-500 hover:text-primary cursor-pointer transition-colors" />
          <Share2 className="w-5 h-5 text-zinc-500 hover:text-primary cursor-pointer transition-colors" />
        </div>
      </div>
      
      <div className="mt-12 text-center border-t border-white/5 pt-8">
        <p className="text-[10px] text-zinc-600 uppercase tracking-widest">
          © 2024 Cinematic Editorial. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
