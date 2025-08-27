import React, { useState } from 'react';
import { skills } from '../data';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'technical' | 'design' | 'soft'>('all');

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveCategory('technical')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === 'technical'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Technical
            </button>
            <button
              onClick={() => setActiveCategory('design')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === 'design'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Design
            </button>
            <button
              onClick={() => setActiveCategory('soft')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === 'soft'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Soft Skills
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow animate-fadeIn"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {skill.name}
              </h3>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-2">
                <div
                  className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%`, transitionDelay: `${index * 100}ms` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>Beginner</span>
                <span>{skill.level}%</span>
                <span>Expert</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};