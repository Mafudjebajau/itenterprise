import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './HeaderItsoft.css'
import { FaCogs,FaCog, FaHome, FaWindowClose } from 'react-icons/fa'
import { FaChartBar, FaPersonBooth, FaShield } from 'react-icons/fa6'

const HeaderItsoft = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
      setActiveDropdown(null)
    }
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
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

    const handleClickOutside = (event) => {
      if (!event.target.closest('.itsoft-nav') && !event.target.closest('.itsoft-menu-toggle')) {
        closeMenu()
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    document.addEventListener('click', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const servicos = [
    { nome: 'Consultoria TI', anchor: '#consultoria', icone: '💼' },
    { nome: 'Configurações Rede', anchor: '#redes', icone: '🌐' },
    { nome: 'Telefonia IP', anchor: '#telefonia', icone: '📞' },
    { nome: 'Formação Avançada', anchor: '#formacao', icone: '🎓' },
    { nome: 'Segurança Eletrónica', anchor: '#seguranca', icone: '🔒' },
    { nome: 'Suporte Cloud', anchor: '#cloud', icone: '☁️' },
    { nome: 'Licenciamento', anchor: '#licenciamento', icone: '📋' },
    { nome: 'Desenvolvimento', anchor: '#desenvolvimento', icone: '💻' },
    { nome: 'Câmaras Segurança', anchor: '#camaras', icone: '📹' }
  ]

  const scrollToSection = (anchor) => {
    if (location.pathname !== '/itsoft') {
      window.location.href = `/itsoft${anchor}`
    } else {
      const element = document.querySelector(anchor)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    closeMenu()
  }

  const quickActions = [
    { label: 'Ligar', icon: '📞', action: 'tel:+351912345678' },
    { label: 'WhatsApp', icon: '💬', action: 'https://wa.me/351912345678' },
    { label: 'Email', icon: '✉️', action: 'mailto:itsoft@itinterprises.com' }
  ]

  return (
    <>
      <header className={`itsoft-header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="container">
          <div className="itsoft-header-content">
            {/* Logo */}
            <div className="itsoft-logo">
              <Link to="/itsoft" onClick={closeMenu}>
                <div className="logo-content">
                  <span className="logo-icon">💻</span>
                  <div className="logo-text">
                    <span className="logo-main">ITSOFT</span>
                    <span className="logo-sub">by ITINTERPRISES</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Navegação Principal */}
            <nav className={`itsoft-nav ${isMenuOpen ? 'active' : ''}`}>
              {/* Menu Principal Mobile */}
              <div className="mobile-menu-header">
           
                <button className="btn-close-menu" onClick={closeMenu}>
                  <FaWindowClose/>
                </button>
              </div>

              <ul className="nav-main">
                <li>
                  <Link to="/" onClick={closeMenu}>
                    <span className="nav-icon"><FaHome/></span>
                    Página Inicial
                  </Link>
                </li>
                
                <li className="nav-dropdown">
                  <button 
                    className={`dropdown-toggle ${activeDropdown === 'servicos' ? 'active' : ''}`}
                    onClick={() => toggleDropdown('servicos')}
                  >
                    <span className="nav-icon"><FaCogs/></span>
                    Nossos Serviços
                    <span className="dropdown-arrow">{activeDropdown === 'servicos' ? '▲' : '▼'}</span>
                  </button>
                  
                  <div className={`dropdown-menu ${activeDropdown === 'servicos' ? 'active' : ''}`}>
                    <div className="dropdown-header">
                      <h4>Serviços ITSOFT</h4>
                      <p>Escolha uma categoria</p>
                    </div>
                    <div className="dropdown-grid">
                      {servicos.map((servico, index) => (
                        <button
                          key={index}
                          className="dropdown-item"
                          onClick={() => scrollToSection(servico.anchor)}
                        >
                          <span className="dropdown-icon">{servico.icone}</span>
                          <span className="dropdown-text">
                            <strong>{servico.nome}</strong>
                            <small>Ver detalhes →</small>
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </li>

                <li>
                  <button onClick={() => scrollToSection('#sobre')}>
                    <span className="nav-icon"><FaPersonBooth/></span>
                    Sobre Nós
                  </button>
                </li>
                
                <li>
                  <button onClick={() => scrollToSection('#cases')}>
                    <span className="nav-icon"><FaChartBar/></span>
                    Cases de Sucesso
                  </button>
                </li>
                
                <li>
                  <button onClick={() => scrollToSection('#tecnologias')}>
                    <span className="nav-icon"><FaCog/></span>
                    Tecnologias
                  </button>
                </li>
              </ul>


            
            </nav>

            

            {/* Menu Mobile Toggle */}
            <div 
              className={`itsoft-menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {/* Barra de Status */}
        <div className="status-bar">
          <div className="container">
            <div className="status-content">
              <div className="status-item">
                <span className="status-indicator online"></span>
                <span className="status-text">Suporte Online</span>
              </div>
              <div className="status-item">
                <span className="status-icon">⚡</span>
                <span className="status-text">Resposta em 15min</span>
              </div>
              <div className="status-item">
                <span className="status-icon"><FaShield/></span>
                <span className="status-text">Segurança Garantida</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay Mobile */}
      {isMenuOpen && (
        <div className="mobile-overlay" onClick={closeMenu}></div>
      )}
    </>
  )
}

export default HeaderItsoft