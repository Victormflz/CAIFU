import React from 'react';
import { TrendingUp, ShieldCheck, Truck, Box } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8" />,
      title: "Rentabilidad Superior",
      desc: "Precios optimizados para que puedas competir agresivamente en tu mercado local manteniendo márgenes saludables."
    },
    {
      icon: <Box className="w-7 h-7 sm:w-8 sm:h-8" />,
      title: "Stock Garantizado",
      desc: "Miles de SKUs listos para despacho. Desde electrónica hasta hogar, tenemos lo que tus clientes están buscando hoy."
    },
    {
      icon: <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8" />,
      title: "Calidad Verificada",
      desc: "Nuestro equipo inspecciona los lotes en origen. Reduce las devoluciones y fideliza a tus clientes con productos confiables."
    },
    {
      icon: <Truck className="w-7 h-7 sm:w-8 sm:h-8" />,
      title: "Logística Veloz",
      desc: "Entregas coordinadas a todo el país. Tu tiempo es dinero, y nos aseguramos de que tu mercadería llegue cuando la necesitas."
    }
  ];

  return (
    <section id="servicios" className="py-16 sm:py-20 md:py-24 bg-brand-800">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header - Mobile optimized */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <h3 className="text-sm sm:text-base font-bold text-brand-500 uppercase tracking-wider mb-3">
            ¿Por qué elegirnos?
          </h3>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white leading-tight px-2">
            Todo lo que tu negocio necesita para crecer
          </h2>
        </div>

        {/* Features Grid - Mobile-first: 1 column → 2 columns → 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <article 
              key={idx} 
              className="bg-brand-900 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-brand-500/50 transition-all hover:transform hover:-translate-y-1 group"
            >
              {/* Icon container - Touch-friendly size */}
              <div 
                className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-800 rounded-xl flex items-center justify-center text-brand-500 mb-5 sm:mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors"
                aria-hidden="true"
              >
                {feature.icon}
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