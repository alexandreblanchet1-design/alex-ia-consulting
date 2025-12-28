
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AIDemo from './components/AIDemo';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        
        {/* Trust Bar */}
        <div className="bg-slate-100 py-10 border-y border-slate-200">
           <div className="container mx-auto px-6">
              <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-widest mb-6">Spécialisé pour les outils de référence</p>
              <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
                 <div className="text-2xl font-bold">Cegid</div>
                 <div className="text-2xl font-bold">Sage</div>
                 <div className="text-2xl font-bold">MyUnisoft</div>
                 <div className="text-2xl font-bold">Dext</div>
                 <div className="text-2xl font-bold">Pennylane</div>
              </div>
           </div>
        </div>

        <Services />
        
        {/* Quote Section */}
        <section className="py-20 bg-blue-600 text-white text-center">
          <div className="container mx-auto px-6 max-w-4xl">
             <i className="fas fa-quote-left text-4xl text-blue-300 mb-8"></i>
             <h2 className="text-3xl md:text-4xl font-medium leading-relaxed italic">
               "L'intelligence artificielle n'est plus une option pour les experts-comptables, c'est le socle de leur rentabilité future."
             </h2>
             <p className="mt-8 font-bold text-xl">— Alex, Fondateur d'Alex IA Consulting</p>
          </div>
        </section>

        <AIDemo />

        {/* Contact CTA */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-blue-600 opacity-5 pointer-events-none"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 relative z-10">Prêt à moderniser votre cabinet ?</h2>
              <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
                Discutons de vos enjeux métier lors d'un audit de 30 minutes offert. Aucune connaissance technique requise.
              </p>
              <div className="relative z-10">
                <a 
                  href="mailto:alex@alexiaconsulting.fr" 
                  className="inline-flex items-center space-x-3 bg-blue-600 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-xl"
                >
                  <span>M'écrire : alex@alexiaconsulting.fr</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
