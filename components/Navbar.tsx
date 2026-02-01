import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-brand-900/80 backdrop-blur-sm py-4'
      }`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo - Optimized for touch */}
          <a 
            href="#" 
            className="flex items-center gap-2 cursor-pointer min-h-touch tap-spacing -ml-3"
            aria-label="CAIFU - Ir al inicio"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="28" 
              height="28" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-brand-accent flex-shrink-0"
              aria-hidden="true"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
              <path d="M12 12l8 -4.5" />
              <path d="M12 12l0 9" />
              <path d="M12 12l-8 -4.5" />
              <path d="M16 5.25l-8 4.5" />
            </svg>
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
              CAIFU<span className="text-brand-500">.</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a 
              href="#propuesta" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors py-2"
            >
              Nosotros
            </a>
            <a 
              href="#servicios" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors py-2"
            >
              Servicios
            </a>
            <a 
              href="#testimonios" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors py-2"
            >
              Testimonios
            </a>
            <a 
              href="#catalogo" 
              className="btn-base bg-yellow-500 text-brand-900 hover:bg-yellow-400 active:bg-yellow-600 shadow-lg shadow-yellow-500/20"
            >
              Ver Catálogo
            </a>
          </div>

          {/* Mobile Toggle - Large touch target */}
          <button 
            className="md:hidden text-white min-h-touch tap-spacing -mr-3 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full screen overlay */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden fixed inset-0 top-[60px] bg-brand-900/98 backdrop-blur-md z-40 animate-fade-in"
        >
          <div className="container mx-auto px-4 py-8 flex flex-col gap-2 h-full overflow-y-auto safe-bottom">
            <a 
              href="#propuesta" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="text-white text-lg font-medium py-4 px-4 rounded-lg hover:bg-brand-800 transition-colors active:bg-brand-700 min-h-touch"
            >
              Nosotros
            </a>
            <a 
              href="#servicios" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="text-white text-lg font-medium py-4 px-4 rounded-lg hover:bg-brand-800 transition-colors active:bg-brand-700 min-h-touch"
            >
              Servicios
            </a>
            <a 
              href="#testimonios" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="text-white text-lg font-medium py-4 px-4 rounded-lg hover:bg-brand-800 transition-colors active:bg-brand-700 min-h-touch"
            >
              Testimonios
            </a>
            
            {/* CTA destacado en móvil */}
            <a 
              href="#catalogo" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="mt-4 btn-base bg-yellow-500 text-brand-900 hover:bg-yellow-400 active:bg-yellow-600 font-bold text-lg shadow-lg shadow-yellow-500/30"
            >
              Ver Catálogo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};