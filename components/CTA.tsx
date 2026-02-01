import React from 'react';
import { Download, MessageCircle } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section id="contacto" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-blue-600" aria-hidden="true"></div>
      
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
            className="btn-base bg-yellow-500 text-brand-900 hover:bg-yellow-400 active:bg-yellow-600 font-bold text-base sm:text-lg shadow-2xl shadow-yellow-500/40 w-full xs:w-auto"
            aria-label="Contactar por WhatsApp"
            onClick={() => {
              window.open('https://wa.me/573147244831?text=Hola!%20Quisiera%20saber%20más%20sobre%20sus%20productos.', '_blank');
            }}
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" aria-hidden="true" />
            <span>Contactar por WhatsApp</span>
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