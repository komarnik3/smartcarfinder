export interface CarListing {
  id: string;
  title: string;
  price: number;
  mileage: number;
  year: number;
  location: string;
  distanceKm: number;
  gearbox: 'Automatik' | 'Manuell';
  image: string;
  smartScore: number; // 0-100
  tcoMonthly: number; // fake 3-year monthly cost
  knownIssues: string[];
  positive: string;
}

export const mockCars: CarListing[] = [
  {
    id: '1',
    title: 'VW Golf 8 1.5 TSI DSG',
    price: 14900,
    mileage: 48000,
    year: 2022,
    location: 'Münster',
    distanceKm: 3,
    gearbox: 'Automatik',
    image: 'https://picsum.photos/id/1015/600/400',
    smartScore: 92,
    tcoMonthly: 285,
    knownIssues: ['Keine bekannten Probleme'],
    positive: 'Sehr zuverlässig, niedriger Verbrauch',
  },
  {
    id: '2',
    title: 'Fiat 500e Hybrid Automatik',
    price: 12450,
    mileage: 22000,
    year: 2023,
    location: 'Münster',
    distanceKm: 8,
    gearbox: 'Automatik',
    image: 'https://picsum.photos/id/102/600/400',
    smartScore: 88,
    tcoMonthly: 265,
    knownIssues: ['Kleiner Rost am Unterboden möglich'],
    positive: 'Super sparsam, modernes Infotainment',
  },
  {
    id: '3',
    title: 'Opel Corsa 1.2 Automatik',
    price: 11200,
    mileage: 65000,
    year: 2021,
    location: 'Greven',
    distanceKm: 18,
    gearbox: 'Automatik',
    image: 'https://picsum.photos/id/1036/600/400',
    smartScore: 76,
    tcoMonthly: 255,
    knownIssues: ['Getriebe kann bei hoher Laufleistung teuer werden'],
    positive: 'Günstig im Unterhalt',
  },
  {
    id: '4',
    title: 'Toyota Yaris 1.5 Hybrid Automatic',
    price: 13800,
    mileage: 55000,
    year: 2020,
    location: 'Münster',
    distanceKm: 5,
    gearbox: 'Automatik',
    image: 'https://picsum.photos/id/106/600/400',
    smartScore: 95,
    tcoMonthly: 240,
    knownIssues: ['Keine'],
    positive: 'Legendäre Zuverlässigkeit',
  },
  {
    id: '5',
    title: 'Seat Ibiza 1.0 TSI DSG',
    price: 13990,
    mileage: 38000,
    year: 2022,
    location: 'Münster',
    distanceKm: 12,
    gearbox: 'Automatik',
    image: 'https://picsum.photos/id/1074/600/400',
    smartScore: 85,
    tcoMonthly: 270,
    knownIssues: ['Teure Bremsen'],
    positive: 'Sportlich und sparsam',
  },
  {
    id: '6',
    title: 'Renault Clio 1.0 TCe Automatik',
    price: 10500,
    mileage: 72000,
    year: 2021,
    location: 'Haltern am See',
    distanceKm: 45,
    gearbox: 'Automatik',
    image: 'https://picsum.photos/id/133/600/400',
    smartScore: 71,
    tcoMonthly: 245,
    knownIssues: ['Elektronik kann zicken'],
    positive: 'Sehr günstig',
  },
  // ... 6 more cars (I added 6 already, you can copy the pattern later)
  {
    id: '7',
    title: 'Skoda Fabia 1.0 TSI DSG',
    price: 12900,
    mileage: 42000,
    year: 2022,
    location: 'Münster',
    distanceKm: 7,
    gearbox: 'Automatik',
    image: 'https://picsum.photos/id/201/600/400',
    smartScore: 89,
    tcoMonthly: 260,
    knownIssues: ['Keine'],
    positive: 'Viel Platz für Kleinwagen',
  },
  {
    id: '8',
    title: 'Peugeot 208 PureTech Automatik',
    price: 11800,
    mileage: 59000,
    year: 2021,
    location: 'Steinfurt',
    distanceKm: 25,
    gearbox: 'Automatik',
    image: 'https://picsum.photos/id/251/600/400',
    smartScore: 82,
    tcoMonthly: 255,
    knownIssues: ['Kleiner Ölverbrauch möglich'],
    positive: 'Schickes Design',
  },
];