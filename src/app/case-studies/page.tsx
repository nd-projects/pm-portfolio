import { Metadata } from 'next';
import CaseStudiesClient from './case-studies-client';
import { getAllCaseStudies } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Case Studies | PM Portfolio - Developer Tools That Transform Teams',
  description:
    'Deep dives into the developer tools and platforms that improved safety coverage by 40% and transformed how BMW engineers build automotive software.',
  keywords:
    'Case Studies, ADAS Simulator, Android Studio Plugin, Developer Tools, Product Management, BMW',
  openGraph: {
    title: 'Case Studies | Developer Tools That Transform Teams',
    description:
      'Deep dives into the developer tools and platforms that improved safety coverage by 40% and transformed how BMW engineers build automotive software.',
    type: 'website',
  },
  robots: 'index, follow',
};

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();
  return <CaseStudiesClient caseStudies={caseStudies} />;
}
