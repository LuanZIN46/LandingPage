import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="container hero-inner">
        <div className="hero-content animate-fade-in">
          <h2 className="greeting">Olá, eu sou o Luan</h2>
          <h1 className="hero-title">
            Do conceito ao código: <span>criando soluções digitais</span>
          </h1>
          <p className="hero-subtitle">
            Tenho 21 anos e sou estudante de Sistemas de Informação, atualmente no penúltimo semestre da graduação. Sou apaixonado por tecnologia, desenvolvimento web e criação de soluções modernas e funcionais. Busco constantemente evoluir minhas habilidades em programação, design de interfaces e desenvolvimento de sistemas, transformando ideias em projetos reais e intuitivos.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">Ver Projetos</a>
            <a href="#contact" className="btn btn-secondary">Contato</a>
          </div>
        </div>
        <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="abstract-shape shape-1 glass"></div>
          <div className="abstract-shape shape-2 glass"></div>
          <div className="abstract-shape shape-3 glass"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
