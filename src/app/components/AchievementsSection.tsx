import { motion } from 'framer-motion';

const AchievementsSection = () => {
  return (
    <section className="relative bg-white py-8 sm:py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-6 sm:gap-8 md:grid-cols-2 md:gap-12"
        >
          {/* Achievements Column */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <h2 className="
              text-2xl        /* mobile */
              sm:text-3xl     /* ≥640px */
              md:text-4xl     /* ≥768px */
              lg:text-[2.5rem]/* ≥1024px */
              font-bold 
              text-gray-900 
              bg-gradient-to-r from-indigo-600 to-blue-500 
              bg-clip-text text-transparent
            ">
              Achievements & Awards
            </h2>
            
            <ul className="space-y-3 sm:space-y-4 md:space-y-5">
              <motion.li 
                whileHover={{ scale: 1.02 }}
                className="pl-3 sm:pl-4 border-l-4 border-indigo-500"
              >
                <p className="
                  text-sm        /* mobile */
                  sm:text-base   /* ≥640px */
                  md:text-lg     /* ≥768px */
                  text-gray-600
                ">
                  Best Educational Initiative Award - Madagascar National Education Forum
                </p>
              </motion.li>

              <motion.li 
                whileHover={{ scale: 1.02 }}
                className="pl-3 sm:pl-4 border-l-4 border-blue-500"
              >
                <p className="
                  text-sm
                  sm:text-base
                  md:text-lg
                  text-gray-600
                ">
                  UNESCO Recognition for Multilingual Education Projects
                </p>
              </motion.li>
            </ul>
          </div>

          {/* Training Column */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <h3 className="
              text-xl        /* mobile */
              sm:text-2xl    /* ≥640px */
              md:text-3xl    /* ≥768px */
              font-semibold 
              text-gray-900
            ">
              Professional Formation
            </h3>
            
            <div className="space-y-3 sm:space-y-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50"
              >
                <h4 className="
                  text-base       /* mobile */
                  sm:text-lg      /* ≥640px */
                  md:text-xl      /* ≥768px */
                  font-medium 
                  text-indigo-700
                ">
                  Advanced Certification in
                </h4>
                <ul className="mt-2 list-disc list-inside space-y-1.5 sm:space-y-2">
                  <li className="
                    text-sm        /* mobile */
                    sm:text-base   /* ≥640px */
                    md:text-lg     /* ≥768px */
                    text-gray-700
                  ">
                    Scoping & Project Design
                  </li>
                  <li className="
                    text-sm
                    sm:text-base
                    md:text-lg
                    text-gray-700
                  ">
                    Public Relations Strategy
                  </li>
                  <li className="
                    text-sm
                    sm:text-base
                    md:text-lg
                    text-gray-700
                  ">
                    Press Relation Management
                  </li>
                </ul>
                <p className="
                  mt-2 
                  text-xs        /* mobile */
                  sm:text-sm     /* ≥640px */
                  font-medium 
                  text-blue-600
                ">
                  Book News Madagascar • 2022
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
