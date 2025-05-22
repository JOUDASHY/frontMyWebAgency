import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--blue)] text-[var(--light)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-20">
        {/* Effet de vague décoratif */}
        <div className="absolute top-0 left-0 w-full opacity-10">
          <svg viewBox="0 0 1440 120" className="text-[var(--jaune)]">
            <path fill="currentColor" d="M0 64l48-16c48-16 144-48 240-37.3C384 21 480 75 576 96s192-11 288-26.7c96-16.3 192-26.3 288-5.3 96 21 192 75 240 101.3l48 26.7v32H0z"/>
          </svg>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 relative z-10">
          {/* Section Logo */}
          <div className="lg:col-span-2 space-y-3 md:space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 sm:h-12 w-10 sm:w-12 bg-[var(--jaune)] rounded-full flex items-center justify-center shadow-md">
                <img 
                  src="/logo.png" 
                  alt="Logo BEAST" 
                  className="h-6 w-6 sm:h-8 sm:w-8 object-contain"
                />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--jaune)]">BEAST Web Agency</h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-[var(--light)/90] max-w-xl">
              Nous transformons les idées en expériences digitales exceptionnelles. 
              Spécialistes en développement web sur mesure et stratégie digitale 
              pour les entreprises malgaches ambitieuses.
            </p>
          </div>

          {/* Section Liens rapides */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-[var(--jaune)] mb-2 border-l-4 border-[var(--jaune)] pl-3">Navigation</h3>
            <ul className="space-y-2">
              {['Services', 'Portfolio', 'Technologies', 'Blog', 'Carrières'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="flex items-center group text-xs sm:text-sm hover:text-[var(--jaune)] transition-all"
                  >
                    <span className="w-2 h-[1px] bg-[var(--jaune)] mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section Contact */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-[var(--jaune)] mb-2 border-l-4 border-[var(--jaune)] pl-3">Contact</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-[var(--jaune)]">
                  <i className="fas fa-map-marker-alt text-xs sm:text-sm"></i>
                </div>
                <p className="text-xs sm:text-sm">Fianarantsoa 301, Madagascar</p>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-phone text-[var(--jaune)] text-xs sm:text-sm"></i>
                <a href="tel:+261340000000" className="text-xs sm:text-sm hover:text-[var(--jaune)] transition-colors">+261 34 86 555 23</a>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-envelope text-[var(--jaune)] text-xs sm:text-sm"></i>
                <a href="mailto:alitsiryeddynilsen@gmail.com" className="text-xs sm:text-sm hover:text-[var(--jaune)] transition-colors">alitsiryeddynilsen@gmail.com</a>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex gap-3 sm:gap-4 mt-3 sm:mt-4">
              {[
                {icon: 'linkedin', link: '#'},
                {icon: 'github', link: '#'},
                {icon: 'facebook', link: '#'},
                {icon: 'instagram', link: '#'}
              ].map((social) => (
                <a
                  key={social.icon}
                  href={social.link}
                  className="p-1.5 sm:p-2 rounded-full bg-[var(--blue-ciel)/10] hover:bg-[var(--jaune)/20] transition-all group"
                >
                  <i className={`fab fa-${social.icon} text-sm sm:text-lg text-[var(--light)] group-hover:text-[var(--jaune)]`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[var(--blue-ciel)/20 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[var(--light)/70]">
            <div className="flex gap-2 sm:gap-4">
              <p>© {new Date().getFullYear()} BEAST Web Agency</p>
              <span className="hidden md:block">•</span>
              <p>Tous droits réservés</p>
            </div>
            <div className="flex gap-2 sm:gap-4">
              <a href="#terms" className="hover:text-[var(--jaune)] transition-colors">Conditions d'utilisation</a>
              <span>•</span>
              <a href="#privacy" className="hover:text-[var(--jaune)] transition-colors">Confidentialité</a>
            </div>
          </div>
          
          {/* Crédits */}
          <div className="mt-3 sm:mt-4 text-center">
            <p className="text-[10px] sm:text-xs text-[var(--light)/50]">
              Conçu avec <span className="text-[var(--jaune)] animate-pulse">❤</span> par BEAST 
              <span className="mx-1 sm:mx-2">•</span> 
              Développé avec Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>

      {/* Bouton back-to-top */}
      <button className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 p-2 sm:p-3 rounded-full bg-[var(--jaune)] shadow-lg hover:scale-105 transition-transform">
        <i className="fas fa-arrow-up text-xs sm:text-sm text-[var(--blue)]"></i>
      </button>
    </footer>
  );
};

export default Footer;