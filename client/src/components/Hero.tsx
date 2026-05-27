import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663679971251/8JxkX2n36XFXWExdGdcNqA/fztpl-hero-bg-howYodFtJ67sisTPdRkeZy.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/60" />
      </div>

      {/* Floating Blob Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-rose-300/30 to-transparent blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-tl from-teal-300/20 to-transparent blur-3xl animate-pulse" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        {/* Headline */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          style={{
            animation: 'fadeInUp 0.8s ease-out',
          }}
        >
          Craft Digital
          <br />
          <span className="bg-gradient-to-r from-rose-400 via-rose-300 to-teal-400 bg-clip-text text-transparent">
            Experiences
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed"
          style={{
            animation: 'fadeInUp 0.8s ease-out 0.1s both',
          }}
        >
          We design and develop premium digital solutions that inspire, engage, and convert. 
          Your vision, elevated through creative excellence.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{
            animation: 'fadeInUp 0.8s ease-out 0.2s both',
          }}
        >
          <Button className="btn-premium px-10 py-4 text-lg">
            Start Your Project
          </Button>
          <Button className="btn-premium-outline px-10 py-4 text-lg">
            View Our Work
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{
          opacity: 1 - scrollY / 300,
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-foreground/60 font-medium">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 text-foreground/60" />
        </div>
      </div>
    </section>
  );
}
