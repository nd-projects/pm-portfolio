import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

// Rate limiting store (in production, use Redis or similar)
const rateLimit = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // Max 5 requests per window

  const record = rateLimit.get(ip);

  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }

  if (record.count >= maxRequests) {
    return true;
  }

  record.count++;
  return false;
}

function validateFormData(data: unknown): ContactFormData | null {
  if (!data || typeof data !== 'object') return null;

  const formData = data as Record<string, unknown>;
  const { name, email, company, subject, message } = formData;

  // Required fields validation
  if (!name || typeof name !== 'string' || name.trim().length === 0)
    return null;
  if (!email || typeof email !== 'string' || !email.includes('@')) return null;
  if (!message || typeof message !== 'string' || message.trim().length === 0)
    return null;

  // Optional fields validation
  const validCompany =
    company && typeof company === 'string' ? company.trim() : '';
  const validSubject =
    subject && typeof subject === 'string' ? subject.trim() : '';

  // Length limits
  if (name.length > 100) return null;
  if (email.length > 255) return null;
  if (validCompany.length > 100) return null;
  if (message.length > 2000) return null;

  return {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    company: validCompany,
    subject: validSubject,
    message: message.trim(),
  };
}

function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/\r\n/g, '\n') // Normalize line endings
    .trim();
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const headersList = await headers();
    const forwarded = headersList.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown';

    // Rate limiting
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    // Validate form data
    const formData = validateFormData(body);
    if (!formData) {
      return NextResponse.json(
        { error: 'Invalid form data. Please check all required fields.' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      company: sanitizeInput(formData.company),
      subject: sanitizeInput(formData.subject),
      message: sanitizeInput(formData.message),
    };

    // Simple spam detection
    const spamKeywords = ['crypto', 'bitcoin', 'investment', 'loan', 'casino'];
    const messageText = sanitizedData.message.toLowerCase();
    if (spamKeywords.some((keyword) => messageText.includes(keyword))) {
      return NextResponse.json(
        { error: 'Message contains prohibited content' },
        { status: 400 }
      );
    }

    // TODO: Integrate with email service
    // For now, log the message (in production, send email)
    console.log('Contact form submission:', {
      ...sanitizedData,
      timestamp: new Date().toISOString(),
      ip,
    });

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
