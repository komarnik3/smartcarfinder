// app/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Shield, TrendingUp, Clock, MapPin, Star } from 'lucide-react';

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      router.push(`/results?query=${encodeURIComponent(trimmed)}`);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center">
              <span className="font-bold text-xl">🚗</span>
            </div>
            <div>
              <div className="font-semibold text-2xl tracking-tight">SmartCarFinder</div>
              <div className="text-[10px] text-zinc-500 -mt-1">für Deutschland</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <a href="#wie-es-funktioniert" className="hover:text-emerald-500 transition-colors">Wie es funktioniert</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Für Händler</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Blog</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 text-sm font-medium hover:bg-zinc-900 rounded-2xl transition-colors">
              Anmelden
            </button>
            <button className="px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-2xl hover:bg-zinc-200 transition-colors">
              Kostenlos starten
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-6 pt-32 pb-24 text-center">
          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1 mb-8">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs font-medium tracking-widest uppercase">Jetzt mit Echtzeit-Daten von Mobile.de + Kleinanzeigen</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
            Finde dein perfektes Auto.<br />
            <span className="text-emerald-500">Smart. Ehrlich. Schnell.</span>
          </h1>
          <p className="text-2xl text-zinc-400 max-w-2xl mx-auto mb-12">
            Natürliche Sprache • Smart-Score mit 3-Jahres-TCO • Nur in Deutschland
          </p>

          <form onSubmit={handleSearch} className="relative max-w-3xl mx-auto">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="z. B. kleines Auto mit Automatik in Münster, max 15.000 €"
              className="w-full bg-zinc-900 border border-zinc-700 focus:border-emerald-500 rounded-3xl px-10 py-9 text-2xl placeholder-zinc-500 outline-none transition-all"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-emerald-600 hover:bg-emerald-500 px-10 py-5 rounded-2xl font-medium text-lg flex items-center gap-3 transition-all active:scale-95"
            >
              <Search className="w-6 h-6" />
              Suchen
            </button>
          </form>

          <p className="text-center text-zinc-500 mt-6 text-sm">
            Drücke <span className="font-mono bg-zinc-900 px-1.5 py-0.5 rounded">Enter</span> oder klicke auf Suchen
          </p>
        </div>
      </div>

      {/* Trust bar */}
      <div className="border-t border-b border-zinc-800 bg-zinc-900 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-4 items-center text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-500" /> 100 % datenschutzkonform
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-500" /> Smart-Score mit ADAC-Daten
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-emerald-500" /> Echtzeit-Preise
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-emerald-500" /> Nur Deutschland
          </div>
        </div>
      </div>

      {/* Features */}
      <div id="wie-es-funktioniert" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="uppercase tracking-widest text-emerald-500 text-sm font-semibold mb-3">So einfach ist es</div>
          <h2 className="text-5xl font-semibold tracking-tight">Drei Schritte zum perfekten Auto</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Search className="w-10 h-10" />,
              title: "Schreib einfach drauflos",
              desc: "„Golf GTI unter 20.000 € in Berlin mit wenig Laufleistung“ — fertig."
            },
            {
              icon: <Star className="w-10 h-10" />,
              title: "Smart-Score zeigt die Wahrheit",
              desc: "Preis-Fairness + versteckte Mängel + dein persönlicher 3-Jahres-TCO."
            },
            {
              icon: <Clock className="w-10 h-10" />,
              title: "Sofort Ergebnisse",
              desc: "Von Mobile.de & Kleinanzeigen. Mit einem Klick zum Händler."
            }
          ].map((feature, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-emerald-500/50 transition-colors group">
              <div className="text-emerald-500 mb-8 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-3xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-zinc-900 border-t border-zinc-800 py-24">
        <div className="max-w-2xl mx-auto text-center px-6">
          <h2 className="text-5xl font-semibold mb-6">Bereit für dein neues Auto?</h2>
          <p className="text-xl text-zinc-400 mb-10">Tausende Deutsche haben schon ihr Traumauto gefunden — jetzt bist du dran.</p>
          <form onSubmit={handleSearch} className="max-w-xl mx-auto">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="z. B. Familienvan Diesel 7-Sitzer unter 25.000 € Köln"
              className="w-full bg-zinc-950 border border-zinc-700 focus:border-emerald-500 rounded-3xl px-8 py-7 text-xl placeholder-zinc-500 outline-none"
            />
            <button
              type="submit"
              className="mt-4 w-full bg-emerald-600 hover:bg-emerald-500 py-6 text-xl font-semibold rounded-3xl transition-colors"
            >
              Jetzt suchen
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-zinc-500">
          © 2026 SmartCarFinder.de • Keine echte API-Anbindung (noch Mock-Daten) • Made with ❤️ in Germany
        </div>
      </footer>
    </div>
  );
}