import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 border-t border-gray-800 pt-12 sm:pt-16 pb-6 sm:pb-8 safe-bottom">
      <div className="container mx-auto px-5 sm:px-6">
        
        {/* Footer Content Grid - Mobile-first */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
          
          {/* Brand Column - Full width on mobile */}
          <div>
            <div className="mb-4">
              <span className="text-xl font-black text-white">CAIFU.</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base max-w-xs leading-relaxed">
              Importadora líder en venta mayorista. Conectamos tu negocio con las mejores oportunidades del mercado asiático.
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-base sm:text-lg">Legales</h4>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <Link to="/terminos-de-uso" className="text-gray-400 hover:text-brand-500 transition-colors inline-block py-1 min-h-[44px] flex items-center">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link to="/politica-de-privacidad" className="text-gray-400 hover:text-brand-500 transition-colors inline-block py-1 min-h-[44px] flex items-center">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/politica-de-cookies" className="text-gray-400 hover:text-brand-500 transition-colors inline-block py-1 min-h-[44px] flex items-center">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright - Mobile-optimized */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
          <p className="text-sm sm:text-sm text-gray-500 leading-relaxed">
            &copy; {new Date().getFullYear()} Importadora Caifu. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};