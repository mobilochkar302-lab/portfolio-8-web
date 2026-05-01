import { useApp } from '../context/AppContext'
import { Link } from 'react-router-dom'

export default function Hero() {
  const { lang, texts } = useApp()
  const t = texts[lang]

  return (
    <section id="hero">
      <div className="one container">
        <div>
          <h1>{t.heroTitle1}<span></span></h1>
          <h1>{t.heroTitle2}<span></span></h1>
          <h1>{t.heroTitle3}<span></span></h1>
          <Link to="/contacts" className="cta">{t.heroBtn}</Link>
        </div>
      </div>
    </section>
  )
}