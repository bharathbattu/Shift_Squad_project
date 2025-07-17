import { Lightbulb, Heart } from "phosphor-react";
const MissionSection = () => {
  return <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center scroll-fade">
          <div className="flex items-center justify-center space-x-3 mb-8">
            
            
            
          </div>

          <h2 className="text-4xl lg:text-6xl font-light text-white mb-8 leading-tight">
            Democratizing <span className="gradient-text">AI Technology</span> for Every Business
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-light text-white mb-4">Why We Started</h3>
              <p className="text-foreground-muted leading-relaxed">
                We saw small and medium businesses struggling to compete with larger corporations 
                that had access to advanced AI technology. Our mission is to level the playing 
                field by making enterprise-grade AI solutions accessible and affordable for every business.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-light text-white mb-4">Our Vision</h3>
              <p className="text-foreground-muted leading-relaxed">
                We envision a world where every business, regardless of size, can harness the power 
                of AI to grow, innovate, and serve their customers better. We're building the tools 
                to make that vision a reality.
              </p>
            </div>
          </div>

          <div className="mt-16 glass-card p-8 rounded-3xl">
            <blockquote className="text-2xl font-light text-white italic leading-relaxed">
              "Technology should empower everyone, not just the privileged few. We're here to ensure 
              that every business has the opportunity to thrive in the AI-powered future."
            </blockquote>
            <cite className="block mt-6 text-foreground-muted">
              — The SwiftSquad AI Solutions Team
            </cite>
          </div>
        </div>
      </div>
    </section>;
};
export default MissionSection;