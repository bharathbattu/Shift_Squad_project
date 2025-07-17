import { useState, useEffect } from "react";
import { Star, ArrowLeft, ArrowRight } from "phosphor-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechStart Solutions",
      result: "300% increase in customer satisfaction",
      content: "Shiftsquad AI transformed our customer service completely. The AI assistant handles 80% of our inquiries automatically, and our team can focus on strategic growth.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Operations Manager, Local Retail Co",
      result: "50% reduction in operational costs",
      content: "The automation tools have streamlined our inventory management and order processing. We've saved countless hours and significantly reduced human error.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Marketing Director, Creative Agency",
      result: "400% ROI in first quarter",
      content: "The AI-powered analytics and automation have revolutionized our marketing campaigns. We're seeing unprecedented engagement and conversion rates.",
      rating: 5
    },
    {
      name: "David Park",
      role: "Founder, E-commerce Startup",
      result: "10x faster response times",
      content: "Customer support went from hours to minutes. The AI understands context and provides accurate solutions, making our customers happier than ever.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-fade">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Real Results from <span className="gradient-text">Real Businesses</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            See how businesses like yours are achieving extraordinary growth with our AI solutions
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto scroll-fade">
          {/* Main Testimonial Card */}
          <div className="glass-card p-8 lg:p-12 rounded-3xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-accent" weight="fill" />
                ))}
              </div>
              
              <div className="glass-card inline-block px-4 py-2 rounded-full mb-6">
                <span className="text-accent font-semibold text-sm">
                  {testimonials[currentIndex].result}
                </span>
              </div>
            </div>

            <blockquote className="text-xl lg:text-2xl text-white text-center mb-8 font-light leading-relaxed">
              "{testimonials[currentIndex].content}"
            </blockquote>

            <div className="text-center">
              <div className="text-white font-semibold mb-1">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-foreground-muted">
                {testimonials[currentIndex].role}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="glass-card p-3 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <ArrowLeft size={20} className="text-white" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary" : "bg-white/30"
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextTestimonial}
              className="glass-card p-3 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <ArrowRight size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;