'use client'; // Nécessaire pour les hooks dans le App Router

import Link from 'next/link'; // Solution recommandée
import { useRouter } from 'next/navigation'; // Si vous avez besoin de useRouter

const Banner1 = () => {
  const backgroundImageUrl = "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80";
  
  // Solution alternative avec useRouter (si nécessaire)
  // const router = useRouter();

  return (
    <section 
      aria-label="Présentation de l'agence web" 
      className="relative h-[70vh] min-h-[400px] md:h-screen flex items-center justify-center"
    >
      {/* Arrière-plan technologique */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-fixed"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(12, 23, 45, 0.9), rgba(8, 37, 103, 0.7)), url(${backgroundImageUrl})`,
          backgroundBlendMode: 'multiply'
        }}
        role="img"
        aria-label="Équipe développant une application web"
      />

      {/* Contenu principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
          font-bold text-white 
          mb-4 sm:mb-6 
          leading-tight
        ">
          <span className="block animate-fade-in-up">
            Créateurs d'Expériences Digitales 
          </span>
          <span className="
            block mt-3
            text-xl sm:text-2xl md:text-3xl
            text-blue-200
            animate-fade-in-up-second
          ">
            Qui Captivent & Convertissent
          </span>
        </h1>

        <p className="
          text-sm sm:text-base md:text-lg 
          text-blue-50 
          mb-6 sm:mb-8 
          max-w-xl md:max-w-3xl 
          mx-auto
          animate-fade-in-up-third
        ">
          Agence web full-stack spécialisée dans la création de solutions sur mesure : sites vitrine, e-commerce, applications web et stratégie digitale.
        </p>

        {/* Points forts */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <div 
            className="
              flex items-center gap-3
              bg-white/10 backdrop-blur-sm 
              px-6 py-3
              rounded-full 
              animate-fade-in-up-third
            "
            aria-label="Technologies maîtrisées"
          >
            <span className="text-white font-medium text-base sm:text-lg">
              React • Nextjs • Django • Laravel
            </span>
          </div>
          
          {/* Solution recommandée avec Link */}
          <Link href="/projects" passHref>
            <button 
              className="
                bg-blue-600 hover:bg-blue-700 text-white 
                px-8 py-3
                text-base
                rounded-full transition-all duration-300 
                transform hover:scale-105 focus:scale-105
                animate-fade-in-up-third
              "
              aria-label="Voir nos réalisations"
            >
              Découvrez Nos Projets
            </button>
          </Link>

          {/* Solution alternative avec useRouter (si nécessaire) */}
          {/*
          <button 
            onClick={() => router.push('/projects')}
            className="
              bg-blue-600 hover:bg-blue-700 text-white 
              px-8 py-3
              text-base
              rounded-full transition-all duration-300 
              transform hover:scale-105 focus:scale-105
              animate-fade-in-up-third
            "
            aria-label="Voir nos réalisations"
          >
            Découvrez Nos Projets
          </button>
          */}
        </div>
      </div>
    </section>
  );
};

export default Banner1;