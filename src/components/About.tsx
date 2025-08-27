import React from 'react';
import { aboutMe } from '../data';
import { Award, Book, Code, User } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center transform transition-all duration-500 hover:scale-105">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {/* Bio */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full transform transition-all duration-500 hover:rotate-12">
                  <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Biography</h3>
              </div>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                {aboutMe.split('\n\n').map((paragraph, index) => (
                  paragraph.trim() && (
                    <p key={index} className="leading-relaxed">
                      {paragraph}
                    </p>
                  )
                ))}
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Education */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full transform transition-all duration-500 hover:rotate-12">
                    <Book className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Education</h4>
                </div>
                <div className="text-gray-700 dark:text-gray-300">
                  <p className="font-medium">Bachelor of Information Technology</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Sri Ramakrishna College of Arts & Science</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">2023 - Present</p>
                </div>
              </div>

              {/* Experience */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full transform transition-all duration-500 hover:rotate-12">
                    <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Experience</h4>
                </div>
                <div className="text-gray-700 dark:text-gray-300">
                  <p className="font-medium">Developer & Graphic Designer</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Web Development & UI/UX</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">2023</p>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full transform transition-all duration-500 hover:rotate-12">
                    <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Certifications</h4>
                </div>
                <div className="text-gray-700 dark:text-gray-300">
                  <p className="font-medium">Web Development</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Certified by MachIT</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};