import { createContext, useState, useEffect, useContext } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [lang, setLang] = useState('ua')
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const toggleLang = () => setLang(prev => prev === 'ua' ? 'en' : 'ua')
  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light')

  // ========= ВСІ ТЕКСТИ (ВКЛЮЧАЮЧИ ПРОЄКТИ) =========
  const texts = {
    ua: {
      home: 'ГОЛОВНА',
      hobbies: 'Хоббі',
      projects: 'Проєкти',
      about: 'Про мене',
      contacts: 'Контакти',
      heroTitle1: 'Привіт!',
      heroTitle2: 'Мене звати',
      heroTitle3: 'Мельник Маргарита',
      heroBtn: 'КОНТАКТИ',
      servicesTitle: 'Мої хоббі',
      servicesDesc: 'Я цілеспрямована та відповідальна людина, яка серйозно ставиться до своїх обов’язків. Умію планувати свій час і намагаюся дотримуватися встановленого розпорядку. Відзначаюся наполегливістю у досягненні поставлених цілей та прагненням до постійного розвитку.',
      hobbiesItems: [
        { title: 'Перегляд фільмів', text: 'У вільний час я люблю дивитися фільми. Це допомагає мені відпочити та переключитися. Я звертаю увагу на сюжет, ідею та розвиток персонажів.' },
        { title: 'Творчість', text: 'Мені подобається займатися творчими завданнями. Я люблю генерувати нові ідеї та працювати над проєктами. Творчість розвиває уяву та креативне мислення.' },
        { title: 'Саморозвиток', text: 'Я приділяю увагу власному розвитку. Регулярно навчаюся та вдосконалюю свої знання. Планую свій день, щоб ефективно використовувати час.' },
        { title: 'Спорт і тренування', text: 'Я регулярно займаюся домашніми тренуваннями. Поєдную кардіо, пілатес і вправи на розтяжку. Це допомагає підтримувати фізичну форму та покращувати самопочуття.' }
      ],
      aboutTitle: 'про мене',
      aboutSubtitle: 'Студентка 2 курсу',
      aboutText: 'Навчаюсь у Національному університеті України "Київський політехнічний інститут Імені Ігоря Сікорського" на факультеті біомедичної інженерії за спеціальністю Комп\'ютерні науки',
      aboutBtn: 'Instagram',
      
      // ========= ПРОЄКТИ (УКР) =========
      projectsList: [
        {
          id: 1,
          title: 'ТЕЛЕГРАМ-БОТ',
          author: 'Мельник М.Ю.',
          text: 'Розробила чат-бота на Python, який визначає знак зодіаку за датою народження та надає прогноз на день, тиждень або місяць. Реалізовано перевірку коректності введених даних і логіку обробки запитів користувача.',
          tags: ['Python', 'API', 'Telegram']
        },
        {
          id: 2,
          title: 'ТЕЛЕГРАМ-БОТ (МЕДИЧНИЙ)',
          author: 'Мельник М.Ю.',
          text: 'Аналізує введені користувачем симптоми та пропонує можливі варіанти захворювань на основі заданої бази даних. Реалізовано логіку зіставлення симптомів і структуровану систему відповідей.',
          tags: ['Python', 'AI', 'Logic']
        },
        {
          id: 3,
          title: 'РОЗРОБКА НАВЧАЛЬНОГО ВЕБ-САЙТУ',
          author: 'Мельник М.Ю.',
          text: 'Створила структурований веб-сайт із кількома розділами та навігацією. Реалізувала базову верстку, оформлення сторінок і логіку подання інформації.',
          tags: ['HTML', 'CSS', 'React']
        },
        {
          id: 4,
          title: 'ГРА "САПЕР"',
          author: 'Мельник М.Ю.',
          text: 'Розробила власну версію гри «Сапер» із реалізацією ігрового поля, генерації мін та перевірки ходів користувача. Реалізовано алгоритм підрахунку кількості мін навколо клітинки.',
          tags: ['JavaScript', 'Game', 'Logic']
        }
      ],
      
      contactsPage: {
        phone: 'Номер телефону',
        phoneValue: '+380984167462',
        email: 'Електронна адреса',
        emailValue: 'mobilochkar302@gmail.com',
        address: 'Місце проживання',
        addressValue: 'Україна, Рівненська обл., Рівненський район, Мізоцька тг, с. Білашів'
      }
    },
    
    en: {
      home: 'HOME',
      hobbies: 'Hobbies',
      projects: 'Projects',
      about: 'About',
      contacts: 'Contacts',
      heroTitle1: 'Hello!',
      heroTitle2: 'My name is',
      heroTitle3: 'Melnyk Margarita',
      heroBtn: 'CONTACTS',
      servicesTitle: 'My Hobbies',
      servicesDesc: 'I am a purposeful and responsible person who takes my duties seriously. I can plan my time and try to stick to the established routine.',
      hobbiesItems: [
        { title: 'Watching movies', text: 'In my free time I enjoy watching movies. It helps me relax and recharge. I pay attention to the plot, ideas and character development.' },
        { title: 'Creativity', text: 'I like doing creative tasks. I enjoy generating new ideas and working on projects. Creativity develops imagination and creative thinking.' },
        { title: 'Self-development', text: 'I focus on my own development. I regularly learn and improve my knowledge. I plan my day to use time effectively.' },
        { title: 'Sports & Training', text: 'I do home workouts regularly. Combining cardio, pilates and stretching. It helps me stay fit and improve my well-being.' }
      ],
      aboutTitle: 'about me',
      aboutSubtitle: '2nd year student',
      aboutText: 'I study at the National University of Ukraine "Kyiv Polytechnic Institute named after Igor Sikorsky" at the Faculty of Biomedical Engineering, specialty Computer Science',
      aboutBtn: 'Instagram',
      
      // ========= PROJECTS (ENG) =========
      projectsList: [
        {
          id: 1,
          title: 'TELEGRAM BOT',
          author: 'Melnyk M.Yu.',
          text: 'Developed a Python chatbot that determines the zodiac sign by date of birth and provides a forecast for the day, week or month. Implemented input validation and request processing logic.',
          tags: ['Python', 'API', 'Telegram']
        },
        {
          id: 2,
          title: 'TELEGRAM BOT (MEDICAL)',
          author: 'Melnyk M.Yu.',
          text: 'Analyzes user symptoms and suggests possible diseases based on a given database. Implemented symptom matching logic and structured response system.',
          tags: ['Python', 'AI', 'Logic']
        },
        {
          id: 3,
          title: 'EDUCATIONAL WEBSITE',
          author: 'Melnyk M.Yu.',
          text: 'Created a structured website with several sections and navigation. Implemented basic layout, page design and content presentation logic.',
          tags: ['HTML', 'CSS', 'React']
        },
        {
          id: 4,
          title: 'MINESWEEPER GAME',
          author: 'Melnyk M.Yu.',
          text: 'Developed a custom version of Minesweeper with game field, mine generation and user move validation. Implemented mine counting algorithm and empty zone opening logic.',
          tags: ['JavaScript', 'Game', 'Logic']
        }
      ],
      
      contactsPage: {
        phone: 'Phone number',
        phoneValue: '+380984167462',
        email: 'Email',
        emailValue: 'mobilochkar302@gmail.com',
        address: 'Location',
        addressValue: 'Ukraine, Rivne region, Rivne district, Mizotska hromada, Bilashiv village'
      }
    }
  }

  return (
    <AppContext.Provider value={{ lang, theme, toggleLang, toggleTheme, texts }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)