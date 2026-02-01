import React, { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, MessageCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLAnchorElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline para secuencia de entrada
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' }
      });

      // Badge - aparece primero (scale conservador para mantener visibilidad)
      tl.from(badgeRef.current, {
        opacity: 0,
        y: -30,
        scale: 0.9,
        duration: 0.6,
        clearProps: 'transform,opacity'
      });

      // Título - split words con stagger
      if (titleRef.current) {
        const titleWords = titleRef.current.innerText.split(' ');
        titleRef.current.innerHTML = titleWords.map(word => `<span class="inline-block">${word}</span>`).join(' ');
        
        tl.from(Array.from(titleRef.current.children), {
          opacity: 0,
          y: 60,
          rotationX: -90,
          transformOrigin: 'top center',
          stagger: 0.1,
          duration: 0.8,
          clearProps: 'transform,opacity'
        }, '-=0.3');
      }

      // Subtítulo
      tl.from(subtitleRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        clearProps: 'transform,opacity'
      }, '-=0.4');

      // Descripción
      tl.from(descriptionRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        clearProps: 'transform,opacity'
      }, '-=0.5');

      // Botones - con bounce effect (sin scale:0 para mantener iconos visibles)
      if (buttonsRef.current) {
        tl.from(Array.from(buttonsRef.current.children), {
          opacity: 0,
          scale: 0.85,
          y: 30,
          stagger: 0.15,
          duration: 0.8,
          ease: 'back.out(1.7)',
          clearProps: 'transform,opacity'
        }, '-=0.4');
      }

      // Trust indicator
      tl.from(trustRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        clearProps: 'transform,opacity'
      }, '-=0.3');

      // Scroll indicator - fade in loop
      tl.from(scrollIndicatorRef.current, {
        opacity: 0,
        duration: 0.8,
        clearProps: 'opacity'
      }, '-=0.2');

      // Parallax en background image
      if (bgImageRef.current) {
        gsap.to(bgImageRef.current, {
          yPercent: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      // Scroll indicator continuous animation
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <header ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div ref={bgImageRef} className="absolute inset-0 z-0 will-change-transform">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="" 
          className="w-full h-full object-cover opacity-35"
          loading="eager"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/85 via-brand-900/90 to-brand-900"></div>
      </div>

      {/* Content - Mobile-first Typography */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center pt-20 pb-16">
        {/* Badge */}
        <div ref={badgeRef} className="inline-block px-4 py-2 mb-6 rounded-full border border-brand-500/30 bg-brand-500/10 backdrop-blur-sm">
          <span className="text-brand-500 text-xs sm:text-sm font-bold tracking-wider uppercase">
            Venta Mayorista Exclusiva
          </span>
        </div>
        
        {/* Main Heading - Mobile-first sizes */}
        <h1 ref={titleRef} className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tight leading-[1.1] px-2">
          Importadora Caifu
        </h1>
        
        {/* Subheading - Optimized for readability */}
        <h2 ref={subtitleRef} className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 mb-6 leading-tight px-2">
          Accesorios iPhone al por Mayor
        </h2>
        
        {/* Description - Mobile-optimized line length */}
        <p ref={descriptionRef} className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4">
          Importación directa. Precios de fábrica. Sin intermediarios.
        </p>

        {/* CTA Buttons - Large touch targets */}
        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
          <button 
            type="button"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-brand-900 font-bold text-base sm:text-lg rounded-full overflow-hidden shadow-2xl shadow-yellow-500/50 hover:shadow-yellow-300/90 hover:scale-105 active:scale-95 transition-all duration-500 min-h-touch border-2 border-yellow-300 hover:border-yellow-200"
            onClick={() => {
              window.open('https://wa.me/573147244831?text=Hola!%20Quisiera%20saber%20más%20sobre%20sus%20productos.', '_blank');
            }}
            aria-label="Contactar por WhatsApp"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/60 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
            <span className="absolute inset-0 bg-gradient-to-br from-yellow-300/40 to-orange-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 relative z-10 drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
            <span className="relative z-10 drop-shadow-sm group-hover:-translate-y-0.5 transition-transform duration-300">Contactar por WhatsApp</span>
          </button>
          
          <a 
            href="#propuesta"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-white/40 text-white font-bold text-base rounded-full overflow-hidden hover:bg-white/20 hover:border-white/60 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-2xl shadow-black/30 min-h-touch"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-brand-500/30 via-brand-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent"></span>
            <span className="relative z-10 drop-shadow-lg">Cómo funciona</span>
          </a>
        </div>

        {/* Trust indicator - Mobile-friendly */}
        <p ref={trustRef} className="mt-8 text-xs sm:text-sm text-gray-500 font-medium px-4">
          Más de 500+ comercios confían en nosotros
        </p>
      </div>

      {/* Scroll Indicator - Only visible on taller screens */}
      <a 
        ref={scrollIndicatorRef}
        href="#propuesta" 
        className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-white transition-colors p-2"
        aria-label="Desplazarse hacia abajo"
      >
        <ChevronDown className="w-8 h-8" aria-hidden="true" />
      </a>
    </header>
  );
};