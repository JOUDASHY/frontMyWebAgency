'use client';

// import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
// import Experience from "./components/Experience";
// import AchievementsSection from "./components/AchievementsSection";
import AboutSection from "./components/AboutSection";
// import Skills from "./components/Skills";
// import Languages from "./components/Languages";
// import Education from "./components/Education";
import Banner from "./components/Banner";
// Supprimez les extensions .tsx des imports
import Banner2 from "./components/Banner2";  // ← Enlevez .tsx
import Banner1 from "./components/Banner1";  // ← Enlevez .tsx
// import Footer from "./components/Footer";
import ProjectsGrid from './components/ProjectsGrid';
import Testimonials from './components/Testimonials';
import WebModels from './components/WebModels';

// Dans votre page
// Dans votre page
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Navigation toujours en haut */}
      <Navbar />

      {/* Section principale défilable */}
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <Banner />
<Testimonials />

        {/* <AchievementsSection /> */}
        <Banner2 />
        <ProjectsGrid />
        {/* <Experience /> */}
        {/* <Education /> */}

        {/* <Skills /> */}
        <Banner1 />
<WebModels />
{/* <Languages /> */}
        {/* <Footer /> */}
      </main>

      {/* Footer éventuel si besoin */}
      {/* <footer className="h-16 bg-gray-900 text-white flex items-center justify-center">
        Footer content here
      </footer> */}
    </div>
  );
}
