import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const testimonials: TestimonialProps[] = [
    {
      quote: "A Homem Moderno tem um ambiente incrível e profissionais de primeira linha. Meu corte de cabelo e barba nunca ficaram tão bons, recomendo a todos!",
      author: "Carlos Silva",
      role: "Designer",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "Os barbeiros são verdadeiros artistas. Tenho ido à Homem Moderno há mais de um ano e nunca me decepcionei. O ambiente é sofisticado e o atendimento é impecável.",
      author: "Ricardo Almeida",
      role: "Empresário",
      image: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "A barbearia tem um ambiente acolhedor e os produtos são de excelente qualidade. Sempre saio de lá me sentindo renovado e com visual impecável.",
      author: "Francisco Vieira",
      role: "Analista de Redes",
      image: "https://raw.githubusercontent.com/Francisco-tads/Barbearia-premium/refs/heads/master/src/img/mega2.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-white bg-opacity-10 px-4 py-1 rounded-full text-sm text-secondary-300 mb-3">
            Clientes Satisfeitos
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">O que nossos clientes dizem</h2>
          <div className="w-24 h-1 bg-secondary-500 mx-auto"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative min-h-[300px] bg-white bg-opacity-5 rounded-lg p-8 md:p-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 p-8 md:p-12 flex flex-col transition-opacity duration-500 ease-in-out ${
                  index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <div className="mb-6">
                  <MessageSquare className="h-10 w-10 text-secondary-400" />
                </div>
                <p className="text-lg md:text-xl italic mb-8">"{testimonial.quote}"</p>
                <div className="mt-auto flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute -bottom-6 left-0 right-0 flex justify-center space-x-2">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-primary-800 hover:bg-primary-700 flex items-center justify-center transition-colors duration-300"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-primary-800 hover:bg-primary-700 flex items-center justify-center transition-colors duration-300"
              aria-label="Próximo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;