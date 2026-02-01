import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import type { Testimonial } from '../types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Méndez",
    business: "TecnoStore Chile",
    quote: "Desde que trabajo con Caifu, mis márgenes subieron un 40%. La calidad de los accesorios electrónicos es impecable.",
    rating: 5
  },
  {
    id: 2,
    name: "Ana Valenzuela",
    business: "Bazar La Central",
    quote: "Lo que más valoro es la atención. Si un producto no rota, me asesoran para elegir mejor en la siguiente compra.",
    rating: 5
  },
  {
    id: 3,
    name: "Roberto Silva",
    business: "Distribuidora Norte",
    quote: "La logística es clave para mí. Caifu cumple con los tiempos de entrega, lo que me permite planificar mis ventas sin estrés.",
    rating: 4
  }
];

export const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header content animation
      gsap.from(headerRef.current?.children || [], {
        autoAlpha: 0,
        x: -50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Badge animation with avatars
      gsap.from(badgeRef.current, {
        autoAlpha: 0,
        scale: 0.8,
        x: 50,
        duration: 0.8,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: badgeRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Avatar stagger
      const avatars = badgeRef.current?.querySelectorAll('img') || [];
      gsap.from(avatars, {
        scale: 0,
        rotation: 180,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.5,
        ease: 'back.out(2)',
        scrollTrigger: {
          trigger: badgeRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Testimonial cards - horizontal slide with stagger
      const cards = gridRef.current?.children || [];
      gsap.from(cards, {
        autoAlpha: 0,
        x: (index) => (index % 2 === 0 ? -80 : 80),
        y: 40,
        stagger: 0.2,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });

      // Stars animation per card
      cards.forEach((card) => {
        const stars = card.querySelectorAll('[data-star]');
        gsap.from(stars, {
          scale: 0,
          rotation: -180,
          stagger: 0.08,
          duration: 0.4,
          delay: 0.6,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="testimonios" className="py-16 sm:py-20 md:py-24 bg-brand-900">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header - Mobile-first layout */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-6">
          <div ref={headerRef} className="max-w-xl">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              Clientes satisfechos
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              +500 comercios confían en nosotros
            </p>
          </div>
          
          {/* Rating Badge - Mobile optimized */}
          <div ref={badgeRef} className="flex items-center gap-3 bg-brand-800/50 px-4 py-3 rounded-xl border border-gray-700">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i} 
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-brand-900" 
                  src={`https://i.pravatar.cc/100?img=${i+10}`} 
                  alt=""
                  aria-hidden="true"
                />
              ))}
            </div>
            <div className="text-sm font-medium text-white">
              <span className="text-brand-accent font-bold text-base">4.9/5</span>
              <span className="hidden sm:inline"> Calificación</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid - Mobile-first: 1 column → 3 columns */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-6 md:gap-8">
          {testimonials.map((t) => (
            <article 
              key={t.id} 
              className="bg-gray-800/50 p-6 sm:p-8 rounded-2xl border border-gray-700 backdrop-blur-sm hover:border-brand-500/30 transition-all"
            >
              {/* Rating Stars */}
              <div 
                className="flex gap-1 mb-4" 
                role="img" 
                aria-label={`Calificación: ${t.rating} de 5 estrellas`}
              >
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    data-star
                    className={`w-4 h-4 ${i < t.rating ? 'fill-brand-accent text-brand-accent' : 'text-gray-600'}`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed italic">
                "{t.quote}"
              </p>
              
              {/* Author */}
              <div>
                <h4 className="font-bold text-white text-base">{t.name}</h4>
                <p className="text-sm text-brand-500">{t.business}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
