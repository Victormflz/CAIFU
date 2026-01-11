import React from 'react';
import { ShoppingBag, Instagram, Facebook, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 border-t border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag className="w-6 h-6 text-brand-500" />
              <span className="text-xl font-black text-white">CAIFU.</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs mb-6">
              Importadora líder en venta mayorista. Conectamos tu negocio con las mejores oportunidades del mercado asiático.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Email"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-500 transition-colors">Inicio</a></li>
              <li><a href="#catalogo" className="hover:text-brand-500 transition-colors">Catálogo</a></li>
              <li><a href="#servicios" className="hover:text-brand-500 transition-colors">Ofertas Semanales</a></li>
              <li><a href="#contacto" className="hover:text-brand-500 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Legales</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-500 transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Política de Devolución</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Política de Privacidad</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Importadora Caifu. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};