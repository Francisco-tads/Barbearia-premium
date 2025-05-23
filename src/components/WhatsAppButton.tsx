import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5511991298838?text=Olá!%20Gostaria%20de%20agendar%20um%20horário."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contate-nos pelo WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};