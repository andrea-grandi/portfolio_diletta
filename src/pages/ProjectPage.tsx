import { useParams, useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'
import '../styles/ProjectPage.css'
 
export default function ProjectPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const project = projects.find((p) => p.id === id)
  const currentIndex = projects.findIndex((p) => p.id === id)
  const prev = projects[currentIndex - 1]
  const next = projects[currentIndex + 1]
 
  if (!project) {
    return (
      <div className="not-found">
        <h1>404</h1>
        <button onClick={() => navigate('/')}>← BACK</button>
      </div>
    )
  }
 
  return (
    <main className="project-page">
      <div className="project-hero">
        <div className="project-hero-image">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="project-hero-meta">
          <p className="meta-category">{project.category}</p>
          <h1 className="meta-title">{project.title}</h1>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          <p className="meta-year">{project.year}</p>
        </div>
      </div>
 
      <div className="project-body">
        <div className="project-description">
          <p className="desc-lead">{project.description}</p>
          {project.longDescription.split('\n').filter(Boolean).map((para, i) => (
            <p key={i} className="desc-para">{para}</p>
          ))}
        </div>
      </div>

      <div className="project-gallery-cta">
        <button onClick={() => navigate(`/project/${project.id}/gallery`)}>
          VIEW GALLERY →
        </button>
      </div>
 
      <div className="project-pagination">
        {prev ? (
          <button
            className="pag-btn pag-btn--prev"
            onClick={() => navigate(`/project/${prev.id}`)}
            onMouseEnter={() => {/* already prefetched */}}
          >
            <span className="pag-dir">← PREV</span>
            <span className="pag-title">{prev.title}</span>
          </button>
        ) : <div />}
 
        {next ? (
          <button
            className="pag-btn pag-btn--next"
            onClick={() => navigate(`/project/${next.id}`)}
          >
            <span className="pag-dir">NEXT →</span>
            <span className="pag-title">{next.title}</span>
          </button>
        ) : <div />}
      </div>
    </main>
  )
}