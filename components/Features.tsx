import React from 'react';
import { TrendingUp, ShieldCheck, Truck, Box } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Rentabilidad Superior",
      desc: "Precios optimizados para que puedas competir agresivamente en tu mercado local manteniendo márgenes saludables."
    },
    {
      icon: <Box className="w-8 h-8" />,
      title: "Stock Garantizado",
      desc: "Miles de SKUs listos para despacho. Desde electrónica hasta hogar, tenemos lo que tus clientes están buscando hoy."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Calidad Verificada",
      desc: "Nuestro equipo inspecciona los lotes en origen. Reduce las devoluciones y fideliza a tus clientes con productos confiables."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Logística Veloz",
      desc: "Entregas coordinadas a todo el país. Tu tiempo es dinero, y nos aseguramos de que tu mercadería llegue cuando la necesitas."
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-brand-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h3 className="text-lg font-bold text-brand-500 uppercase tracking-widest mb-2">¿Por qué elegirnos?</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Todo lo que tu negocio necesita para crecer</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-brand-900 p-8 rounded-2xl border border-gray-800 hover:border-brand-500/50 transition-all hover:transform hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 bg-brand-800 rounded-lg flex items-center justify-center text-brand-500 mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};