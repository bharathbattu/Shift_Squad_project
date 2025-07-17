import { ShareNetwork, Gear, TrendUp } from "phosphor-react";
import connectBusinessImg from "@/assets/connect-business.jpg";
import setupAiImg from "@/assets/setup-ai.jpg";
import automateGrowthImg from "@/assets/automate-growth.jpg";
import { useNavigate } from "react-router-dom";

const HowItWorksSection = () => {
  const navigate = useNavigate();
  const steps = [
    {
      icon: ShareNetwork,
      title: "Connect Your Business",
      description: "Integrate your existing systems and workflows with our AI platform in just a few clicks. No technical expertise required.",
      image: connectBusinessImg,
      step: "01"
    },
    {
      icon: Gear,
      title: "Set Up Your AI Assistant",
      description: "Customize your AI assistant to understand your business needs, customer preferences, and operational requirements.",
      image: setupAiImg,
      step: "02"
    },
    {
      icon: TrendUp,
      title: "Automate Your Growth",
      description: "Watch as your AI assistant handles customer inquiries, processes orders, and optimizes your business operations automatically.",
      image: automateGrowthImg,
      step: "03"
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-fade">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Get started with AI-powered business automation in three simple steps
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="scroll-fade group" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="glass-card p-8 rounded-3xl text-center hover:bg-white/10 transition-all duration-500 group-hover:transform group-hover:scale-105 relative overflow-hidden">
                {/* Step Number */}
                <div className="absolute top-6 right-6 text-6xl font-light text-white/10">
                  {step.step}
                </div>
                
                {/* Image */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Icon overlay */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <step.icon size={24} className="text-white" weight="light" />
                  </div>
                </div>

                <h3 className="text-2xl font-light text-white mb-4">
                  {step.title}
                </h3>
                
                <p className="text-foreground-muted leading-relaxed">
                  {step.description}
                </p>

                {/* Connecting Line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-primary to-transparent transform -translate-y-1/2" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 scroll-fade">
          <button
            onClick={() => navigate('/service')}
            className="neomorph-btn px-8 py-4 rounded-xl text-white font-medium hover:transform hover:scale-105 transition-all duration-300">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;