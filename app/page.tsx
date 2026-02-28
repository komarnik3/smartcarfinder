'use client';

import { useState } from 'react';
import { Search, Car, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);

    // For now we just go to results page (Chunk 3 will show real mock results there)
    setTimeout(() => {
      router.push(`/results?query=${encodeURIComponent(searchQuery)}`);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      {/* Navbar */}
      <nav className="border-b border-white/10 bg-zinc-950/80 backdrop-blur-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Car className="w-8 h-8 text-emerald-400" />
            <div className="font-bold text-2xl tracking-tight">SmartCarFinder<span className="text-emerald-400">.</span>de</div>
          </div>
          <div className="flex items-center gap-8 text-sm">
            <a href="#" className="hover:text-emerald-400 transition">Suche</a>
            <a href="#" className="hover:text-emerald-400 transition">Meine Suchen</a>
            <a href="#" className="hover:text-emerald-400 transition">Preisvergleich</a>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">Anmelden</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm px-4 py-1.5 rounded-full mb-6">
            <ShieldCheck className="w-4 h-4" /> 100% kostenlos im MVP
          </div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
            Finde dein perfektes Auto.<br />
            <span className="text-emerald-400">Schlau. Fair. Ohne Stress.</span>
          </h1>

          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
            Sag mir einfach was du suchst – ich finde die besten Angebote auf Mobile.de, Kleinanzeigen & Co.<br />
            Mit Smart-Score, Laufleistung-Bewertung und echtem 3-Jahres-Kosten-Rechner.
          </p>

          {/* THE BIG SEARCH BOX */}
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
            <div className="relative group">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400">
                <Search className="w-7 h-7" />
              </div>
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder='Ich suche ein kleines Auto mit Automatik in Münster, max 15.000 €'
                className="w-full pl-16 pr-6 py-8 text-2xl bg-white/10 border-white/20 rounded-3xl placeholder:text-zinc-500 focus:border-emerald-400 focus:bg-white/5 transition-all text-white"
              />
              <Button
                type="submit"
                disabled={isSearching}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-emerald-500 hover:bg-emerald-600 text-lg px-10 py-7 rounded-2xl font-semibold"
              >
                {isSearching ? 'Suche läuft...' : 'Jetzt suchen'}
              </Button>
            </div>
            <p className="text-xs text-zinc-500 mt-3">Beispiel: „Kleinwagen Automatik Münster unter 14000“</p>
          </form>
        </div>
      </div>

      {/* Trust bar */}
      <div className="border-t border-white/10 bg-zinc-950 py-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-zinc-400">
          <div className="flex items-center gap-2"><TrendingUp className="w-5 h-5 text-emerald-400" /> Bessere Deals als AutoUncle</div>
          <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-emerald-400" /> ADAC + TÜV Daten integriert</div>
          <div className="flex items-center gap-2"><Users className="w-5 h-5 text-emerald-400" /> Schon 247 Autos schlau gefunden</div>
        </div>
      </div>
    </div>
  );
}