export default function ProjectCard({ title, author, text, tags }) {
  return (
    <div className="project-items">
      <div className="project-info">
        <h1>{title}</h1>
        <h2>{author}</h2>
        <p>{text}</p>
        {tags && (
          <div className="tags">
            {tags.map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}