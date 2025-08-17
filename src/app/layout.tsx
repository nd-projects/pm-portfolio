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
  title:
    'Product Manager Portfolio | Building Developer Tools That Ship Safer Cars',
  description:
    '8 years transforming how 200+ BMW engineers build, test, and deploy automotive software. Technical PM specializing in developer tools and platform products.',
  keywords:
    'Product Manager, Developer Tools, Automotive Software, BMW, Technical PM, Platform Products',
  authors: [{ name: 'PM Portfolio' }],
  openGraph: {
    title:
      'Product Manager Portfolio | Building Developer Tools That Ship Safer Cars',
    description:
      '8 years transforming how 200+ BMW engineers build, test, and deploy automotive software.',
    type: 'website',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
