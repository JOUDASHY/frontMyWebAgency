// New Projects Banner

export const BannerProject = () => {
  const backgroundImageUrl = "https://hunterae.com/wp-content/uploads/images/stylish-website-promo-4k-download-videohive-29304119-free-hunterae-com-8.jpg";

  return (
    <section className="relative h-[30vh] md:h-[40vh] lg:h-[50vh] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        {/* Dark Blue Gradient Overlay using --blue (#000b31) */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(0,11,49,0.9) 0%, rgba(0,11,49,0.7) 100%)' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-snug">
          Nos Projets
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 sm:mb-6 max-w-2xl md:max-w-3xl mx-auto">
          Découvrez comment notre agence web malgache conçoit des solutions digitales sur-mesure, alliant design innovant et performance technique pour valoriser votre marque.
        </p>
      </div>
    </section>
  );
};
export default BannerProject;