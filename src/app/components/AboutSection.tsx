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
    <section id="about" className="relative overflow-hidden bg-[var(--light)] py-20 px-4 sm:px-6 lg:px-8">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 [mask-image:linear-gradient(to_bottom,transparent,white)]">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDAwYjMxIi8+PC9zdmc+')]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20 lg:mb-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="inline-flex items-center bg-[var(--blue)] text-light px-6 py-2 rounded-full mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <RocketLaunchIcon className="w-5 h-5 mr-2" />
            <span className="text-light">Depuis 2020</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--blue)] to-[var(--blue-ciel)]">
              Créateurs
            </span>
            <span className="block sm:inline mx-2">d'</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--jaune)] to-[var(--blue-ciel)]">
              Expériences Digitales
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous transformons les idées en solutions digitales performantes, combinant expertise technique et créativité pour propulser votre business.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Tech Card */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-xl transition-all"
            variants={cardVariants}
          >
            <div className="w-14 h-14 bg-[var(--blue)] rounded-xl mb-6 flex items-center justify-center">
              <CommandLineIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Développement Sur-Mesure</h3>
            <p className="text-gray-600 mb-6">
              Solutions web et mobile évolutives adaptées à vos besoins spécifiques
            </p>
            <ul className="space-y-2 text-[var(--blue)]">
              <li className="flex items-center">
                <ArrowPathIcon className="w-4 h-4 mr-2" />
                Technologies Modernes
              </li>
              <li className="flex items-center">
                <ArrowPathIcon className="w-4 h-4 mr-2" />
                Architecture Cloud
              </li>
              <li className="flex items-center">
                <ArrowPathIcon className="w-4 h-4 mr-2" />
                DevOps Avancé
              </li>
            </ul>
          </motion.div>

          {/* Design Card */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-xl transition-all"
            variants={cardVariants}
          >
            <div className="w-14 h-14 bg-[var(--jaune)] rounded-xl mb-6 flex items-center justify-center">
              <CodeBracketIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Design Innovant</h3>
            <p className="text-gray-600 mb-6">
              Interfaces utilisateur captivantes et expériences digitales mémorables
            </p>
            <div className="flex gap-4">
              <span className="px-4 py-1 bg-[var(--light)] text-[var(--blue)] rounded-full">UI/UX</span>
              <span className="px-4 py-1 bg-[var(--light)] text-[var(--blue)] rounded-full">Motion Design</span>
            </div>
          </motion.div>

          {/* Strategy Card */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-xl transition-all"
            variants={cardVariants}
          >
            <div className="w-14 h-14 bg-[var(--blue-ciel)] rounded-xl mb-6 flex items-center justify-center">
              <GlobeAltIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Stratégie Digitale</h3>
            <p className="text-gray-600 mb-6">
              Accélérez votre croissance grâce à une stratégie numérique intégrée
            </p>
            <div className="h-32 bg-gradient-to-r from-[var(--blue)] to-[var(--blue-ciel)] rounded-xl flex items-center justify-center text-white font-bold">
              +150% ROI
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="mt-20 lg:mt-28 bg-[var(--blue)] rounded-2xl p-8 sm:p-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Notre Impact en Chiffres</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="py-6">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-[var(--light)]">Projets Livrés</div>
              </div>
              <div className="py-6 border-x border-[var(--light)]">
                <div className="text-4xl font-bold mb-2">15M+</div>
                <div className="text-[var(--light)]">Utilisateurs</div>
              </div>
              <div className="py-6">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-[var(--light)]">Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <motion.button
            className="bg-[var(--jaune)] text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-[var(--blue)] hover:text-white transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discutons de Votre Projet
          </motion.button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-0 left-20 w-32 h-32 bg-[var(--blue-ciel)] opacity-20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-20 w-48 h-48 bg-[var(--jaune)] opacity-20 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default AboutSection;