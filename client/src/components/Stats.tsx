import { useEffect, useRef, useState } from 'react';

const stats = [
  { label: 'Projects Completed', value: 150, suffix: '+' },
  { label: 'Happy Clients', value: 98, suffix: '%' },
  { label: 'Team Members', value: 25, suffix: '+' },
  { label: 'Years of Experience', value: 8, suffix: '+' },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && count === 0) {
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setCount(target);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, 30);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [target, count]);

  return (
    <div ref={counterRef} className="text-4xl md:text-5xl font-bold text-primary">
      {count}
      <span className="text-3xl md:text-4xl">{suffix}</span>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.stat-item');
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

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-gradient-to-r from-rose-50 via-background to-teal-50 dark:from-rose-900/10 dark:via-background dark:to-teal-900/10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item text-center">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-lg text-foreground/70 mt-4 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
