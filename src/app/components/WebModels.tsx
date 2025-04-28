"use client";

import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon, DevicePhoneMobileIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";

const WebModels = () => {
  const websiteModels = [
    {
      id: 1,
      title: "Site Corporate Élégant",
      type: "Entreprise",
      features: ["Landing page animée", "Blog intégré", "Formulaire contact avancé", "SEO optimisé"],
      image: "/models/corporate.jpg",
      demo: "#",
      price: "À partir de 2 900€",
      devices: ["desktop", "mobile"]
    },
    {
      id: 2,
      title: "E-commerce Premium",
      type: "Boutique en ligne",
      features: ["Catalogue produit", "Paiement sécurisé", "Gestion stocks", "Panier persistant"],
      image: "/models/ecommerce.jpg",
      demo: "#",
      price: "À partir de 6 500€",
      devices: ["desktop", "tablet", "mobile"]
    },
    {
      id: 3,
      title: "Portfolio Créatif",
      type: "Présentation",
      features: ["Gallerie interactive", "CV visuel", "Effets parallaxe", "Animations sur mesure"],
      image: "/models/portfolio.jpg",
      demo: "#",
      price: "À partir de 1 800€",
      devices: ["desktop", "mobile"]
    }
  ];

  return (
    <section className="relative bg-[var(--light)] py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-15">
        <div className="absolute top-20% left-10% w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-[var(--jaune)]/10 rounded-full blur-[50px] sm:blur-[80px] md:blur-[100px]" />
        <div className="absolute bottom-0 right-20% w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-[var(--blue-ciel)]/10 rounded-full blur-[40px] sm:blur-[60px] md:blur-[80px]" />
      </div>

      <div className="max-w-8xl mx-auto relative z-10">
        {/* En-tête */}
        <motion.div 
          className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--blue)] to-[var(--blue-ciel)]">
              Nos Modèles
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--blue)] max-w-2xl mx-auto">
            Découvrez nos créations standards personnalisables selon vos besoins
          </p>
        </motion.div>

        {/* Grille des modèles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {websiteModels.map((model, index) => (
            <motion.div 
              key={model.id}
              className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl sm:shadow-2xl hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-500"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Badge */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-[var(--jaune)] text-[var(--blue)] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold z-10">
                {model.type}
              </div>

              {/* Mockup d'appareils */}
              <div className="relative h-48 sm:h-56 md:h-64 mb-4 sm:mb-6 overflow-hidden rounded-lg sm:rounded-xl">
                <img 
                  src={model.image} 
                  alt={model.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue)/40] to-transparent" />
                
                {/* Icônes d'appareils */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex gap-1.5 sm:gap-2">
                  {model.devices.map((device, i) => (
                    <div key={i} className="p-1 sm:p-1.5 bg-white/80 rounded-full backdrop-blur-sm">
                      {device === 'mobile' ? (
                        <DevicePhoneMobileIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--blue)]" />
                      ) : (
                        <ComputerDesktopIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--blue)]" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contenu */}
              <div className="px-2 sm:px-4 pb-4 sm:pb-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--blue)] mb-2 sm:mb-3">{model.title}</h3>
                
                {/* Liste des caractéristiques */}
                <ul className="grid gap-1 sm:gap-2 mb-4 sm:mb-6">
                  {model.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-xs sm:text-sm md:text-base text-[var(--blue)]">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[var(--jaune)] rounded-full mr-1.5 sm:mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Prix et CTA */}
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base md:text-lg font-bold text-[var(--blue-ciel)]">{model.price}</span>
                  <a 
                    href={model.demo} 
                    className="flex items-center bg-[var(--blue)] text-[var(--light)] px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-[var(--jaune)] transition-colors"
                  >
                    Voir le modèle
                    <ArrowTopRightOnSquareIcon className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bannière supplémentaire */}
        <motion.div 
          className="mt-10 sm:mt-12 md:mt-16 bg-gradient-to-r from-[var(--blue)] to-[var(--blue-ciel)] rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center text-[var(--light)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">Un projet sur mesure ?</h3>
          <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6">Discutons de votre vision unique</p>
          <button className="bg-[var(--jaune)] text-[var(--blue)] px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-bold hover:bg-white transition-colors">
            Demander un devis
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WebModels;