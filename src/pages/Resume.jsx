import React from 'react';
import { Award, GraduationCap, Printer } from 'lucide-react';

const SKILLS_DATA = {
  frontend: [
    { name: 'React.js', rating: 85, level: 'Proficient' },
    { name: 'Redux Toolkit', rating: 70, level: 'Intermediate' },
    { name: 'JavaScript (ES6+)', rating: 90, level: 'Proficient' },
    { name: 'HTML5 & CSS3', rating: 95, level: 'Advanced' },
    { name: 'Tailwind CSS / Vanilla CSS', rating: 90, level: 'Advanced' }
  ],
  backend: [
    { name: 'Node.js', rating: 80, level: 'Proficient' },
    { name: 'Express.js', rating: 85, level: 'Proficient' },
    { name: 'REST APIs', rating: 85, level: 'Proficient' },
    { name: 'JWT & OAuth', rating: 75, level: 'Intermediate' }
  ],
  database: [
    { name: 'MongoDB', rating: 80, level: 'Proficient' },
    { name: 'Mongoose ODM', rating: 85, level: 'Proficient' },
    { name: 'SQL / PostgreSQL', rating: 60, level: 'Intermediate' }
  ],
  tools: [
    { name: 'Git & GitHub', rating: 85, level: 'Proficient' },
    { name: 'Postman', rating: 90, level: 'Advanced' },
    { name: 'Docker (Familiarity)', rating: 45, level: 'Beginner' },
    { name: 'Vercel / Netlify / Render', rating: 80, level: 'Proficient' }
  ]
};

const TIMELINE_DATA = [
  {
    type: 'experience',
    title: 'MERN Stack Developer (Intern)',
    subtitle: 'PixelForge Software Solutions',
    date: 'Jan 2026 - Present',
    details: [
      'Collaborated in a team of 3 developers to construct responsive dashboard interfaces in React.',
      'Developed and optimized Express REST API routes for authentication and item retrieval.',
      'Maintained MongoDB schemas and implemented indexing which speed up queries by 20%.'
    ]
  },
 ,
  {
    type: 'education',
    title: 'Intermediate in   (Pre-Engineering)',
    subtitle: ' Govt. Degree Girls College',
    date: '2007',
    
  },
    {
    type: 'education',
    title: 'mern stack developer',
    subtitle: ' smit(sylani mass institute of technology)',
    date: '2026',
    
  }
];

export default function Resume() {

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="main-content animate-fade-in printable-resume-container">
      {/* Header section (Non-printable controls + printable title) */}
      <div className="section-header text-center mb-8" style={{ width: '100%' }}>
        <span className="badge badge-purple no-print">My Credentials</span>
        <h2 className="mt-4" style={{ fontSize: '2.5rem' }}>Resume & Skills</h2>
        <p className="no-print" style={{ maxWidth: '600px', margin: '12px auto 0' }}>
          Explore my academic qualifications, self-taught roadmap, and technical skill distributions.
        </p>
        
        {/* Actions bar */}
        <div className="no-print mt-4" style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
          <button onClick={handlePrint} className="btn btn-primary">
            <Printer size={16} />
            <span>Print / PDF Version</span>
          </button>
        </div>
      </div>

      {/* Main Resume Card (Optimized for both screen viewing and printing) */}
      <div className="glass-panel resume-paper" style={{
        width: '100%',
        padding: '40px',
        background: 'var(--glass-bg)',
        border: 'var(--glass-border)',
        borderRadius: 'var(--radius-lg)'
      }}>
        {/* Print Header */}
        <div className="print-header" style={{ borderBottom: '2px solid var(--primary)', paddingBottom: '24px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', margin: 0 }}>Sadia Ather</h1>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-hover)', fontWeight: '500', marginTop: '4px' }}>MERN Stack Developer</h3>
            </div>
            <div style={{ textAlign: 'right', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <p>Email: 
                <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=ishmalsiddiqui59@gmail.com"  target="_blank" rel="noopener noreferrer"> ishmalsiddiqui59@gmail.com</a>
              </p>
              <p>GitHub: 
                 <a href="https://github.com/sadiaather" target="_blank" rel="noopener noreferrer">github.com/sadia-ather</a>
              </p>
              <p>LinkedIn: 
                 <a href="https://www.linkedin.com/in/sadia-ather-563340378/" target="_blank" rel="noopener noreferrer">linkedin.com/in/sadia-ather</a>
              </p>
              <p>Location: karachi, Pakistan</p>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid-cols-2" style={{ gap: '40px' }}>
          
          {/* Left Column: Education & Timeline */}
          <div>
            <h3 style={{ fontSize: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <GraduationCap className="text-gradient" size={24} />
              <span>Timeline & Education</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative', paddingLeft: '20px' }}>
              {/* Vertical timeline line */}
              <div style={{
                position: 'absolute',
                left: '6px',
                top: '10px',
                bottom: '10px',
                width: '2px',
                background: 'linear-gradient(to bottom, var(--primary), var(--secondary))'
              }} />

              {TIMELINE_DATA.map((item, index) => (
                <div key={index} style={{ position: 'relative' }}>
                  {/* Timeline point */}
                  <div style={{
                    position: 'absolute',
                    left: '-20px',
                    top: '6px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: item.type === 'experience' ? 'var(--primary)' : item.type === 'certification' ? 'var(--secondary)' : 'var(--accent)',
                    border: '3px solid var(--bg-main)'
                  }} />

                  <span className="badge badge-purple" style={{ fontSize: '0.65rem', marginBottom: '6px' }}>{item.date}</span>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '2px' }}>{item.title}</h4>
                  <h5 style={{ fontSize: '0.9rem', color: 'var(--primary-hover)', fontWeight: '500', marginBottom: '8px' }}>{item.subtitle}</h5>
                 
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Skills Matrix */}
          <div>
            <h3 style={{ fontSize: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award className="text-gradient" size={24} />
              <span>Technical Skills</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Skill Categories */}
              {Object.keys(SKILLS_DATA).map((category) => (
                <div key={category} style={{ marginBottom: '12px' }}>
                  <h4 style={{ textTransform: 'capitalize', fontSize: '1.05rem', color: 'var(--primary-hover)', marginBottom: '10px' }}>
                    {category} Technologies
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {SKILLS_DATA[category].map((skill, index) => (
                      <div key={index}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '4px' }}>
                          <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{skill.name}</span>
                          <span style={{ color: 'var(--text-secondary)' }}>{skill.level} ({skill.rating}%)</span>
                        </div>
                        {/* Progress Bar Container */}
                        <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{
                            width: `${skill.rating}%`,
                            height: '100%',
                            background: category === 'frontend' ? 'var(--grad-primary)' : category === 'backend' ? 'var(--grad-accent)' : 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
                            borderRadius: '3px'
                          }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Print Footer */}
        <div className="print-footer" style={{ display: 'none', borderTop: '1px solid var(--border-color)', paddingTop: '16px', marginTop: '32px', textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          <p>Portfolio built with React, Node.js, and Express.js by Sadia Ather. See online: sadia.ather.dev</p>
        </div>
      </div>
    </div>
  );
}
