import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function Header() {
  const { lang, theme, toggleLang, toggleTheme, texts } = useApp()
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const t = texts[lang]

  const closeMenu = () => setMenuOpen(false)

  const handleNavClick = (sectionId) => {
    closeMenu()
    if (location.pathname !== '/') {
      // Якщо ми не на головній – переходимо на головну, потім через мить скролимо
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
    <section id="header">
      <div className="header container">
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

          <div className={`hamb ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <div className="bar"></div>
          </div>

          <div className="nav-list">
            <ul className={menuOpen ? 'active' : ''}>
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
    </section>
  )
}