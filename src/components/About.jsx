import { useApp } from '../context/AppContext'

export default function About() {
  const { lang, texts } = useApp()
  const t = texts[lang]

  return (
    <section id="about">
      <div className="about container">
        <div className="col-left">
          <div className="about-img">
            <img src="/img/photo-1.jpg" alt="Profile" />
          </div>
        </div>
        <div className="col-right">
          <h1 className="section-title">
            {t.aboutTitle.split(' ')[0]} <span>{t.aboutTitle.split(' ')[1]}</span>
          </h1>
          <h2>{t.aboutSubtitle}</h2>
          <p>{t.aboutText}</p>
          <a href="https://www.instagram.com/kpiuaofficial2025?igsh=MW95cDAyYTZsNml6cQ==" target="_blank" rel="noreferrer" className="cta">
            {t.aboutBtn}
          </a>
        </div>
      </div>
    </section>
  )
}