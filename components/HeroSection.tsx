'use client';

import { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Users, Award, Play, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { gsap } from 'gsap';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1920&h=700&fit=crop',
      title: 'Bine ai venit la Vogue After School!',
      subtitle: 'Unde educația se întâlnește cu distracția în cel mai premium mediu din Ploiești',
      accent: 'Excelență în educație'
    },
    {
      image: 'https://images.pexels.com/photos/8613097/pexels-photo-8613097.jpeg?auto=compress&cs=tinysrgb&w=1920&h=700&fit=crop',
      title: 'Activități educative și recreative premium',
      subtitle: 'Pentru dezvoltarea completă și armonioasă a copilului tău',
      accent: 'Dezvoltare holistică'
    },
    {
      image: 'https://images.pexels.com/photos/8613074/pexels-photo-8613074.jpeg?auto=compress&cs=tinysrgb&w=1920&h=700&fit=crop',
      title: 'Transport sigur cu Mercedes',
      subtitle: 'Siguranța și confortul copilului tău sunt prioritatea noastră absolută',
      accent: 'Siguranță maximă'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // GSAP Hero Animation
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.fromTo(titleRef.current, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    )
    .fromTo(ctaRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo(statsRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    );

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Premium Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1500 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl float-animation"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-yellow-500/20 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-green-500/20 rounded-full blur-xl float-animation" style={{ animationDelay: '4s' }}></div>

      {/* Premium Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          
          {/* Accent Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center px-6 py-3 rounded-full glass-ultra border border-white/20 text-sm font-semibold text-white/90 backdrop-blur-md">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              {slides[currentSlide].accent}
            </span>
          </div>

          {/* Main Title */}
          <div ref={titleRef}>
            <h1 className="text-display font-display mb-8 leading-none">
              <span className="block gradient-text-luxury bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                {slides[currentSlide].title}
              </span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <div ref={subtitleRef}>
            <p className="text-xl md:text-2xl lg:text-3xl mb-12 leading-relaxed text-white/90 max-w-4xl mx-auto font-light">
              {slides[currentSlide].subtitle}
            </p>
          </div>
          
          {/* Premium CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link href="/inscrieri">
              <Button size="lg" className="btn-premium gradient-luxury text-white px-10 py-4 text-lg font-semibold rounded-full shadow-luxury hover:shadow-ultra transition-all duration-300 min-w-[200px]">
                <Play className="w-5 h-5 mr-2" />
                Înscrie-ți copilul
              </Button>
            </Link>
            <Link href="/despre">
              <Button variant="outline" size="lg" className="btn-premium glass-ultra border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 min-w-[200px]">
                Descoperă mai multe
              </Button>
            </Link>
          </div>

          {/* Premium Stats */}
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-ultra rounded-2xl p-6 border border-white/20 backdrop-blur-md">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 gradient-luxury rounded-full flex items-center justify-center mr-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-4xl font-bold gradient-text-gold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">200+</span>
              </div>
              <p className="text-white/80 font-medium">Copii fericiți</p>
            </div>
            
            <div className="glass-ultra rounded-2xl p-6 border border-white/20 backdrop-blur-md">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center mr-3">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <span className="text-4xl font-bold gradient-text-gold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">5.0</span>
              </div>
              <p className="text-white/80 font-medium">Rating părinți</p>
            </div>
            
            <div className="glass-ultra rounded-2xl p-6 border border-white/20 backdrop-blur-md">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 gradient-emerald rounded-full flex items-center justify-center mr-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <span className="text-4xl font-bold gradient-text-emerald bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">7+</span>
              </div>
              <p className="text-white/80 font-medium">Ani experiență</p>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 glass-ultra hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 border border-white/20 hover:scale-110"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 glass-ultra hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 border border-white/20 hover:scale-110"
      >
        <ChevronRight size={24} />
      </button>

      {/* Premium Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? 'w-12 h-3 bg-white shadow-lg' 
                : 'w-3 h-3 bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center text-white/70">
        <span className="text-sm font-medium mb-2 rotate-90 origin-center">Scroll</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;