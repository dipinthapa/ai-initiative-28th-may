import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, Luxe Brands',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    content: 'FZTPL transformed our digital presence. Their attention to detail and creative excellence exceeded our expectations. Highly recommended!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder, TechStart',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    content: 'Working with FZTPL was a game-changer. They understood our vision and delivered a website that truly represents our brand.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Marketing Director, Global Co.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    content: 'The team at FZTPL is professional, creative, and results-driven. Our conversion rates increased by 40% after the redesign.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Park',
    role: 'CTO, Innovation Labs',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    content: 'Exceptional technical expertise combined with beautiful design. FZTPL delivered a platform that scales with our business.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Founder, Creative Studio',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
    content: 'FZTPL brought our creative vision to life. The process was smooth, collaborative, and the results are outstanding.',
    rating: 5,
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'VP Product, Digital Agency',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
    content: 'Best investment we made this year. FZTPL delivered a premium website that impressed our clients and boosted our credibility.',
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 md:py-32 bg-gradient-to-b from-background to-accent/5">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Real feedback from satisfied clients who've partnered with FZTPL.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 card-organic p-8 md:p-12 transition-all duration-500 ${
                  index === currentIndex
                    ? 'opacity-100 translate-x-0'
                    : index < currentIndex
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-200 to-teal-200"
                  />
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Placeholder for height */}
            <div className="invisible">
              <div className="p-8 md:p-12">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5" />
                  ))}
                </div>
                <p className="text-lg md:text-xl mb-8 leading-relaxed italic">
                  "Placeholder text for height calculation"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full" />
                  <div>
                    <h4 className="font-bold">Name</h4>
                    <p className="text-sm">Role</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 md:-translate-x-20 p-2 rounded-full hover:bg-accent/20 transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 md:translate-x-20 p-2 rounded-full hover:bg-accent/20 transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-border hover:bg-foreground/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
