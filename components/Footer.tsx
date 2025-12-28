
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <i className="fas fa-brain text-white text-sm"></i>
              </div>
              <span className="text-xl font-bold tracking-tight">Alex IA <span className="text-blue-600">Consulting</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Expertise et conseil en Intelligence Artificielle pour les métiers du chiffre. Votre futur commence ici.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Lien rapides</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Nos Services</a></li>
              <li><a href="#demo" className="hover:text-blue-600 transition-colors">Démo Interactive</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Études de Cas</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Blog IA</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Expertise</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>Automatisation Comptable</li>
              <li>Intelligence Décisionnelle</li>
              <li>Audit Augmenté</li>
              <li>Formation IA</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-center space-x-3">
                <i className="fas fa-envelope text-blue-600"></i>
                <a href="mailto:alex@alexiaconsulting.fr" className="hover:text-blue-600 transition-colors">alex@alexiaconsulting.fr</a>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-globe text-blue-600"></i>
                <span>alexiaconsulting.fr</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-location-dot text-blue-600"></i>
                <span>Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:row justify-between items-center text-xs text-slate-400">
          <p>© 2024 Alex IA Consulting. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-600">Mentions Légales</a>
            <a href="#" className="hover:text-slate-600">Confidentialité</a>
            <a href="#" className="hover:text-slate-600">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
