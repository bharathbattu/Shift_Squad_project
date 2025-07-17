import { useState } from "react";
import { Plus, Minus } from "phosphor-react";
import { useNavigate } from "react-router-dom";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const navigate = useNavigate();

  const faqs = [
    {
      question: "How quickly can I expect to see results from your AI services?",
      answer: "Results vary, but many clients see improvements in customer service and marketing efficiency within weeks. More complex strategies may take a few months. We’ll keep you updated on your progress."
    },
    {
      question: "What type of businesses are your services best suited for?",
      answer: "We help small to medium-sized businesses in any industry. Our solutions are designed to be flexible and customizable to fit your unique needs."
    },
    {
      question: "Do I need any technical expertise to use your AI services?",
      answer: "No technical expertise is needed. Our team handles implementation, and we provide training and support to make the process smooth for you."
    },
    {
      question: "How do your pricing plans work?",
      answer: "We offer flexible subscription-based plans to fit different budgets. We’ll help you choose the best package for your business, with options for customization if needed."
    },
    {
      question: "Can your AI services integrate with my existing business systems and tools?",
      answer: "Yes, our AI solutions are designed to integrate seamlessly with your current systems and tools, ensuring a smooth and effective implementation."
    },
    {
      question: "What kind of support can I expect after purchasing your services?",
      answer: "We provide full support, including setup, training, and ongoing assistance. We’re committed to your success and will be there to help you every step of the way."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-fade">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Everything you need to know about our AI solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="scroll-fade mb-4" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="glass-card rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                >
                  <h3 className="text-lg font-light text-white pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus size={24} className="text-primary" weight="light" />
                    ) : (
                      <Plus size={24} className="text-primary" weight="light" />
                    )}
                  </div>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-8 pb-6">
                    <p className="text-foreground-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 scroll-fade">
          <p className="text-foreground-muted mb-6">
            Still have questions? We're here to help.
          </p>
          <button onClick={() => navigate('/contact')} className="neomorph-btn px-8 py-4 rounded-xl text-white font-medium">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;