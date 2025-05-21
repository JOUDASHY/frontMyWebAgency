"use client";

import { motion, useTransform } from "framer-motion";
import { StarIcon, SparklesIcon } from "@heroicons/react/24/solid";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Tolotra N.",
      role: "CEO Tech Startup",
      company: "DigitalBoost MG",
      text: "Notre collaboration avec BEAST a transformé notre présence en ligne. Leur expertise technique et leur approche stratégique ont dépassé nos attentes.",
      image: "/users/CV.png",
      rating: 5,
      date: "2025-03-15",
    },
    {
      id: 2,
      name: "Jean M.",
      role: "Directeur Marketing",
      company: "Ecom Madagascar",
      text: "Un professionnalisme remarquable. Leur solution e-commerce a augmenté nos ventes de 150% en 6 mois. Vivement recommandé !",
      image: "/users/team-2.jpg",
      rating: 4,
      date: "2025-02-28",
    },
    {
      id: 3,
      name: "Bruno K.",
      role: "Responsable Communication",
      company: "Tourism MG",
      text: "Site web livré dans les délais avec un design époustouflant. L'équipe est réactive et très à l'écoute de nos besoins.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4gSxmua_qUTBttCSw_vPsdId-2cePQlhOnA&s",
      rating: 5,
      date: "2025-04-02",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--light)] py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
      {/* Fond décoratif dynamique */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/3 left-1/4 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-[var(--blue-ciel)] rounded-full blur-[80px] sm:blur-[120px] md:blur-[150px] animate-float" />
        <div className="absolute top-1/2 right-1/4 w-[150px] sm:w-[200px] md:w-[300px] h-[150px] sm:h-[200px] md:h-[300px] bg-[var(--jaune)] rounded-full blur-[60px] sm:blur-[90px] md:blur-[120px] animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* En-tête */}
        <motion.div 
          className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, type: "spring" }}
          viewport={{ once: true }}
        >
          <div className="inline-block relative">
            <SparklesIcon className="absolute -top-4 -left-4 sm:-top-5 sm:-left-6 md:-top-6 md:-left-8 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-[var(--jaune)] animate-sparkle" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-2 sm:mb-3 md:mb-4">
              <span className="text-stroke bg-gradient-to-r from-[var(--blue)] to-[var(--blue-ciel)] bg-clip-text text-transparent">
                Ils parlent
              </span>
              <span className="mx-2 sm:mx-3 md:mx-4 text-[var(--blue)]">de nous</span>
            </h2>
            <SparklesIcon className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-6 md:-bottom-6 md:-right-8 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-[var(--jaune)] animate-sparkle-delayed" />
          </div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[var(--blue)] mt-3 sm:mt-4 md:mt-6 font-light max-w-3xl mx-auto">
            Découvrez les expériences transformatrices de nos clients satisfaits
          </p>
        </motion.div>

        {/* Carrousel 3D */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 perspective-5000">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="relative bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-xl sm:shadow-2xl hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-500 group"
              initial={{ opacity: 0, rotateY: -45, scale: 0.9 }}
              whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
              transition={{ 
                delay: index * 0.15,
                type: "spring",
                stiffness: 80,
                damping: 15
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10, rotateZ: -1 }}
            >
              {/* Effet de halo */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[var(--blue)/10] to-[var(--jaune)/10] opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Avatar animé */}
              <motion.div 
                className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl overflow-hidden border-3 sm:border-4 border-[var(--light)] shadow-md sm:shadow-lg mb-4 sm:mb-6 md:mb-8"
                whileHover={{ rotate: 2, scale: 1.05 }}
              >
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue)] to-transparent opacity-20" />
              </motion.div>

              {/* Contenu */}
              <div className="relative space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
                {/* En-tête */}
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--blue)] mb-1 sm:mb-2">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--blue-ciel)] font-medium">
                    {testimonial.role} @ {testimonial.company}
                  </p>
                </div>

                {/* Étoiles interactives */}
                <div className="flex gap-0.5 sm:gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      className="text-[var(--jaune)]"
                    >
                      <StarIcon
                        className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 ${i < testimonial.rating ? 'fill-current' : 'fill-[var(--light)]'}`}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Citation */}
                <blockquote className="text-sm sm:text-base md:text-lg leading-relaxed text-[var(--blue)] italic relative pl-4 sm:pl-5 md:pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 sm:before:w-1 before:bg-[var(--jaune)]">
                  {testimonial.text}
                </blockquote>

                {/* Date animée */}
                <motion.div 
                  className="flex justify-end"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-xs sm:text-sm text-[var(--blue-ciel)] bg-[var(--light)] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow">
                    {new Date(testimonial.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Effets spéciaux */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-[var(--jaune)]/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[150px] -z-10" />
        <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-40 sm:w-56 md:w-64 lg:w-80 h-40 sm:h-56 md:h-64 lg:h-80 bg-[var(--blue-ciel)]/15 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] lg:blur-[120px] -z-10" />
      </div>
    </section>
  );
};

export default Testimonials;
