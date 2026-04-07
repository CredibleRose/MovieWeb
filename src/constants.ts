import { Movie, EditorialItem } from './types';

export const TRENDING_MOVIES: Movie[] = [
  {
    id: '1',
    title: 'Interstellar Drift',
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrvjzFcfOllzroqG0u6m-bYW6tj4qgm12YIoyretlNjYbODc5gENs4nHRD3oCA6os3QlGUJYqMdsaNTOG_lxn6o73VfLngwyHz6jWkhW8yxFpNzD-3jItvSIsS8US8Qv6W6yTdZxX3hD9HskFu9i2LNfHvxAD5r6SYQdymx15KyGH12m2eaNZbvoJPZ1JCjovoXztPFDpwaEzL7FsBPs_CPE1xU6pKArHBNWlTfp7vbtwwHD0f6F89wocXsz2lbLF7B_4w1BHXsJRk',
    genre: 'Sci-Fi',
    duration: '2h 45m',
    is4K: true
  },
  {
    id: '2',
    title: 'The Last Frame',
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAciha-UkumNBkaswix9zrElsbHkonEgvIMR1XLJZTqZQKpFWVmejovFwgHtrUfvyEMX15lv8ovdbDEuVTrOOL4PAioePDxiFBql-i0xAjm2A2mo8psoPkOrNHKBDS5J_gpLsPlH6V2z2zqeRfOHxYVDEJqIvbRNdqS0wifcO7pTJCiIDB6oyawwqbCBnCK692ppaEkSYECtrjgcnKkDdFE6qQcSycTdbZ2p2Ec6pBiZfycK5t9DBpWTe2pb6ky-mu8V0kRTR6FBid6',
    genre: 'Drama',
    duration: '1h 58m'
  },
  {
    id: '3',
    title: 'Neon Horizon',
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDwL5vsLYfGlh4sW7QfLzuum_-UAH11KvToNZuMhtmQW4Iq25IHfiuuxjzXYAnsYwyy347_1H0Tz2XTORjBkBcNbe7kZqnKBeBz4c1wOjZOK72f9J3GQhOj6pnyOYn_5n6Yz_2L1gCY4ZgFRyjS6d8UTZGLCgMuwCLQ06PTImVrm8ln9QwGQXifCVr4vLWUo2FTVUiDRxliAaT1lZ5E0QZsqFNoabhITvaRpz0TmrEZTuUFJDt6Y-J3w-czzvy829XNJhaRMGPSaDf',
    genre: 'Action',
    duration: '2h 12m'
  },
  {
    id: '4',
    title: 'Midnight Drive',
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDqrZ9UUzRcfWVjkhhew9tkJ2qwlJRCEUSvKyDBkTlByQhTLIYu_NYx7LhrvLhVoPyc-sM6BeUVnLp3CBR4WktLZQIj8NgBeur8clIutQBJBHxPlSa8f7jcYIK0r5QO8CV7ciH3y8kY3-ymfbPyu4M-xV7JBtaK9UAnVdStPifQTRjv6E5l6pwBNqb1YEplA8rWW6B4tsAn6kBeoWnSme4WxFKsfgHy2pNX8DkNYI8VvVBYMwxZ_8kzrMWw9tx29_XrczFUm-Ed64w',
    genre: 'Thriller',
    duration: '1h 45m',
    isTop10: true
  },
  {
    id: '5',
    title: 'The Shadow Archive',
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRis_FS8nEHgG2qAsNwRQeSK3mX8_2eJ4GUCb-9TRHDxxTSzqkpIVl14cWr8omcq194Wvr-XOnacl5Enluhe_mr_YBbqF8v-b27JEc8J7jZT5J61z4h2bDwj1xscArA05KllwhbgnKzjkKuqX_I5NLwj1uOVe1kAkK10BVNOQUfe_jipf2KAdwPIgt2ioCnMaEksKe_Wkl4IeRTg7ZgZ5VfFMij6O31cgGZ7yGQf4ji0SZY1u9TSfF05Eid1TM58je9RzvuzYwmVWw',
    genre: 'Mystery',
    duration: '2h 05m'
  }
];

export const TOP_RATED_CLASSICS: Movie[] = [
  {
    id: 'c1',
    title: 'Echoes of the Past',
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWnD8tu74CQBxhkjli1Gd8k6z5CsD2NzXwYe_oTaaOiCW11tdeYrIyoWsYtFVyjCa3ExDHq-M9gGQAhiSlG5eS7vbV0Y5ShUldyG8WeUfrE_zsz_XO_CAVWaEV8ab0OKE6cEFh4UQX0k15r4M9VyKalHJ7iVdNUyPj3_86h8me8Zqld1EnI0N6QBfpfhn_2dwZ5M9HtW8J3VF4zSFDiDa8tK24MSKW_PS5NtOXrmORSEaEYOC0k-Gyh7c21rxB0OKbhunt6l0BsF59',
    genre: 'Drama',
    duration: '2h 10m',
    year: 1954,
    rating: 9.2
  },
  {
    id: 'c2',
    title: 'The Noir Silence',
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZCvafLipT-rOy6yyFzjiBvRQWidpy3FMaCTwj5MwzsR06gBGLq4bQjyr1Gdn3n636KMKEEiglhquspJzcSsOIJR8H_HJhKBK5FtFMgBATh43m3WCS6qsqzAjZyOcqbSOVYx1PZ-vB6GoPpcROH6VUA73JKHlEzg84uWPyNCY28l7GQ3RzWtuyjXUPY9pbwvIpSOHgcKwMZ6KViMk_GUMUYGfFNffo2SAYnU7YpunEuPMuQ5miNDmVT_OZTHuXVBv2CxiMdI6Faeks',
    genre: 'Thriller',
    duration: '1h 42m',
    year: 1961,
    rating: 8.8
  },
  {
    id: 'c3',
    title: 'City of Ambition',
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCP8IvZSzdel0-Ar1qS_2Um0slSzj_NeCuqaRIDEDG27m3j5wXzTbVfGSne2fp1_nFJV1CP4yXke7M30RAae5ikzXYqNw-3OF1S4pBO4SBD7fizD3Ihe7aCyHrS6yuzl3-zXb2lYH_7xZpxNZg1DGuX6WGbRglJoPJFnzvtwbZd7Lr0vCWEKAQwEJwF6RhYcAqNKa5B2U9DH8e2XRSHvmQC1TNLWlfdQgOA-zP9oM23XjAALwNFOHOCdJyz-GWzX8BmUorZcsyVfdHc',
    genre: 'Romance',
    duration: '1h 55m',
    year: 1959,
    rating: 9.0
  }
];

export const EDITORIAL_ITEMS: EditorialItem[] = [
  {
    id: 'e1',
    title: 'The Art of the Long Take',
    subtitle: 'Special Feature',
    description: 'Explore the technical mastery behind the most iconic continuous shots in modern cinema history.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6DMvEDYTqg_pj4qTN-eSC5JYHZ5gU15KY2jz8Z4rdhAxwcrnkyDzp-c1P1ws2SYiqPOSNJRLghlg9_K_lfHH1Yz2SkoJQQXTCbHX8cbvFWXYWbPePGZQpPkLnJz8sOJswLUIAfmt1grQdqOfKYIBJ9PPj1QmVF0UyjnSycGgIjp_FDV-JJ6F8UqmwkN5zBorOOyCV5-lnauTyZ7vuRMcLqVTv7nHzsTFBwwEMigECKfg_S3eHhhzZs3_rr9qxNQVfpmW0cZjYd7fn',
    type: 'main'
  },
  {
    id: 'e2',
    title: 'Coming This Winter',
    subtitle: 'The 2024 Awards Season Guide',
    description: '',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD28dgfdHGbglho9Eo90PkS2cl4g4F3YqpRig5wT2sHT-Kanw3ykk0gTXBUGpKIuIpdJmDgIewDG61l7tI7Iq_sBkO9JGa5CZABsUs_ItgdzxZ28Jp6uQ6IkIqWvQPpbNOX_TyjpAknP0y-o-hvh3LbMfT2Bs3T2MZPK5vwh8kQwBYy5c3wkZ58VdVCrpmJe-x1l8dAwuvHFpjkNWVs4s7y9EPT1pVZJMmaZE_mJv9yl1jdUPJz8AntzOZQ_2zNu-yA4KZW-_0D_Glw',
    type: 'secondary'
  },
  {
    id: 'e3',
    title: 'Join the Club',
    subtitle: '',
    description: 'Unlock exclusive director commentaries and behind-the-scenes content.',
    imageUrl: '',
    type: 'club'
  }
];
