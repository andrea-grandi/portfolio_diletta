import '../styles/AboutPage.css'

const about = {
  name: 'Maria Diletta Cellurale',
  role: 'JUNIOR DESIGNER',
  bio: 'Designer del prodotto con formazione presso l’Accademia di Belle Arti di Bologna, interessata alla progettazione di oggetti e sistemi che uniscono funzionalità, sostenibilità e attenzione all’esperienza dell’utente. Il lavoro spazia tra product design, interior e interaction design, con particolare attenzione alla scelta dei materiali, ai processi costruttivi e al rapporto tra spazio, persona e ambiente. Approccio progettuale orientato alla ricerca, alla sperimentazione e allo sviluppo di soluzioni contemporanee e consapevoli.',
  work_experience: [
    { year: '2026', title: 'Tecnico della Modellazione & Fabbricazione Digitale', place: 'Modularte - Modena (MO)' },
  ],
  formation: [
    { year: '2025', title: 'Design Industriale (Laurea triennale)', place: 'Accademia di Belle Arti - Bologna (BO)'},
    { year: '2020', title: 'Belle Arti - Design del Prodotto (Diploma)', place: 'ISA Adolfo Venturi - Modena (MO)' },
  ], 
  events: [
    { year: '2024', title: 'Pro-Dotto (Workshop)', place: 'Este (PD)' },
    { year: '2024', title: 'progettAzione (Evento)', place: 'Bologna (BO)' },
  ],
  skills: [
    'Autocad', 'Sketchup', 'Adobe Photoshop',
    'Adobe Illustrator', 'Blender',
  ],
  lingue: ['Italiano (Lingua Madre)', 'Inglese (Livello B1)', ],
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

      {/* WORK EXPERIENCE */}
      <section className="about-section">
        <h2 className="section-label">ESPERIENZE LAVORATIVE</h2>
        <div className="section-list">
          {about.work_experience.map((item, i) => (
            <div key={i} className="list-row">
              <span className="row-year">{item.year}</span>
              <span className="row-title">{item.title}</span>
              <span className="row-place">{item.place}</span>
            </div>
          ))}
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