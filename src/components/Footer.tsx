import React from 'react';
import { Scissors, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          <div>
            <div className="flex items-center mb-6">
              <Scissors className="h-8 w-8 text-secondary-400" strokeWidth={2} />
              <div className="ml-2">
                <h3 className="font-heading text-xl font-bold">Homem Moderno</h3>
                <p className="text-xs text-gray-400">Barbearia Premium</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Oferecemos serviços de alta qualidade para o homem moderno que valoriza estilo e precisão.
            </p>
            <div className="flex space-x-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">Serviços</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors duration-200">Galeria</a></li>
              <li><a href="#hours" className="text-gray-400 hover:text-white transition-colors duration-200">Horários</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors duration-200">Produtos</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">Corte Clássico</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">Corte Degradê</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">Barba Completa</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">Barba Express</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">Corte + Barba</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">Pacote Premium</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-secondary-400 mr-3 mt-0.5" />
                  <span className="text-gray-400">
                    Av. Paulista, 1000 - Bela Vista<br />
                    São Paulo, SP - 01310-100
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-secondary-400 mr-3" />
                  <span className="text-gray-400">(11) 3456-7890</span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-secondary-400 mr-3" />
                  <span className="text-gray-400">contato@homemmoderno.com.br</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Francisco-tads. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Política de Privacidade</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Termos de Serviço</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;