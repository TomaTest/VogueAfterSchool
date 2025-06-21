'use client';

import AnimatedSection from '@/components/AnimatedSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Heart, 
  BookOpen, 
  Users, 
  Award, 
  Star,
  Target,
  Lightbulb,
  Smile
} from 'lucide-react';
import Link from 'next/link';

export default function Despre() {
  const values = [
    {
      icon: Shield,
      title: 'Siguranța',
      description: 'Siguranța copiilor este prioritatea noastră absolută. Oferim un mediu sigur și protejat pentru fiecare copil.',
      color: 'bg-red-500'
    },
    {
      icon: BookOpen,
      title: 'Educația',
      description: 'Promovăm învățarea continuă prin metode moderne și interactive, adaptate nevoilor fiecărui copil.',
      color: 'bg-blue-500'
    },
    {
      icon: Smile,
      title: 'Distracția',
      description: 'Credem că învățarea trebuie să fie distractivă. Combinăm educația cu jocul și creativitatea.',
      color: 'bg-green-500'
    }
  ];

  const team = [
    {
      name: 'Ana Popescu',
      role: 'Director General',
      description: 'Peste 15 ani experiență în educația copiilor și managementul instituțiilor educaționale.',
      image: 'https://via.placeholder.com/300x300/3b82f6/ffffff?text=Ana+P',
      expertise: ['Management Educațional', 'Dezvoltare Curriculară', 'Relații cu Părinții']
    },
    {
      name: 'Maria Ionescu',
      role: 'Coordonator Pedagogic',
      description: 'Specializată în pedagogia modernă și metodele de învățare interactive pentru copii.',
      image: 'https://via.placeholder.com/300x300/10b981/ffffff?text=Maria+I',
      expertise: ['Pedagogie', 'Psihologie Copii', 'Metode Interactive']
    },
    {
      name: 'Daniel Gheorghe',
      role: 'Profesor Limba Engleză',
      description: 'Certificat Cambridge, specializat în predarea limbii engleze pentru copii.',
      image: 'https://via.placeholder.com/300x300/f59e0b/ffffff?text=Daniel+G',
      expertise: ['Limba Engleză', 'Certificare Cambridge', 'Comunicare']
    }
  ];

  const achievements = [
    {
      number: '200+',
      label: 'Copii fericiți',
      icon: Users
    },
    {
      number: '7+',
      label: 'Ani experiență',
      icon: Award
    },
    {
      number: '95%',
      label: 'Părinți mulțumiți',
      icon: Star
    },
    {
      number: '15+',
      label: 'Activități diverse',
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Despre noi
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Povestea noastră
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Vogue After School s-a născut din dorința de a oferi copiilor din Ploiești 
              cea mai bună experiență educațională într-un mediu sigur și stimulant.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <img 
                src="https://via.placeholder.com/600x400/1e3a8a/ffffff?text=Vogue+After+School+Building"
                alt="Clădirea Vogue After School"
                className="rounded-2xl shadow-2xl"
              />
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  Misiunea noastră
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Ne propunem să creăm un mediu educațional de excepție unde copiii 
                  pot să învețe, să se dezvolte și să se distreze în același timp. 
                  Situat în complexul premium MRS Residence, oferim facilități moderne 
                  și un personal dedicat pentru fiecare copil.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Credem că educația trebuie să fie o experiență holistică, care să 
                  stimuleze creativitatea, să dezvolte abilitățile sociale și să 
                  consolideze cunoștințele academice într-un mod plăcut și interactiv.
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Inovație în educație</h3>
                    <p className="text-gray-600">Metode moderne de predare și învățare</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Valorile noastre
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aceste valori fundamentale ghidează tot ceea ce facem și definesc experiența 
              pe care o oferim copiilor și familiilor noastre.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 200}>
                <Card className="card-hover h-full text-center">
                  <CardHeader>
                    <div className={`w-20 h-20 ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <value.icon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              Echipa noastră
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Profesioniști dedicați
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Echipa noastră este formată din educatori pasionați și profesioniști cu experiență 
              în lucrul cu copiii, dedicați să ofere cea mai bună experiență educațională.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={index} animation="fade-in" delay={index * 200}>
                <Card className="card-hover h-full">
                  <CardHeader className="text-center">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-blue-600 font-semibold">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="text-gray-600">
                      {member.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Realizările noastre
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Cifre care demonstrează angajamentul nostru față de excelență în educație și satisfacția familiilor.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 200}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-blue-100 font-medium">
                    {achievement.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Vrei să faci parte din familia noastră?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Descoperă cum putem oferi copilului tău cea mai bună experiență educațională din Ploiești.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/inscrieri">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Înscrie-te Acum
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300">
                  Contactează-ne
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}