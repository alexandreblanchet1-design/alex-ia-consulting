
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIDemo: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Bonjour, je suis Alex. Comment l'IA peut-elle aider votre cabinet d'expertise comptable aujourd'hui ?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await getGeminiResponse(messages, userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Erreur de connexion. Veuillez réessayer." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="demo" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Testez notre expertise IA</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Posez vos questions à notre consultant virtuel spécialisé. Découvrez comment nous pouvons automatiser vos tâches répétitives et libérer du temps pour le conseil à haute valeur ajoutée.
            </p>
            <ul className="space-y-4 mb-10">
              {["Automatisation OCR", "Détection de fraude", "Conseil prédictif", "Sécurité des données"].map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-blue-500"></i>
                  <span className="text-slate-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700">
              <p className="text-sm italic text-slate-400">
                "L'IA n'est pas là pour remplacer l'expert-comptable, mais pour lui redonner son rôle de conseiller stratégique."
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-3xl shadow-2xl flex flex-col h-[600px] overflow-hidden">
              {/* Chat Header */}
              <div className="p-5 border-b flex items-center justify-between bg-slate-50">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <i className="fas fa-robot text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold leading-none">Consultant Alex IA</h3>
                    <span className="text-xs text-green-600 flex items-center mt-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></span> En ligne
                    </span>
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-white custom-scrollbar">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-4 rounded-2xl ${
                      msg.role === 'user' 
                        ? 'bg-blue-600 text-white rounded-tr-none' 
                        : 'bg-slate-100 text-slate-800 rounded-tl-none'
                    }`}>
                      <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-slate-100 p-4 rounded-2xl rounded-tl-none flex space-x-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Input Area */}
              <form onSubmit={handleSend} className="p-4 border-t bg-slate-50">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Comment automatiser mes saisies ?"
                    className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm"
                  />
                  <button 
                    disabled={isLoading}
                    type="submit" 
                    className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-all disabled:opacity-50"
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDemo;
