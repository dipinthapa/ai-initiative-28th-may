import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * FZTPL Landing Page
 * 
 * Design System: Organic Elegance with Soft Gradients
 * - Premium, warm color palette (cream, rose, sage, teal)
 * - Smooth scroll animations and gentle parallax
 * - Soft hover effects and micro-interactions
 * - Fully responsive and accessible
 * - Light/Dark mode with localStorage persistence
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <Features />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services />

        {/* Portfolio Section */}
        <Portfolio />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Stats Section */}
        <Stats />

        {/* FAQ Section */}
        <FAQ />

        {/* CTA Section */}
        <CTA />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
