import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HaircutItem {
  image: string;
  title: string;
  description: string;
}

const Haircuts: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  const haircuts: HaircutItem[] = [
    {
      image: "https://images.pexels.com/photos/2076930/pexels-photo-2076930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Corte Clássico",
      description: "Um estilo intemporal que nunca sai de moda, perfeito para o ambiente corporativo."
    },
    {
      image: "https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Degradê Moderno",
      description: "Transição suave das laterais curtas para o topo mais longo, versátil e estiloso."
    },
    {
      image: "https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Pompadour",
      description: "Volume no topo com laterais mais curtas, um visual retrô com toque contemporâneo."
    },
    {
      image: "https://images.pexels.com/photos/1453005/pexels-photo-1453005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Texturizado Desconectado",
      description: "Contraste entre o topo texturizado e as laterais bem definidas."
    },
    {
      image: "https://images.pexels.com/photos/2531554/pexels-photo-2531554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Crew Cut",
      description: "Corte curto e de baixa manutenção, prático e sempre com aparência impecável."
    }
  ];

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === haircuts.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === 0 ? haircuts.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    
    if (diff > 50) {
      next();
    } else if (diff < -50) {
      prev();
    }
    
    touchStartX.current = null;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Estilos de Corte</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Inspire-se com alguns dos estilos mais populares da nossa barbearia.
            Todos os cortes são personalizados para se adequar ao seu tipo de rosto e estilo pessoal.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-lg" 
             ref={slideRef}
             onTouchStart={handleTouchStart}
             onTouchEnd={handleTouchEnd}>
          {/* Carousel Navigation */}
          <button 
            className="carousel-navigation left-4 z-10" 
            onClick={prev}
            aria-label="Anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            className="carousel-navigation right-4 z-10" 
            onClick={next}
            aria-label="Próximo"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Slides */}
          <div className="relative h-96 md:h-[500px]">
            {haircuts.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-heading font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="absolute bottom-4 left-0 right-0">
            <div className="flex justify-center space-x-2">
              {haircuts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setCurrent(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Haircuts;