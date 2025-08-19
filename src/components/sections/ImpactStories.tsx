'use client';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Zap, Code } from 'lucide-react';
import React from 'react';

interface ImpactStory {
  title: string;
  problem: string;
  solution: string;
  impact: {
    metric: string;
    value: string;
    improvement: string;
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  tags: string[];
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const impactStories: ImpactStory[] = [
  {
    title: 'ADAS Simulator Platform',
    problem:
      'Engineers spent 45+ minutes per build cycle testing safety-critical features manually',
    solution:
      'Built comprehensive simulation platform with automated testing pipelines and realistic scenario generation',
    impact: {
      metric: 'Build-Test Cycle Time',
      value: '12 minutes',
      improvement: '73% faster iteration',
    },
    testimonial: {
      quote:
        'The simulation platform completely transformed how we validate safety features. What used to take hours now happens automatically.',
      author: 'Senior Safety Engineer',
      role: 'BMW ADAS Team',
    },
    tags: ['C++', 'Unity', 'Safety Systems', 'Automation'],
    icon: Shield,
    color: 'bg-blue-50 border-blue-200',
  },
  {
    title: 'Android Studio Developer Plugin',
    problem:
      '200+ developers losing 2+ hours daily to repetitive BMW-specific development tasks',
    solution:
      'Created intelligent plugin automating code generation, compliance checks, and deployment workflows',
    impact: {
      metric: 'Developer Productivity',
      value: '400+ hours',
      improvement: 'saved weekly across team',
    },
    testimonial: {
      quote:
        'This plugin eliminated the tedious parts of our workflow. I can focus on building features instead of fighting tooling.',
      author: 'Android Team Lead',
      role: 'BMW Mobile Platform',
    },
    tags: ['Kotlin', 'IntelliJ Platform', 'Developer Tools', 'Automation'],
    icon: Code,
    color: 'bg-green-50 border-green-200',
  },
  {
    title: 'Documentation AI Assistant',
    problem:
      "Technical documentation scattered across 15+ systems, engineers couldn't find critical information",
    solution:
      'Deployed intelligent routing system connecting engineers to right documentation in <30 seconds',
    impact: {
      metric: 'Support Ticket Reduction',
      value: '60%',
      improvement: 'fewer documentation requests',
    },
    testimonial: {
      quote:
        "Instead of asking teammates for links, I get instant answers. It's like having a documentation expert on call.",
      author: 'Platform Engineer',
      role: 'BMW Developer Experience',
    },
    tags: ['NLP', 'Knowledge Management', 'Developer Experience', 'AI'],
    icon: Zap,
    color: 'bg-purple-50 border-purple-200',
  },
];

export function ImpactStories() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming Developer Workflows
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How technical product management turned internal frustrations into
            enterprise-grade solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {impactStories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card
                className={`h-full ${story.color} hover:shadow-lg transition-shadow duration-300`}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <story.icon className="h-6 w-6 text-gray-700" />
                    </div>
                    <CardTitle className="text-xl">{story.title}</CardTitle>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {story.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">
                      The Problem
                    </h4>
                    <p className="text-sm text-gray-700">{story.problem}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">
                      The Solution
                    </h4>
                    <p className="text-sm text-gray-700">{story.solution}</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold text-green-700 mb-2">
                      Impact
                    </h4>
                    <div className="text-2xl font-bold text-gray-900">
                      {story.impact.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {story.impact.metric}
                    </div>
                    <div className="text-xs text-green-600 font-medium mt-1">
                      {story.impact.improvement}
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                    <blockquote className="text-sm italic text-gray-700 mb-2">
                      &ldquo;{story.testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="text-xs text-gray-500">
                      <div className="font-medium">
                        {story.testimonial.author}
                      </div>
                      <div>{story.testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
