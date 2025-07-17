const FeaturedSection = () => {
  const publications = [
    { name: "TechCrunch", opacity: "opacity-60" },
    { name: "Forbes", opacity: "opacity-50" },
    { name: "Business Insider", opacity: "opacity-60" },
    { name: "Wired", opacity: "opacity-50" },
    { name: "VentureBeat", opacity: "opacity-60" },
  ];

  return (
    <section className="py-20 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 scroll-fade">
          <p className="text-foreground-muted text-sm font-medium mb-8">
            Featured in leading publications
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {publications.map((pub, index) => (
              <div 
                key={pub.name}
                className={`text-white font-medium text-lg tracking-wide ${pub.opacity} hover:opacity-100 transition-opacity duration-300`}
              >
                {pub.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;