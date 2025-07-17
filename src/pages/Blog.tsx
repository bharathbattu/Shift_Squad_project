import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight } from "phosphor-react";

const Blog = () => {
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

  const blogPosts = [
    {
      title: "How AI is Revolutionizing Small Business Customer Service",
      excerpt: "Discover how AI-powered customer service tools are helping small businesses provide 24/7 support, reduce response times, and increase customer satisfaction rates by up to 300%.",
      author: "Alex Chen",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Customer Service",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop"
    },
    {
      title: "The ROI of AI Automation: Real Case Studies from SMEs",
      excerpt: "Learn from real-world examples of small and medium enterprises that achieved 200-400% ROI within their first year of implementing AI automation solutions.",
      author: "Sarah Martinez",
      date: "December 10, 2024",
      readTime: "8 min read",
      category: "Case Studies",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      title: "AI-Powered Analytics: Making Data-Driven Decisions Simple",
      excerpt: "Stop drowning in data and start making informed decisions. Learn how AI analytics can transform your business intelligence and reveal hidden opportunities for growth.",
      author: "David Kim",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      title: "Future-Proofing Your Business: AI Trends to Watch in 2025",
      excerpt: "Stay ahead of the curve with insights into emerging AI technologies that will shape the business landscape. From conversational AI to predictive analytics.",
      author: "Alex Chen",
      date: "November 28, 2024",
      readTime: "7 min read",
      category: "Industry Trends",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop"
    }
  ];

  const categories = ["All", "Customer Service", "Case Studies", "Analytics", "Industry Trends"];

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
                AI Insights <span className="gradient-text">& Stories</span>
              </h1>
              <p className="text-xl text-foreground-muted leading-relaxed">
                Discover how businesses are transforming with AI, get expert insights, 
                and learn practical strategies to grow your own business.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-white/5">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-4 scroll-fade">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    category === "All" 
                      ? "bg-primary text-white" 
                      : "glass-card text-foreground-muted hover:text-white hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto scroll-fade">
              <div className="glass-card rounded-3xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img 
                      src={blogPosts[0].image} 
                      alt={blogPosts[0].title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary px-3 py-1 rounded-full text-white text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 text-sm text-foreground-muted mb-4">
                      <span className="bg-accent/20 text-accent px-3 py-1 rounded-full">
                        {blogPosts[0].category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{blogPosts[0].date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{blogPosts[0].readTime}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-light text-white mb-4 leading-tight">
                      {blogPosts[0].title}
                    </h2>
                    
                    <p className="text-foreground-muted leading-relaxed mb-6">
                      {blogPosts[0].excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground-muted">
                        By {blogPosts[0].author}
                      </span>
                      
                      <button className="neomorph-btn px-6 py-3 rounded-lg text-white font-medium flex items-center space-x-2 group">
                        <span>Read More</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 scroll-fade">
              <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
                Latest <span className="gradient-text">Articles</span>
              </h2>
              <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
                Stay updated with the latest AI trends, insights, and practical tips for your business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {blogPosts.slice(1).map((post, index) => (
                <article key={index} className="scroll-fade group" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="glass-card rounded-2xl overflow-hidden h-full hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105">
                    <div className="relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-xs text-foreground-muted mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-light text-white mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </h3>
                      
                      <p className="text-foreground-muted text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-foreground-muted">
                          By {post.author}
                        </span>
                        
                        <button className="text-primary hover:text-primary-light transition-colors duration-300 flex items-center space-x-1 text-sm">
                          <span>Read</span>
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="glass-card p-12 rounded-3xl text-center max-w-4xl mx-auto scroll-fade">
              <h2 className="text-4xl font-light text-white mb-6">
                Stay Updated with AI Insights
              </h2>
              <p className="text-xl text-foreground-muted mb-8">
                Get the latest AI business strategies, case studies, and industry insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 glass-card px-4 py-3 rounded-lg text-white placeholder-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="neomorph-btn px-6 py-3 rounded-lg text-white font-medium whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;