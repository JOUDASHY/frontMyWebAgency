import React from 'react';

const Banner = () => {
  const backgroundImageUrl = "https://findly.co/wp-content/uploads/2023/04/agence-web-design-scaled.webp";

  return (
    <section className="relative h-[70vh] min-h-[400px] flex items-center justify-center sm:h-[80vh] md:h-screen font-[var(--font-family)]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundPosition: 'center 20%',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-300/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          font-bold text-white mb-4 leading-tight md:mb-6
          animate-fade-in-up
        ">
          Building Your Online Presence<br className="hidden lg:block" />
          <span className="text-yellow-400 block mt-2 text-xl sm:text-2xl md:text-3xl">
            & Effective Web Solutions
          </span>
        </h1>

        <p className="
          text-base md:text-lg text-white mb-6 md:mb-8
          max-w-xs sm:max-w-2xl mx-auto opacity-90
          animate-fade-in-up-second
        ">
          We’re a full-service web agency crafting custom websites and applications designed to engage your audience and support your growth.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 md:gap-5">
          <div className="
            flex items-center bg-white/10 backdrop-blur-sm
            px-4 py-2 rounded-full sm:px-5 sm:py-2.5
            animate-fade-in-up-third
          ">
            <span className="text-white text-lg sm:text-xl md:text-2xl mr-2">🌐</span>
            <span className="text-white font-medium text-sm sm:text-base">
              React | Nextjs | Node | Laravel
            </span>
          </div>
          <button className="
            bg-yellow-400 hover:opacity-90 text-blue-900
            px-6 py-2.5 text-sm md:px-8 md:py-3 md:text-base
            rounded-full transition-opacity duration-300
            animate-fade-in-up-third
          ">
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
