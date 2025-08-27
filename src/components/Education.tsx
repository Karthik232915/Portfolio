import React from 'react';
import { education, certifications, courses, achievements } from '../data';
import { Award, BookOpen, Medal, Star, Trophy } from 'lucide-react';

export type Achievement = {
  title: string;
  description: string;
  tag?: string;
};

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & <span className="text-blue-600 dark:text-blue-400">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Education & Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 mb-3">{edu.institution}</p>
                  {edu.description && (
                    <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 animate-fadeIn"
                    style={{ animationDelay: `${index * 100 + 200}ms` }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {cert.title}
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</span>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 mb-2">{cert.issuer}</p>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        View Certificate
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Courses & Achievements */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <Star className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Courses & Training</h3>
            </div>
            
            <div className="space-y-4">
              {courses.map((course, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {course.title}
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{course.date}</span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400">{course.issuer}</p>
                </div>
              ))}
            </div>

            {/* Updated Key Achievements Section */}
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <Medal className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Key Achievements</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 animate-fadeIn 
                      ${achievement.tag === 'Academic' ? 'border-l-4 border-blue-600 dark:border-blue-500' : 
                        achievement.tag === 'Professional' ? 'border-l-4 border-green-600 dark:border-green-500' :
                        achievement.tag === 'Award' ? 'border-l-4 border-purple-600 dark:border-purple-500' :
                        'border-l-4 border-gray-300 dark:border-gray-600'}`}
                    style={{ animationDelay: `${index * 100 + 200}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center
                        ${achievement.tag === 'Academic' ? 'bg-blue-100 dark:bg-blue-900/30' : 
                          achievement.tag === 'Professional' ? 'bg-green-100 dark:bg-green-900/30' :
                          achievement.tag === 'Award' ? 'bg-purple-100 dark:bg-purple-900/30' :
                          'bg-gray-100 dark:bg-gray-800'}`}>
                        {achievement.tag === 'Academic' ? (
                          <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        ) : achievement.tag === 'Professional' ? (
                          <Trophy className="w-6 h-6 text-green-600 dark:text-green-400" />
                        ) : achievement.tag === 'Award' ? (
                          <Medal className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        ) : (
                          <Star className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {achievement.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {achievement.description}
                        </p>
                        {achievement.tag && (
                          <span className={`mt-2 inline-block text-xs font-medium text-white px-2 py-1 rounded-full
                            ${achievement.tag === 'Academic' ? 'bg-blue-600 dark:bg-blue-500' : 
                              achievement.tag === 'Professional' ? 'bg-green-600 dark:bg-green-500' :
                              achievement.tag === 'Award' ? 'bg-purple-600 dark:bg-purple-500' :
                              'bg-gray-600 dark:bg-gray-500'}`}>
                            {achievement.tag}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
