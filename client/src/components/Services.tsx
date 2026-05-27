import { useEffect, useRef } from 'react';
import { Code, Palette, Zap, BarChart3, Search, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed with user experience at the core. We create designs that delight.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom-built websites and applications using modern technologies. Fast, secure, and scalable solutions.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast loading times and smooth interactions. We optimize every aspect of your digital presence.',
  },
  {
    icon: Search,
    title: 'SEO & Analytics',
    description: 'Strategic optimization to improve visibility, drive traffic, and measure what matters most.',
  },
  {
    icon: BarChart3,
    title: 'Digital Strategy',
    description: 'Comprehensive strategy and consulting to align your digital presence with business goals.',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              (card as HTMLElement).style.animation = `fadeInUp 0.6s ease-out ${index * 0.08}s both`;
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
    <section id="services" ref={sectionRef} className="py-24 md:py-32 bg-gradient-to-b from-background via-background to-accent/5">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your unique needs and business objectives.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="service-card card-organic p-8 hover-lift group relative overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-teal-50 dark:from-rose-900/10 dark:to-teal-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 inline-flex p-3 rounded-xl bg-gradient-to-br from-rose-100 to-teal-100 dark:from-rose-900/30 dark:to-teal-900/30 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    <span className="text-sm font-semibold">Learn more</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
