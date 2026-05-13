import { useApp } from '../context/AppContext'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const { lang, texts } = useApp()
  const projects = texts[lang].projectsList
  const titleParts = texts[lang].projects.split(' ')
  const firstWord = titleParts[0]
  const restWords = titleParts.slice(1).join(' ')

  return (
    <section id="projects">
      <div className="projects container">
        <div className="projects-header">
          <h1 className="section-title">
            {firstWord}
            {restWords && <span> {restWords}</span>}
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
