import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/sections/Navigation';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pm-portfolio.vercel.app'),
  title:
    'Product Manager Portfolio | Building Developer Tools That Ship Safer Cars',
  description:
    '8 years transforming how 200+ BMW engineers build, test, and deploy automotive software. Technical PM specializing in developer tools and platform products.',
  keywords: [
    'technical product manager automotive',
    'developer tools product management',
    'BMW software development',
    'automotive software PM',
    'ADAS product management',
    'platform products',
    'developer productivity tools',
  ],
  authors: [{ name: 'Technical Product Manager' }],
  creator: 'Technical Product Manager',
  publisher: 'PM Portfolio',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://pm-portfolio.vercel.app',
  },
  openGraph: {
    title:
      'Product Manager Portfolio | Building Developer Tools That Ship Safer Cars',
    description:
      '8 years transforming how 200+ BMW engineers build, test, and deploy automotive software. Technical PM specializing in developer tools and platform products.',
    type: 'website',
    url: 'https://pm-portfolio.vercel.app',
    siteName: 'PM Portfolio',
    locale: 'en_US',
    images: [
      {
        url: '/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Technical Product Manager - Building Developer Tools That Ship Safer Cars',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Product Manager Portfolio | Building Developer Tools That Ship Safer Cars',
    description:
      '8 years transforming how 200+ BMW engineers build, test, and deploy automotive software.',
    images: ['/assets/og-image.png'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Technical Product Manager',
    jobTitle: 'Senior Technical Product Manager',
    description:
      '8 years transforming how 200+ BMW engineers build, test, and deploy automotive software. Technical PM specializing in developer tools and platform products.',
    url: 'https://pm-portfolio.vercel.app',
    image: 'https://pm-portfolio.vercel.app/assets/profile-photo.jpg',
    sameAs: [
      'https://linkedin.com/in/technical-pm',
      'https://github.com/technical-pm',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'BMW Group',
      url: 'https://bmw.com',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'University',
    },
    knowsAbout: [
      'Product Management',
      'Developer Tools',
      'Automotive Software',
      'ADAS Systems',
      'Platform Products',
      'Technical Leadership',
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional Experience',
      educationalLevel: '8 years',
      about: 'Technical Product Management in Automotive Software',
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
