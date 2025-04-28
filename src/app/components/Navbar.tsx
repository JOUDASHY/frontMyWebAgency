'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);


  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projets' },
    // { href: '/education', label: 'education' },
    { href: '/WebModels', label: 'WebModels' },
    { href: '/contact', label: 'Contact' },
  ];

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-blue backdrop-blur-xl shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
  href="/"
  className="relative group flex items-center gap-3"
>
  {/* Icône de profil */}
  <div className="relative">
    <img 
      src="/logo.png" // Remplacez par votre chemin d'image
      alt="Profile Icon"
      className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 bg-jaune object-cover transition-all group-hover:border-indigo-300"
    />
    {/* Animation au survol */}
    <span className="absolute inset-0 rounded-full border-2 border-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></span>
  </div>

  {/* Texte avec animation */}
  <span className="text-2xl font-bold bg-gradient-to-r color-jaune bg-clip-text text-transparent">
    THE BEAST
    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-400 to-indigo-300 transition-all group-hover:w-full"></span>
  </span>
</Link>

          {/* Navigation Desktop */}
          <ul className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative px-3 py-2 hover:text-indigo-100 transition-all"
                >
                  <span className={`relative z-10 ${pathname === link.href ? 'color-jaune' : 'text-white'}`}>
                    {link.label}
                  </span>
                  {pathname === link.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 top-full h-[2px] w-full bg-indigo-300"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Burger Menu */}
          <button
            className="md:hidden p-2 relative group focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <div className="w-8 h-6 flex flex-col justify-between">
              <motion.span
                className="h-[2px] bg-indigo-200 block origin-left"
                animate={isMenuOpen ? { rotate: 45, translateY: 8 } : {}}
              />
              <motion.span
                className="h-[2px] bg-indigo-200"
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="h-[2px] bg-indigo-200 block origin-left"
                animate={isMenuOpen ? { rotate: -45, translateY: -8 } : {}}
              />
            </div>
          </button>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { opacity: 1, height: 'auto' },
                closed: { opacity: 0, height: 0 },
              }}
              className="md:hidden overflow-hidden"
            >
              <motion.ul
                className="flex flex-col items-center space-y-6 py-8 bg-indigo-600/95 backdrop-blur-lg"
                variants={{
                  open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                }}
              >
                {navLinks.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={menuVariants}
                    className="w-full text-center"
                  >
                    <Link
                      href={link.href}
                      className={`text-xl py-3 px-6 rounded-lg inline-block w-full transition-all ${
                        pathname === link.href
                          ? 'bg-indigo-400/20 text-indigo-300'
                          : 'hover:bg-indigo-500/30 text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;