import React from 'react';

const Banner3 = () => {
  const backgroundImageUrl = "https://procreator.design/blog/wp-content/uploads/2025/03/Mobile-app-design-agency-in-USA.png";

  return (
    <section className="relative h-[30vh] md:h-[40vh] lg:h-[50vh] flex items-center justify-center">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-blue-900/70"></div>
      </div>
  
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-snug">
          About Us
        </h1>
  
        <p className="text-sm sm:text-base md:text-lg text-indigo-50 mb-4 sm:mb-6 max-w-2xl md:max-w-3xl mx-auto">
          We are a dynamic web agency dedicated to crafting innovative digital experiences. Our team of designers, developers, and strategists work collaboratively to deliver tailored solutions that drive growth and engagement for our clients.
        </p>
      </div>
    </section>
  );
};

export default Banner3;
