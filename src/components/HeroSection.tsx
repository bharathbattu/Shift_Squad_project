import { ArrowRight, Sparkle } from "phosphor-react";
import aiDashboardMockup from "@/assets/ai-dashboard-mockup.jpg";
import { useModal } from "@/hooks/useModal";

const HeroSection = () => {
  const { openConsultationForm } = useModal();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-2 fade-in">
                <Sparkle size={20} className="text-accent" weight="fill" />
                <span className="text-accent text-sm font-medium">AI-Powered Business Solutions</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-light leading-tight fade-in fade-in-delay-1">
                <span className="gradient-text">Boost Efficiency,</span>
                <br />
                <span className="text-white">Grow Your Business</span>
              </h1>
              
              <p className="text-xl text-foreground-muted max-w-2xl mx-auto lg:mx-0 fade-in fade-in-delay-2">
                Enhance customer experience and automate your operations with our 
                AI services designed specifically for small and medium-sized businesses.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 fade-in fade-in-delay-3">
              <button
                id="start-ai-journey-btn"
                onClick={openConsultationForm}
                className="neomorph-btn px-8 py-4 rounded-xl text-white font-medium flex items-center space-x-2 group"
              >
                <span>Start Your AI Journey</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button
                onClick={openConsultationForm}
                className="glass-card px-8 py-4 rounded-xl text-white font-medium hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 fade-in fade-in-delay-3">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-foreground-muted">Businesses Served</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-sm text-foreground-muted">Efficiency Increase</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-foreground-muted">AI Support</div>
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Mockup */}
          <div className="relative fade-in fade-in-delay-2">
            <div className="relative z-10">
              <div className="glass-card p-2 rounded-2xl">
                <img 
                  src={aiDashboardMockup} 
                  alt="AI Dashboard Interface" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 glass-card p-4 rounded-xl animate-float">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm text-white">AI Active</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 glass-card p-4 rounded-xl animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-sm text-white">
                <div className="font-semibold">+127%</div>
                <div className="text-foreground-muted">Growth Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;