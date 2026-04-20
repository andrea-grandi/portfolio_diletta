import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
 
const ProjectPage = lazy(() => import('./pages/ProjectPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const ContactsPage = lazy(() => import('./pages/ContactsPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))

function Prefetcher() {
  useEffect(() => {
    const timer = setTimeout(() => {
      import('./pages/ProjectPage')
      import('./pages/GalleryPage')
      import('./pages/ContactsPage')
      import('./pages/AboutPage')
    }, 500)
    return () => clearTimeout(timer)
  }, [])
  return null
}
 
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}
 
export default function App() {
  return (
    <BrowserRouter>
      <Prefetcher />
      <ScrollToTop />
      <Navbar />   {/* ← aggiunta qui */}
      <Suspense fallback={<div className="loading">LOADING...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/project/:id/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}