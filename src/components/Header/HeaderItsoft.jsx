import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './HeaderItsoft.css'
import { FaCogs, FaHome, FaShoppingCart, FaDotCircle, FaPlane } from 'react-icons/fa'
import { FaShield, FaSatellite } from 'react-icons/fa6'
import logoTechSoft from '../../assets/techsoft-logo.png'

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

  const navigate = useNavigate()
  const scrollToSection = (anchor) => {
    if (location.pathname !== '/itsoft') {
      navigate(`/itsoft${anchor}`)
      // console.lgo(navigate(`/itsoft${anchor}`))

    } else {
      const element = document.querySelector(anchor)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    closeMenu()
  }


  return (
    <>
      <header className={`itsoft-header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="container">
          <div className="itsoft-header-content">
            {/* Logo */}
            <div className="itsoft-logo">
              <Link to="/itsoft" onClick={closeMenu}>
                <div className="logo-content">
                  <div className="logo-text">
                    <span className="logo-main"><img src={logoTechSoft} alt="logo" /></span>
                    <span className="logo-sub">by ITINTERPRISES</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Navegação Principal */}
            <nav className={`itsoft-nav ${isMenuOpen ? 'active' : ''}`}>
              {/* Menu Principal Mobile */}


              <ul className="nav-main">
                <li>
                  <Link to="/" onClick={closeMenu}>
                    <span className="nav-icon"><FaHome /></span>
                    Página Inicial
                  </Link>
                </li>

                <li>
                  <Link to="/itsoft" onClick={closeMenu}>
                    <span className="nav-icon"><FaHome /></span>
                    Tech Soft
                  </Link>
                </li>


                <li className="nav-dropdown">
                  <button
                    onClick={() => scrollToSection('#services')}
                  >
                    <span className="nav-icon" ><FaCogs /></span>
                    Nossos Serviços
                  </button>


                </li>

                <li className="nav-dropdown">
                  <button
                    onClick={() => navigate('/shopping')}
                  >
                    <span className="nav-icon" ><FaShoppingCart /></span>
                    Loja
                  </button>


                </li>

                <li className="nav-dropdown">
                  <button
                    onClick={() => navigate('/starlink')}
                  >
                    <span className="nav-icon"><FaSatellite style={{ fontSize: '1.2em' }} /></span>
                    Starlink
                  </button>
                </li>

                <li className="nav-dropdown">
                  <button
                    onClick={() => navigate('/panteratravel')}
                  >
                    <span className="nav-icon"><FaPlane style={{ fontSize: '1.1em' }} /></span>
                    Pantera Travel
                  </button>
                </li>

                <li>
                  <button onClick={() => scrollToSection('#sobre')}>
                    <span className="nav-icon">👤</span>
                    Sobre Nós
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

      </header>

      {/* Overlay Mobile */}
      {isMenuOpen && (
        <div className="mobile-overlay" onClick={closeMenu}></div>
      )}
    </>
  )
}

export default HeaderItsoft