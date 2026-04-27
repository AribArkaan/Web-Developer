import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      school: 'ITENAS Bandung',
      degree: 'Informatika S1',
      period: '2021 - 2026',
      duration: '4 tahun 4 bulan',
      gpa: '3.34',
      logo: './aset/download__2_-removebg-preview.png',
      type: 'education',
    },
    {
      school: 'SMAS BPI 1 Bandung',
      degree: 'IPA',
      period: '2019 - 2021',
      duration: '',
      gpa: '',
      logo: './aset/download__1_-removebg-preview.png',
      type: 'education',
    },
  ];

  const bootcampData = [
    {
      school: 'Bangkit Academy',
      degree: 'Cloud Computing',
      period: 'Feb 2024 - Jun 2024',
      duration: '',
      gpa: '',
      logo: './aset/bangkit_academy_logo.jpeg',
      type: 'bootcamp',
      organizer: 'led by Google, Tokopedia, Gojek, & Traveloka',
    },
  ];

  return (
    <section id="education" className="relative py-24 md:py-32 bg-deadpool-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-gradient-to-r from-deadpool-red/5 to-transparent" />
      </div>
      
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="scroll-reveal mb-16">
          <span className="section-subtitle">Academic Background</span>
          <h2 className="section-title mt-2">EDUCATION<span className="text-deadpool-red">.</span></h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <div className="scroll-reveal flex items-center gap-3 mb-8">
              <GraduationCap className="text-deadpool-red" size={28} />
              <h3 className="font-display text-2xl text-white">FORMAL EDUCATION</h3>
            </div>
            
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div
                  key={edu.school}
                  className="scroll-reveal glass-card-hover p-6 md:p-8"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-6">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white/5 flex items-center justify-center overflow-hidden">
                        <img
                          src={edu.logo}
                          alt={edu.school}
                          className="w-full h-full object-contain p-2"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="font-display text-xl md:text-2xl text-white mb-1">
                        {edu.school}
                      </h4>
                      <p className="text-deadpool-red font-medium mb-2">{edu.degree}</p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {edu.period}
                        </span>
                        {edu.duration && (
                          <span>{edu.duration}</span>
                        )}
                      </div>
                    </div>
                    
                    {/* GPA Badge */}
                    {edu.gpa && (
                      <div className="flex-shrink-0">
                        <div className="badge-red text-lg">
                          {edu.gpa}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Bootcamp Column */}
          <div>
            <div className="scroll-reveal flex items-center gap-3 mb-8">
              <Award className="text-deadpool-red" size={28} />
              <h3 className="font-display text-2xl text-white">BOOTCAMP</h3>
            </div>
            
            <div className="space-y-6">
              {bootcampData.map((bootcamp, index) => (
                <div
                  key={bootcamp.school}
                  className="scroll-reveal glass-card-hover p-6 md:p-8"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-6">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white/5 flex items-center justify-center overflow-hidden">
                        <img
                          src={bootcamp.logo}
                          alt={bootcamp.school}
                          className="w-full h-full object-contain p-2"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="font-display text-xl md:text-2xl text-white mb-1">
                        {bootcamp.school}
                      </h4>
                      <p className="text-white/60 text-sm mb-2">{bootcamp.organizer}</p>
                      <p className="text-deadpool-red font-medium mb-2">{bootcamp.degree}</p>
                      
                      <div className="flex items-center gap-1 text-white/50 text-sm">
                        <Calendar size={14} />
                        {bootcamp.period}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Decorative element */}
            <div className="scroll-reveal mt-8 glass-card p-6 border-deadpool-red/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-deadpool-red/20 flex items-center justify-center">
                  <Award className="text-deadpool-red" size={24} />
                </div>
                <div>
                  <p className="text-white font-medium">Certified Graduate</p>
                  <p className="text-white/50 text-sm">Bangkit Academy 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
