'use client';

import { useEffect, useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Car, 
  UtensilsCrossed, 
  BookOpen, 
  Shield, 
  Heart, 
  Star,
  Users,
  Clock,
  MapPin,
  Award,
  Sparkles,
  Target,
  Zap,
  Crown,
  Gem
} from 'lucide-react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Animations
    const ctx = gsap.context(() => {
      // About Section Animation
      gsap.fromTo('.about-content', 
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Services Cards Animation
      gsap.fromTo('.service-card', 
        { y: 80, opacity: 0, scale: 0.9 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 0.8, 
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Testimonials Animation
      gsap.fromTo('.testimonial-card', 
        { x: -100, opacity: 0, rotateY: -15 },
        { 
          x: 0, 
          opacity: 1, 
          rotateY: 0,
          duration: 1, 
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Car,
      title: 'Transport Mercedes Premium',
      description: 'Transport sigur și luxos cu vehicule Mercedes pentru copii, cu șoferi profesioniști și sisteme de siguranță avansate.',
      color: 'gradient-luxury',
      features: ['Vehicule Mercedes', 'Șoferi certificați', 'Sisteme GPS', 'Asigurare completă']
    },
    {
      icon: UtensilsCrossed,
      title: 'Prânz Gourmet la Trattoria MRS',
      description: 'Mese sănătoase și delicioase pregătite de bucătarii profesioniști, cu ingrediente fresh și meniuri echilibrate.',
      color: 'gradient-emerald',
      features: ['Bucătari profesioniști', 'Ingrediente fresh', 'Meniuri echilibrate', 'Opțiuni vegetariene']
    },
    {
      icon: BookOpen,
      title: 'Supraveghere Academică Expertă',
      description: 'Ajutor specializat la temele școlare și consolidarea cunoștințelor cu profesori calificați și metode moderne.',
      color: 'gradient-gold',
      features: ['Profesori calificați', 'Metode interactive', 'Suport personalizat', 'Progres monitorizat']
    },
    {
      icon: Shield,
      title: 'Mediu Ultra-Sigur',
      description: 'Supraveghere 24/7, personal calificat și protocoale stricte de siguranță pentru protecția completă a copiilor.',
      color: 'gradient-primary',
      features: ['Supraveghere 24/7', 'Personal calificat', 'Protocoale stricte', 'Acces controlat']
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Maria Popescu',
      role: 'Medic pediatru, mama lui Alex (8 ani)',
      content: 'Vogue After School a depășit toate așteptările noastre. Alex nu doar că își face temele cu plăcere, dar a dezvoltat și o pasiune pentru învățare. Profesionalismul echipei este remarcabil.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=face',
      highlight: 'Profesionalism remarcabil'
    },
    {
      name: 'Ing. Andrei Ionescu',
      role: 'Manager IT, tatăl Mariei (7 ani)',
      content: 'Calitatea serviciilor și atenția la detalii sunt excepționale. Maria a progresat enorm la școală și vorbește fluent engleza. Transportul cu Mercedes ne oferă liniștea completă.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=face',
      highlight: 'Progres excepțional'
    },
    {
      name: 'Av. Elena Dumitrescu',
      role: 'Avocat, mama lui David (9 ani)',
      content: 'Vogue After School oferă mult mai mult decât o simplă supraveghere. Este o experiență educațională completă care dezvoltă personalitatea copilului în toate aspectele.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=face',
      highlight: 'Experiență completă'
    }
  ];

  const achievements = [
    { number: '200+', label: 'Copii fericiți', icon: Users, color: 'text-blue-600' },
    { number: '98%', label: 'Părinți mulțumiți', icon: Heart, color: 'text-red-500' },
    { number: '7+', label: 'Ani experiență', icon: Award, color: 'text-yellow-500' },
    { number: '15+', label: 'Activități diverse', icon: Target, color: 'text-green-500' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section ref={aboutRef} className="py-32 hero-bg relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-20 about-content">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 px-6 py-2 text-sm font-semibold">
              <Sparkles className="w-4 h-4 mr-2" />
              Despre Vogue After School
            </Badge>
            <h2 className="text-section font-display mb-8 gradient-text-luxury">
              Cea mai prestigioasă școală de după ore din Ploiești
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Situată în exclusivistul complex MRS Residence pe Bulevardul Republicii, 
              Vogue After School redefinește standardele educației premium pentru copii, 
              combinând excelența academică cu dezvoltarea personală într-un mediu luxos și stimulant.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-in-left" className="about-content">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Copii fericiți la Vogue After School"
                  className="rounded-3xl shadow-ultra w-full"
                />
                <div className="absolute -bottom-8 -right-8 card-luxury rounded-2xl p-6 shadow-gold">
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text-gold mb-2">
                      <Crown className="w-8 h-8 inline mr-2" />
                      #1
                    </div>
                    <div className="text-gray-700 font-semibold">În Ploiești</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" className="about-content">
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 gradient-luxury rounded-2xl flex items-center justify-center shadow-luxury">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">Echipă de Elită</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">Profesori cu experiență internațională și personal specializat în dezvoltarea copiilor</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 gradient-emerald rounded-2xl flex items-center justify-center shadow-luxury">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">Atenție Personalizată</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">Grupe mici și abordare individualizată pentru fiecare copil</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center shadow-luxury">
                    <Gem className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">Facilități Premium</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">Spații moderne, echipamente de ultimă generație și mediu luxos</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Achievement Stats */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 200} className="about-content">
                <div className="text-center card-ultra rounded-2xl p-8 shadow-luxury">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${achievement.color === 'text-blue-600' ? 'bg-blue-100' : achievement.color === 'text-red-500' ? 'bg-red-100' : achievement.color === 'text-yellow-500' ? 'bg-yellow-100' : 'bg-green-100'}`}>
                    <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                  </div>
                  <div className={`text-4xl font-bold mb-2 ${achievement.color} font-display`}>
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {achievement.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-200 px-6 py-2 text-sm font-semibold">
              <Zap className="w-4 h-4 mr-2" />
              Serviciile noastre premium
            </Badge>
            <h2 className="text-section font-display mb-8 gradient-text-luxury">
              De ce suntem alegerea părinților exigenți?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Oferim o experiență educațională de lux, cu servicii premium care depășesc toate așteptările și asigură dezvoltarea optimă a copilului tău.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} animation="fade-in" delay={index * 200}>
                <Card className="service-card card-ultra h-full shadow-luxury hover:shadow-ultra transition-all duration-500 group">
                  <CardHeader className="pb-6">
                    <div className={`w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-luxury group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-display mb-4">{service.title}</CardTitle>
                    <CardDescription className="text-lg leading-relaxed text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 mb-3">Caracteristici premium:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-20">
            <Badge className="mb-6 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 px-6 py-2 text-sm font-semibold">
              <Star className="w-4 h-4 mr-2" />
              Testimoniale premium
            </Badge>
            <h2 className="text-section font-display mb-8 gradient-text-luxury">
              Ce spun părinții despre experiența Vogue
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Încrederea părinților și fericirea copiilor sunt cele mai valoroase confirmări ale excelenței noastre în educație.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} animation="fade-in" delay={index * 200}>
                <Card className="testimonial-card testimonial-premium h-full shadow-luxury hover:shadow-ultra transition-all duration-500">
                  <CardHeader className="pb-6">
                    <div className="flex items-center space-x-4 mb-6">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover shadow-lg"
                      />
                      <div>
                        <CardTitle className="text-xl font-display">{testimonial.name}</CardTitle>
                        <CardDescription className="text-blue-600 font-semibold">
                          {testimonial.role}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
                      {testimonial.highlight}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-32 gradient-luxury relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection className="text-white">
            <div className="mb-8">
              <Crown className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            </div>
            <h2 className="text-section font-display mb-8 text-white">
              Alătură-te familiei Vogue After School
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Oferă copilului tău cea mai prestigioasă experiență educațională din Ploiești. 
              Locurile sunt limitate pentru a menține calitatea premium.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/inscrieri">
                <Button size="lg" className="btn-premium bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full shadow-ultra hover:shadow-2xl transition-all duration-300 min-w-[220px]">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Înscrie-te Acum
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="btn-premium border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 min-w-[220px]">
                  <Clock className="w-5 h-5 mr-2" />
                  Programează Vizită
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}