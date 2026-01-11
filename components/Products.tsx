import React from 'react';
import type { Product } from '../types';

const products: Product[] = [
  {
    id: 1,
    description: "Funda resistente para máxima protección...",
    title: "Funda Space Transparente Duro, alta calidad",
    price: "$ 2.200",
    image: "https://i.postimg.cc/Y03h2xwR/Funda-Space-Transparente-Duro-alta-calidad.jpg"
  },
  {
    id: 2,
    title: "Funda metalizada con carga magnética para iPhone",
    price: "$ 5.900",
    image: "https://i.postimg.cc/br8ZjB43/Funda-metalizada-con-carga-magnetica-para-i-Phone1-600x600.jpg"
  },
  {
    id: 3,
    title: "Funda Transparente en Acrílico con Esquinas Reforzadas",
    price: "$ 2.800",
    image: "https://i.postimg.cc/90VDjnsN/Funda-Transparente-en-Acrilico-con-Esquinas-Reforzadasq-600x600.jpg"
  },
  {
    id: 4,
    title: "Vidrios Templados Anti-Espía Al Por Mayor",
    price: "$ 1.100",
    image: "https://i.postimg.cc/hvgXq5Nw/Vidrios-Templados-600x600.jpg"
  },
  {
    id: 5,
    title: "Vidrios Blindados de Alta Resistencia",
    price: "$ 1.100",
    image: "https://i.postimg.cc/yxBDzb2b/Vidrios-Blindados-de-Alta-Resistencia-d-600x600.jpg"
  },
  {
    id: 6,
    title: "Funda Magnética con Carga Inalámbrica Trasera",
    price: "$ 6.300",
    image: "https://i.postimg.cc/nrZXtPN3/Funda-Magnetica-con-Carga-Inalambrica-Trasera-600x600.jpg"
  },
  {
    id: 7,
    title: "Funda Magnética en TPU + Acrílico Antigolpes",
    price: "$ 4.900",
    image: "https://i.postimg.cc/BbsjGVRN/Funda-Magnetica-en-TPU-Acrilico-Antigolpes-600x600.jpg"
  },
  {
    id: 8,
    title: "Funda MagSafe con carga magnética + caja Premium",
    price: "$ 3.600",
    image: "https://i.postimg.cc/kG92dpLj/Funda-Mag-Safe-con-carga-magnetica-caja-Premium-600x600.jpg"
  }
];

export const Products: React.FC = () => {
  return (
    <section id="catalogo" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Productos más Vendidos
          </h2>
          <p className="text-gray-600">
            Mostrando los {products.length} resultados
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white border-2 border-blue-200 rounded-lg overflow-hidden hover:border-blue-400 transition-all hover:shadow-xl group"
            >
              <div className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 p-6 min-h-[200px] flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="h-auto w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              
              <div className="p-5">
                <h3 className="text-sm font-semibold text-gray-900 mb-3 line-clamp-2 min-h-[2.5rem] leading-tight">
                  {product.title}
                </h3>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-brand-500">
                    {product.price}
                  </span>
                </div>
                
<button 
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-md hover:shadow-lg"
          onClick={() => {
            window.open('https://wa.me/573147244831?text=Hola!%20Estoy%20interesado%20en%20sus%20productos.', '_blank');
          }}
        >
          Pagos a Contraentrega
        </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

