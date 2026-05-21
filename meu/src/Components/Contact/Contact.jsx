import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <h2 className="section-title">Vamos <span>Conversar?</span></h2>
      
      <div className="contact-container">
        <div className="contact-info glass">
          <h3>Entre em Contato</h3>
          <p className="contact-desc">
            Estou aberto a novas oportunidades e projetos interessantes. Se você tem uma ideia e precisa de ajuda para tirá-la do papel, não hesite em me mandar uma mensagem!
          </p>
          
          <div className="social-links">
            <a href="#" className="social-btn">
              <span className="social-icon">GitHub</span>
            </a>
            <a href="#" className="social-btn">
              <span className="social-icon">LinkedIn</span>
            </a>
            <a href="#" className="social-btn">
              <span className="social-icon">Email</span>
            </a>
            <a href="#" className="social-btn">
              <span className="social-icon">WhatsApp</span>
            </a>
          </div>
        </div>

        <form className="contact-form glass" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" placeholder="Seu nome" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="seu.email@exemplo.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" rows="5" placeholder="Como posso te ajudar?" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-block">Enviar Mensagem</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
