import React, { useState } from 'react';
import { X, ShoppingBag, CreditCard, Banknote, Copy, Check } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    price: string;
    image: string;
  } | null;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, product }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'pix'
  });
  const [copied, setCopied] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const pixNumber = '11991298838';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const copyPixNumber = () => {
    navigator.clipboard.writeText(pixNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular envio do pedido
    setOrderSubmitted(true);
    
    // Enviar via WhatsApp
    const message = `🛒 *NOVO PEDIDO - Homem Moderno*

📦 *Produto:* ${product?.name}
💰 *Valor:* ${product?.price}

👤 *Dados do Cliente:*
• Nome: ${formData.name}
• Email: ${formData.email}
• Telefone: ${formData.phone}

📍 *Endereço de Entrega:*
• ${formData.address}
• ${formData.city}
• CEP: ${formData.zipCode}

💳 *Forma de Pagamento:* ${formData.paymentMethod === 'pix' ? `PIX - ${pixNumber}` : 'Dinheiro na entrega'}

Aguardo confirmação do pedido!`;

    const whatsappUrl = `https://wa.me/5511991298838?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset após 3 segundos
    setTimeout(() => {
      setOrderSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: '',
        paymentMethod: 'pix'
      });
      onClose();
    }, 3000);
  };

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center">
            <ShoppingBag className="h-6 w-6 text-primary-600 mr-2" />
            <h2 className="text-xl font-heading font-bold">Finalizar Compra</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {orderSubmitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Pedido Enviado!</h3>
            <p className="text-gray-600 mb-4">
              Seu pedido foi enviado via WhatsApp. Em breve entraremos em contato para confirmar.
            </p>
            <div className="animate-pulse text-sm text-gray-500">
              Redirecionando...
            </div>
          </div>
        ) : (
          <>
            {/* Product Summary */}
            <div className="p-6 border-b bg-gray-50">
              <div className="flex items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-lg mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <p className="text-secondary-600 font-bold text-xl">{product.price}</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Dados Pessoais */}
              <div>
                <h3 className="font-bold text-lg mb-4">Dados Pessoais</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>
              </div>

              {/* Endereço */}
              <div>
                <h3 className="font-bold text-lg mb-4">Endereço de Entrega</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Endereço Completo *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Rua, número, complemento, bairro"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Cidade *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="São Paulo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CEP *
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="00000-000"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Forma de Pagamento */}
              <div>
                <h3 className="font-bold text-lg mb-4">Forma de Pagamento</h3>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="pix"
                      checked={formData.paymentMethod === 'pix'}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <CreditCard className="h-5 w-5 text-primary-600 mr-3" />
                    <div className="flex-1">
                      <div className="font-medium">PIX</div>
                      <div className="text-sm text-gray-600">Pagamento instantâneo</div>
                    </div>
                  </label>
                  
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="dinheiro"
                      checked={formData.paymentMethod === 'dinheiro'}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <Banknote className="h-5 w-5 text-primary-600 mr-3" />
                    <div className="flex-1">
                      <div className="font-medium">Dinheiro</div>
                      <div className="text-sm text-gray-600">Pagamento na entrega</div>
                    </div>
                  </label>
                </div>

                {formData.paymentMethod === 'pix' && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium mb-2">Dados para PIX:</h4>
                    <div className="flex items-center justify-between bg-white p-3 rounded border">
                      <span className="font-mono text-lg">{pixNumber}</span>
                      <button
                        type="button"
                        onClick={copyPixNumber}
                        className="flex items-center px-3 py-1 bg-primary-600 text-white rounded text-sm hover:bg-primary-700 transition-colors"
                      >
                        {copied ? (
                          <>
                            <Check className="h-4 w-4 mr-1" />
                            Copiado!
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4 mr-1" />
                            Copiar
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Após realizar o PIX, envie o comprovante via WhatsApp.
                    </p>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 btn-primary"
                >
                  Finalizar Pedido
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;