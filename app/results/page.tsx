'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  Car,
  ArrowLeft,
  MapPin,
  Gauge,
  Calendar,
  Settings2,
  AlertTriangle,
  ThumbsUp,
  ArrowUpDown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { mockCars } from '@/lib/mock-cars';

type SortKey = 'smartScore' | 'price' | 'mileage' | 'distanceKm';

function getScoreColor(score: number): string {
  if (score >= 85) return 'text-emerald-400';
  if (score >= 70) return 'text-yellow-400';
  return 'text-red-400';
}

function getScoreBgColor(score: number): string {
  if (score >= 85) return 'bg-emerald-400/10 border-emerald-400/30';
  if (score >= 70) return 'bg-yellow-400/10 border-yellow-400/30';
  return 'bg-red-400/10 border-red-400/30';
}

function formatPrice(price: number): string {
  return price.toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  });
}

function ResultsLoading() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
      <div className="text-zinc-400">Ergebnisse laden...</div>
    </div>
  );
}

function ResultsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';

  const [sortBy, setSortBy] = useState<SortKey>('smartScore');

  const sortedCars = useMemo(() => {
    return [...mockCars].sort((a, b) => {
      switch (sortBy) {
        case 'smartScore':
          return b.smartScore - a.smartScore;
        case 'price':
          return a.price - b.price;
        case 'mileage':
          return a.mileage - b.mileage;
        case 'distanceKm':
          return a.distanceKm - b.distanceKm;
        default:
          return 0;
      }
    });
  }, [sortBy]);

  const sortOptions: { key: SortKey; label: string }[] = [
    { key: 'smartScore', label: 'Smart Score' },
    { key: 'price', label: 'Preis' },
    { key: 'mileage', label: 'Laufleistung' },
    { key: 'distanceKm', label: 'Entfernung' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navbar */}
      <nav className="border-b border-white/10 bg-zinc-950/80 backdrop-blur-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Car className="w-8 h-8 text-emerald-400" />
            <div className="font-bold text-2xl tracking-tight">
              SmartCarFinder<span className="text-emerald-400">.</span>de
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/" className="hover:text-emerald-400 transition">
              Suche
            </Link>
            <a href="#" className="hover:text-emerald-400 transition">
              Meine Suchen
            </a>
            <a href="#" className="hover:text-emerald-400 transition">
              Preisvergleich
            </a>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Anmelden
            </Button>
          </div>
        </div>
      </nav>

      {/* Summary bar */}
      <div className="pt-24 pb-6 px-6 border-b border-white/10 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-zinc-400 hover:text-white"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Neue Suche
                </Button>
              </Link>
              <Separator
                orientation="vertical"
                className="h-6 bg-white/10"
              />
              <h1 className="text-lg font-semibold">
                {mockCars.length} Ergebnisse
                {query && (
                  <span className="text-zinc-400 font-normal">
                    {' '}
                    für &quot;{query}&quot;
                  </span>
                )}
              </h1>
            </div>

            {/* Sort controls */}
            <div className="flex items-center gap-2 flex-wrap">
              <ArrowUpDown className="w-4 h-4 text-zinc-400" />
              <span className="text-sm text-zinc-400 mr-1">Sortieren:</span>
              {sortOptions.map((option) => (
                <Button
                  key={option.key}
                  variant={sortBy === option.key ? 'default' : 'outline'}
                  size="xs"
                  onClick={() => setSortBy(option.key)}
                  className={cn(
                    sortBy === option.key
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                      : 'border-white/20 text-zinc-400 hover:text-white hover:bg-white/10'
                  )}
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Car listing grid */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sortedCars.map((car) => (
            <Card
              key={car.id}
              className="bg-zinc-900 border-white/10 overflow-hidden hover:border-white/20 transition-colors py-0"
            >
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="relative sm:w-56 md:w-64 h-48 sm:h-auto flex-shrink-0">
                    <img
                      src={car.image}
                      alt={car.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Smart Score overlay */}
                    <div
                      className={cn(
                        'absolute top-3 right-3 border rounded-lg px-2.5 py-1.5 flex flex-col items-center backdrop-blur-sm',
                        getScoreBgColor(car.smartScore)
                      )}
                    >
                      <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">
                        Score
                      </span>
                      <span
                        className={cn(
                          'text-xl font-bold',
                          getScoreColor(car.smartScore)
                        )}
                      >
                        {car.smartScore}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 p-5 flex flex-col justify-between gap-3">
                    {/* Title + Price */}
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-lg text-white">
                          {car.title}
                        </h3>
                        <div className="text-right flex-shrink-0">
                          <div className="text-xl font-bold text-emerald-400">
                            {formatPrice(car.price)}
                          </div>
                          <div className="text-xs text-zinc-500">
                            ~{car.tcoMonthly} &euro;/Monat TCO
                          </div>
                        </div>
                      </div>

                      {/* Meta row */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-zinc-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> {car.year}
                        </span>
                        <span className="flex items-center gap-1">
                          <Gauge className="w-3.5 h-3.5" />{' '}
                          {car.mileage.toLocaleString('de-DE')} km
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" /> {car.location} (
                          {car.distanceKm} km)
                        </span>
                        <span className="flex items-center gap-1">
                          <Settings2 className="w-3.5 h-3.5" /> {car.gearbox}
                        </span>
                      </div>
                    </div>

                    <Separator className="bg-white/10" />

                    {/* Positive highlight */}
                    <div className="flex items-start gap-2 text-sm">
                      <ThumbsUp className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-zinc-300">{car.positive}</span>
                    </div>

                    {/* Known issues */}
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <div className="flex flex-wrap gap-1.5">
                        {car.knownIssues.map((issue, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="text-xs border-white/10 text-zinc-400 font-normal"
                          >
                            {issue}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<ResultsLoading />}>
      <ResultsContent />
    </Suspense>
  );
}
