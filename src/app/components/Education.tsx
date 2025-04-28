"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Languages, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      id: 1,
      title: "Master degree in Marketing Management and Innovation",
      institution: "ISCAM Business School",
      year: "2024",
      icon: <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />,
      tags: ["Marketing", "Innovation"],
    },
    {
      id: 2,
      title: "Bachelor Degree in Media Communication",
      institution: "Magis University Saint Michel Amparibe",
      year: "2020-2023",
      icon: <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />,
      tags: ["Media", "Communication"],
    },
    {
      id: 3,
      title: "English language: C2 level",
      institution: "ITTI Madagascar",
      year: "2023",
      icon: <Languages className="w-4 h-4 sm:w-5 sm:h-5" />,
      tags: ["Language", "Proficiency"],
    },
    {
      id: 4,
      title: "Baccalaureat",
      institution: "Lycée Sainte Marie Farafangana",
      year: "2020",
      icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />,
      tags: ["High School", "Diploma"],
    },
  ];

  const cardGradients = [
    "from-purple-500/20 to-indigo-500/30",
    "from-purple-400/20 to-blue-500/30",
    "from-violet-500/20 to-fuchsia-500/30",
    "from-purple-500/20 to-pink-500/30",
  ];

  return (
    <section id="education" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900/80 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Academic Journey
          </h2>
          <p className="text-sm sm:text-lg text-purple-100 max-w-2xl mx-auto">
            My educational path and acquired qualifications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-lg bg-gradient-to-br ${cardGradients[index]} border border-purple-200/20`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-purple-400/10 via-white/15 to-transparent opacity-30 sm:opacity-40"></div>
              
              <div className="p-4 sm:p-6 md:p-8 relative z-10">
                <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
                  <div className="flex-shrink-0 p-2 sm:p-3 rounded-lg bg-purple-100/20 backdrop-blur-sm">
                    {item.icon}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                      <span className="text-xs px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-purple-100/20 text-purple-50">
                        {item.year}
                      </span>
                      <span className="text-xs px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-purple-100/20 text-purple-50">
                        {index === 0 ? "Master" : 
                         index === 1 ? "Bachelor" : 
                         index === 2 ? "Certification" : "Diploma"}
                      </span>
                    </div>
                    
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-1.5 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-purple-100 mb-2 sm:mb-4 line-clamp-1">
                      {item.institution}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {item.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className="text-xs px-2 py-0.5 rounded-full bg-purple-100/15 text-purple-50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating elements with purple accent */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 rounded-full bg-purple-500/30 blur-xl sm:blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 sm:w-80 sm:h-80 rounded-full bg-violet-500/30 blur-xl sm:blur-3xl"></div>
          <div className="absolute top-2/3 left-1/3 w-48 h-48 sm:w-96 sm:h-96 rounded-full bg-fuchsia-500/20 blur-xl sm:blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Education;