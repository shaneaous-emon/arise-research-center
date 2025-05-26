import React from 'react';
import PageHero from '../components/common/PageHero';
import SectionTitle from '../components/common/SectionTitle';

const FAQ: React.FC = () => {
  const faqCategories = [
    {
      title: "Research & Collaboration",
      questions: [
        {
          q: "How can I collaborate with ARISE?",
          a: "We welcome collaborations with academic institutions, industry partners, and researchers. You can initiate a collaboration by contacting us through our website's contact form or by emailing info@arise-research.org with details about your proposed collaboration."
        },
        {
          q: "What are ARISE's main research areas?",
          a: "Our core research areas include Generative AI, Explainable AI (XAI), Natural Language Processing, Human-AI Interaction, Computer Vision, and AI for Social Good. Each area focuses on both fundamental research and practical applications."
        },
        {
          q: "Do you provide funding for research projects?",
          a: "Yes, we offer various funding opportunities through grants, industry partnerships, and sponsored research programs. Contact our research office for specific funding opportunities."
        }
      ]
    },
    {
      title: "Education & Opportunities",
      questions: [
        {
          q: "What opportunities are available for students?",
          a: "We offer PhD positions, research assistantships, internships, and collaborative projects for students. Check our Careers page for current openings and application procedures."
        },
        {
          q: "Do you offer training programs or workshops?",
          a: "Yes, we regularly organize workshops, summer schools, and training programs on various AI topics. Subscribe to our newsletter to stay informed about upcoming educational opportunities."
        },
        {
          q: "Can I visit ARISE for a research stay?",
          a: "We welcome visiting researchers and students. Please contact us with your research proposal and preferred timeline for visiting opportunities."
        }
      ]
    },
    {
      title: "Publications & Resources",
      questions: [
        {
          q: "How can I access ARISE's research publications?",
          a: "Our publications are available through our website's Publications section. Many are open access, while others may be accessed through academic databases or by contacting the authors directly."
        },
        {
          q: "Do you share research code and datasets?",
          a: "Yes, we are committed to open science. Most of our research code is available on our GitHub repository, and datasets are shared when possible, subject to privacy and legal considerations."
        }
      ]
    },
    {
      title: "General Information",
      questions: [
        {
          q: "Where is ARISE located?",
          a: "Our main research center is located at 123 AI Innovation Boulevard, Tech City, TC 12345. We also have satellite offices and collaborators worldwide."
        },
        {
          q: "How can I stay updated about ARISE's activities?",
          a: "You can follow us on social media, subscribe to our newsletter, and regularly check our News section for updates about our research and activities."
        },
        {
          q: "How can I support ARISE's research?",
          a: "There are several ways to support our research: through research collaborations, industrial partnerships, sponsorships, or by joining our team. Contact us to discuss potential opportunities."
        }
      ]
    }
  ];

  return (
    <div>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about ARISE Research Center"
        backgroundImage="https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12 last:mb-0">
              <SectionTitle
                title={category.title}
                centered={false}
              />
              
              <div className="space-y-6 mt-8">
                {category.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="bg-neutral-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-primary-800 mb-3">
                      {faq.q}
                    </h3>
                    <p className="text-neutral-600">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Our team is here to help. Get in touch with us for any additional questions or clarifications.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent-300 text-primary-800 font-medium rounded-lg hover:bg-accent-400 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
