import React from 'react';
import { contactInfo } from '../data';
import { Github as GitHub, Linkedin, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <a href="#home" className="text-2xl font-bold">
              Karthik<span className="text-blue-600 dark:text-blue-400">P</span>
            </a>
            <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
              Information Technology professional with expertise in web development, Python programming, and UI/UX design.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Mail size={16} className="text-blue-600 dark:text-blue-400" />
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone size={16} className="text-blue-600 dark:text-blue-400" />
                  <a 
                    href={`tel:${contactInfo.phone}`} 
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Linkedin size={16} className="text-blue-600 dark:text-blue-400" />
                  <a 
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <GitHub size={16} className="text-blue-600 dark:text-blue-400" />
                  <a 
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-gray-300 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400">
            &copy; {currentYear} Karthik P. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-inherit" />
            </a>
            <a
              href={contactInfo.github}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GitHub size={20} className="text-inherit" />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} className="text-inherit" />
            </a>
            <a
              href={`tel:${contactInfo.phone}`}
              className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              aria-label="Phone"
            >
              <Phone size={20} className="text-inherit" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};