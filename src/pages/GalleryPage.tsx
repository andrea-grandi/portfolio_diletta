import { useParams, useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'
import '../styles/GalleryPage.css'

export default function GalleryPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const project = projects.find((p) => p.id === id)

  if (!project) return null

  const gallery = project.gallery ?? []

  return (
    <main className="gallery-page">
      <nav className="gallery-nav">
        <button onClick={() => navigate(`/project/${id}`)}>← {project.title}</button>
        <span>{String(gallery.length).padStart(2, '0')} IMAGES</span>
      </nav>

      {gallery.length === 0 ? (
        <div className="gallery-empty">NO IMAGES YET</div>
      ) : (
        <div className="gallery-grid">
          {gallery.map((src, i) => (
            <div key={i} className="gallery-item">
              <img src={src} alt={`${project.title} — ${i + 1}`} />
              <span className="gallery-item-index">{String(i + 1).padStart(2, '0')}</span>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}