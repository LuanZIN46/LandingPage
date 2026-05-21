import React from 'react';
import './About.css';

const About = () => {

    const stats = [
        { label: 'Projetos', value: '3+' },
        { label: 'Tecnologias', value: '5+' },
        { label: 'Anos de Experiência', value: '2+' },
    ];

    return (
        <section id="about" className="about section">
            <div className="container">

                <h2 className="section-title">
                    Sobre <span>Mim</span>
                </h2>

                <div className="about-content">

                    <div className="about-text glass">
                        <h3>Minha História</h3>

                        <p>
                            Tenho 21 anos e sou estudante de Sistemas de Informação, atualmente no penúltimo semestre da graduação. Entrei na área de tecnologia aos 18 anos e desde então venho aprimorando minhas habilidades no desenvolvimento Full Stack, criando projetos modernos, funcionais e focados na experiência do usuário.
                        </p>

                        <p>
                            Trabalho principalmente com React, Node.js, JavaScript e SQL, desenvolvendo projetos pessoais e acadêmicos que fortalecem minha experiência prática. Sou apaixonado por tecnologia, interfaces modernas e pela criação de sistemas capazes de transformar ideias em soluções reais para empresas e pessoas.
                        </p>
                        
                    </div>

                    <div className="about-timeline glass">

                       <h3>Trajetória</h3>

                        <div className="timeline-item">
                            <div className="timeline-dot"></div>

                            <h4>Início na Tecnologia</h4>

                            <span className="timeline-date">
                                2023
                            </span>

                            <p>
                                Comecei meus estudos em programação e desenvolvimento web,
                                dando os primeiros passos no universo da tecnologia.
                            </p>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-dot"></div>

                            <h4>Area Full Stack</h4>

                            <span className="timeline-date">
                                2024 - Atual
                            </span>

                            <p>
                                Desenvolvimento de projetos pessoais e acadêmicos utilizando
                                React, Node.js, JavaScript e Banco de Dados.
                            </p>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-dot"></div>

                            <h4>Evolução Profissional</h4>

                            <span className="timeline-date">
                                2025 - Atual
                            </span>

                            <p>
                                Aperfeiçoando habilidades em desenvolvimento Full Stack,
                                criação de interfaces modernas e sistemas voltados para empresas.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="about-stats">

                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card glass">
                            <h2>{stat.value}</h2>
                            <p>{stat.label}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default About;