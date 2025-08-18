'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Wrench, Users, Code } from 'lucide-react';

interface TimelineEvent {
  id: string;
  title: string;
  company: string;
  period: string;
  duration: string;
  description: string;
  skills: string[];
  type: 'education' | 'technical' | 'product' | 'leadership';
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  achievements?: string[];
}

const timelineData: TimelineEvent[] = [
  {
    id: 'senior-pm',
    title: 'Senior Product Manager',
    company: 'BMW AG',
    period: 'February 2023 - Present',
    duration: '2+ years',
    description:
      'Responsible for Android developer experience at BMW. Leading product strategy for 1500+ software engineers organized into 80+ teams creating Android applications for automotive.',
    skills: [
      'Product Strategy',
      'Developer Experience',
      'Large Scale Teams',
      'Android Ecosystem',
    ],
    type: 'leadership',
    icon: Users,
    achievements: [
      'Managing product portfolio for 1500+ engineers',
      'Led transition from workflow automation to comprehensive developer tools',
      'Developed Android Studio plugins and GitHub bots',
    ],
  },
  {
    id: 'product-owner',
    title: 'Product Owner',
    company: 'BMW AG',
    period: 'January 2017 - February 2023',
    duration: '6+ years',
    description:
      'Creator and owner of a simulation tool for autonomous driving development and testing. Led product roadmap creation, customer discovery, and backlog ownership.',
    skills: [
      'Product Roadmaps',
      'Customer Discovery',
      'Autonomous Driving',
      'Simulation Tools',
    ],
    type: 'product',
    icon: Briefcase,
    achievements: [
      'Built ADAS Simulator from concept to production',
      'Established customer feedback loops and requirements process',
      'Managed product backlog and stakeholder communications',
    ],
  },
  {
    id: 'simulation-engineer-bmw',
    title: 'Simulation and Data Engineer',
    company: 'BMW AG',
    period: 'May 2016 - October 2021',
    duration: '5+ years',
    description:
      'Technical foundation role that overlapped with Product Owner responsibilities, providing deep technical expertise in simulation and data engineering.',
    skills: ['C++', 'Python', 'Data Engineering', 'Simulation Systems'],
    type: 'technical',
    icon: Code,
    achievements: [
      'Developed core simulation algorithms',
      'Built data processing pipelines',
      'Contributed to technical architecture decisions',
    ],
  },
  {
    id: 'simulation-engineer-tc',
    title: 'Simulation Engineer',
    company: 'TechConnect GmbH',
    period: 'November 2013 - May 2016',
    duration: '2.5 years',
    description:
      'Entry-level engineering role focused on simulation development, establishing the technical foundation for future product leadership roles.',
    skills: [
      'Simulation Development',
      'Technical Problem Solving',
      'Engineering Fundamentals',
    ],
    type: 'technical',
    icon: Wrench,
    achievements: [
      'Developed simulation models and tools',
      'Gained experience in automotive industry',
      'Built foundational engineering skills',
    ],
  },
  {
    id: 'education',
    title: 'International BSc Computer Games Programming',
    company: 'Staffordshire University',
    period: 'September 2009 - May 2013',
    duration: '4 years',
    description:
      'First Class Honours degree providing strong technical foundation in software development, algorithms, and system design.',
    skills: [
      'Software Development',
      'Algorithms',
      'System Design',
      'Problem Solving',
    ],
    type: 'education',
    icon: GraduationCap,
    achievements: [
      'Graduated with First Class Honours',
      'Specialized in game programming and engine development',
      'Built strong foundation in C++ and software architecture',
    ],
  },
];

const getTypeColor = (type: TimelineEvent['type']) => {
  switch (type) {
    case 'leadership':
      return 'bg-purple-100 text-purple-700 border-purple-200';
    case 'product':
      return 'bg-blue-100 text-blue-700 border-blue-200';
    case 'technical':
      return 'bg-green-100 text-green-700 border-green-200';
    case 'education':
      return 'bg-orange-100 text-orange-700 border-orange-200';
    default:
      return 'bg-gray-100 text-gray-700 border-gray-200';
  }
};

const getIconColor = (type: TimelineEvent['type']) => {
  switch (type) {
    case 'leadership':
      return 'text-purple-600';
    case 'product':
      return 'text-blue-600';
    case 'technical':
      return 'text-green-600';
    case 'education':
      return 'text-orange-600';
    default:
      return 'text-gray-600';
  }
};

export function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Career Journey</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From technical engineering to product leadership, building developer
            tools that empower teams at scale
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:-ml-px w-0.5 h-full bg-gray-300"></div>

          <div className="space-y-12">
            {timelineData.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot and icon */}
                  <div
                    className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10 w-16 h-16 rounded-full bg-white border-4 ${
                      getTypeColor(event.type).split(' ')[2]
                    } shadow-lg flex items-center justify-center`}
                  >
                    <event.icon
                      className={`w-6 h-6 ${getIconColor(event.type)}`}
                    />
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-28 md:ml-0 md:w-5/12 ${
                      isEven ? 'md:pr-16' : 'md:pl-16'
                    }`}
                  >
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(event.type)}`}
                        >
                          {event.type.charAt(0).toUpperCase() +
                            event.type.slice(1)}
                        </span>
                        <span className="text-sm text-gray-500">
                          {event.duration}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {event.title}
                      </h3>
                      <h4 className="text-lg font-medium text-gray-700 mb-2">
                        {event.company}
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">
                        {event.period}
                      </p>
                      <p className="text-gray-700 mb-4">{event.description}</p>

                      {event.achievements && (
                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-gray-900 mb-2">
                            Key Achievements:
                          </h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            {event.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {event.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
