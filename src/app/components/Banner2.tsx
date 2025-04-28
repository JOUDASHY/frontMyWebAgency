import React from 'react';

const Banner2 = () => {
  const backgroundImageUrl = "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1800&q=80";

  return (
    <section className="relative h-[70vh] min-h-[400px] md:h-screen flex items-center justify-center">
  
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-black/80"></div>

      </div>
  
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 text-center">
        <h1 className="
          text-2xl
          sm:text-3xl
          md:text-4xl
          lg:text-5xl
          xl:text-6xl
          font-bold text-white 
          mb-3
          sm:mb-4
          md:mb-6
          leading-snug 
          sm:leading-snug 
          md:leading-tight
          animate-fade-in-up
        ">
          Crafting Digital Experiences That Connect<br className="hidden md:block"/>
          <span className="
            text-lg
            sm:text-xl
            md:text-2xl
            lg:text-[2.5rem]
            text-purple-200 
            block sm:inline
            animate-fade-in-up-second
          ">
            Web Development | UX/UI Design | Brand Strategy
          </span>
        </h1>
  
        <p className="
          text-xs
          sm:text-sm
          md:text-base
          lg:text-lg
          text-purple-50 
          mb-4
          sm:mb-6
          md:mb-8
          max-w-xs
          sm:max-w-2xl
          md:max-w-3xl
          mx-auto px-2
          sm:px-0
          animate-fade-in-up-third
        ">
          Transforming business visions into powerful digital solutions through innovative web development and strategic design thinking.
        </p>
  
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4">
          <div className="
            flex items-center space-x-1.5
            sm:space-x-2
            bg-white/10 backdrop-blur-sm 
            px-3 py-1.5
            sm:px-5 sm:py-2
            md:px-6 md:py-3
            rounded-full 
            animate-fade-in-up-third
          ">
            <span className="text-white text-base sm:text-lg md:text-xl">💻</span>
            <span className="text-white font-medium text-xs sm:text-sm md:text-base">
              React | Next.js | WordPress | Shopify
            </span>
          </div>
          <button className="
            bg-purple-600 hover:bg-purple-700 text-white 
            px-4 py-2 text-xs
            sm:px-6 sm:py-2.5 sm:text-sm
            md:px-8 md:py-3 md:text-base
            rounded-full transition-all duration-300 transform hover:scale-105
            animate-fade-in-up-third
          ">
            View Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner2;