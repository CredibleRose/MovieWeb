export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  backdropUrl?: string;
  genre: string;
  duration: string;
  rating?: number;
  year?: number;
  is4K?: boolean;
  isTop10?: boolean;
}

export interface EditorialItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  type: 'main' | 'secondary' | 'club';
}
