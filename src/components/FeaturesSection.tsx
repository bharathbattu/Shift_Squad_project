import { Robot, ChatCircle, ChartLine, Shield } from "phosphor-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Robot,
      title: "AI-Powered Automation",
      description: "Automate repetitive tasks and workflows with intelligent AI that learns from your business patterns and continuously improves efficiency."
    },
    {
      icon: ChatCircle,
      title: "Smart Customer Support",
      description: "Provide 24/7 customer service with AI assistants that understand context, handle complex queries, and escalate when needed."
    },
    {
      icon: ChartLine,
      title: "Business Analytics",
      description: "Get deep insights into your business performance with AI-driven analytics that identify trends and opportunities for growth."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Keep your data safe with enterprise-grade security, compliance standards, and privacy protection built into every solution."
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-fade">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Everything you need to transform your business with AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="scroll-fade" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="glass-card p-8 rounded-3xl group hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon size={28} className="text-white" weight="light" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-foreground-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;