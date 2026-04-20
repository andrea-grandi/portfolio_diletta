import { useRef, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'
import '../styles/Home.css'
 
export default function Home() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const navigate = useNavigate()
 
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (trackRef.current?.offsetLeft ?? 0))
    setScrollLeft(trackRef.current?.scrollLeft ?? 0)
  }, [])
 
  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    trackRef.current.scrollLeft = scrollLeft - walk
  }, [isDragging, startX, scrollLeft])
 
  const onMouseUp = useCallback(() => setIsDragging(false), [])
 
  const handleCardClick = (id: string) => {
    if (!isDragging) navigate(`/project/${id}`)
  }
 
  const scrollTo = (dir: 'left' | 'right') => {
    if (!trackRef.current) return
    const amount = 420
    trackRef.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' })
  }
 
  return (
    <main className="home">
 
      <div className="scroll-area">
        <button className="scroll-btn scroll-btn--left" onClick={() => scrollTo('left')} aria-label="Scroll left">
          ←
        </button>
 
        <div
          className={`projects-track ${isDragging ? 'dragging' : ''}`}
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {projects.map((p) => (
            <article
              key={p.id}
              className="project-card"
              onClick={() => handleCardClick(p.id)}
              onMouseEnter={() => import('./ProjectPage')} // prefetch on hover
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate(`/project/${p.id}`)}
            >
              <div className="card-image">
                <img src={p.image} alt={p.title} draggable={false} />
              </div>
              <div className="card-info">
                <p className="card-category">{p.category}</p>
                <h2 className="card-title">{p.title}</h2>
                <p className="card-year">{p.year}</p>
              </div>
              <div className="card-hover-overlay">
                <span>VIEW →</span>
              </div>
            </article>
          ))}
        </div>
 
        <button className="scroll-btn scroll-btn--right" onClick={() => scrollTo('right')} aria-label="Scroll right">
          →
        </button>
      </div>
    </main>
  )
}