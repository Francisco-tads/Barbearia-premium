import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, AlertCircle, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [showValidationError, setShowValidationError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // Esconder mensagem de erro geral
    if (showValidationError) {
      setShowValidationError(false);
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Assunto é obrigatório';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar formulário
    if (!validateForm()) {
      setShowValidationError(true);
      // Scroll para o primeiro erro
      const firstErrorField = document.querySelector('.border-red-500');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    setIsSubmitting(true);
    
    // Simular envio
    setTimeout(() => {
      // Enviar via WhatsApp
      const message = `📞 *NOVA MENSAGEM - Homem Moderno*

👤 *Dados do Cliente:*
• Nome: ${formData.name}
• Telefone: ${formData.phone}
• Email: ${formData.email}

📋 *Assunto:* ${formData.subject}

💬 *Mensagem:*
${formData.message}

---
Mensagem enviada através do site da barbearia.`;

      const whatsappUrl = `https://wa.me/5511991298838?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset após 3 segundos
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          subject: '',
          message: ''
        });
        setErrors({});
        setShowValidationError(false);
      }, 3000);
    }, 1000);
  };

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
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Mensagem Enviada!</h3>
                <p className="text-gray-600 mb-4">
                  Sua mensagem foi enviada via WhatsApp. Em breve entraremos em contato.
                </p>
                <div className="animate-pulse text-sm text-gray-500">
                  Redirecionando...
                </div>
              </div>
            ) : (
              <>
                <h3 className="font-heading font-bold text-xl mb-6">Envie-nos uma mensagem</h3>
                
                {/* Validation Error Alert */}
                {showValidationError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="text-red-800 font-medium">Dados obrigatórios não preenchidos</h4>
                      <p className="text-red-600 text-sm">Por favor, preencha todos os campos obrigatórios antes de enviar.</p>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nome *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                          errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="Seu nome"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                          errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="(00) 00000-0000"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="seu@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Assunto *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        errors.subject ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="agendamento">Agendamento</option>
                      <option value="informacoes">Informações</option>
                      <option value="produtos">Produtos</option>
                      <option value="outros">Outros</option>
                    </select>
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="Digite sua mensagem..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-primary ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;