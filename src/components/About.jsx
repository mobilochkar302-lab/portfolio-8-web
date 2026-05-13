// src/components/About.jsx
import { useApp } from '../context/AppContext'

export default function About() {
  const { lang, texts } = useApp()
  const t = texts[lang]

  return (
    <section id="about">
      <div className="about container">
        <div className="col-left">
          <div className="about-img">
            <img src="/img/photo-1.jpg" alt="Мельник Маргарита" />
          </div>
        </div>
        <div className="col-right">
          <h1 className="section-title">
            {t.aboutTitle?.split(' ')[0] || 'про'} <span>{t.aboutTitle?.split(' ')[1] || 'мене'}</span>
          </h1>
          <h2>{t.aboutSubtitle || 'Студентка 2 курсу'}</h2>
          <p>
            {t.aboutText || 
              'Навчаюсь у Національному університеті України "Київський політехнічний інститут Імені Ігоря Сікорського" на факультеті біомедичної інженерії за спеціальністю Комп\'ютерні науки'
            }
          </p>
          <a 
            href={t.aboutLink || "https://www.instagram.com/kpiuaofficial2025"} 
            target="_blank" 
            rel="noreferrer" 
            className="cta"
          >
            {t.aboutBtn || 'Instagram'}
          </a>
        </div>
      </div>
    </section>
  )
}
