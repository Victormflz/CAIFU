import React from 'react';
import { ShoppingBag, Instagram, Facebook, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 border-t border-gray-800 pt-12 sm:pt-16 pb-6 sm:pb-8 safe-bottom">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Footer Content Grid - Mobile-first */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-10 sm:mb-12">
          
          {/* Brand Column - Full width on mobile */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag className="w-6 h-6 text-brand-500" aria-hidden="true" />
              <span className="text-xl font-black text-white">CAIFU.</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base max-w-xs mb-6 leading-relaxed">
              Importadora líder en venta mayorista. Conectamos tu negocio con las mejores oportunidades del mercado asiático.
            </p>
            
            {/* Social Links - Touch-optimized */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors p-2 -ml-2 rounded-lg hover:bg-brand-800"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-brand-800"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-brand-800"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-base sm:text-lg">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <a href="#" className="text-gray-400 hover:text-brand-500 transition-colors inline-block py-1">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#catalogo" className="text-gray-400 hover:text-brand-500 transition-colors inline-block py-1">
                  Catálogo
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-brand-500 transition-colors inline-block py-1">
                  Ofertas Semanales
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-brand-500 transition-colors inline-block py-1">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-base sm:text-lg">Legales</h4>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <a href="#" className="text-gray-400 hover:text-brand-500 transition-colors inline-block py-1">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-brand-500 transition-colors inline-block py-1">
                  Política de Devolución
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-brand-500 transition-colors inline-block py-1">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright - Mobile-optimized */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
            &copy; {new Date().getFullYear()} Importadora Caifu. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};