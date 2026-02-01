import React from 'react';
import { Download, MessageCircle } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section id="contacto" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[#4A90E2]" aria-hidden="true"></div>
      
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
        <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 sm:mb-8 tracking-tight leading-tight px-2">
          ¿Listo para Impulsar tus Ventas?
        </h2>
        
        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-blue-50 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4">
          Conéctate con nosotros por WhatsApp para obtener más información sobre nuestros productos al por mayor.
        </p>
        
        {/* CTA Button - Large and touch-friendly */}
        <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-4 sm:gap-6 px-4 sm:px-0">
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
        <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-blue-100 opacity-90 px-4">
          *Precios exclusivos para comerciantes con RUT válido.
        </p>
      </div>
    </section>
  );
};