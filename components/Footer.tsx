'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">Vogue</div>
                <div className="text-sm text-gray-400">After School</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Școala de după ore premium pentru copii din Ploiești. 
              Oferim educație de calitate, activități recreative și un mediu sigur pentru dezvoltarea copiilor.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigare Rapidă</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="/despre" className="text-gray-400 hover:text-white transition-colors">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link href="/program" className="text-gray-400 hover:text-white transition-colors">
                  Program After School
                </Link>
              </li>
              <li>
                <Link href="/summer" className="text-gray-400 hover:text-white transition-colors">
                  Summer Vogue
                </Link>
              </li>
              <li>
                <Link href="/activitati" className="text-gray-400 hover:text-white transition-colors">
                  Activități
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programele Noastre</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/program" className="text-gray-400 hover:text-white transition-colors">
                  Limba Engleză
                </Link>
              </li>
              <li>
                <Link href="/program" className="text-gray-400 hover:text-white transition-colors">
                  Club de Lectură
                </Link>
              </li>
              <li>
                <Link href="/program" className="text-gray-400 hover:text-white transition-colors">
                  Activități Creative
                </Link>
              </li>
              <li>
                <Link href="/program" className="text-gray-400 hover:text-white transition-colors">
                  JOY Park
                </Link>
              </li>
              <li>
                <Link href="/inscrieri" className="text-gray-400 hover:text-white transition-colors">
                  Înscrieri
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">
                    Complex MRS Residence<br />
                    Bulevardul Republicii<br />
                    Ploiești, România
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:0726006123" className="text-gray-400 hover:text-white transition-colors">
                  0726 006 123
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@vogueafterschool.ro" className="text-gray-400 hover:text-white transition-colors">
                  info@vogueafterschool.ro
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">
                    Luni - Vineri: 12:00 - 18:00<br />
                    Sâmbătă: 09:00 - 14:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Vogue After School. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/confidentialitate" className="text-gray-400 hover:text-white text-sm transition-colors">
                Politica de Confidențialitate
              </Link>
              <Link href="/termeni" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termeni și Condiții
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;