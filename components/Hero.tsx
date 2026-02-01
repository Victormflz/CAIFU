import React from 'react';
import { ArrowRight, ChevronDown, MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="" 
          className="w-full h-full object-cover opacity-35"
          loading="eager"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/85 via-brand-900/90 to-brand-900"></div>
      </div>

      {/* Content - Mobile-first Typography */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center pt-20 pb-16">
        {/* Badge */}
        <div className="inline-block px-4 py-2 mb-6 rounded-full border border-brand-500/30 bg-brand-500/10 backdrop-blur-sm animate-fade-in">
          <span className="text-brand-500 text-xs sm:text-sm font-bold tracking-wider uppercase">
            Venta Mayorista Exclusiva
          </span>
        </div>
        
        {/* Main Heading - Mobile-first sizes */}
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tight leading-[1.1] animate-slide-up px-2">
          Importadora Caifu
        </h1>
        
        {/* Subheading - Optimized for readability */}
        <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 mb-6 leading-tight px-2">
          Tu Socio Mayorista en Protección iPhone
        </h2>
        
        {/* Description - Mobile-optimized line length */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4">
          En Importadora Caifu eliminamos intermediarios para ofrecerte productos al mejor precio. 
          Conectamos directamente con la fuente para asegurarnos de que cada inversión potencie 
          la rentabilidad de tu negocio.
        </p>

        {/* CTA Buttons - Large touch targets */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
          <button 
            type="button"
            className="btn-base bg-yellow-500 text-brand-900 hover:bg-yellow-400 hover:scale-105 active:scale-95 font-bold text-base sm:text-lg shadow-2xl shadow-yellow-500/50 hover:shadow-yellow-400/60 transition-all duration-200"
            onClick={() => {
              window.open('https://wa.me/573147244831?text=Hola!%20Quisiera%20saber%20más%20sobre%20sus%20productos.', '_blank');
            }}
            aria-label="Contactar por WhatsApp"
          >
            <MessageCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
            <span>Contactar por WhatsApp</span>
          </button>
          
          <a 
            href="#propuesta"
            className="btn-base bg-white/10 backdrop-blur-md border-2 border-white/20 text-white hover:bg-white/20 hover:border-white/40 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg"
          >
            Cómo funciona
          </a>
        </div>

        {/* Trust indicator - Mobile-friendly */}
        <p className="mt-8 text-xs sm:text-sm text-gray-500 font-medium px-4">
          Más de 500+ comercios confían en nosotros
        </p>
      </div>

      {/* Scroll Indicator - Only visible on taller screens */}
      <a 
        href="#propuesta" 
        className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-500 hover:text-white transition-colors p-2"
        aria-label="Desplazarse hacia abajo"
      >
        <ChevronDown className="w-8 h-8" aria-hidden="true" />
      </a>
    </header>
  );
};