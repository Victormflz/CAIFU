import React, { useEffect, useRef } from 'react';
import { Download, MessageCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CTA: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const disclaimerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background color animation - wave effect
      gsap.to(bgRef.current, {
        background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 50%, #4A90E2 100%)',
        backgroundSize: '200% 200%',
        backgroundPosition: '100% 50%',
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Title split text animation
      if (titleRef.current) {
        const text = titleRef.current.innerText;
        const chars = text.split('');
        titleRef.current.innerHTML = chars.map(char => 
          char === ' ' ? ' ' : `<span class="inline-block">${char}</span>`
        ).join('');

        gsap.from(Array.from(titleRef.current.children), {
          autoAlpha: 0,
          y: 50,
          rotationX: -90,
          stagger: 0.03,
          duration: 0.8,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        });
      }

      // Subtitle animation
      gsap.from(subtitleRef.current, {
        autoAlpha: 0,
        y: 30,
        duration: 0.8,
        delay: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });

      // Button entrance with bounce
      gsap.from(buttonRef.current, {
        autoAlpha: 0,
        scale: 0,
        rotation: -15,
        duration: 1,
        delay: 0.8,
        ease: 'elastic.out(1, 0.6)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });

      // Button continuous pulse
      if (buttonRef.current) {
        const button = buttonRef.current.querySelector('button');
        if (button) {
          gsap.to(button, {
            boxShadow: '0 0 40px rgba(234, 179, 8, 0.8), 0 0 80px rgba(234, 179, 8, 0.4)',
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        }
      }

      // Disclaimer fade in
      gsap.from(disclaimerRef.current, {
        autoAlpha: 0,
        y: 20,
        duration: 0.6,
        delay: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contacto" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div ref={bgRef} className="absolute inset-0 bg-[#4A90E2]" aria-hidden="true"></div>
      
      {/* Decorative patterns */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', 
          backgroundSize: '40px 40px' 
        }}
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Heading - Mobile-first sizes */}
        <h2 ref={titleRef} className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 sm:mb-8 tracking-tight leading-tight px-2">
          Comienza Ahora
        </h2>
        
        {/* Subheading */}
        <p ref={subtitleRef} className="text-base sm:text-lg md:text-xl text-blue-50 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4">
          Contacta por WhatsApp y recibe tu cotización al instante.
        </p>
        
        {/* CTA Button - Large and touch-friendly */}
        <div ref={buttonRef} className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-4 sm:gap-6 px-4 sm:px-0">
          <button 
            type="button"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-brand-900 font-bold text-base sm:text-lg rounded-full overflow-hidden shadow-2xl shadow-yellow-500/50 hover:shadow-yellow-300/90 hover:scale-105 active:scale-95 transition-all duration-500 min-h-touch border-2 border-yellow-300 hover:border-yellow-200 w-full xs:w-auto"
            aria-label="Contactar por WhatsApp"
            onClick={() => {
              window.open('https://wa.me/573147244831?text=Hola!%20Quisiera%20saber%20más%20sobre%20sus%20productos.', '_blank');
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/60 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
            <span className="absolute inset-0 bg-gradient-to-br from-yellow-300/40 to-orange-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 relative z-10 drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
            <span className="relative z-10 drop-shadow-sm group-hover:-translate-y-0.5 transition-transform duration-300">Contactar por WhatsApp</span>
          </button>
        </div>
        
        {/* Disclaimer */}
        <p ref={disclaimerRef} className="mt-6 sm:mt-8 text-xs sm:text-sm text-blue-100 opacity-90 px-4">
          *Precios exclusivos para comerciantes con RUT válido.
        </p>
      </div>
    </section>
  );
};