import { useEffect, useRef } from 'react';
import { Palette, Zap, Shield, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Creative Design',
    description: 'Stunning visual design that captures attention and communicates your brand story with elegance.',
  },
  {
    icon: Zap,
    title: 'Performance First',
    description: 'Lightning-fast websites optimized for speed, accessibility, and search engine visibility.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and reliability to protect your digital assets and user data.',
  },
  {
    icon: Smartphone,
    title: 'Fully Responsive',
    description: 'Seamless experiences across all devices—desktop, tablet, and mobile platforms.',
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.feature-card');
            cards.forEach((card, index) => {
              (card as HTMLElement).style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
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
    <section id="features" ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose FZTPL
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We combine creative excellence with technical expertise to deliver digital solutions that drive real results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="feature-card card-organic p-8 hover-lift group cursor-pointer"
              >
                {/* Icon Container */}
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-rose-100 to-teal-100 dark:from-rose-900/20 dark:to-teal-900/20 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Accent */}
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-rose-400 to-teal-400 group-hover:w-12 transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
