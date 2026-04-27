import { Github, Linkedin, Instagram, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'UI/UX', href: '#uiux' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/AribArkaan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aribarkaanfadhlullah/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/aribarkan1/', label: 'Instagram' },
  ];

  return (
    <footer className="relative bg-deadpool-black border-t border-white/10">
      {/* Film strip decoration */}
      <div className="absolute top-0 left-0 right-0 h-4 film-strip-horizontal opacity-20" />
      
      <div className="w-full px-6 md:px-12 lg:px-20 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="font-display text-4xl text-white hover:text-deadpool-red transition-colors"
            >
              ARIB<span className="text-deadpool-red">.</span>
            </a>
            <p className="text-white/50 mt-4 max-w-md">
              Web Developer & UI/UX Designer dari Bandung, Indonesia. 
              Menciptakan pengalaman digital yang menarik dan fungsional.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-deadpool-red hover:text-white transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-white mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              {footerLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-deadpool-red transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* More Links */}
          <div>
            <h4 className="font-display text-lg text-white mb-4">MORE</h4>
            <ul className="space-y-2">
              {footerLinks.slice(4).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-deadpool-red transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-deadpool-red fill-deadpool-red" /> by Arib Arkaan Fadhullah
          </p>
          
          <p className="text-white/40 text-sm">
            &copy; {currentYear} All Rights Reserved
          </p>
          
          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-deadpool-red flex items-center justify-center text-white hover:bg-white hover:text-deadpool-black transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
