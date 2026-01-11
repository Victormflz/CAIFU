import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const ValueProposition: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

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
    <section ref={ref} id="propuesta" className="py-24 bg-brand-900 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-500/20 blur-2xl rounded-full"></div>
              <img 
                src="https://i.postimg.cc/nzbTbn2m/Whats-App-Image-2026-01-11-at-16-33-33.jpg" 
                alt="Importadora Caifu, productos para iPhone" 
                className="w-full h-full object-cover rounded-2xl border border-gray-700 shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Tu éxito comercial es <br/>
              <span className="text-brand-500">nuestra única métrica.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Sabemos que el margen lo es todo. Por eso, en Importadora Caifu eliminamos 
              la cadena de intermediarios innecesarios. Te conectamos con la fuente, 
              asegurando que cada peso que inviertas se traduzca en mayor rentabilidad 
              para tu comercio.
            </p>
            <div className="border-l-4 border-brand-accent pl-6">
              <p className="text-xl font-medium text-white italic">
                "No solo vendemos productos, vendemos la oportunidad de que tu negocio escale al siguiente nivel."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};