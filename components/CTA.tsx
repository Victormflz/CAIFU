import React from 'react';
import { Download, MessageCircle } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-blue-700"></div>
      
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
          ¿Listo para Impulsar tus Ventas?
        </h2>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
          Conéctate con nosotros por WhatsApp para obtener más información sobre nuestros productos al por mayor.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<button 
          type="button"
          className="flex items-center gap-3 bg-yellow-500 text-blue-900 px-6 py-2 rounded-full font-medium text-base hover:bg-yellow-600 transition-all w-auto justify-center shadow-lg shadow-yellow-500/50"
          aria-label="Contactar por WhatsApp"
          onClick={() => {
            window.open('https://wa.me/573147244831?text=Hola!%20Quisiera%20saber%20más%20sobre%20sus%20productos.', '_blank');
          }}
        >
          <MessageCircle className="w-5 h-5" />
          Contactar por WhatsApp
        </button>
        </div>
        
        <p className="mt-8 text-sm text-blue-200 opacity-80">
          *Precios exclusivos para comerciantes con RUT válido.
        </p>
      </div>
    </section>
  );
};