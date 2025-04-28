"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[var(--blue)] overflow-hidden">
      {/* Fond géométrique */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-[800px] h-[800px] -top-64 -left-64 bg-[var(--jaune)] rounded-full mix-blend-soft-light opacity-20"></div>
        <div className="absolute w-[600px] h-[600px] -bottom-96 -right-64 bg-[var(--blue-ciel)] rounded-full mix-blend-soft-light opacity-15"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Partie texte */}
          <div className="relative z-10">
            <motion.div variants={itemVariants}>
              <h1 className="text-[var(--light)] mb-6">
                <span className="block text-lg sm:text-xl md:text-2xl font-semibold mb-4 opacity-80">
                  Entreprise Beast • Agence Web Madagascar
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--jaune)] to-[var(--blue-ciel)]">
                    Digitalisation
                  </span>{' '}
                  Créative
                </span>
              </h1>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-[var(--light)] opacity-90 mb-12 max-w-2xl">
              Nous transformons les idées en expériences digitales mémorables. 
              Développement web sur mesure & stratégie digitale impactante.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="btn-jaune px-8 py-4 text-lg font-bold rounded-lg transform hover:scale-105 transition-all"
              >
                Demander un Devis
              </a>
              <a
                href="#projets"
                className="btn-blue-ciel px-8 py-4 text-lg font-bold rounded-lg transform hover:scale-105 transition-all"
              >
                Voir les Réalisations
              </a>
            </motion.div>
          </div>

          {/* Partie visuelle */}
          <div className="relative">
            <div className="relative aspect-square bg-gradient-to-br from-[var(--jaune)] to-[var(--blue-ciel)] rounded-3xl overflow-hidden transform rotate-3">
              <Image
                src="/logo.png"
                alt="Projet d'agence web"
                fill
                className="object-cover mix-blend-luminosity opacity-90"
              />
            </div>

            {/* Éléments décoratifs */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[var(--blue-ciel)] rounded-2xl rotate-12 opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[var(--jaune)] rounded-3xl -rotate-12 opacity-20"></div>
          </div>
        </motion.div>

        {/* Statistiques flottantes */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-[var(--blue)] border-2 border-[var(--light)]/10 p-6 rounded-xl backdrop-blur-lg">
              <div className="text-[var(--jaune)] text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-[var(--light)] opacity-80">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Élément scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-8 h-14 rounded-3xl border-2 border-[var(--light)]/30 flex justify-center p-2">
          <div className="w-2 h-2 bg-[var(--light)] rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}

const stats = [
  { value: '10+', label: 'Projets Innovants' },
  { value: '98%', label: 'Satisfaction Client' },
  { value: '5', label: 'Technologies Maîtrisées' },
  { value: '24/7', label: 'Support Local' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: 'spring', 
      stiffness: 100 
    }
  }
};