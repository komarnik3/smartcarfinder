'use client';

import { useState } from 'react';
import { Search, Car, ShieldCheck, TrendingUp, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    setTimeout(() => {
      router.push(`/results?query=${encodeURIComponent(searchQuery)}`);
    }, 600);
  };

  return (
    <div className="min-h-screen text-white">
      {/* Glass Navbar */}
      <nav className="glass-nav fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center">
              <Car className="w-5 h-5 text-sky-400" />
            </div>
            <div className="font-bold text-xl tracking-tight">
              SmartCarFinder<span className="text-sky-400">.</span>de
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#" className="text-white/60 hover:text-sky-400 transition">Suche</a>
            <a href="#" className="text-white/60 hover:text-sky-400 transition">Meine Suchen</a>
            <a href="#" className="text-white/60 hover:text-sky-400 transition">Preisvergleich</a>
            <Button
              variant="outline"
              className="border-white/15 text-white/80 hover:bg-white/10 hover:text-white backdrop-blur-sm bg-white/5 rounded-xl"
            >
              Anmelden
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-28 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* MVP badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full text-white/80 text-sm px-5 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-sky-400" />
            100% kostenlos im MVP
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
            <span className="drop-shadow-sm">Finde dein perfektes Auto.</span>
            <br />
            <span className="text-sky-400 drop-shadow-sm">Schlau. Fair. Ohne Stress.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed">
            Sag mir einfach was du suchst – ich finde die besten Angebote auf Mobile.de, Kleinanzeigen & Co.
            <br />
            Mit Smart-Score, Laufleistung-Bewertung und echtem 3-Jahres-Kosten-Rechner.
          </p>

          {/* Glass Search Box */}
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
            <div className="relative group">
              <div className="glass-strong rounded-3xl p-1.5 transition-all group-focus-within:border-sky-400/30">
                <div className="relative flex items-center">
                  <Search className="absolute left-5 w-6 h-6 text-white/40" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder='Ich suche ein kleines Auto mit Automatik in Münster, max 15.000 €'
                    className="w-full pl-14 pr-44 py-5 text-lg bg-transparent border-none outline-none placeholder:text-white/30 text-white"
                  />
                  <Button
                    type="submit"
                    disabled={isSearching}
                    className="absolute right-2 bg-sky-500/80 hover:bg-sky-500 text-white text-base px-8 py-6 rounded-2xl font-semibold backdrop-blur-sm shadow-lg shadow-sky-500/20 transition-all"
                  >
                    {isSearching ? 'Suche läuft...' : 'Jetzt suchen'}
                  </Button>
                </div>
              </div>
            </div>
            <p className="text-xs text-white/30 mt-4">
              Beispiel: „Kleinwagen Automatik Münster unter 14000"
            </p>
          </form>
        </div>
      </div>

      {/* Trust bar — glass panel */}
      <div className="glass-nav py-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-white/50">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-sky-400/80" />
            Bessere Deals als AutoUncle
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-sky-400/80" />
            ADAC + TÜV Daten integriert
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-sky-400/80" />
            Schon 247 Autos schlau gefunden
          </div>
        </div>
      </div>
    </div>
  );
}
