'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code2, GitPullRequest, FileText, Zap } from 'lucide-react';

interface CodeExample {
  title: string;
  description: string;
  language: string;
  code: string;
  impact: string;
  context: string;
}

interface TechnicalContribution {
  type: string;
  title: string;
  description: string;
  impact: string;
  technologies: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const codeExamples: CodeExample[] = [
  {
    title: 'Automated Test Scenario Generator',
    description:
      'Python framework I built to generate safety-critical test scenarios from real crash data',
    language: 'python',
    code: `class SafetyScenarioGenerator:
    def __init__(self, crash_database, weather_api):
        self.crash_db = crash_database
        self.weather = weather_api
        
    def generate_critical_scenarios(self, vehicle_type):
        scenarios = []
        for crash in self.crash_db.get_critical_cases():
            # Generate variations with different conditions
            variations = self._create_variations(crash)
            for variant in variations:
                scenario = TestScenario(
                    initial_conditions=variant.setup,
                    expected_behavior=variant.safety_response,
                    pass_criteria=self._calculate_thresholds(crash.severity)
                )
                scenarios.append(scenario)
        return scenarios`,
    impact:
      'Generated 240M virtual test kilometers, reduced testing cycle from 6 weeks to 2 days',
    context:
      'ADAS Simulator - As PM, I prototyped the core algorithm that became the production system',
  },
  {
    title: 'Android Studio Plugin Architecture',
    description:
      'Kotlin plugin framework that automated BMW-specific development workflows',
    language: 'kotlin',
    code: `class BMWWorkflowPlugin : AnActionGroup() {
    
    override fun getChildren(e: AnActionEvent?): Array<AnAction> {
        return arrayOf(
            GenerateBMWBoilerplate(),
            RunComplianceChecks(),
            DeployToTestEnvironment()
        )
    }
    
    private class GenerateBMWBoilerplate : AnAction() {
        override fun actionPerformed(e: AnActionEvent) {
            val project = e.project ?: return
            val templates = BMWTemplateManager.getAvailableTemplates()
            
            templates.forEach { template ->
                CodeGenerator.createFromTemplate(
                    template = template,
                    project = project,
                    variables = BMWProjectContext.getVariables()
                )
            }
        }
    }
}`,
    impact:
      'Saved 400+ hours weekly across 200+ developers, reduced onboarding time from 2 weeks to 3 days',
    context:
      'Developer Productivity Tool - I coded the initial MVP to demonstrate feasibility to engineering',
  },
  {
    title: 'Documentation AI Query Router',
    description:
      'Intelligent routing system that connects engineers to relevant documentation in <30 seconds',
    language: 'typescript',
    code: `interface DocumentationQuery {
  query: string;
  context: ProjectContext;
  urgency: Priority;
}

class IntelligentDocRouter {
  async routeQuery(query: DocumentationQuery): Promise<RouteResult> {
    // Semantic analysis of the query
    const intent = await this.semanticAnalyzer.classify(query.query);
    const keywords = this.extractTechnicalKeywords(query.query);
    
    // Multi-source search with weighted scoring
    const sources = await Promise.all([
      this.searchConfluence(keywords, intent.confidence),
      this.searchCodebase(keywords, query.context),
      this.searchJIRA(keywords, query.urgency),
      this.searchSlack(keywords, intent.timeframe)
    ]);
    
    return this.rankAndDeduplicateResults(sources, intent);
  }
}`,
    impact:
      'Reduced documentation support tickets by 60%, improved engineer self-service from 20% to 85%',
    context:
      'Documentation Assistant - Built prototype to validate ML approach before team implementation',
  },
];

const technicalContributions: TechnicalContribution[] = [
  {
    type: 'Architecture',
    title: 'Microservices Migration Strategy',
    description:
      'Led technical decision-making for migrating monolithic ADAS systems to microservices, balancing safety requirements with development velocity',
    impact:
      'Reduced deployment time from 6 hours to 15 minutes, enabled independent team releases',
    technologies: ['Docker', 'Kubernetes', 'gRPC', 'Service Mesh'],
    icon: Code2,
  },
  {
    type: 'Process',
    title: 'Safety-First PR Review Framework',
    description:
      'Created technical review process that I personally used to review 200+ pull requests, focusing on safety-critical code paths',
    impact:
      'Zero safety bugs reached production in 18 months, improved code quality metrics by 40%',
    technologies: ['Git', 'SonarQube', 'Safety Standards', 'Code Quality'],
    icon: GitPullRequest,
  },
  {
    type: 'Documentation',
    title: 'Technical Decision Records (TDRs)',
    description:
      'Established lightweight documentation framework capturing technical decisions with business context for future PM handovers',
    impact:
      'Reduced onboarding time for new PMs from 4 weeks to 1 week, created knowledge base of 50+ decisions',
    technologies: [
      'Markdown',
      'Git',
      'Decision Architecture',
      'Knowledge Management',
    ],
    icon: FileText,
  },
];

export function TechnicalShowcase() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical Leadership in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As a PM who codes, I don&apos;t just write requirements—I prototype
            solutions, review architecture, and guide technical decisions
          </p>
        </motion.div>

        <Tabs defaultValue="code" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="code" className="flex items-center gap-2">
              <Code2 className="h-4 w-4" />
              Code I&apos;ve Written
            </TabsTrigger>
            <TabsTrigger value="leadership" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Technical Leadership
            </TabsTrigger>
          </TabsList>

          <TabsContent value="code" className="space-y-8">
            {codeExamples.map((example, index) => (
              <motion.div
                key={example.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white shadow-lg">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">
                          {example.title}
                        </CardTitle>
                        <p className="text-gray-600 mb-4">
                          {example.description}
                        </p>
                        <Badge variant="outline" className="mb-2">
                          {example.language}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
                        <code>{example.code}</code>
                      </pre>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                        <h4 className="font-semibold text-green-800 mb-2">
                          Impact
                        </h4>
                        <p className="text-sm text-green-700">
                          {example.impact}
                        </p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                        <h4 className="font-semibold text-blue-800 mb-2">
                          Context
                        </h4>
                        <p className="text-sm text-blue-700">
                          {example.context}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="leadership" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {technicalContributions.map((contribution, index) => (
                <motion.div
                  key={contribution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <contribution.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <Badge variant="secondary">{contribution.type}</Badge>
                      </div>
                      <CardTitle className="text-lg">
                        {contribution.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 text-sm">
                        {contribution.description}
                      </p>

                      <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                        <h4 className="font-semibold text-green-800 mb-1 text-sm">
                          Result
                        </h4>
                        <p className="text-xs text-green-700">
                          {contribution.impact}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {contribution.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
