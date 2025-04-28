"use client";


import React from 'react';
import { motion } from 'framer-motion';
import ReactCountryFlag from 'react-country-flag';

type LanguageLevel = 'Native' | 'Fluency & Accuracy' | 'Upper-Intermediate' | 'Basic';

interface Language {
  code: string;
  name: string;
  level: LanguageLevel;
  score: number;
}

const languages: Language[] = [
  { code: 'MG', name: 'Malagasy', level: 'Native', score: 100 },
  { code: 'GB', name: 'English', level: 'Fluency & Accuracy', score: 100 },
  { code: 'FR', name: 'Français', level: 'Fluency & Accuracy', score: 100 },
  { code: 'ES', name: 'Español', level: 'Fluency & Accuracy', score: 90 },
  { code: 'CN', name: '中文', level: 'Upper-Intermediate', score: 40 },
  { code: 'RU', name: 'Русский', level: 'Upper-Intermediate', score: 40 },
  { code: 'TR', name: 'Türk', level: 'Basic', score: 20 },
  { code: 'DE', name: 'Deutsch', level: 'Basic', score: 20 },
];

const levelColor: Record<LanguageLevel, string> = {
  Native: 'bg-green-500',
  'Fluency & Accuracy': 'bg-blue-500',
  'Upper-Intermediate': 'bg-yellow-500',
  Basic: 'bg-red-400',
};

const Languages = () => (
  <section id="languages" className="py-10 md:py-16 bg-indigo-50">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6 md:mb-10">
        Languages
        <span className="block w-14 md:w-20 h-1 md:h-1.5 bg-gradient-to-r from-indigo-500 to-blue-400 mx-auto mt-2 md:mt-3 rounded-full" />
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-6 sm:grid-cols-2">
        {languages.map((lang, idx) => (
          <motion.div
            key={lang.code}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white rounded-lg shadow-sm p-3 md:p-5 flex flex-col"
          >
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className="flex items-center gap-2">
                <ReactCountryFlag
                  countryCode={lang.code}
                  svg
                  style={{ fontSize: '1.2em', lineHeight: '1.2em' }}
                  title={lang.name}
                />
                <h3 className="text-base md:text-lg font-semibold text-gray-800">{lang.name}</h3>
              </div>
              <span
                className={`text-xs font-medium text-white px-2 py-0.5 rounded ${levelColor[lang.level]}`}
              >
                {lang.level}
              </span>
            </div>

            <div className="h-2 md:h-2.5 w-full bg-gray-200 rounded-full overflow-hidden mb-1 md:mb-2">
              <motion.div
                className={`${levelColor[lang.level]}`}
                initial={{ width: 0 }}
                animate={{ width: `${lang.score}%` }}
                transition={{ duration: 1, delay: idx * 0.1 }}
                style={{ height: '100%' }}
              />
            </div>
            <div className="text-right text-xs text-gray-600">
              {lang.score}%
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Languages;