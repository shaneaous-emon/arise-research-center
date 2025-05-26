import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionTitle from '../components/common/SectionTitle';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmitStatus('submitting');

    try {
      // Here you would typically make an API call to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const faqs = [
    {
      question: "What is the typical response time for inquiries?",
      answer: "We strive to respond to all inquiries within 24-48 business hours."
    },
    {
      question: "Can I visit the research center in person?",
      answer: "Yes, you can visit our research center during office hours. We recommend scheduling an appointment first to ensure staff availability."
    },
    {
      question: "How can I collaborate with ARISE?",
      answer: "You can initiate a collaboration by filling out our contact form or emailing us directly. Please include details about your proposed collaboration."
    }
  ];

  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team to learn more about our research and collaboration opportunities."
        backgroundImage="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-6">Get in Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary-800 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-1">Visit Us</h3>
                    <p className="text-neutral-600">
                      123 AI Innovation Boulevard<br />
                      Tech City, TC 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary-800 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-1">Email Us</h3>
                    <p className="text-neutral-600">
                      <a href="mailto:info@arise-research.org" className="hover:text-primary-800">
                        info@arise-research.org
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary-800 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-1">Call Us</h3>
                    <p className="text-neutral-600">
                      <a href="tel:+15551234567" className="hover:text-primary-800">
                        +1 (555) 123-4567
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-primary-800 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-1">Office Hours</h3>
                    <p className="text-neutral-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="h-64 rounded-lg overflow-hidden mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25987368715491!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ARISE Research Center Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.name ? 'border-red-500' : 'border-neutral-300'
                    } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    required
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-neutral-300'
                    } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.subject ? 'border-red-500' : 'border-neutral-300'
                    } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    required
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.message ? 'border-red-500' : 'border-neutral-300'
                    } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    required
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={submitStatus === 'submitting'}
                    className={`w-full px-6 py-3 bg-primary-800 text-white font-medium rounded-lg transition-colors ${
                      submitStatus === 'submitting'
                        ? 'opacity-75 cursor-not-allowed'
                        : 'hover:bg-primary-700'
                    }`}
                  >
                    {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 text-green-800 rounded-lg">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 text-red-800 rounded-lg">
                    Sorry, there was an error sending your message. Please try again later.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Quick answers to common inquiries"
            centered={true}
          />

          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-primary-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-neutral-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;