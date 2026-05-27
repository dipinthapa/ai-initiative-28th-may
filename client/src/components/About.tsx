import { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const content = entry.target.querySelectorAll('.about-content > *');
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
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663679971251/8JxkX2n36XFXWExdGdcNqA/fztpl-portfolio-showcase-YEQczVNjufXTtEgJePsL8m.webp"
                alt="FZTPL Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-400/20 to-teal-400/20" />
            </div>

            {/* Floating Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl bg-gradient-to-br from-rose-300 to-teal-300 opacity-30 blur-2xl animate-pulse" />
          </div>

          {/* Content Side */}
          <div className="about-content order-1 lg:order-2 space-y-6">
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">
                About FZTPL
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                Elevating Digital Experiences
              </h2>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">
              Founded on the belief that great design and technology should work in harmony, FZTPL is a team of passionate creatives and developers dedicated to crafting premium digital solutions.
            </p>

            <p className="text-lg text-foreground/70 leading-relaxed">
              We don't just build websites—we create immersive digital experiences that tell your brand story, engage your audience, and drive meaningful results. Every project is a collaboration, every detail matters, and every pixel serves a purpose.
            </p>

            <div className="pt-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-1 h-6 bg-gradient-to-b from-rose-400 to-teal-400 rounded-full" />
                <div>
                  <h3 className="font-semibold text-foreground">Our Philosophy</h3>
                  <p className="text-foreground/70">Design with purpose, develop with precision, deliver with excellence.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-1 h-6 bg-gradient-to-b from-rose-400 to-teal-400 rounded-full" />
                <div>
                  <h3 className="font-semibold text-foreground">Our Approach</h3>
                  <p className="text-foreground/70">Strategic thinking combined with creative execution and technical mastery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
