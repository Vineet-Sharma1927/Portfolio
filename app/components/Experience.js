import React from 'react';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: 'Jan 2022 - Present',
      description: 'Developing responsive web applications using React and Next.js. Implementing UI/UX designs and working with RESTful APIs.',
      responsibilities: [
        'Built and maintained multiple client-facing web applications',
        'Improved application performance by 30% through code optimization',
        'Collaborated with UI/UX designers to implement responsive designs',
        'Integrated third-party APIs and services'
      ]
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'Data Systems Ltd.',
      period: 'Jun 2020 - Dec 2021',
      description: 'Worked on server-side development using Node.js, Express, and MongoDB. Designed and implemented RESTful APIs.',
      responsibilities: [
        'Developed and maintained RESTful APIs using Node.js and Express',
        'Designed MongoDB database schemas and implemented data validation',
        'Created authentication and authorization systems',
        'Wrote comprehensive unit and integration tests'
      ]
    },
    {
      id: 3,
      title: 'Web Development Intern',
      company: 'Digital Innovations',
      period: 'Jan 2020 - May 2020',
      description: 'Assisted in developing web applications and learned various technologies and frameworks.',
      responsibilities: [
        'Assisted senior developers in building web applications',
        'Learned and implemented best practices in web development',
        'Fixed bugs and improved existing features',
        'Participated in code reviews and team meetings'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Experience</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and career highlights
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div 
              key={exp.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                  <p className="text-xl text-indigo-600 dark:text-indigo-400">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm">
                    {exp.period}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">{exp.description}</p>
              
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Key Responsibilities:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 