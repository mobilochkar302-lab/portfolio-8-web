import { useApp } from '../context/AppContext'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const { lang, texts } = useApp()
  const projects = texts[lang].projectsList

  return (
    <section id="projects">
      <div className="projects container">
        <div className="projects-header">
          <h1 className="section-title">
            {texts[lang].projects.split(' ')[0]} <span>{texts[lang].projects.split(' ')[1] || ''}</span>
          </h1>
        </div>
        <div className="all-projects">
          {projects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}