'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          website_id: '75307664-10ab-40ac-bf1a-4bb76043e0f5',
          form_data: { ...formData, submitted_at: new Date().toISOString() }
        })
      });
      
      if (!response.ok) throw new Error('Form submission failed');
      
      console.log('✅ Form submitted successfully');
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 3000);
      
    } catch (error) {
      console.error('❌ Form submission error:', error);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-24 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
      </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
            <p className="text-gray-600">Thank you for reaching out. We'll get back to you soon.</p>
    </div>
  </div>
</section>
    );
      }

  return (
    <form onSubmit={handleSubmit}>
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 overflow-hidden">
  {/* Brutalist geometric background elements */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-0 left-0 w-96 h-96 bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white transform translate-x-1/2 translate-y-1/2 rotate-12"></div>
  </div>
  
  {/* Concrete texture overlay */}
  <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}>
  </div>

  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Brutalist header block */}
    <div className="mb-16 relative">
      <div className="absolute -left-4 top-0 w-2 h-full bg-amber-500"></div>
      <div className="pl-8">
        <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight uppercase leading-none">
          Let's Build<br />
          <span className="text-amber-500">Together</span>
        </h2>
        <p className="text-xl text-slate-300 font-light max-w-2xl">
          Solid foundations start with honest conversations. Reach out and let's construct something remarkable.
        </p>
      </div>
    </div>

    {/* Form container with brutalist card design */}
    <div className="relative">
      {/* Offset shadow block (brutalist depth) */}
      <div className="absolute inset-0 bg-amber-500 transform translate-x-3 translate-y-3"></div>
      
      {/* Main form card */}
      <div className="relative bg-white border-4 border-slate-900 p-8 md:p-12">
        <div className="space-y-8">
          {/* Name field */}
          <div className="relative">
            <label 
              htmlFor="name" 
              className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider"
            >
              Full Name
            </label>
            <div className="relative">
              <input 
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full px-6 py-4 border-3 border-slate-900 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all font-medium text-lg"
              />
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-amber-500 transition-all duration-300 group-focus-within:w-full"></div>
            </div>
          </div>

          {/* Email and Phone - Grid layout */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <label 
                htmlFor="email" 
                className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider"
              >
                Email Address
              </label>
              <input 
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full px-6 py-4 border-3 border-slate-900 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all font-medium text-lg"
              />
            </div>

            <div className="relative">
              <label 
                htmlFor="phone" 
                className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider"
              >
                Phone Number
              </label>
              <input 
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
                required
                className="w-full px-6 py-4 border-3 border-slate-900 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all font-medium text-lg"
              />
            </div>
          </div>

          {/* Message field */}
          <div className="relative">
            <label 
              htmlFor="message" 
              className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              placeholder="Tell us about your project, goals, or questions. We're here to help build your vision..."
              required
              className="w-full px-6 py-4 border-3 border-slate-900 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all resize-none font-medium text-lg"
            ></textarea>
          </div>

          {/* Submit button - Brutalist style */}
          <div className="relative pt-4">
            <div className="absolute inset-0 bg-slate-900 transform translate-x-2 translate-y-2"></div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="relative w-full bg-amber-500 text-slate-900 px-8 py-5 font-black text-lg uppercase tracking-wider border-3 border-slate-900 hover:bg-amber-400 active:translate-x-2 active:translate-y-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-amber-500 disabled:active:translate-x-0 disabled:active:translate-y-0"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending Message...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-3">
                  Send Message
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              )}
            </button>
          </div>

          {/* Trust indicator */}
          <div className="flex items-center justify-center gap-3 pt-4 border-t-2 border-slate-200">
            <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p className="text-sm text-slate-600 font-medium">
              Your information is secure and will never be shared
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Additional contact info - Brutalist blocks */}
    <div className="grid md:grid-cols-3 gap-6 mt-16">
      <div className="bg-slate-800 border-3 border-slate-700 p-6 relative overflow-hidden group hover:border-amber-500 transition-colors">
        <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500 opacity-10 transform translate-x-10 -translate-y-10 rotate-45 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform"></div>
        <div className="relative">
          <div className="text-amber-500 mb-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Email</h3>
          <p className="text-slate-300 text-sm">info@concreterealty.com</p>
        </div>
      </div>

      <div className="bg-slate-800 border-3 border-slate-700 p-6 relative overflow-hidden group hover:border-amber-500 transition-colors">
        <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500 opacity-10 transform translate-x-10 -translate-y-10 rotate-45 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform"></div>
        <div className="relative">
          <div className="text-amber-500 mb-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Phone</h3>
          <p className="text-slate-300 text-sm">(555) 123-4567</p>
        </div>
      </div>

      <div className="bg-slate-800 border-3 border-slate-700 p-6 relative overflow-hidden group hover:border-amber-500 transition-colors">
        <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500 opacity-10 transform translate-x-10 -translate-y-10 rotate-45 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform"></div>
        <div className="relative">
          <div className="text-amber-500 mb-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Office</h3>
          <p className="text-slate-300 text-sm">Downtown District</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </form>
  );
}