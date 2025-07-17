import { Check, Crown, Rocket } from "phosphor-react";
import { useModal } from "@/context/ModalContext";
import { useNavigate } from "react-router-dom";

const PricingSection = () => {
  const { openConsultationForm } = useModal();
  const navigate = useNavigate();
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for getting started with AI automation",
      icon: Rocket,
      features: [
        "AI Assistant (100 interactions/month)",
        "Basic automation workflows",
        "Email support",
        "Standard integrations",
        "Mobile app access"
      ],
      buttonText: "Get Started Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$99",
      period: "/month",
      description: "Everything you need to scale your business with AI",
      icon: Crown,
      features: [
        "AI Assistant (Unlimited interactions)",
        "Advanced automation & workflows",
        "Priority support + phone",
        "Custom integrations",
        "Advanced analytics & reporting",
        "Team collaboration tools",
        "API access"
      ],
      buttonText: "Start Your Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      icon: Crown,
      features: [
        "Everything in Pro",
        "Dedicated account manager",
        "Custom AI model training",
        "White-label solutions",
        "Advanced security & compliance",
        "On-premise deployment options",
        "24/7 premium support"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-fade">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Choose the plan that fits your business needs. All plans include our core AI features.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="scroll-fade relative" style={{ animationDelay: `${index * 0.1}s` }}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary px-4 py-2 rounded-full text-white text-sm font-medium">
                    Recommended
                  </div>
                </div>
              )}

              <div className={`glass-card p-8 rounded-3xl h-full relative overflow-hidden ${
                plan.popular ? 'border-2 border-primary/50' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-full -translate-y-16 translate-x-16" />
                )}

                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <plan.icon size={28} className="text-white" weight="light" />
                  </div>
                  
                  <h3 className="text-2xl font-light text-white mb-2">{plan.name}</h3>
                  <p className="text-foreground-muted text-sm">{plan.description}</p>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-light text-white">{plan.price}</span>
                    <span className="text-foreground-muted ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check size={20} className="text-accent flex-shrink-0 mt-0.5" weight="bold" />
                      <span className="text-foreground-muted text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    if (plan.buttonText === "Start Your Free Trial") {
                      navigate('/service');
                    } else {
                      openConsultationForm();
                    }
                  }}
                  className={`w-full py-4 rounded-xl font-medium transition-all duration-300 ${
                  plan.popular 
                    ? 'neomorph-btn text-white' 
                    : 'glass-card text-white hover:bg-white/10'
                }`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 scroll-fade">
          <p className="text-foreground-muted mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-foreground-muted">
            <span className="flex items-center space-x-2">
              <Check size={16} className="text-accent" />
              <span>No setup fees</span>
            </span>
            <span className="flex items-center space-x-2">
              <Check size={16} className="text-accent" />
              <span>Cancel anytime</span>
            </span>
            <span className="flex items-center space-x-2">
              <Check size={16} className="text-accent" />
              <span>24/7 support</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;