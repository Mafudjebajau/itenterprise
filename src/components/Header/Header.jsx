import { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMenu()
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`} >
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>ITINTERPRISES</h1>
          </div>

          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#home" onClick={closeMenu}>Início</a></li>
              <li><a href="#noticias" onClick={closeMenu}>Notícias</a></li>
              <li><a href="#empresas" onClick={closeMenu}>Empresas</a></li>
              <li><a href="#servicos" onClick={closeMenu}>Serviços</a></li>
              <li><a href="#contato" onClick={closeMenu}>Contato</a></li>
            </ul>
          </nav>

          <div
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header