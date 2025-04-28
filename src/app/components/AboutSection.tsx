"use client";

import { motion } from "framer-motion";
import { CodeBracketIcon, RocketLaunchIcon, CommandLineIcon, GlobeAltIcon, ArrowPathIcon } from "@heroicons/react/24/solid";

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-[var(--light)] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 [mask-image:linear-gradient(to_bottom,transparent,white)]">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDAwYjMxIi8+PC9zdmc+')]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="inline-flex items-center bg-[var(--blue)] text-light px-4 sm:px-6 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <RocketLaunchIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
            <span className="text-light text-xs sm:text-sm">Depuis 2020</span>
          </motion.div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--blue)] to-[var(--blue-ciel)]">
              Créateurs
            </span>
            <span className="block sm:inline mx-1 sm:mx-2">d'</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--jaune)] to-[var(--blue-ciel)]">
              Expériences Digitales
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Nous transformons les idées en solutions digitales performantes, combinant expertise technique et créativité pour propulser votre business.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Tech Card */}
          <motion.div 
            className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl sm:shadow-2xl hover:shadow-xl transition-all"
            variants={cardVariants}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[var(--blue)] rounded-lg sm:rounded-xl mb-4 sm:mb-6 flex items-center justify-center">
              <CommandLineIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">Développement Sur-Mesure</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6">
              Solutions web et mobile évolutives adaptées à vos besoins spécifiques
            </p>
            <ul className="space-y-1 sm:space-y-2 text-[var(--blue)] text-xs sm:text-sm">
              <li className="flex items-center">
                <ArrowPathIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Technologies Modernes
              </li>
              <li className="flex items-center">
                <ArrowPathIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Architecture Cloud
              </li>
              <li className="flex items-center">
                <ArrowPathIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                DevOps Avancé
              </li>
            </ul>
          </motion.div>

          {/* Design Card */}
          <motion.div 
            className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl sm:shadow-2xl hover:shadow-xl transition-all"
            variants={cardVariants}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[var(--jaune)] rounded-lg sm:rounded-xl mb-4 sm:mb-6 flex items-center justify-center">
              <CodeBracketIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">Design Innovant</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6">
              Interfaces utilisateur captivantes et expériences digitales mémorables
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-4">
              <span className="px-3 sm:px-4 py-0.5 sm:py-1 bg-[var(--light)] text-[var(--blue)] rounded-full text-xs sm:text-sm">UI/UX</span>
              <span className="px-3 sm:px-4 py-0.5 sm:py-1 bg-[var(--light)] text-[var(--blue)] rounded-full text-xs sm:text-sm">Motion Design</span>
            </div>
          </motion.div>

          {/* Strategy Card */}
          <motion.div 
            className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl sm:shadow-2xl hover:shadow-xl transition-all"
            variants={cardVariants}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[var(--blue-ciel)] rounded-lg sm:rounded-xl mb-4 sm:mb-6 flex items-center justify-center">
              <GlobeAltIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">Stratégie Digitale</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6">
              Accélérez votre croissance grâce à une stratégie numérique intégrée
            </p>
            <div className="h-24 sm:h-28 md:h-32 bg-gradient-to-r from-[var(--blue)] to-[var(--blue-ciel)] rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl md:text-2xl">
              +150% ROI
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="mt-12 sm:mt-16 md:mt-20 lg:mt-28 bg-[var(--blue)] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">Notre Impact en Chiffres</h2>
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              <div className="py-4 sm:py-6">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">10+</div>
                <div className="text-[var(--light)] text-xs sm:text-sm md:text-base">Projets Livrés</div>
              </div>
              <div className="py-4 sm:py-6 border-x border-[var(--light)]">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">20+</div>
                <div className="text-[var(--light)] text-xs sm:text-sm md:text-base">Utilisateurs</div>
              </div>
              <div className="py-4 sm:py-6">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">85%</div>
                <div className="text-[var(--light)] text-xs sm:text-sm md:text-base">Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <motion.button
            className="bg-[var(--jaune)] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-bold hover:bg-[var(--blue)] hover:text-white transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discutons de Votre Projet
          </motion.button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-0 left-20 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-[var(--blue-ciel)] opacity-20 rounded-full blur-xl sm:blur-2xl md:blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-20 w-24 sm:w-32 md:w-48 h-24 sm:h-32 md:h-48 bg-[var(--jaune)] opacity-20 rounded-full blur-xl sm:blur-2xl md:blur-3xl -z-10"></div>
    </section>
  );
};

export default AboutSection;