import React, { useEffect, useRef } from 'react';
import { TrendingUp, ShieldCheck, Truck, Box } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Features: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current?.children || [], {
        autoAlpha: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Feature cards - stagger grid with rotate effect
      const cards = gridRef.current?.children || [];
      gsap.from(cards, {
        autoAlpha: 0,
        y: 60,
        scale: 0.9,
        rotationY: -15,
        stagger: 0.15,
        duration: 0.8,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });

      // Icon animations on card hover - individual setup
      cards.forEach((card) => {
        const icon = card.querySelector('.icon-container');
        const iconElement = card.querySelector('.icon-element');
        
        card.addEventListener('mouseenter', () => {
          gsap.to(iconElement, {
            rotation: 360,
            scale: 1.1,
            duration: 0.6,
            ease: 'back.out(1.7)',
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(iconElement, {
            rotation: 0,
            scale: 1,
            duration: 0.4,
            ease: 'power2.out',
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);
  const features = [
    {
      icon: <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8" />,
      title: "Mejores Precios",
      desc: "Importación directa sin intermediarios. Márgenes competitivos garantizados."
    },
    {
      icon: <Box className="w-7 h-7 sm:w-8 sm:h-8" />,
      title: "Stock Permanente",
      desc: "Miles de productos disponibles. Despacho inmediato."
    },
    {
      icon: <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8" />,
      title: "Calidad Certificada",
      desc: "Inspección en origen. Productos premium verificados."
    },
    {
      icon: <Truck className="w-7 h-7 sm:w-8 sm:h-8" />,
      title: "Envío Rápido",
      desc: "Entregas a todo el país. Logística eficiente."
    }
  ];

  return (
    <section ref={sectionRef} id="servicios" className="py-16 sm:py-20 md:py-24 bg-brand-800">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header - Mobile optimized */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <h3 className="text-sm sm:text-base font-bold text-brand-500 uppercase tracking-wider mb-3">
            Ventajas
          </h3>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white leading-tight px-2">
            Por qué comprar con nosotros
          </h2>
        </div>

        {/* Features Grid - Mobile-first: 1 column → 2 columns → 4 columns */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <article 
              key={idx} 
              className="bg-brand-900 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-brand-500/50 transition-all hover:transform hover:-translate-y-1 group cursor-pointer"
            >
              {/* Icon container - Touch-friendly size */}
              <div 
                className="icon-container w-12 h-12 sm:w-14 sm:h-14 bg-brand-800 rounded-xl flex items-center justify-center text-brand-500 mb-5 sm:mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors"
                aria-hidden="true"
              >
                <div className="icon-element">
                  {feature.icon}
                </div>
              </div>
              
              {/* Content */}
              <h4 className="text-lg sm:text-xl font-bold text-white mb-3 leading-tight">
                {feature.title}
              </h4>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {feature.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};