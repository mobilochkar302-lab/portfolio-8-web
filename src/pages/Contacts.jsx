import { useApp } from '../context/AppContext'

export default function Contacts() {
  const { lang, texts } = useApp()
  const t = texts[lang].contactsPage

  return (
    <section id="contacts-page">
      <div className="contacts-container">
        <h1>{texts[lang].contacts} <span></span></h1>
        
        <h2>{t.phone}</h2>
        <hr />
        <h2>{t.phoneValue}</h2>

        <h2>{t.email}</h2>
        <hr />
        <h2>{t.emailValue}</h2>

        <h2>{t.address}</h2>
        <hr />
        <h2>{t.addressValue}</h2>

        <div className="social-icon">
          <div className="social-item">
            <a href="https://www.instagram.com/margaritamelnik?igsh=MXY3cW5oOWQzaTJncg==" target="_blank" rel="noreferrer">
              <img src="/img/insta.png" alt="instagram" />
            </a>
          </div>
          <div className="social-item">
            <a href="https://github.com/mobilochkar302-lab" target="_blank" rel="noreferrer">
              <img src="/img/github.png" alt="github" />
            </a>
          </div>
          <div className="social-item">
            <a href="https://www.linkedin.com/in/маргарита-мельник-126379396" target="_blank" rel="noreferrer">
              <img src="/img/linkedin.png" alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}