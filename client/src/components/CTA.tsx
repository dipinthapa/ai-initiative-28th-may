import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const content = entry.target.querySelectorAll('.cta-content > *');
            content.forEach((el, index) => {
              (el as HTMLElement).style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
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
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663679971251/8JxkX2n36XFXWExdGdcNqA/fztpl-cta-gradient-JvZ2SSJ6jX5R5q68CUdxfN.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container">
        <div className="cta-content text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Digital Presence?
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
            Let's work together to create something extraordinary. Schedule a consultation with our team today and discover how FZTPL can elevate your brand.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="btn-premium px-10 py-4 text-lg bg-white text-primary hover:bg-white/90">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button className="btn-premium-outline px-10 py-4 text-lg border-white text-white hover:bg-white hover:text-primary">
              Schedule a Call
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-white/20 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">150+</div>
              <p className="text-white/70">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <p className="text-white/70">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <p className="text-white/70">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
