
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <i className="fas fa-brain text-white text-xl"></i>
          </div>
          <span className="text-xl font-bold tracking-tight">Alex IA <span className="text-blue-600">Consulting</span></span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#demo" className="hover:text-blue-600 transition-colors">Démo IA</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">À propos</a>
          <a href="mailto:alex@alexiaconsulting.fr" className="bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
            Contactez-nous
          </a>
        </nav>

        <button className="md:hidden text-2xl">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
