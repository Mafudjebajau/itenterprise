import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './HeaderPantera.css'
import { FaHome, FaBars, FaTimes, FaGlobe } from 'react-icons/fa'
import logoText from '../../assets/pantera-logo-text.png'

const HeaderPantera = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation()

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const closeMenu = () => setIsMenuOpen(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        closeMenu()
    }

    return (
        <header className={`pt-header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container pt-header-container">
                <div className="pt-logo">
                    <Link to="/" onClick={closeMenu}>
                        <img src={logoText} alt="Pantera Travel" />
                    </Link>
                </div>

                <nav className={`pt-nav ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="pt-nav-list">
                        <li>
                            <Link to="/" onClick={closeMenu}>
                                <FaHome /> Início
                            </Link>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('pt-about')}>Sobre</button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('pt-servicos')}>Serviços</button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('pt-destinos')}>Destinos</button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('pt-contact')} className="pt-nav-cta">
                                Contacto
                            </button>
                        </li>
                    </ul>
                </nav>

                <div className="pt-menu-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
            {isMenuOpen && <div className="pt-mobile-overlay" onClick={closeMenu}></div>}
        </header>
    )
}

export default HeaderPantera
