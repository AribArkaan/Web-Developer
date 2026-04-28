import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, X, Download, Eye, FileText } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showCV, setShowCV] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'aribarkan39@gmail.com',
      href: 'mailto:aribarkan39@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+62 853-1495-6364',
      href: 'https://wa.me/085314956364',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bandung, Indonesia',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/AribArkaan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aribarkaanfadhlullah/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/aribarkan1/', label: 'Instagram' },
  ];

  // Data CV — hanya file PDF
  const cvData = {
    pdfUrl: '/public/aset/CV/CV_Arib_Arkaan.pdf',
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-deadpool-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-deadpool-red/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-deadpool-red/5 blur-[150px]" />
      </div>
      
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="scroll-reveal text-center mb-16">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title mt-2">CONTACT<span className="text-deadpool-red">.</span></h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            Tertarik untuk bekerja sama? Jangan ragu untuk menghubungi saya!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Info */}
          <div className="scroll-reveal space-y-8">
            <div>
              <h3 className="font-display text-3xl text-white mb-6">
                LET'S WORK <span className="text-deadpool-red">TOGETHER</span>
              </h3>
              <p className="text-white/60 leading-relaxed">
                Saya selalu terbuka untuk peluang baru, kolaborasi menarik, 
                atau sekadar ngobrol tentang teknologi. Jangan ragu untuk reach out!
              </p>
            </div>
            
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="glass-card-hover p-4 flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-deadpool-red/10 flex items-center justify-center group-hover:bg-deadpool-red transition-colors">
                    <info.icon className="text-deadpool-red group-hover:text-white transition-colors" size={20} />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">{info.label}</p>
                    <p className="text-white group-hover:text-deadpool-red transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* CV Button — DIPINDAHKAN KE SINI (di atas Social Links) */}
            <div>
              <button
                onClick={() => setShowCV(true)}
                className="w-full glass-card-hover p-4 flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-deadpool-red/10 flex items-center justify-center group-hover:bg-deadpool-red transition-colors">
                  <FileText className="text-deadpool-red group-hover:text-white transition-colors" size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-white/50 text-sm">Curriculum Vitae</p>
                  <p className="text-white group-hover:text-deadpool-red transition-colors">View & Download CV</p>
                </div>
                <Eye className="text-white/30 group-hover:text-deadpool-red transition-colors" size={20} />
              </button>
            </div>
            
            {/* Social Links — DIPINDAHKAN KE BAWAH CV */}
            <div>
              <p className="text-white/50 text-sm mb-4">Follow Me</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/60 hover:bg-deadpool-red hover:text-white transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right - Contact Form */}
          <div className="scroll-reveal" style={{ transitionDelay: '100ms' }}>
            <div className="glass-card p-8">
              <h3 className="font-display text-2xl text-white mb-6">SEND MESSAGE</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white/50 text-sm mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-deadpool-red focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-white/50 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-deadpool-red focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-white/50 text-sm mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-deadpool-red focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : submitted ? (
                    <span>Message Sent!</span>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* CTA Banner */}
        <div className="scroll-reveal mt-20">
          <div className="glass-card p-8 md:p-12 text-center border-deadpool-red/30">
            <h3 className="font-display text-4xl md:text-5xl text-white mb-4">
              READY TO START A <span className="text-deadpool-red">PROJECT?</span>
            </h3>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Saya siap membantu mewujudkan ide-ide kreatif Anda menjadi produk digital yang luar biasa.
            </p>
            <a
              href="https://saweria.co/aribarkan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Support Me on Saweria
            </a>
          </div>
        </div>
      </div>

      {/* CV Preview Modal — langsung tampilkan PDF */}
      {showCV && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl overflow-y-auto"
          onClick={() => setShowCV(false)}
        >
          <div className="min-h-screen flex items-start justify-center p-4 md:p-8">
            <div
              className="relative w-full max-w-5xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-2xl text-white">Curriculum Vitae</h3>
                <div className="flex items-center gap-3">
                  {/* Download PDF */}
                  <a
                    href={cvData.pdfUrl}
                    download="CV_Arib_Arkaan.pdf"
                    className="flex items-center gap-2 px-4 py-2 bg-deadpool-red rounded-xl text-white hover:bg-red-600 transition-colors"
                  >
                    <Download size={18} />
                    <span className="text-sm">Download PDF</span>
                  </a>
                  {/* Close */}
                  <button
                    onClick={() => setShowCV(false)}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-deadpool-red transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src={cvData.pdfUrl}
                  title="CV Preview"
                  className="w-full h-[80vh] md:h-[85vh]"
                  style={{ border: 'none' }}
                />
              </div>

              {/* Footer hint */}
              <p className="text-white/40 text-sm text-center mt-4">
                Click outside or press X to close preview
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;