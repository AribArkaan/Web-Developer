import { useRef } from 'react';

const Skills = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const technicalSkills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'PHP', level: 70 },
    { name: 'Laravel', level: 75 },
    { name: 'TailwindCSS', level: 85 },
    { name: 'React', level: 70 },
    { name: 'MySQL', level: 75 },
    { name: 'Git', level: 80 },
  ];

  const softSkills = [
    'Project Management',
    'Team Work',
    'Communication',
    'Problem Solving',
    'Critical Thinking',
    'Adaptability',
    'Time Management',
    'Leadership',
  ];

  const tools = [
    'VS Code',
    'Figma',
    'GitHub',
    'Postman',
    'XAMPP',
    'Docker',
    'Vercel',
    'Netlify',
  ];

  const marqueeItems = [
    'HTML', 'CSS', 'JavaScript', 'Python', 'PHP', 'Laravel', 'TailwindCSS', 
    'React', 'MySQL', 'Git', 'Figma', 'UI/UX', 'Frontend', 'Backend'
  ];

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-deadpool-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-1/3 h-1/3 bg-gradient-to-l from-deadpool-red/5 to-transparent" />
      </div>
      
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="scroll-reveal mb-16">
          <span className="section-subtitle">What I Can Do</span>
          <h2 className="section-title mt-2">SKILLS<span className="text-deadpool-red">.</span></h2>
        </div>
        
        {/* Marquee */}
        <div className="scroll-reveal mb-16 overflow-hidden">
          <div
            ref={marqueeRef}
            className="flex animate-marquee whitespace-nowrap"
          >
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span
                key={index}
                className="mx-4 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/60 font-display text-lg"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="scroll-reveal lg:col-span-2">
            <div className="glass-card p-8">
              <h3 className="font-display text-2xl text-white mb-8">TECHNICAL SKILLS</h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {technicalSkills.map((skill, index) => (
                  <div key={skill.name} style={{ transitionDelay: `${index * 50}ms` }}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white/80">{skill.name}</span>
                      <span className="text-deadpool-red">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-deadpool-red to-red-400 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Soft Skills & Tools */}
          <div className="space-y-8">
            {/* Soft Skills */}
            <div className="scroll-reveal" style={{ transitionDelay: '100ms' }}>
              <div className="glass-card p-6">
                <h3 className="font-display text-xl text-white mb-4">SOFT SKILLS</h3>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Tools */}
            <div className="scroll-reveal" style={{ transitionDelay: '200ms' }}>
              <div className="glass-card p-6">
                <h3 className="font-display text-xl text-white mb-4">TOOLS</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 bg-deadpool-red/10 border border-deadpool-red/30 rounded-lg text-sm text-deadpool-red"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Expertise Areas */}
        <div className="scroll-reveal mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Frontend', value: '85%', icon: '🎨' },
            { label: 'Backend', value: '75%', icon: '⚙️' },
            { label: 'UI/UX Design', value: '80%', icon: '✨' },
            { label: 'Machine Learning', value: '70%', icon: '🤖' },
          ].map((item, index) => (
            <div
              key={item.label}
              className="glass-card p-6 text-center hover:border-deadpool-red/30 transition-colors"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <div className="font-display text-3xl text-deadpool-red">{item.value}</div>
              <div className="text-white/50 text-sm mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
