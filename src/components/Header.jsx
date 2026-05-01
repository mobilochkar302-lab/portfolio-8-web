import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function Header() {
  const { lang, theme, toggleLang, toggleTheme, texts } = useApp()
  const [menuOpen, setMenuOpen] = useState(false)

  const t = texts[lang]

  const closeMenu = () => setMenuOpen(false)

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
              <li><a href="#services" onClick={closeMenu}>{t.hobbies}</a></li>
              <li><a href="#projects" onClick={closeMenu}>{t.projects}</a></li>
              <li><a href="#about" onClick={closeMenu}>{t.about}</a></li>
              <li><Link to="/contacts" onClick={closeMenu}>{t.contacts}</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}