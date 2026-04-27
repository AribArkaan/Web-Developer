import { useEffect, useRef } from 'react';
import { ArrowDown, Play } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || !textRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;
      
      textRef.current.style.transform = `translate(${xPercent * 10}px, ${yPercent * 10}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deadpool-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Film strip decoration */}
        <div className="absolute top-1/4 left-0 right-0 h-8 film-strip-horizontal" />
        <div className="absolute bottom-1/4 left-0 right-0 h-8 film-strip-horizontal" />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-deadpool-red/5 via-transparent to-deadpool-black" />
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-deadpool-red/10 to-transparent" />
        
        {/* Circular glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-deadpool-red/10 blur-[150px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Subtitle */}
            <div className="scroll-reveal mb-4">
              <span className="section-subtitle">Web Developer & UI/UX Designer</span>
            </div>
            
            {/* Main Title */}
            <h1
              ref={textRef}
              className="scroll-reveal font-display text-[15vw] md:text-[12vw] lg:text-[10vw] leading-none tracking-tight text-white transition-transform duration-300 ease-out"
              style={{ transitionDelay: '100ms' }}
            >
              ARIB
            </h1>
            <h2
              className="scroll-reveal font-display text-[8vw] md:text-[6vw] lg:text-[5vw] leading-none tracking-wider text-deadpool-red"
              style={{ transitionDelay: '200ms' }}
            >
              ARKAAN
            </h2>
            
            {/* Description */}
            <p
              className="scroll-reveal mt-8 text-lg md:text-xl text-white/60 max-w-xl mx-auto lg:mx-0"
              style={{ transitionDelay: '300ms' }}
            >
              Undergraduate Informatics Student at ITENAS Bandung.
              Passionate about creating beautiful and functional web experiences.
            </p>
            
            {/* CTA Buttons */}
            <div
              className="scroll-reveal flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start"
              style={{ transitionDelay: '400ms' }}
            >
              <a
                href="#projects"
                className="btn-primary flex items-center justify-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Play size={18} />
                View Projects
              </a>
              <a
                href="#contact"
                className="btn-outline flex items-center justify-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Hire Me
              </a>
            </div>
            
            {/* Stats */}
            <div
              className="scroll-reveal flex gap-8 mt-12 justify-center lg:justify-start"
              style={{ transitionDelay: '500ms' }}
            >
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl text-deadpool-red">3+</div>
                <div className="text-sm text-white/50 uppercase tracking-wider mt-1">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl text-white">10+</div>
                <div className="text-sm text-white/50 uppercase tracking-wider mt-1">Projects</div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl text-white">20+</div>
                <div className="text-sm text-white/50 uppercase tracking-wider mt-1">Certificates</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div
              className="scroll-reveal relative"
              style={{ transitionDelay: '300ms' }}
            >
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-deadpool-red/30 blur-[80px] rounded-full scale-75" />
              
              {/* Profile image container */}
              <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
                {/* Circular border */}
                <div className="absolute inset-0 rounded-full border-2 border-deadpool-red/30" />
                <div className="absolute inset-4 rounded-full border border-white/10" />
                
                {/* Image placeholder - will be replaced with actual image */}
                <div className="absolute inset-8 rounded-full overflow-hidden bg-gradient-to-br from-deadpool-gray to-deadpool-black flex items-center justify-center">
                  <img
                    src="./aset/IMG-20240311-WA0018.jpg"
                    alt="Arib Arkaan Fadhullah"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <div class="flex flex-col items-center justify-center text-white/30">
                          <span class="font-display text-6xl md:text-8xl">AA</span>
                          <span class="text-sm mt-2">ARIB ARKAAN</span>
                        </div>
                      `;
                    }}
                  />
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 badge-red animate-float">
                  22
                </div>
                <div className="absolute -bottom-4 -left-4 badge-dark animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-xs">IPK</span>
                  <span className="text-lg">3.34</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-deadpool-red transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;
