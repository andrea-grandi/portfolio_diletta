import { useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import '../styles/GalleryPage.css'

export default function GalleryPage() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find((p) => p.id === id)

  if (!project) return null

  const gallery = project.gallery ?? []

  return (
    <main className="gallery-page">
      {gallery.length === 0 ? (
        <div className="gallery-empty">NO IMAGES YET</div>
      ) : (
        <div className="gallery-grid">
          {gallery.map((item, i) => (
            <div
              key={i}
              className="gallery-item"
            >
              <img src={item.src} alt={`${project.title} — ${i + 1}`} />
              <div className="gallery-item-overlay">
                <p>{item.description}</p>
              </div>
              <span className="gallery-item-index">{String(i + 1).padStart(2, '0')}</span>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}