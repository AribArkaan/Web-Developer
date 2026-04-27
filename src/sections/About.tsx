import { Bike, Dumbbell, Film, Gamepad2 } from 'lucide-react';

const About = () => {
  const hobbies = [
    { icon: Bike, label: 'Cycling' },
    { icon: Dumbbell, label: 'Running' },
    { icon: Film, label: 'Movies' },
    { icon: Gamepad2, label: 'Chess' },
  ];

  const tags = [
    '#Kreatif',
    '#22Tahun',
    '#Inovatif',
    '#Kolaboratif',
    '#MachineLearning',
    '#WebDeveloper',
    '#UIUXDesigner',
    '#ProblemSolver',
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-deadpool-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-deadpool-red/5 to-transparent" />
      
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="scroll-reveal mb-16">
          <span className="section-subtitle">Get To Know Me</span>
          <h2 className="section-title mt-2">ABOUT<span className="text-deadpool-red">.</span></h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Main Content */}
          <div className="scroll-reveal">
            <div className="glass-card p-8 md:p-10">
              <h3 className="font-display text-3xl md:text-4xl text-white mb-6">
                ARIB ARKAAN FADHULLAH
              </h3>
              
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Saya seorang mahasiswa semester 8 di Institut Teknologi Nasional (ITENAS) Bandung, 
                  mengambil jurusan Informatika dan sedang berusaha meraih gelar Sarjana.
                </p>
                <p>
                  Saat ini, saya mendalami segala hal yang berhubungan dengan informatika, 
                  dengan fokus utama pada pengkodean dan logika pemrograman. Saya memiliki 
                  passion yang tinggi dalam web development dan UI/UX design.
                </p>
                <p>
                  Saya percaya bahwa teknologi dapat mengubah dunia menjadi lebih baik, 
                  dan saya ingin menjadi bagian dari perubahan tersebut melalui karya-karya saya.
                </p>
              </div>
              
              {/* Hobbies */}
              <div className="mt-10">
                <h4 className="text-sm uppercase tracking-wider text-white/50 mb-4">Hobbies</h4>
                <div className="flex flex-wrap gap-4">
                  {hobbies.map((hobby) => (
                    <div
                      key={hobby.label}
                      className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl hover:bg-deadpool-red/20 transition-colors"
                    >
                      <hobby.icon size={20} className="text-deadpool-red" />
                      <span className="text-white/80 text-sm">{hobby.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Tags & Info */}
          <div className="space-y-8">
            {/* Tags */}
            <div className="scroll-reveal" style={{ transitionDelay: '100ms' }}>
              <div className="glass-card p-8">
                <h4 className="text-sm uppercase tracking-wider text-white/50 mb-6">What Defines Me</h4>
                <div className="flex flex-wrap gap-3">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="skill-tag"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Quick Info */}
            <div className="scroll-reveal" style={{ transitionDelay: '200ms' }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-6 text-center hover:border-deadpool-red/30 transition-colors">
                  <div className="font-display text-4xl text-deadpool-red">2019</div>
                  <div className="text-sm text-white/50 mt-1">Started Journey</div>
                </div>
                <div className="glass-card p-6 text-center hover:border-deadpool-red/30 transition-colors">
                  <div className="font-display text-4xl text-white">2026</div>
                  <div className="text-sm text-white/50 mt-1">Graduation</div>
                </div>
                <div className="glass-card p-6 text-center hover:border-deadpool-red/30 transition-colors">
                  <div className="font-display text-4xl text-white">Bandung</div>
                  <div className="text-sm text-white/50 mt-1">Location</div>
                </div>
                <div className="glass-card p-6 text-center hover:border-deadpool-red/30 transition-colors">
                  <div className="font-display text-4xl text-deadpool-red">Open</div>
                  <div className="text-sm text-white/50 mt-1">For Work</div>
                </div>
              </div>
            </div>
            
            {/* Quote */}
            <div className="scroll-reveal" style={{ transitionDelay: '300ms' }}>
              <div className="glass-card p-8 border-l-4 border-l-deadpool-red">
                <blockquote className="text-white/80 italic text-lg">
                  "Code is like humor. When you have to explain it, it's bad."
                </blockquote>
                <cite className="text-white/50 text-sm mt-2 block">— Cory House</cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
