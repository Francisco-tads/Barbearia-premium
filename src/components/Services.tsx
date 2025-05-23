import React from 'react';
import { Scissors, Bean as Beard, SprayCan as Spray, Coffee } from 'lucide-react';

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  price: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title, price, description }) => {
  return (
    <div className="price-card group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
            {icon}
          </div>
          <h3 className="text-lg font-heading font-bold">{title}</h3>
        </div>
        <span className="text-lg font-bold text-secondary-600">{price}</span>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Scissors className="h-6 w-6" />,
      title: "Corte Clássico",
      price: "R$ 45",
      description: "Corte tradicional com acabamento impecável, inclui lavagem e finalização."
    },
    {
      icon: <Scissors className="h-6 w-6" />,
      title: "Corte Degradê",
      price: "R$ 55",
      description: "Técnica de transição gradual nas laterais com acabamento personalizado."
    },
    {
      icon: <Beard className="h-6 w-6" />,
      title: "Barba Completa",
      price: "R$ 35",
      description: "Modelagem, alinhamento e hidratação da barba com toalha quente."
    },
    {
      icon: <Beard className="h-6 w-6" />,
      title: "Barba Express",
      price: "R$ 25",
      description: "Aparar e alinhar a barba rapidamente para manter o visual sempre em dia."
    },
    {
      icon: <Spray className="h-6 w-6" />,
      title: "Corte + Barba",
      price: "R$ 70",
      description: "Combinação do corte clássico com serviço completo de barba."
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Pacote Premium",
      price: "R$ 90",
      description: "Corte, barba, sobrancelha e bebida incluída para uma experiência completa."
    },
  ];

  return (
    <section id="services" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title">Nossos Serviços</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Oferecemos uma variedade de serviços para atender às necessidades do homem moderno, 
          com qualidade e atenção aos detalhes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceItem 
            key={index}
            icon={service.icon}
            title={service.title}
            price={service.price}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;