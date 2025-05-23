import React, { useState, useEffect } from 'react';
import { Scissors, Menu, X, Instagram, Facebook, MapPin } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <Scissors className="h-8 w-8 text-primary-600" strokeWidth={2} />
            <div className="ml-2">
              <h1 className="font-heading text-xl font-bold text-gray-900">Homem Moderno</h1>
              <p className="text-xs text-gray-600">Barbearia Premium</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link">Home</a>
            <a href="#services" className="nav-link">Serviços</a>
            <a href="#gallery" className="nav-link">Galeria</a>
            <a href="#hours" className="nav-link">Horários</a>
            <a href="#products" className="nav-link">Produtos</a>
            <a href="#contact" className="nav-link">Contato</a>
          </nav>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
               className="social-icon">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
               className="social-icon">
              <Facebook size={20} />
            </a>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" 
               className="social-icon">
              <MapPin size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center" 
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`
          md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          pt-20 px-6 pb-6 overflow-y-auto
        `}
      >
        <nav className="flex flex-col space-y-6">
          <a href="#home" className="nav-link text-lg" onClick={closeMenu}>Home</a>
          <a href="#services" className="nav-link text-lg" onClick={closeMenu}>Serviços</a>
          <a href="#gallery" className="nav-link text-lg" onClick={closeMenu}>Galeria</a>
          <a href="#hours" className="nav-link text-lg" onClick={closeMenu}>Horários</a>
          <a href="#products" className="nav-link text-lg" onClick={closeMenu}>Produtos</a>
          <a href="#contact" className="nav-link text-lg" onClick={closeMenu}>Contato</a>
          
          {/* Social Links - Mobile */}
          <div className="flex space-x-4 pt-4 border-t border-gray-200">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
               className="social-icon">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
               className="social-icon">
              <Facebook size={20} />
            </a>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" 
               className="social-icon">
              <MapPin size={20} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;