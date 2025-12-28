
import React from 'react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Audit & Diagnostic IA',
    description: 'Analyse complète de vos processus actuels et identification des leviers d\'automatisation les plus rentables.',
    icon: 'fa-magnifying-glass-chart'
  },
  {
    id: '2',
    title: 'Automatisation de Saisie',
    description: 'Mise en place d\'outils d\'OCR intelligent capables de traiter tous types de factures et justificatifs sans erreur.',
    icon: 'fa-bolt'
  },
  {
    id: '3',
    title: 'Analyse Prédictive',
    description: 'Offrez à vos clients des tableaux de bord prédictifs (cashflow, risques) grâce à des modèles de machine learning.',
    icon: 'fa-chart-line'
  },
  {
    id: '4',
    title: 'Formation & Accompagnement',
    description: 'Formation de vos collaborateurs aux nouveaux outils et conduite du changement pour une transition fluide.',
    icon: 'fa-user-graduate'
  },
  {
    id: '5',
    title: 'Audit Assisté par IA',
    description: 'Détection automatique d\'anomalies comptables et de comportements atypiques pour sécuriser vos audits.',
    icon: 'fa-shield-check'
  },
  {
    id: '6',
    title: 'Relations Clients 2.0',
    description: 'Déploiement d\'agents IA personnalisés pour répondre aux questions courantes de vos clients 24h/24.',
    icon: 'fa-comments'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 italic">Nos Services Experts</h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-600 text-lg">
            Nous transformons votre expertise métier en un avantage technologique décisif grâce à une intégration maîtrisée de l'intelligence artificielle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="p-8 bg-slate-50 rounded-3xl border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-blue-600 transition-colors">
                <i className={`fas ${service.icon} text-blue-600 text-2xl group-hover:text-white transition-colors`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
