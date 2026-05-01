import { useApp } from '../context/AppContext'

export default function Services() {
  const { lang, texts } = useApp()
  const t = texts[lang]

  return (
    <section id="services">
      <div className="services container">
        <div className="service-top">
          <h1 className="section-title">
            {t.servicesTitle.split(' ')[0]} <span>{t.servicesTitle.split(' ')[1] || ''}</span>
          </h1>
          <p>{t.servicesDesc}</p>
        </div>
        <div className="service-buttom">
          {t.hobbiesItems.map((item, idx) => (
            <div className="service-item" key={idx}>
              <div className="icon">
                <img src="/img/design-1.png" alt="icon" />
              </div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}