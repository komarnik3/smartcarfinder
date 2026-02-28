import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SmartCarFinder.de – Finde dein perfektes Auto schlau',
  description: 'KI-Gebrauchtwagen-Finder für Deutschland. Smart Score, Laufleistung, bekannte Probleme & echter 3-Jahres-TCO. Nie wieder überzahlt.',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${inter.className} antialiased bg-zinc-50`}>
        {children}
      </body>
    </html>
  );
}