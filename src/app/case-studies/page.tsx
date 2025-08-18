import { Metadata } from 'next';
import CaseStudiesClient from './case-studies-client';
import { getAllCaseStudies } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Case Studies | PM Portfolio - Developer Tools That Transform Teams',
  description:
    'Deep dives into the developer tools and platforms that improved safety coverage by 40% and transformed how BMW engineers build automotive software.',
  keywords: [
    'case studies',
    'ADAS simulator product management',
    'Android Studio plugin development',
    'developer tools BMW',
    'automotive software case studies',
    'technical PM portfolio',
    'platform product management',
  ],
  alternates: {
    canonical: 'https://pm-portfolio.vercel.app/case-studies',
  },
  openGraph: {
    title: 'Case Studies | Developer Tools That Transform Teams',
    description:
      'Deep dives into the developer tools and platforms that improved safety coverage by 40% and transformed how BMW engineers build automotive software.',
    type: 'website',
    url: 'https://pm-portfolio.vercel.app/case-studies',
    siteName: 'PM Portfolio',
    images: [
      {
        url: '/assets/case-studies-og.png',
        width: 1200,
        height: 630,
        alt: 'Case Studies - Developer Tools That Transform Teams',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | Developer Tools That Transform Teams',
    description:
      'Deep dives into ADAS Simulator, Android Studio Plugin, and Documentation AI Assistant that transformed BMW engineering workflows.',
    images: ['/assets/case-studies-og.png'],
  },
  robots: 'index, follow',
};

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();
  return <CaseStudiesClient caseStudies={caseStudies} />;
}
