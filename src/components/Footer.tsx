import { Envelope, Phone, MapPin } from "phosphor-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Service", href: "/service" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Cookie Policy", href: "/cookie-policy" },
    ],
  };

  return (
    <footer className="py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">SwiftSquad</h2>
            <p className="text-foreground-muted">Empowering businesses with intelligent AI solutions. We help you automate, innovate, and grow.</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Envelope size={20} className="text-foreground-muted mr-3" />
                <span className="text-foreground-muted text-sm">vikramchand02vc@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-foreground-muted mr-3" />
                <span className="text-foreground-muted text-sm">+91 9182961467</span>
              </li>
              <li className="flex items-center">
                <MapPin size={20} className="text-foreground-muted mr-3" />
                <span className="text-foreground-muted text-sm">Vijayawada, Andhra Pradesh, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
          <p className="text-foreground-muted text-sm">
            &copy; {currentYear} SwiftSquad AI Solutions. All rights reserved.
          </p>
          
          <div className="flex flex-wrap items-center space-x-6 mt-4 md:mt-0">
            {footerLinks.legal.map(link => (
              <a key={link.name} href={link.href} className="text-foreground-muted hover:text-white transition-colors duration-300 text-sm" target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;