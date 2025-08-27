import React, { useState, useEffect } from 'react';
import { navItems } from '../data';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleThemeToggle = () => {
    setIsAnimating(true);
    toggleDarkMode();
    setTimeout(() => setIsAnimating(false), 500);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        const navHeight = 80; // Approximate navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a 
            href="#home"
            onClick={handleNavClick}
            className="text-4xl font-bold text-gray-900 dark:text-white transition-all duration-300 hover:scale-105"
          >
            Karthik<span className="text-blue-600 dark:text-blue-400"> P</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-20">
            <ul className="flex space-x-20">
  {navItems.map((item) => (
    <li key={item.href} className="relative group">
      <a
        href={item.href}
        onClick={handleNavClick}
        className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 py-3"
      >
        {item.label}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
      </a>
    </li>
  ))}
</ul>
            <button 
              onClick={handleThemeToggle}
              className={`p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-500 transform ${
                isAnimating ? 'rotate-180 scale-110' : 'hover:scale-110'
              }`}
              aria-label="Toggle dark mode"
            >
              <div className="relative w-6 h-6">
                <div className={`absolute inset-0 transition-opacity duration-300 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`}>
                  <Moon className="w-6 h-6 text-gray-800" />
                </div>
                <div className={`absolute inset-0 transition-opacity duration-300 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}>
                  <Sun className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden space-x-4">
            <button 
              onClick={handleThemeToggle}
              className={`p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-500 transform ${
                isAnimating ? 'rotate-180 scale-110' : 'hover:scale-110'
              }`}
              aria-label="Toggle dark mode"
            >
              <div className="relative w-6 h-6">
                <div className={`absolute inset-0 transition-opacity duration-300 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`}>
                  <Moon className="w-6 h-6 text-gray-800" />
                </div>
                <div className={`absolute inset-0 transition-opacity duration-300 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}>
                  <Sun className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-10 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md transform transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className="text-xl font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};