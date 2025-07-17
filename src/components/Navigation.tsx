import { useState, useEffect } from "react";
import { List, X } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useModal } from "@/hooks/useModal";

const Navigation: React.FC = () => {
  const { openConsultationForm } = useModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/service", label: "Service" },
    { href: "/contact", label: "Contact" },
  ];

  const handleNavigation = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigate(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "nav-blur py-4" : "py-6"}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="/" onClick={e => handleNavigation("/", e)} className="text-2xl font-bold text-white">
            SwiftSquad
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={e => handleNavigation(item.href, e)}
                className="text-foreground-muted hover:text-white transition-colors duration-300 text-sm font-light"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button onClick={openConsultationForm} className="neomorph-btn-primary px-6 py-2 rounded-lg text-sm font-medium text-white">
              Book a Consultation
            </button>
            <button onClick={() => navigate('/service')} className="neomorph-btn px-6 py-2 rounded-lg text-sm font-medium text-white">
              Get Started
            </button>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 md:hidden transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="absolute inset-0 bg-background/90 backdrop-blur-xl" />
        <div className="absolute right-0 top-0 h-full w-80 bg-background-secondary/95 backdrop-blur-xl border-l border-white/10">
          <div className="flex flex-col pt-20 px-8 space-y-6">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={e => handleNavigation(item.href, e)}
                className="text-xl text-foreground-muted hover:text-white transition-colors duration-300 py-2"
              >
                {item.label}
              </a>
            ))}
            <button onClick={() => { openConsultationForm(); setIsMobileMenuOpen(false); }} className="neomorph-btn-primary w-full text-center py-3 mt-8">
              Book a Consultation
            </button>
            <button onClick={() => { navigate('/service'); setIsMobileMenuOpen(false); }} className="neomorph-btn w-full text-center py-3">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;