import React from 'react';
import { Scissors, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-r from-gray-900 to-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex flex-col">
            <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-secondary-500 bg-opacity-20 text-secondary-300 text-sm">
              <Scissors className="h-4 w-4 mr-2" />
              <span>Estilo e Precisão</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4">
              Eleve seu <span className="text-secondary-400">estilo</span> com <br />
              cortes precisos
            </h1>
            
            <p className="text-gray-300 text-lg mb-8">
              Para o homem moderno que busca excelência em cada detalhe. 
              Cortes clássicos e contemporâneos com atendimento premium.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                <Calendar className="h-5 w-5 mr-2" />
                Agendar Horário
              </a>
              <a href="#services" className="btn-secondary">
                Explorar Serviços
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative overflow-hidden rounded-lg h-[400px] md:h-[500px] shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Barbeiro profissional cortando cabelo" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 border border-white border-opacity-20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Scissors className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-bold">Primeira visita?</h3>
                      <p className="text-gray-200 text-sm">Ganhe 15% de desconto em qualquer serviço</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-16 bg-gradient-to-b from-primary-900 to-gray-50"></div>
    </section>
  );
};

export default Hero;