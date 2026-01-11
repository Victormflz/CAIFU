import React from 'react';
import { ArrowRight, ChevronDown, MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Importadora Caifu Warehouse Logistics" 
          className="w-full h-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/80 via-brand-900/90 to-brand-900"></div>
      </div>

      {/* Content - The Hook */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-brand-500/30 bg-brand-500/10 backdrop-blur-sm">
          <span className="text-brand-500 text-xs md:text-sm font-bold tracking-widest uppercase">
            Venta Mayorista Exclusiva
          </span>
        </div>
        
<h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tight leading-tight">
        Importadora Caifu
      </h1>
      <h2 className="text-3xl md:text-5xl font-bold text-gray-200 mb-6">
        Tu Socio Mayorista en Protección iPhone
      </h2>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        En Importadora Caifu eliminamos intermediarios para ofrecerte productos al mejor precio. Conectamos directamente con la fuente para asegurarnos de que cada inversión potencie la rentabilidad de tu negocio.
        </p>


        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button 
          type="button"
          className="flex items-center gap-3 bg-yellow-500 text-blue-900 px-6 py-2 rounded-full font-medium text-base hover:bg-yellow-600 transition-all justify-center shadow-lg shadow-yellow-500/50"
          onClick={() => {
            window.open('https://wa.me/573147244831?text=Hola!%20Quisiera%20saber%20más%20sobre%20sus%20productos.', '_blank');
          }}
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
          Contactar por WhatsApp
        </button>
          <a 
            href="#propuesta"
            className="px-8 py-4 text-white font-medium hover:text-brand-500 transition-colors"
          >
            Cómo funciona
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#propuesta" 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500 hover:text-white transition-colors"
        aria-label="Desplazarse hacia abajo"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </header>
  );
};