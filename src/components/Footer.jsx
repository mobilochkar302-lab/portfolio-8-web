export default function Footer() {
  return (
    <footer>
      <div className="footer-container container">
        <div className="brand">
          <h1>Контакти | <span>Маргарита</span></h1>
        </div>
        <h2>---------</h2>
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
        <p>&copy; 2026. Усі права захищено.</p>
      </div>
    </footer>
  )
}