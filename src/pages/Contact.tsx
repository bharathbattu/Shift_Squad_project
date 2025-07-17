import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { EnvelopeSimple, Phone, MapPin, Clock } from "phosphor-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    const scrollElements = document.querySelectorAll(".scroll-fade");
    scrollElements.forEach((el) => observer.observe(el));

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: EnvelopeSimple,
      title: "Email Us",
      content: "vikramchand02vc@gmail.com",
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 9182961467",
      description: "Speak directly with our AI consultants"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Vijayawada, Andhra Pradesh, India",
      description: "Schedule an in-person consultation"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 9AM-6PM IST",
      description: "Weekend support available for urgent matters"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center fade-in">
              <h1 className="text-5xl lg:text-7xl font-light text-white mb-8">
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-xl text-foreground-muted leading-relaxed">
                Ready to transform your business with AI? We'd love to hear from you. 
                Let's discuss how we can help you achieve your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="scroll-fade">
                <div className="glass-card p-8 rounded-3xl">
                  <h2 className="text-3xl font-light text-white mb-8">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground-muted mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full glass-card px-4 py-3 rounded-lg text-white placeholder-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground-muted mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full glass-card px-4 py-3 rounded-lg text-white placeholder-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground-muted mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full glass-card px-4 py-3 rounded-lg text-white placeholder-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your company"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground-muted mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full glass-card px-4 py-3 rounded-lg text-white placeholder-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Tell us about your business and how we can help..."
                      />
                    </div>

                    <button type="submit" className="neomorph-btn w-full py-4 rounded-xl text-white font-medium">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="scroll-fade">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-light text-white mb-6">Let's Connect</h2>
                    <p className="text-foreground-muted leading-relaxed mb-8">
                      Whether you have questions about our services, need a custom solution, 
                      or want to schedule a demo, we're here to help. Choose the best way to reach us.
                    </p>
                  </div>

                  {/* Contact Methods */}
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="glass-card p-6 rounded-2xl group hover:bg-white/10 transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <info.icon size={24} className="text-white" weight="light" />
                          </div>
                          <div>
                            <h3 className="text-xl font-light text-white mb-1">{info.title}</h3>
                            <p className="text-primary font-medium mb-2">{info.content}</p>
                            <p className="text-foreground-muted text-sm">{info.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Quick Links */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="glass-card p-12 rounded-3xl text-center max-w-4xl mx-auto scroll-fade">
              <h2 className="text-4xl font-light text-white mb-6">
                Looking for Quick Answers?
              </h2>
              <p className="text-xl text-foreground-muted mb-8">
                Check out our FAQ section for immediate answers to common questions.
              </p>
              <a href="/#faq" className="neomorph-btn px-8 py-4 rounded-xl text-white font-medium inline-block">
                View FAQ
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;