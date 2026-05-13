export default function ProjectCard({ title, author, text, tags, image }) {
  return (
    <div className="project-items">
      {image && (
        <div className="image-wrapper">
          <img src={image} alt={title} className="project-card__image" />
        </div>
      )}
      <div className="project-info">
        <h1>{title}</h1>
        {author && <h2>{author}</h2>}
        <p>{text}</p>
        {tags && tags.length > 0 && (
          <div className="tags">
            {tags.map((tag, idx) => (
              <span key={idx} className="tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
