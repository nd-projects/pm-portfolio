'use client';

import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

interface FormState {
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setFormState({
      isSubmitting: true,
      isSubmitted: false,
      error: null,
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setFormState({
        isSubmitting: false,
        isSubmitted: true,
        error: null,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        error:
          error instanceof Error
            ? error.message
            : 'Something went wrong. Please try again.',
      });
    }
  };

  if (formState.isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Message Sent!
          </h3>
          <p className="text-gray-600 mb-6">
            Thank you for reaching out. I&apos;ll get back to you within 24
            hours.
          </p>
          <Button
            onClick={() =>
              setFormState({
                isSubmitting: false,
                isSubmitted: false,
                error: null,
              })
            }
            variant="outline"
          >
            Send Another Message
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Send a Message
          </h2>
        </div>

        {formState.error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-50 border border-red-200 rounded-lg"
          >
            <p className="text-red-700 text-sm">{formState.error}</p>
          </motion.div>
        )}

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Your company"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white"
            >
              <option value="">Select a topic</option>
              <option value="job-opportunity">Job Opportunity</option>
              <option value="consulting">Consulting Inquiry</option>
              <option value="collaboration">Collaboration</option>
              <option value="speaking">Speaking Engagement</option>
              <option value="general">General Question</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
            placeholder="Tell me about your project, opportunity, or question..."
          />
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">* Required fields</p>
          <Button
            type="submit"
            disabled={
              formState.isSubmitting ||
              !formData.name ||
              !formData.email ||
              !formData.message
            }
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {formState.isSubmitting ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
