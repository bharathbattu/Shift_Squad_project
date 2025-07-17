import React from 'react';
import { Star, ArrowUpRight } from "phosphor-react";
import { useNavigate } from "react-router-dom";

const SuccessStoriesSection = () => {
  const navigate = useNavigate();
  const stories = [
    {
      company: "TechFlow Solutions",
      industry: "Software Development",
      challenge: "Struggling with customer support volume and response times",
      solution: "Implemented AI-powered customer service agents and automated workflows",
      results: [
        "85% reduction in response time",
        "200% increase in customer satisfaction",
        "40% cost savings on support operations"
      ],
      testimonial: "The AI transformation completely revolutionized how we handle customer support. We went from overwhelmed to exceptional service delivery.",
      clientName: "Sarah Johnson",
      clientRole: "CEO"
    },
    {
      company: "Urban Retail Co",
      industry: "E-commerce",
      challenge: "Low online visibility and declining sales conversions",
      solution: "Comprehensive SEO optimization and AI-driven marketing campaigns",
      results: [
        "300% increase in organic traffic",
        "150% boost in conversion rates",
        "500% ROI within 6 months"
      ],
      testimonial: "Our online presence went from invisible to industry-leading. The strategic approach to SEO and marketing delivered incredible results.",
      clientName: "Michael Chen",
      clientRole: "Marketing Director"
    },
    {
      company: "Growth Dynamics",
      industry: "Professional Services",
      challenge: "Inefficient business processes and stagnant growth",
      solution: "Business strategy development and process automation implementation",
      results: [
        "60% increase in operational efficiency",
        "250% revenue growth in one year",
        "Successful expansion to 3 new markets"
      ],
      testimonial: "The strategic guidance and automation tools transformed our entire business model. We're now scaling faster than ever before.",
      clientName: "Emily Rodriguez",
      clientRole: "Founder"
    }
  ];

  return (
    <section id="success-stories" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-fade">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Featured <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Real transformations achieved by businesses who partnered with us to unlock their growth potential
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {stories.map((story, index) => (
            <div key={index} className="scroll-fade" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="glass-card p-8 rounded-3xl h-full group hover:bg-white/10 transition-all duration-500">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-light text-white">{story.company}</h3>
                    <ArrowUpRight size={20} className="text-accent group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                  <p className="text-sm text-accent mb-4">{story.industry}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-medium mb-2">Challenge</h4>
                      <p className="text-foreground-muted text-sm">{story.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-medium mb-2">Solution</h4>
                      <p className="text-foreground-muted text-sm">{story.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-medium mb-3">Key Results</h4>
                  <ul className="space-y-2">
                    {story.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center space-x-2">
                        <Star size={14} className="text-accent flex-shrink-0" weight="fill" />
                        <span className="text-foreground-muted text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <blockquote className="text-foreground-muted text-sm italic mb-4">
                    "{story.testimonial}"
                  </blockquote>
                  <div>
                    <div className="text-white font-medium text-sm">{story.clientName}</div>
                    <div className="text-foreground-muted text-xs">{story.clientRole}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 scroll-fade">
          <p className="text-foreground-muted mb-6">
            Ready to write your own success story?
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="neomorph-btn px-8 py-4 rounded-xl text-white font-medium">
            Start Your Transformation
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;