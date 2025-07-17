import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Target, Heart, Medal } from "phosphor-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, {
      threshold: 0.1
    });
    const scrollElements = document.querySelectorAll(".scroll-fade");
    scrollElements.forEach(el => observer.observe(el));
    return () => {
      scrollElements.forEach(el => observer.unobserve(el));
    };
  }, []);
  const team = [{
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "Former AI engineer at Google with 10+ years in machine learning and business automation.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
  }, {
    name: "Sarah Martinez",
    role: "Head of Product",
    bio: "Product strategy expert who has helped scale AI solutions for Fortune 500 companies.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b830?w=400"
  }, {
    name: "David Kim",
    role: "CTO",
    bio: "Full-stack engineer passionate about making complex AI technology accessible to everyone.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
  }];
  const values = [{
    icon: Users,
    title: "Customer First",
    description: "Everything we build starts with understanding our customers' real challenges and needs."
  }, {
    icon: Target,
    title: "Innovation",
    description: "We're constantly pushing the boundaries of what's possible with AI technology."
  }, {
    icon: Heart,
    title: "Accessibility",
    description: "Advanced AI should be available to businesses of all sizes, not just tech giants."
  }, {
    icon: Medal,
    title: "Excellence",
    description: "We're committed to delivering the highest quality solutions and support."
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{
            animationDelay: "2s"
          }} />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center fade-in">
              <h1 className="text-5xl lg:text-7xl font-light text-white mb-8">
                About <span className="gradient-text">Swift Squad AI</span>
              </h1>
              <p className="text-xl text-foreground-muted leading-relaxed">SwiftSquad AI Solutions was born from a simple observation: while large corporations had access to cutting-edge AI technology, small and medium businesses were left behind, struggling with manual processes and outdated systems.</p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="scroll-fade">
                <h2 className="text-4xl font-light text-white mb-6">Our Story</h2>
                <div className="space-y-6 text-foreground-muted leading-relaxed">
                  <p>SwiftSquad AI Solutions was born from a simple observation: while large corporations had access to cutting-edge AI technology, small and medium businesses were left behind, struggling with manual processes and outdated systems.</p>
                  <p>
                    Our founder, Battu Bharath Kumar, experienced this firsthand when helping his family's 
                    small business. Despite having years of AI expertise from working at tech giants, 
                    he found that existing solutions were either too complex, too expensive, or 
                    simply not designed for smaller businesses.
                  </p>
                  <p>
                    That's when we decided to change the game. We set out to create AI solutions 
                    that are powerful yet simple, enterprise-grade yet affordable, and most 
                    importantly, designed specifically for the unique needs of SMEs.
                  </p>
                </div>
              </div>

              <div className="scroll-fade">
                <div className="glass-card p-8 rounded-3xl">
                  <h3 className="text-2xl font-light text-white mb-6">Our Impact</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-light text-primary mb-2">500+</div>
                      <div className="text-sm text-foreground-muted">Businesses Transformed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-light text-secondary mb-2">95%</div>
                      <div className="text-sm text-foreground-muted">Customer Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-light text-accent mb-2">$2M+</div>
                      <div className="text-sm text-foreground-muted">Cost Savings Generated</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-light text-primary-light mb-2">24/7</div>
                      <div className="text-sm text-foreground-muted">AI Support Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 scroll-fade">
              <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => <div key={index} className="scroll-fade text-center" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="glass-card p-8 rounded-3xl group hover:bg-white/10 transition-all duration-500">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon size={28} className="text-white" weight="light" />
                    </div>
                    <h3 className="text-xl font-light text-white mb-4">{value.title}</h3>
                    <p className="text-foreground-muted">{value.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="glass-card p-12 rounded-3xl text-center max-w-4xl mx-auto scroll-fade">
              <h2 className="text-4xl font-light text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-foreground-muted mb-8">
                Join hundreds of businesses already using AI to accelerate their growth.
              </p>
              <button
                onClick={() => navigate('/#start-ai-journey-btn')}
                className="neomorph-btn px-8 py-4 rounded-xl text-white font-medium">
                Get Started Today
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default About;