"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedExperienceItemProps {
  children: ReactNode;
  delay?: number;
}

const AnimatedExperienceItem = ({ children, delay = 0 }: AnimatedExperienceItemProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  emoji: string;
  type: string | string[];
  color: string;
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      year: "2024 - Present",
      title: "Spanish Teacher",
      company: "Madagascar Swiss School",
      emoji: "🏫",
      type: "Full-Time",
      color: "indigo",
    },
    {
      year: "Sep 2023 - Present",
      title: "English Teacher",
      company: "Madagascar Swiss School Amboanjobe",
      emoji: "📚",
      type: "Part-Time",
      color: "blue",
    },
    {
      year: "Mar 2023 - Apr 2023",
      title: "Editor Assistant",
      company: "Ministry of Tourism",
      emoji: "🏛️",
      type: ["Internship", "Journalism"],
      color: "purple",
    },
    {
      year: "Feb 2023 - Mar 2023",
      title: "Journalist",
      company: "Taf'Ita (Newspaper)",
      emoji: "📰",
      type: ["Internship", "Reporting"],
      color: "green",
    },
    {
      year: "Feb 2021 - Mar 2021",
      title: "Journalist",
      company: "ESIC-TV (Television)",
      emoji: "📺",
      type: ["Internship", "Video Production"],
      color: "red",
    },
  ];

  return (
    <section
      className="relative bg-gradient-to-b from-indigo-50 to-blue-100 py-8 md:py-20 px-4 sm:px-6 lg:px-8"
      id="experience"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 text-center mb-8 md:mb-16">
          Professional Timeline
          <span className="block w-12 md:w-20 h-1 md:h-1.5 bg-indigo-600 mx-auto mt-2 md:mt-4 rounded-full"></span>
        </h2>

        <div className="relative space-y-8 md:space-y-20 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 md:before:w-1 before:bg-gradient-to-b before:from-indigo-500 before:to-blue-400">
          {experiences.map((exp, index) => {
            const isRight = index % 2 === 0;
            const color = exp.color;

            return (
              <AnimatedExperienceItem key={index} delay={index * 0.2}>
                <div className="relative group pl-6 md:pl-8 md:pl-0">
                  <div
                    className={`md:flex ${
                      isRight
                        ? "md:justify-start"
                        : "md:flex-row-reverse md:justify-end"
                    } items-center gap-4 md:gap-8`}
                  >
                    <div
                      className={`md:w-1/2 ${
                        isRight ? "md:pr-6 md:text-right" : "md:pl-6 md:text-left"
                      }`}
                    >
                      <p className="text-sm md:text-lg text-gray-600 font-medium mb-1 md:mb-2">{exp.year}</p>
                      <div className={`hidden md:block h-0.5 bg-${color}-300 w-full`}></div>
                    </div>

                    <div
                      className={`absolute -left-1 md:left-1/2 top-4 md:top-6 w-3 h-3 md:w-5 md:h-5 bg-${color}-600 rounded-full border-2 border-white shadow-md md:shadow-lg z-10`}
                    ></div>

                    <div className={`md:w-1/2 ${isRight ? "md:pl-6" : "md:pr-6"}`}>
                      <div className="bg-white rounded-md md:rounded-xl shadow-md md:shadow-2xl p-3 sm:p-5 md:p-8 space-y-2 md:space-y-4 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl md:hover:shadow-3xl border border-gray-100">
                        <h3 className={`text-lg md:text-2xl font-bold text-${color}-700 mb-1 md:mb-2`}>
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 md:gap-3 text-gray-700">
                          <span className="text-lg md:text-2xl">{exp.emoji}</span>
                          <p className="text-sm md:text-lg font-semibold">{exp.company}</p>
                        </div>
                        <div className="flex gap-1 md:gap-2 flex-wrap">
                          {(Array.isArray(exp.type) ? exp.type : [exp.type]).map((tag, i) => (
                            <span
                              key={i}
                              className={`px-2 py-0.5 md:px-3 md:py-1 bg-${color}-100 text-${color}-800 rounded-full text-xs md:text-sm font-medium border border-${color}-200`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedExperienceItem>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
