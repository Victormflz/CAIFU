import React from 'react';
import { Star } from 'lucide-react';
import type { Testimonial } from '../types';

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
  return (
    <section id="testimonios" className="py-24 bg-brand-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Socios, no solo clientes.
            </h2>
            <p className="text-gray-400">
              Más de 500 comercios a lo largo del país confían su abastecimiento en nosotros.
            </p>
          </div>
          <div className="flex items-center gap-2">
             <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-brand-900" src={`https://i.pravatar.cc/100?img=${i+10}`} alt={`Cliente satisfecho ${i}`} />
                ))}
             </div>
             <div className="text-sm font-medium text-white ml-3">
               <span className="text-brand-accent font-bold">4.9/5</span> Calificación
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 backdrop-blur-sm">
              <div className="flex gap-1 mb-4" aria-label={`Calificación: ${t.rating} de 5 estrellas`}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < t.rating ? 'fill-brand-accent text-brand-accent' : 'text-gray-600'}`} />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{t.quote}"</p>
              <div>
                <h4 className="font-bold text-white">{t.name}</h4>
                <p className="text-sm text-brand-500">{t.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
