import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on scope and complexity. Most websites take 4-12 weeks from discovery to launch. We provide detailed timelines during the initial consultation and keep you updated throughout the process.',
  },
  {
    id: 2,
    question: 'Do you offer ongoing support and maintenance?',
    answer: 'Yes! We offer comprehensive support packages including updates, security monitoring, performance optimization, and feature enhancements. We can tailor a plan that fits your needs.',
  },
  {
    id: 3,
    question: 'What is your design and development process?',
    answer: 'Our process includes discovery, strategy, design, development, testing, and launch phases. We maintain close collaboration with clients throughout, with regular check-ins and feedback sessions.',
  },
  {
    id: 4,
    question: 'Can you help with SEO and digital marketing?',
    answer: 'Absolutely! We build SEO best practices into every project and offer strategic consulting for digital marketing. We can also recommend trusted partners for comprehensive marketing campaigns.',
  },
  {
    id: 5,
    question: 'What technologies do you use?',
    answer: 'We use modern, industry-leading technologies including React, TypeScript, Tailwind CSS, Node.js, and more. We choose the best tools for each project to ensure performance, scalability, and maintainability.',
  },
];

function FAQItem({ faq, isOpen, onClick }: { faq: typeof faqs[0]; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="card-organic overflow-hidden">
      <button
        onClick={onClick}
        className="w-full px-6 md:px-8 py-6 flex items-start justify-between gap-4 hover:bg-accent/5 transition-colors duration-200 text-left"
      >
        <span className="text-lg font-semibold text-foreground pr-4">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-6 md:px-8 pb-6 border-t border-border/50">
          <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openId, setOpenId] = useState<number | null>(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.faq-item');
            items.forEach((item, index) => {
              (item as HTMLElement).style.animation = `fadeInUp 0.6s ease-out ${index * 0.08}s both`;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Find answers to common questions about our services and process.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="faq-item">
              <FAQItem
                faq={faq}
                isOpen={openId === faq.id}
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
