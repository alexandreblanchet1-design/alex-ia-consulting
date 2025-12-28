
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
            Expertise IA pour Expert-Comptables
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-8">
            Faites passer votre cabinet à <br/>
            <span className="gradient-text">l'ère de l'Intelligence Artificielle</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Alex IA Consulting accompagne les experts-comptables dans l'intégration de solutions IA de pointe pour automatiser la saisie, enrichir le conseil et sécuriser les audits.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#demo" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 hover:-translate-y-0.5 transition-all">
              Essayer notre IA Experte
            </a>
            <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-xl shadow-sm hover:bg-slate-50 transition-all">
              Découvrir nos services
            </a>
          </div>
        </div>

        <div className="mt-20 relative max-w-5xl mx-auto">
          <div className="bg-white p-4 rounded-3xl shadow-2xl border border-slate-100">
             <img src="https://picsum.photos/seed/accounting/1200/600" alt="Interface IA Comptable" className="rounded-2xl w-full object-cover h-[400px]" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl hidden md:block">
            <div className="text-3xl font-bold mb-1">+40%</div>
            <div className="text-sm opacity-90">de productivité gagnée</div>
          </div>
          <div className="absolute -top-6 -right-6 bg-slate-900 text-white p-6 rounded-2xl shadow-xl hidden md:block">
             <div className="flex items-center space-x-2 mb-2">
                <i className="fas fa-shield-halved text-blue-400"></i>
                <span className="text-sm font-semibold uppercase tracking-wider">Sécurité Max</span>
             </div>
             <div className="text-xs opacity-80">Infrastructure souveraine et RGPD</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
