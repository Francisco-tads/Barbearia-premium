import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="section-title">Entre em Contato</h2>
          <p className="text-gray-600 mb-8">
            Estamos sempre à disposição para esclarecer suas dúvidas, 
            receber feedbacks ou agendar seu horário.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4 text-primary-600 flex-shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Localização</h3>
                <p className="text-gray-600">
                  Av. Paulista, 1000 - Bela Vista<br />
                  São Paulo, SP - 01310-100
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4 text-primary-600 flex-shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Telefone</h3>
                <p className="text-gray-600">
                  (11) 3456-7890<br />
                  (11) 99129-8838 (WhatsApp)
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4 text-primary-600 flex-shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">E-mail</h3>
                <p className="text-gray-600">
                  contato@homemmoderno.com.br<br />
                  agendamento@homemmoderno.com.br
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4 text-primary-600 flex-shrink-0">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Horário de Funcionamento</h3>
                <p className="text-gray-600">
                  Segunda a Sexta: 09:00 - 20:00<br />
                  Sábado: 09:00 - 18:00<br />
                  Domingo: Fechado
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/francisco.s.vieira7/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg shadow-custom">
            <h3 className="font-heading font-bold text-xl mb-6">Envie-nos uma mensagem</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Assunto
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="agendamento">Agendamento</option>
                  <option value="informacoes">Informações</option>
                  <option value="produtos">Produtos</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Digite sua mensagem..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;