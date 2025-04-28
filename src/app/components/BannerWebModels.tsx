import React from 'react';

const BannerWebModels = () => {
  const backgroundImageUrl = "https://images.unsplash.com/photo-1542744094-3a31f272c490?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww";

  return (
    <section className="relative h-[30vh] md:h-[40vh] lg:h-[50vh] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        {/* Dark Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70"></div>
      </div>
  
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-snug">
          Nos Modèles Web
        </h1>
  
        <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 sm:mb-6 max-w-2xl mx-auto">
          Nous transformons le paysage digital malgache grâce à des solutions web innovantes 
          alliant expertise technique et ancrage local
        </p>

        {/* Badge Madagascar */}
        <div className="inline-flex items-center bg-yellow-400 text-blue-900 px-6 py-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"/>
          </svg>
          Expertise 100% malgache
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-yellow-400"></div>
    </section>
  );
};

export default BannerWebModels;
