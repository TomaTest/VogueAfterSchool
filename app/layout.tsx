import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vogue After School - Complexul MRS Residence, Ploiești',
  description: 'Școala de după ore premium pentru copii din Ploiești. Transport Mercedes, prânz la Trattoria MRS, activități educative și recreative de calitate.',
  keywords: 'școală după ore, Ploiești, MRS Residence, activități copii, transport școlar, cursuri limba engleză, summer camp',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}