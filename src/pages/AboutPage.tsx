import '../styles/AboutPage.css'

const about = {
  name: 'DILETTA CELLURALE',
  role: 'DESIGNER',
  bio: 'Una puss.',
  formation: [
    { year: '2025', title: 'LAUREA TRIENNALE IN DESIGN INDUSTRIALE', place: 'ACCADEMIA DI BELLE ARTI - BOLOGNA (BO)'},
    { year: '2020', title: 'DIPLOMA IN DESIGN DEL PRODOTTO', place: 'ISA ADOLFO VENTURI - MODENA (MO)' },
  ], 
  events: [
    { year: '2024', title: 'Pro-Dotto', place: 'ESTE (PD)' },
    { year: '2024', title: 'progettAzione', place: 'BOLOGNA (BO)' },
  ],
  skills: [
    'AUTOCAD', 'SKETCHUP', 'ADOBE PHOTOSHOP',
    'ADOBE ILLUSTRATOR', 'BLENDER',
  ],
  lingue: ['ITALIANO (LINGUA MADRE)', 'INGLESE (LIVELLO B1)', ],
}

export default function AboutPage() {
  return (
    <main className="about-page">

      {/* INTRO */}
      <section className="about-intro">
        <div className="intro-left">
          <h1 className="intro-name">{about.name}</h1>
          <p className="intro-role">{about.role}</p>
        </div>
        <div className="intro-right">
          <p className="intro-bio">{about.bio}</p>
        </div>
      </section>

      {/* FORMAZIONE */}
      <section className="about-section">
        <h2 className="section-label">FORMAZIONE</h2>
        <div className="section-list">
          {about.formation.map((item, i) => (
            <div key={i} className="list-row">
              <span className="row-year">{item.year}</span>
              <span className="row-title">{item.title}</span>
              <span className="row-place">{item.place}</span>
            </div>
          ))}
        </div>
      </section>

      {/* EVENTI E MOSTRE */}
      <section className="about-section">
        <h2 className="section-label">EVENTI & MOSTRE</h2>
        <div className="section-list">
          {about.events.map((item, i) => (
            <div key={i} className="list-row">
              <span className="row-year">{item.year}</span>
              <span className="row-title">{item.title}</span>
              <span className="row-place">{item.place}</span>
            </div>
          ))}
        </div>
      </section>

      {/* COMPETENZE */}
      <section className="about-section">
        <h2 className="section-label">COMPETENZE</h2>
        <div className="skills-grid">
          {about.skills.map((skill) => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>
      </section>

      {/* LINGUE */}
      <section className="about-section about-section--last">
        <h2 className="section-label">LINGUE</h2>
        <div className="skills-grid">
          {about.lingue.map((lingue) => (
            <span key={lingue} className="skill-tag">{lingue}</span>
          ))}
        </div>
      </section>
    </main>
  )
}