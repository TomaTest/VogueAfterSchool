'use client';

import AnimatedSection from '@/components/AnimatedSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Globe, 
  BookOpen, 
  Gamepad2, 
  Users, 
  Palette,
  Clock,
  Star,
  CheckCircle,
  Calendar,
  MapPin
} from 'lucide-react';
import Link from 'next/link';

export default function Program() {
  const courses = [
    {
      icon: Globe,
      title: 'Limba Engleză și Spaniolă',
      description: 'Cursuri interactive de limbi străine cu profesori nativi și metode moderne de predare.',
      duration: '45 min/sesiune',
      level: 'Toate nivelurile',
      features: [
        'Conversație practică',
        'Jocuri educative',
        'Certificare Cambridge',
        'Materiale interactive'
      ]
    },
    {
      icon: BookOpen,
      title: 'Club de Lectură și Creație',
      description: 'Dezvoltarea abilităților de lectură și scriere prin poveți captivante și exerciții creative.',
      duration: '60 min/sesiune',
      level: 'Adaptat vârstei',
      features: [
        'Lecturi ghidate',
        'Discuții interactive',
        'Exerciții de scriere',
        'Prezentări publice'
      ]
    },
    {
      icon: Gamepad2,
      title: 'JOY Park și Loc de Joacă',
      description: 'Spații de joacă moderne și sigure unde copiii se pot distra și socializa.',
      duration: 'Acces nelimitat',
      level: 'Toate vârstele',
      features: [
        'Echipamente moderne',
        'Supraveghere 24/7',
        'Activități de grup',
        'Jocuri educative'
      ]
    },
    {
      icon: Users,
      title: 'Activități Recreative',
      description: 'Activități diverse pentru dezvoltarea socială și fizică a copiilor.',
      duration: '30-45 min',
      level: 'Adaptate vârstei',
      features: [
        'Sporturi de echipă',
        'Dans și muzică',
        'Teatru pentru copii',
        'Activități în aer liber'
      ]
    },
    {
      icon: Palette,
      title: 'Cursuri Creative',
      description: 'Ateliere speciale pentru dezvoltarea creativității și a abilităților artistice.',
      duration: '60 min/atelier',
      level: 'Principianti',
      features: [
        'Pictură și desen',
        'Sculptură în lut',
        'Meșteșuguri tradiționale',
        'Proiecte DIY'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Aprofundarea Noțiunilor',
      description: 'Consolidarea cunoștințelor dobândite la școală prin exerciții practice.',
      duration: '45 min/materie',
      level: 'Clasa I-VIII',
      features: [
        'Matematică aplicată',
        'Științe naturale',
        'Română și literatura',
        'Teme asistate'
      ]
    }
  ];

  const schedule = [
    { time: '12:00 - 13:00', activity: 'Preluare copii din școli' },
    { time: '13:00 - 14:00', activity: 'Prânz la Trattoria MRS' },
    { time: '14:00 - 15:00', activity: 'Timp liber și socializare' },
    { time: '15:00 - 16:00', activity: 'Ajutor la teme' },
    { time: '16:00 - 17:00', activity: 'Cursuri și ateliere' },
    { time: '17:00 - 18:00', activity: 'Activități recreative' }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Program After School
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Programul nostru educațional
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Un program complet și diversificat care combină educația cu distracția, 
              oferind copiilor oportunități de dezvoltare în toate domeniile.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <img 
                src="https://via.placeholder.com/600x400/3b82f6/ffffff?text=Copii+la+cursuri"
                alt="Copii la cursuri"
                className="rounded-2xl shadow-2xl"
              />
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Program flexibil</h3>
                    <p className="text-gray-600">Adaptat nevoilor fiecărei familii</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Calitate superioară</h3>
                    <p className="text-gray-600">Profesori calificați și materiale moderne</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Grupe mici</h3>
                    <p className="text-gray-600">Atenție personalizată pentru fiecare copil</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cursurile noastre
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O gamă variată de cursuri și activități care stimulează învățarea și dezvoltarea copiilor în toate domeniile.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <AnimatedSection key={index} animation="fade-in" delay={index * 200}>
                <Card className="card-hover h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-4">
                      <course.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription className="text-base">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Durată:</span>
                      <Badge variant="secondary">{course.duration}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Nivel:</span>
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Caracteristici:</h4>
                      <ul className="space-y-1">
                        {course.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              Program zilnic
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              O zi tipică la Vogue
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fiecare zi este planificată cu atenție pentru a oferi copiilor o experiență echilibrată și plăcută.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {schedule.map((item, index) => (
              <AnimatedSection key={index} animation="slide-in-left" delay={index * 100}>
                <div className="timeline-item">
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                            <Calendar className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{item.activity}</h3>
                            <p className="text-gray-600">{item.time}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <div className="text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Locația noastră premium
                </h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Situată în complexul exclusivist MRS Residence pe Bulevardul Republicii, 
                  școala noastră oferă un mediu sigur și modern pentru copii.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Adresă centrală</h3>
                      <p className="text-blue-100">Ușor accesibilă din orice parte a orașului</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Facilități moderne</h3>
                      <p className="text-blue-100">Echipamente și spații special amenajate</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <img 
                src="https://via.placeholder.com/600x400/ffffff/1e3a8a?text=MRS+Residence+Complex"
                alt="Complex MRS Residence"
                className="rounded-2xl shadow-2xl"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Începe aventura educațională
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Înscrie-ți copilul la programul nostru After School și oferă-i cea mai bună experiență educațională.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/inscrieri">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Înscrie-te Acum
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300">
                  Solicită Informații
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}