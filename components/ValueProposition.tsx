import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ValueProposition: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        opacity: 0,
        x: -80,
        duration: 1,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
        },
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        x: 80,
        scale: 0.8,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (inView) {
      const numbers = document.querySelectorAll('.animate-number');
      numbers.forEach((num) => animateValue(num, 0, parseInt(num.innerHTML), 2000));
    }
  }, [inView]);

  const animateValue = (obj, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <section ref={sectionRef} id="propuesta" className="py-16 sm:py-20 md:py-24 bg-brand-900 relative">
      <div ref={ref} className="container mx-auto px-4 sm:px-6">
        {/* Mobile-first: Content first, image second */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content - Priority on mobile */}
          <div ref={contentRef} className="order-1">
            <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Tu éxito comercial es{' '}
              <span className="text-brand-500 block sm:inline">nuestra única métrica.</span>
            </h2>
            
            <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
              Sabemos que el margen lo es todo. Por eso, en Importadora Caifu eliminamos 
              la cadena de intermediarios innecesarios. Te conectamos con la fuente, 
              asegurando que cada peso que inviertas se traduzca en mayor rentabilidad 
              para tu comercio.
            </p>
            
            {/* Quote - Visual hierarchy */}
            <div className="border-l-4 border-brand-accent pl-4 sm:pl-6 py-2 bg-brand-800/30 rounded-r-lg">
              <p className="text-lg sm:text-xl font-semibold text-white italic leading-relaxed">
                "No solo vendemos productos, vendemos la oportunidad de que tu negocio escale al siguiente nivel."
              </p>
            </div>
          </div>

          {/* Image - Secondary on mobile */}
          <div ref={imageRef} className="order-2">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-brand-500/10 blur-3xl rounded-full" aria-hidden="true"></div>
              
              <img 
                src="https://i.postimg.cc/nzbTbn2m/Whats-App-Image-2026-01-11-at-16-33-33.jpg" 
                alt="Productos de calidad de Importadora Caifu para iPhone" 
                className="relative w-full max-w-md mx-auto lg:max-w-none h-auto object-cover rounded-2xl border border-gray-700 shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};