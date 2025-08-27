import React, { useEffect, useState } from 'react';
import { Github as GitHub, Linkedin, Mail, Phone } from 'lucide-react';
import { contactInfo } from '../data';
// If using Vite or Webpack 5+, use the .default or .src property:
import profileImage from './Profile.jpg'; // ✅ Must be relative to this file

export const Hero: React.FC = () => {
  const roles = ['FOUNDER & CEO','Developer', 'Student', 'Designer'];
  const [displayedText, setDisplayedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 1200; // Pause at end
      setTimeout(() => setIsDeleting(true), typingSpeed);
      return;
    }
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? currentRole.slice(0, charIndex - 1)
          : currentRole.slice(0, charIndex + 1)
      );
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="uppercase tracking-wide text-2xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4 animate-fadeIn">
              {displayedText}
              <span className="inline-block w-2 h-5 bg-blue-400 ml-1 animate-pulse align-middle rounded"></span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-slideUp">
              Karthik P
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl animate-slideUp animation-delay-100">
            Founder & CEO of ZenSol Software Solutions, a software startup delivering AI-driven and full-stack solutions to real-world challenges, with expertise in web development, 
            Python programming, and UI/UX design to create impactful digital experiences.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fadeIn animation-delay-200">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg btn-glow"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-white font-medium rounded-md border border-gray-300 dark:border-gray-700 transition-all duration-300 hover:scale-105 btn-glow"
              >
                View Projects
              </a>
              <a
                href="/Karthik_Resume.pdf"
                download
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg btn-glow"
              >
                Download Resume
              </a> 
            </div>

            <div className="mt-8 flex items-center gap-x-6 justify-center md:justify-start animate-fadeIn animation-delay-300">
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <GitHub size={24} />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 transition-all duration-300 hover:scale-110"
                aria-label="Phone"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
{/* Enhanced Profile Image */}
<div className="w-72 md:w-2/5 flex-shrink-0 animate-fadeIn animation-delay-100 relative flex justify-center md:justify-end">
  <div className="relative group perspective-1000">
    {/* Outer gradient ring with glow */}
    <div className="relative w-96 h-96 rounded-full p-0 bg-gradient-to-tr from-blue-500 via-cayn-500 to-Gold-500 shadow-[0_0_50px_rgba(13, 71, 161)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_80px_rgba(13, 71, 161)]">
      
      {/* Inner ring with glass effect */}
      <div className="w-full h-full rounded-full p-1 backdrop-blur-sm bg-white/20 dark:bg-gray-900/20">
        <img
          src={
            typeof profileImage === 'string'
              ? profileImage
              : (profileImage as any).src || (profileImage as any).default
          }
          alt="Karthik P"
          className="w-full h-full rounded-full object-cover shadow-2x3 group-hover:scale-80 group-hover:rotate-2 transition-all duration-500"
        />
      </div>
    </div>

    {/* Soft floating aura glow */}
    {/* Removed pink aura glow */}

    {/* Floating particles for magic effect */}
    {/* Removed pink floating particle */}
    <div className="absolute -bottom-4 left-4 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
    <div className="absolute top-1/3 right-0 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};