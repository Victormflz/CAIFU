import React, { useEffect, useRef } from 'react';
import type { Product } from '../types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current?.children || [], {
        autoAlpha: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Product cards - flip and fade stagger
      const cards = gridRef.current?.children || [];
      gsap.from(cards, {
        autoAlpha: 0,
        rotationY: -90,
        y: 50,
        scale: 0.8,
        stagger: {
          amount: 0.8,
          from: 'start',
          grid: 'auto',
        },
        duration: 0.8,
        ease: 'back.out(1.3)',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });

      // Image hover effect setup
      cards.forEach((card) => {
        const img = card.querySelector('img');
        const button = card.querySelector('button');
        
        if (img) {
          card.addEventListener('mouseenter', () => {
            gsap.to(img, {
              scale: 1.15,
              rotation: 3,
              duration: 0.4,
              ease: 'power2.out',
            });
            gsap.to(button, {
              y: -2,
              duration: 0.3,
              ease: 'power2.out',
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(img, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: 'power2.out',
            });
            gsap.to(button, {
              y: 0,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="catalogo" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div ref={headerRef} className="mb-10 sm:mb-12">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-2 leading-tight">
            Productos más Vendidos
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Mostrando los {products.length} resultados
          </p>
        </div>

        {/* Products Grid - Mobile-first: 1 column → 2 columns → 4 columns */}
        <div ref={gridRef} className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <article 
              key={product.id} 
              className="product-card bg-white border-2 border-blue-100 rounded-2xl overflow-hidden hover:border-blue-400 hover:shadow-xl transition-all group cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 p-4 sm:p-6 min-h-[180px] sm:min-h-[200px] flex items-center justify-center overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="product-img h-auto w-full max-w-[160px] sm:max-w-none object-contain transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-4 sm:p-5">
                {/* Title - Fixed height for consistent card sizes */}
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-3 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem] leading-tight">
                  {product.title}
                </h3>
                
                {/* Price */}
                <div className="mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-brand-500">
                    {product.price}
                  </span>
                </div>
                
                {/* CTA Button - Touch-optimized */}
                <button 
                  className="w-full btn-base bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg"
                  onClick={() => {
                    window.open('https://wa.me/573147244831?text=Hola!%20Estoy%20interesado%20en%20sus%20productos.', '_blank');
                  }}
                  aria-label={`Consultar precio de ${product.title}`}
                >
                  Pagos a Contraentrega
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

