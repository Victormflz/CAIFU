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

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 cursor-pointer" aria-label="Ir al inicio">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-package w-8 h-8 text-brand-accent"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" /><path d="M12 12l8 -4.5" /><path d="M12 12l0 9" /><path d="M12 12l-8 -4.5" /><path d="M16 5.25l-8 4.5" /></svg>
          <span className="text-2xl font-black tracking-tighter text-white">
            CAIFU<span className="text-brand-500">.</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#propuesta" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Nosotros</a>
          <a href="#servicios" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Servicios</a>
          <a href="#testimonios" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Testimonios</a>
          <a 
            href="#catalogo" 
            className="bg-yellow-500 text-blue-900 px-6 py-2 rounded-full font-medium text-base hover:bg-yellow-600 transition-all justify-center "
          >
            Ver Catálogo
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-800 border-t border-gray-700 p-6 flex flex-col gap-4 shadow-2xl">
          <a href="#propuesta" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white">Nosotros</a>
          <a href="#servicios" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white">Servicios</a>
          <a href="#testimonios" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white">Testimonios</a>
          <a href="#catalogo" onClick={() => setIsMobileMenuOpen(false)} className="bg-brand-accent text-brand-900 px-4 py-3 rounded-lg font-bold text-center">
            Ver Catálogo
          </a>
        </div>
      )}
    </nav>
  );
};