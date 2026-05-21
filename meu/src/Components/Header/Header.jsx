import React, { useState, useEffect } from 'react';
import './Header.css'

const Header = () => {
    const [scrolled, setScrolled] = useState(false); // cria um estado para saber se a pagina foi rolada
    const [menuOpen, setMenuOpen] = useState(false); // cria um estado para saber se o menu foi aberto

    useEffect(() => {
        const handleScroll = () => { 
            setScrolled(window.scrollY > 50);
        }; //retorna a quantidade de pixel rolada na tela, se for menor de 50 = false e se for maior = true

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener ('scroll', handleScroll); //remove o evento quando o componente deixa de existir
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }; // funcao para inverter o estado do menu

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className='container header-inner'>
                <a href="#home" className='logo'>Dev <span>Portfolio</span></a>

                <button className='mobile-menu-btn' onClick={toggleMenu}>
                  {menuOpen ? '✕' : '☰'}
                </button> 

                <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                  <a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>Início</a>
                  <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>Sobre</a>
                  <a href="#skills" className="nav-link" onClick={() => setMenuOpen(false)}>Habilidades</a>
                  <a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projetos</a>
                  <a href="#contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Contato</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;