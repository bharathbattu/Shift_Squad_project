import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Robot, MagnifyingGlass, TrendUp, Target, ChartLine, Users, FileText, VideoCamera, Microphone } from "phosphor-react";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();
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

  const coreServices = [
    {
      icon: Robot,
      title: "AI-Powered Customer Service Agents",
      description: "24/7 automated support that reduces response time and improves customer satisfaction."
    },
    {
      icon: MagnifyingGlass,
      title: "SEO (Search Engine Optimization)",
      description: "Boost online visibility and help businesses rank higher on search engines to attract more customers."
    },
    {
      icon: TrendUp,
      title: "Business Growth Development",
      description: "Provide SMBs with strategic plans and execution support for scaling operations and revenues."
    },
    {
      icon: Target,
      title: "Marketing",
      description: "Offer tailored marketing solutions to increase brand awareness, customer engagement, and conversions."
    }
  ];

  const premiumServices = [
    {
      icon: ChartLine,
      title: "Detailed Market Research & Competitor Analysis",
      description: "Deliver in-depth insights for strategic decision-making and competitive positioning."
    },
    {
      icon: Users,
      title: "Business Strategy Development",
      description: "Help clients build customized long-term strategies for sustained growth and success."
    },
    {
      icon: FileText,
      title: "Copywriting & Brand Alignment",
      description: "Craft compelling brand messaging and content to strengthen business identity and voice."
    },
    {
      icon: VideoCamera,
      title: "Video Creation for Brands & Marketing",
      description: "Produce high-quality visual content to elevate marketing and storytelling efforts."
    },
    {
      icon: Microphone,
      title: "Voice AI Agents for Customer Queries",
      description: "Deploy intelligent voice-based agents to handle customer interactions through IVR and voice assistants."
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
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-foreground-muted leading-relaxed">
                Comprehensive AI-powered solutions designed to transform your business operations 
                and accelerate growth through intelligent automation and strategic insights.
              </p>
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 scroll-fade">
              <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
                <span className="gradient-text">Core Services</span>
              </h2>
              <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
                Essential AI solutions that form the foundation of your digital transformation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {coreServices.map((service, index) => (
                <div key={index} className="scroll-fade" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="glass-card p-8 rounded-3xl group hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <service.icon size={28} className="text-white" weight="light" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-light text-white mb-4">
                          {service.title}
                        </h3>
                        <p className="text-foreground-muted leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 scroll-fade">
              <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
                <span className="gradient-text">Premium Services</span>
              </h2>
              <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
                Advanced solutions for businesses ready to scale to the next level
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {premiumServices.map((service, index) => (
                <div key={index} className="scroll-fade" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="glass-card p-6 rounded-3xl group hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105 h-full">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <service.icon size={28} className="text-white" weight="light" />
                      </div>
                      
                      <h3 className="text-xl font-light text-white mb-4">
                        {service.title}
                      </h3>
                      <p className="text-foreground-muted leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="glass-card p-12 rounded-3xl text-center max-w-4xl mx-auto scroll-fade">
              <h2 className="text-4xl font-light text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-foreground-muted mb-8">
                Let's discuss which services are the perfect fit for your business needs.
              </p>
              <button onClick={() => navigate('/contact')} className="neomorph-btn px-8 py-4 rounded-xl text-white font-medium">
                Contact Us Today
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Service;