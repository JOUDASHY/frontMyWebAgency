import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--blue)] text-[var(--light)] py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {/* Section Logo & Description */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-4 color-[var(--jaune)]">BEAST Web Agency</h2>
          <p className="text-sm text-[var(--light)/90] leading-relaxed">
            Nous transformons les idées en expériences digitales exceptionnelles. 
            Spécialistes en développement web sur mesure et stratégie digitale 
            pour les entreprises malgaches ambitieuses.
          </p>
        </div>

        {/* Section Liens rapides */}
        <div>
          <h3 className="text-lg font-semibold mb-4 color-[var(--jaune)]">Navigation</h3>
          <ul className="space-y-2 text-[var(--light)/80]">
            {['Services', 'Portfolio', 'Technologies', 'Blog', 'Carrières'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="hover:color-[var(--jaune)] transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Section Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 color-[var(--jaune)]">Contact</h3>
          <div className="space-y-2 text-[var(--light)/80]">
            <p className="flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-[var(--jaune)]"></i>
              Antananarivo, Madagascar
            </p>
            <p className="flex items-center gap-2">
              <i className="fas fa-phone text-[var(--jaune)]"></i>
              +261 34 00 000 00
            </p>
            <p className="flex items-center gap-2">
              <i className="fas fa-envelope text-[var(--jaune)]"></i>
              contact@beast-agency.mg
            </p>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex gap-4 mt-4">
            {[
              {icon: 'linkedin', link: '#'},
              {icon: 'github', link: '#'},
              {icon: 'facebook', link: '#'},
              {icon: 'instagram', link: '#'}
            ].map((social) => (
              <a
                key={social.icon}
                href={social.link}
                className="text-2xl color-[var(--light)] hover:color-[var(--jaune)] transition-colors"
              >
                <i className={`fab fa-${social.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[var(--blue-ciel)/30] mt-8 pt-6 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[var(--light)/70]">
          <p>&copy; {new Date().getFullYear()} BEAST Web Agency - Tous droits réservés</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#terms" className="hover:color-[var(--jaune)]">Conditions d'utilisation</a>
            <a href="#privacy" className="hover:color-[var(--jaune)]">Politique de confidentialité</a>
          </div>
        </div>
        
        {/* Crédits */}
        <p className="mt-4 text-xs text-[var(--light)/50]">
          Conçu avec <span className="color-[var(--jaune)]">❤</span> par l'équipe BEAST
        </p>
      </div>
    </footer>
  );
};

export default Footer;