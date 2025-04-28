"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "Marketplace Éco-responsable",
    type: "Plateforme E-commerce",
    image: "/pr6.png",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    year: "2024",
    location: "Antananarivo",
    description: "Plateforme de vente de produits artisanaux malgaches avec suivi carbone"
  },
  {
    id: 2,
    title: "Application Tourisme 3.0",
    type: "Mobile First",
    image: "/pr2.png",
    tech: ["React Native", "Three.js", "AWS"],
    year: "2023",
    location: "Nosy Be",
    description: "Visites virtuelles et réalité augmentée pour les sites historiques"
  },
  {
    id: 3,
    title: "Gestion d'École Digitale",
    type: "SaaS Éducatif",
    image: "/pr3.png",
    tech: ["Laravel", "Vue.js", "MySQL"],
    year: "2024",
    location: "Fianarantsoa",
    description: "Solution complète de gestion scolaire et de e-learning"
  },
  {
    id: 4,
    title: "FinTech Malgache",
    type: "Solution Bancaire",
    image: "/pr4.png",
    tech: ["Python", "Django", "React", "Blockchain"],
    year: "2023",
    location: "Mahajanga",
    description: "Plateforme de micro-crédit et gestion financière"
  }
];

export default function ProjectsShowcase() {
  return (
    <section id='projets' className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[var(--light)]/10 to-[var(--blue)]">
      {/* Éléments de décor */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] -top-16 sm:-top-24 md:-top-32 -left-16 sm:-left-24 md:-left-32 bg-[var(--jaune)] rounded-full mix-blend-overlay blur-xl sm:blur-2xl md:blur-3xl opacity-20 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* En-tête */}
        <motion.div 
          className="mb-10 sm:mb-14 md:mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-[var(--blue)] mb-2 sm:mb-3 md:mb-4">
            Nos <span className="text-[var(--jaune)]">Créations</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--light)]/80 max-w-2xl mx-auto">
            Des solutions digitales qui marient innovation technologique et impact local
          </p>
        </motion.div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="group relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-500"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              {/* Image avec effet parallax */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue)]/80 via-transparent to-transparent" />
              </div>

              {/* Contenu superposé */}
              <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 md:p-8">
                {/* Métadonnées */}
                <div className="flex gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4 text-[var(--light)]/80 text-[10px] xs:text-xs sm:text-sm">
                  <span className="flex items-center gap-1 sm:gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[var(--jaune)] rounded-full" />
                    {project.year}
                  </span>
                  <span className="flex items-center gap-1 sm:gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[var(--blue-ciel)] rounded-full" />
                    {project.location}
                  </span>
                </div>

                {/* Titre et description */}
                <motion.div
                  className="translate-y-20 group-hover:translate-y-0 transition-all duration-500"
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--light)] mb-2 sm:mb-3 md:mb-4">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-[var(--light)]/90 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                    {project.description}
                  </p>
                </motion.div>

                {/* Technologies et CTA */}
                <div className="opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 sm:py-1.5 bg-[var(--light)]/10 backdrop-blur-sm text-[var(--light)] rounded-full text-[10px] xs:text-xs sm:text-sm border border-[var(--light)]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center text-[var(--light)] hover:text-[var(--jaune)] transition-colors text-sm sm:text-base font-medium"
                  >
                    Explorer le projet
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>

                {/* Badge de type */}
                <span className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 bg-[var(--light)] text-[var(--blue)] px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-[10px] xs:text-xs sm:text-sm font-bold shadow-lg">
                  {project.type}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA final */}
        <motion.div
          className="text-center mt-10 sm:mt-14 md:mt-16 lg:mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center bg-[var(--jaune)] hover:bg-[var(--blue-ciel)] text-[var(--blue)] px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 lg:py-5 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg font-bold transition-all duration-500 hover:scale-105 shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl"
          >
            <span className="mr-2 sm:mr-3">🚀</span>
            Voir toutes les réalisations
            <span className="ml-2 sm:ml-3">🌴</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
