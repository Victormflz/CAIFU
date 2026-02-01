import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ValueProposition: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      if (contentRef.current) {
        const heading = contentRef.current.querySelector('h2');
        if (heading) {
          gsap.from(heading, {
            opacity: 0,
            x: -60,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 85%',
              end: 'bottom 20%',
            },
          });
        }
      }

      // Paragraph animation
      if (contentRef.current) {
        const paragraph = contentRef.current.querySelector('p');
        if (paragraph) {
          gsap.from(paragraph, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: 0.3,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 85%',
              end: 'bottom 20%',
            },
          });
        }
      }

      // Quote line draw animation
      if (lineRef.current) {
        gsap.from(lineRef.current, {
          scaleY: 0,
          transformOrigin: 'top',
          duration: 0.8,
          delay: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: quoteRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      }

      // Quote content reveal
      if (quoteRef.current) {
        const quoteText = quoteRef.current.querySelector('p');
        if (quoteText) {
          gsap.from(quoteText, {
            opacity: 0,
            x: 30,
            duration: 0.8,
            delay: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: quoteRef.current,
              start: 'top 85%',
              end: 'bottom 20%',
            },
          });
        }
      }

      // Image animation - slide from right with scale
      gsap.from(imageRef.current, {
        opacity: 0,
        x: 80,
        scale: 0.9,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 85%',
          end: 'bottom 20%',
        },
      });

      // Glow effect pulsing
      if (imageRef.current) {
        const glowElement = imageRef.current.querySelector('.absolute');
        if (glowElement) {
          gsap.to(glowElement, {
            scale: 1.1,
            opacity: 0.15,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        }
      }

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
              Precios de fábrica.{' '}
              <span className="text-brand-500 block sm:inline">Márgenes reales.</span>
            </h2>
            
            <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
              Conectamos tu negocio directamente con la fuente. Elimina intermediarios y multiplica tu rentabilidad.
            </p>
            
            {/* Quote - Visual hierarchy */}
            <div ref={quoteRef} className="relative border-l-4 border-brand-accent pl-4 sm:pl-6 py-2 bg-brand-800/30 rounded-r-lg">
              <div ref={lineRef} className="absolute left-0 top-0 bottom-0 w-1 bg-brand-accent"></div>
              <p className="text-lg sm:text-xl font-semibold text-white italic leading-relaxed">
                "Más margen, más crecimiento."
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