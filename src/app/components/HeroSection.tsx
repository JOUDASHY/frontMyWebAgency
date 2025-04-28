"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[var(--blue)] overflow-hidden">
      {/* Fond géométrique */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] -top-32 sm:-top-48 md:-top-64 -left-32 sm:-left-48 md:-left-64 bg-[var(--jaune)] rounded-full mix-blend-soft-light opacity-20"></div>
        <div className="absolute w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] -bottom-48 sm:-bottom-72 md:-bottom-96 -right-32 sm:-right-48 md:-right-64 bg-[var(--blue-ciel)] rounded-full mix-blend-soft-light opacity-15"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Partie texte */}
          <div className="relative z-10">
            <motion.div variants={itemVariants}>
              <h1 className="text-[var(--light)] mb-4 sm:mb-6">
                <span className="block text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4 opacity-80">
                  Entreprise Beast • Agence Web Madagascar
                </span>
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--jaune)] to-[var(--blue-ciel)]">
                    Digitalisation
                  </span>{' '}
                  <span className="text-[var(--light)]">Créative</span>
                </span>
              </h1>
            </motion.div>

            <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-[var(--light)] opacity-90 mb-8 sm:mb-10 md:mb-12 max-w-2xl">
              Nous transformons les idées en expériences digitales mémorables. 
              Développement web sur mesure & stratégie digitale impactante.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="btn-jaune px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg font-bold rounded-lg transform hover:scale-105 transition-all"
              >
                Demander un Devis
              </Link>
              <a
                href="#projets"
                className="btn-blue-ciel px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg font-bold rounded-lg transform hover:scale-105 transition-all"
              >
                Voir les Réalisations
              </a>
            </motion.div>
          </div>

          {/* Partie visuelle */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-full lg:h-auto lg:aspect-square mx-auto lg:mx-0 bg-gradient-to-br from-[var(--jaune)] to-[var(--blue-ciel)] rounded-2xl sm:rounded-3xl overflow-hidden transform rotate-3">
              <Image
                src="/logo.png"
                alt="Projet d'agence web"
                fill
                className="object-cover mix-blend-luminosity opacity-90"
              />
            </div>

            {/* Éléments décoratifs */}
            <div className="absolute -top-4 sm:-top-6 md:-top-8 -right-4 sm:-right-6 md:-right-8 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-[var(--blue-ciel)] rounded-xl sm:rounded-2xl rotate-12 opacity-20"></div>
            <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -left-4 sm:-left-6 md:-left-8 w-24 sm:w-32 md:w-48 h-24 sm:h-32 md:h-48 bg-[var(--jaune)] rounded-xl sm:rounded-2xl md:rounded-3xl -rotate-12 opacity-20"></div>
          </div>
        </motion.div>

        {/* Statistiques flottantes */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-24"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-[var(--blue)] border-2 border-[var(--light)]/10 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl backdrop-blur-lg">
              <div className="text-[var(--jaune)] text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-[var(--light)] opacity-80 text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Élément scroll */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-6 h-10 sm:w-8 sm:h-14 rounded-2xl sm:rounded-3xl border-2 border-[var(--light)]/30 flex justify-center p-1.5 sm:p-2">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[var(--light)] rounded-full animate-bounce"></div>
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