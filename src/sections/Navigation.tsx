import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Instagram } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    // { name: 'Skills', href: '#skills' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'UI/UX', href: '#uiux' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-deadpool-black/90 backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              className="font-display text-2xl md:text-3xl tracking-wider text-white hover:text-deadpool-red transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              ARIB<span className="text-deadpool-red">.</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="nav-link"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Social Links - Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://github.com/AribArkaan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-deadpool-red transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/aribarkaanfadhlullah/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-deadpool-red transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/aribarkan1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-deadpool-red transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-deadpool-black/98 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link, index) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="font-display text-3xl tracking-wider text-white hover:text-deadpool-red transition-colors"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {link.name}
            </button>
          ))}
          
          <div className="flex items-center gap-6 mt-8">
            <a
              href="https://github.com/AribArkaan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-deadpool-red transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/aribarkaanfadhlullah/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-deadpool-red transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://www.instagram.com/aribarkan1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-deadpool-red transition-colors"
            >
              <Instagram size={28} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
