import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function Header() {
  const { lang, theme, toggleLang, toggleTheme, texts } = useApp()
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const t = texts[lang]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [menuOpen])

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const handleNavClick = (sectionId) => {
    closeMenu()
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const section = document.getElementById(sectionId)
        if (section) section.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const section = document.getElementById(sectionId)
      if (section) section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header id="header">
      <div className="header">
        <div className="nav-bar">
          <div className="brand">
            <Link to="/" onClick={closeMenu}>
              <h1>{t.home}</h1>
            </Link>
          </div>

          <div className="controls">
            <button onClick={toggleLang}>{lang.toUpperCase()}</button>
            <button onClick={toggleTheme}>{theme === 'light' ? '🌙' : '☀️'}</button>
          </div>

          {/* Бургер-кнопка */}
          <div className={`hamb ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <div className="bar"></div>
          </div>

          {/* Навігаційне меню */}
          <div className={`nav-list ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('services') }}>
                  {t.hobbies}
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('projects') }}>
                  {t.projects}
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about') }}>
                  {t.about}
                </a>
              </li>
              <li>
                <Link to="/contacts" onClick={closeMenu}>{t.contacts}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}