import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | PM Portfolio',
  description:
    'Get in touch to discuss product management opportunities, collaborations, or consulting engagements.',
  keywords: [
    'contact',
    'product manager',
    'BMW',
    'developer tools',
    'automotive software',
    'collaboration',
  ],
  openGraph: {
    title: 'Contact | PM Portfolio',
    description:
      'Get in touch to discuss product management opportunities, collaborations, or consulting engagements.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header spacing for fixed navigation */}
      <div className="pt-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Let&apos;s Connect
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Interested in discussing potential collaborations? I&apos;d love
              to hear from you.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Email Card */}
            <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Email
              </h3>
              <p className="text-gray-600 mb-4">
                Let&apos;s get in touch via email
              </p>
              <a
                href="mailto:nickdunning.90@proton.me"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors group-hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send me an email
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                LinkedIn
              </h3>
              <p className="text-gray-600 mb-4">
                Let&apos;s connect professionally
              </p>
              <a
                href="https://www.linkedin.com/in/nick-dunning-in-muc/"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors group-hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>

            {/* Location Card */}
            <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Location
              </h3>
              <p className="text-gray-600 mb-4">Based in Bavaria</p>
              <div className="text-gray-900 font-medium">
                Munich, Germany
                <div className="text-sm text-gray-500 mt-1">
                  🇩🇪 Central European Time
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  How I Can Help
                </h2>
                <p className="text-xl text-gray-600">
                  Expertise in product management and automotive technology
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Product Strategy Card */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Product Strategy & Roadmapping
                  </h3>
                  <p className="text-gray-600">
                    8 years building products that transform how engineering
                    teams work
                  </p>
                </div>

                {/* Team Transformation Card */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Team Transformation
                  </h3>
                  <p className="text-gray-600">
                    Helped engineers transition to Product Owner roles and scale
                    agile practices
                  </p>
                </div>

                {/* Developer Tools Card */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 9l3 3-3 3m13 0h-6m-8-4a9 9 0 1118 0 9 9 0 01-18 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Developer Tools & Platforms
                  </h3>
                  <p className="text-gray-600">
                    Built internal tools that became enterprise products serving
                    1500+ engineers
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="inline-flex items-center bg-gray-50 rounded-full px-6 py-3">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700 font-medium">
                    Available for full-time opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
