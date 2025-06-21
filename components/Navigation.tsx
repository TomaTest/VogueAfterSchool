'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Acasă' },
    { href: '/despre', label: 'Despre Noi' },
    { 
      href: '/program', 
      label: 'Programe',
      dropdown: [
        { href: '/program', label: 'Program After School' },
        { href: '/summer', label: 'Summer Vogue' },
        { href: '/activitati', label: 'Activități & Excursii' }
      ]
    },
    { href: '/scoli', label: 'Școli Partenere' },
    { href: '/inscrieri', label: 'Înscrieri' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div className="scroll-indicator">
        <div 
          className="scroll-progress" 
          style={{ width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` }}
        />
      </div>

      <nav className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled 
          ? 'nav-ultra shadow-luxury' 
          : 'bg-transparent'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Premium Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-14 h-14 gradient-luxury rounded-2xl flex items-center justify-center shadow-luxury transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full pulse-glow"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-2xl font-bold gradient-text-luxury font-display">Vogue</div>
                <div className="text-sm text-gray-600 font-medium">After School</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <div key={item.href} className="relative group">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className={cn(
                        'nav-link flex items-center space-x-1 text-sm font-medium transition-all duration-300',
                        pathname.startsWith(item.href)
                          ? 'text-blue-600'
                          : isScrolled
                          ? 'text-gray-700 hover:text-blue-600'
                          : 'text-white hover:text-blue-200'
                      )}>
                        <span>{item.label}</span>
                        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                      </button>
                      
                      {activeDropdown === item.label && (
                        <div className="absolute top-full left-0 mt-2 w-64 glass-ultra rounded-2xl shadow-ultra border border-white/20 overflow-hidden">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className="block px-6 py-4 text-sm font-medium text-gray-700 hover:bg-white/10 hover:text-blue-600 transition-all duration-300"
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        'nav-link text-sm font-medium transition-all duration-300',
                        pathname === item.href
                          ? 'text-blue-600'
                          : isScrolled
                          ? 'text-gray-700 hover:text-blue-600'
                          : 'text-white hover:text-blue-200'
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Premium CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/inscrieri"
                className="btn-premium gradient-luxury text-white px-8 py-3 rounded-full font-semibold shadow-luxury hover:shadow-ultra transition-all duration-300 text-sm"
              >
                Înscrie-te Acum
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 rounded-xl glass-ultra border border-white/20 transition-all duration-300 hover:scale-110"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4">
              <div className="glass-ultra rounded-2xl shadow-ultra border border-white/20 overflow-hidden">
                <div className="px-4 py-6 space-y-2">
                  {navItems.map((item) => (
                    <div key={item.href}>
                      {item.dropdown ? (
                        <div>
                          <div className="text-sm font-semibold text-gray-500 px-4 py-2 uppercase tracking-wider">
                            {item.label}
                          </div>
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className={cn(
                                'block px-6 py-3 rounded-xl text-base font-medium transition-all duration-300 ml-4',
                                pathname === dropdownItem.href
                                  ? 'text-blue-600 bg-blue-50'
                                  : 'text-gray-700 hover:text-blue-600 hover:bg-white/10'
                              )}
                              onClick={() => setIsOpen(false)}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className={cn(
                            'block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300',
                            pathname === item.href
                              ? 'text-blue-600 bg-blue-50'
                              : 'text-gray-700 hover:text-blue-600 hover:bg-white/10'
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                  <Link
                    href="/inscrieri"
                    className="block px-4 py-3 mt-6 gradient-luxury text-white rounded-xl font-semibold text-center shadow-luxury transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Înscrie-te Acum
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;