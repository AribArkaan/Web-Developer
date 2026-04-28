import { MapPin, Calendar, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'ITENAS Bandung',
      position: 'Machine Learning Assistant Laboratory',
      type: 'Part-time',
      period: 'Maret 2025 - Juni 2025',
      location: 'Bandung',
      logo: '/aset/download__2_-removebg-preview.png',
      responsibilities: [
        'Membantu mahasiswa memahami konsep dasar Mengolah data dengan python',
        'Membimbing praktikum dan memberikan solusi terhadap permasalahan coding',
        'Menyiapkan materi dan proyek berbasis Python',
        'Membantu menerapkan beberapa konsep dasar terhadap projek Machine Learning',
      ],
      skills: ['Machine Learning', 'Teaching Assistance', 'Python'],
    },
    {
      company: 'PT Pentacode Bandung',
      position: 'Web Developer',
      type: 'Internship',
      period: 'November 2024 - Januari 2025',
      location: 'Bandung',
      logo: '/aset/icon pentacode.jpeg',
      responsibilities: [
        'Mengembangkan dan memelihara fitur baru pada website perusahaan',
        'Bekerja dengan Laravel, PHP, dan JavaScript untuk backend dan frontend',
        'Berkoordinasi dengan tim desain untuk meningkatkan UX/UI',
      ],
      skills: ['Laravel', 'PHP', 'JavaScript', 'Git', 'UI/UX'],
    },
    {
      company: 'ITENAS Bandung',
      position: 'OOP Assistant Laboratory',
      type: 'Part-time',
      period: 'Februari 2024 - Mei 2024',
      location: 'Bandung',
      logo: '/aset/download__2_-removebg-preview.png',
      responsibilities: [
        'Membantu mahasiswa memahami konsep dasar OOP dalam pemrograman',
        'Membimbing praktikum dan memberikan solusi terhadap permasalahan coding',
        'Menyiapkan materi dan proyek berbasis Java',
      ],
      skills: ['Java', 'OOP', 'Teaching Assistance'],
    },
  ];

  return (
    <section id="experience" className="relative py-24 md:py-32 bg-deadpool-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-deadpool-red/5 to-transparent" />
      </div>
      
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="scroll-reveal mb-16">
          <span className="section-subtitle">Work History</span>
          <h2 className="section-title mt-2">EXPERIENCE<span className="text-deadpool-red">.</span></h2>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-deadpool-red via-deadpool-red/50 to-transparent hidden md:block" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company + exp.period}
                className={`scroll-reveal relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-deadpool-red hidden md:block" />
                
                {/* Content Card */}
                <div className={`flex-1 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass-card-hover p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center overflow-hidden">
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className="w-full h-full object-contain p-1"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              target.parentElement!.innerHTML = `<Briefcase class="text-deadpool-red" size={24} />`;
                            }}
                          />
                        </div>
                      </div>
                      
                      {/* Title */}
                      <div className="flex-1">
                        <h3 className="font-display text-xl md:text-2xl text-white">
                          {exp.company}
                        </h3>
                        <p className="text-deadpool-red font-medium">{exp.position}</p>
                        
                        <div className="flex flex-wrap items-center gap-3 mt-2 text-white/50 text-sm">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                          <span className="px-2 py-0.5 bg-white/10 rounded text-xs">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Responsibilities */}
                    <div className="space-y-2 mb-6">
                      {exp.responsibilities.map((resp, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-deadpool-red mt-0.5 flex-shrink-0" />
                          <span className="text-white/70 text-sm">{resp}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-deadpool-red/10 border border-deadpool-red/30 rounded-full text-xs text-deadpool-red"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
