import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'Luxury Brand Website',
    category: 'Web Design',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663679971251/8JxkX2n36XFXWExdGdcNqA/fztpl-portfolio-showcase-YEQczVNjufXTtEgJePsL8m.webp',
  },
  {
    id: 2,
    title: 'Mobile App Interface',
    category: 'App Design',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663679971251/8JxkX2n36XFXWExdGdcNqA/fztpl-feature-abstract-28KeqpDczrNcRMUNu4kFYB.webp',
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    category: 'Development',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663679971251/8JxkX2n36XFXWExdGdcNqA/fztpl-cta-gradient-JvZ2SSJ6jX5R5q68CUdxfN.webp',
  },
  {
    id: 4,
    title: 'SaaS Dashboard',
    category: 'Web Design',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663679971251/8JxkX2n36XFXWExdGdcNqA/fztpl-hero-bg-howYodFtJ67sisTPdRkeZy.webp',
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.portfolio-item');
            items.forEach((item, index) => {
              (item as HTMLElement).style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Showcasing our finest work and successful client projects.
          </p>
        </div>

        {/* Grid View */}
        <div className="hidden lg:grid grid-cols-2 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="portfolio-item card-organic overflow-hidden group cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-sm text-white/80 mb-1">{item.category}</p>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel View (Mobile/Tablet) */}
        <div className="lg:hidden">
          <div className="relative mb-8">
            <div className="card-organic overflow-hidden rounded-3xl">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={portfolioItems[currentIndex].image}
                  alt={portfolioItems[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div>
                    <p className="text-sm text-white/80 mb-1">{portfolioItems[currentIndex].category}</p>
                    <h3 className="text-xl font-bold text-white">{portfolioItems[currentIndex].title}</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors duration-200 backdrop-blur-md"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors duration-200 backdrop-blur-md"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-border hover:bg-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
