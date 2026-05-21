import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      name: 'HTML5',
      desc: 'Estrutura semântica e acessibilidade.',
      icon: <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16l-1.5 12.5L12 20l-6.5-3.5L4 4z"></path><path d="M12 4v16"></path></svg>
    },
    {
      name: 'CSS3',
      desc: 'Estilização moderna e responsiva.',
      icon: <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16l-1.5 12.5L12 20l-6.5-3.5L4 4z"></path><path d="M12 4v16"></path></svg>
    },
    {
      name: 'JavaScript',
      desc: 'Lógica e interatividade dinâmica.',
      icon: <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><path d="M9 16v-6"></path><path d="M15 16v-4c0-1.1-.9-2-2-2s-2 .9-2 2"></path></svg>
    },
    {
      name: 'React',
      desc: 'Interfaces e SPAs componentizadas.',
      icon: <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)"></ellipse></svg>
    },
    {
      name: 'Node.js',
      desc: 'APIs e desenvolvimento backend.',
      icon: <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
    },
    {
      name: 'Git',
      desc: 'Controle de versão e colaboração.',
      icon: <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="6" r="3"></circle><path d="M6 9v3a3 3 0 0 0 3 3h6"></path><path d="M18 9v3"></path></svg>
    },
    {
      name: 'Banco de Dados',
      desc: 'Modelagem e gestão de dados.',
      icon: <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Minhas <span>Habilidades</span></h2>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card glass">
              <div className="skill-icon">
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-desc">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
