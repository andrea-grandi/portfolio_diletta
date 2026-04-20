import diesis from '../assets/projects/01_diesis.png'
import mocquebrune from '../assets/projects/02_mocquebrune.png'
import appartamento from '../assets/projects/03_appartamento.png'
import thymos from '../assets/projects/04_thymos.png'
import qubi from '../assets/projects/05_qubi.png'


export interface Project {
  id: string
  title: string
  image: string
  year: string
  category: string
  description: string
  longDescription: string
  color: string
  tags: string[]
  gallery?: string[]
}
 
export const projects: Project[] = [
  {
    id: '01-project-diesis',
    title: 'DIESIS',
    image: diesis,
    year: '2024',
    category: 'Product Design',
    description: "Design & Ristorazione",
    longDescription: "Nella ristorazione, lo spazio e l'atmosfera sono parte integrante dell'esperienza del cliente. L'illuminazione, in particolare, influisce su percezioni ed emozioni, rendendo unica la fruizione del menù. L'esperienza diretta maturata in un ristorante mi ha permesso di comprendere quanto sia fondamentale disporre di un sistema di illuminazione versatile, in grado di adeguarsi alle diverse esigenze del servizio. Diesis nasce con l’obiettivo di offrire una luce sempre adeguata alle diverse configurazioni della sala. È una lampada LED modulare, discreta e immediata, facilmente agganciabile a una griglia metallica, che consente di illuminare con precisione ogni punto necessario.",
    color: '#000000',
    tags: ['Product Design', 'Illuminotecnica'],
    gallery: [
      new URL('../assets/projects/01_diesis_gallery_2.png', import.meta.url).href,
      new URL('../assets/projects/01_diesis_gallery_3.png', import.meta.url).href,
      new URL('../assets/projects/01_diesis_gallery_4.png', import.meta.url).href,
      new URL('../assets/projects/01_diesis_gallery_5.png', import.meta.url).href,
      new URL('../assets/projects/01_diesis_gallery_6.png', import.meta.url).href,
      new URL('../assets/projects/01_diesis_gallery_7.png', import.meta.url).href,
      new URL('../assets/projects/01_diesis_gallery_8.png', import.meta.url).href,
    ]
  },
  {
    id: '02-project-mocquebrune',
    title: 'MOCQUEBRUNE',
    image: mocquebrune,
    year: '2024',
    category: 'Product Design',
    description: 'Making databases beautiful. Unfiltered. Ugly. Honest.',
    longDescription: `RAW DATA is a data visualization project that refuses to beautify its source material. Where conventional dashboards smooth, interpolate, and abstract — RAW DATA presents numbers in their most confrontational form.\n\nThe ugliness is the point. Data is messy. Visualizations that hide that are lying to you.`,
    color: '#111111',
    tags: ['Product'],
  },
  {
    id: '03-project-appartamento',
    title: 'APPARTAMENTO',
    image: appartamento,
    year: '2024',
    category: 'EDITORIAL',
    description: 'An editorial that destroys its own layout system to prove a point.',
    longDescription: `GRID BREAK started as a conventional editorial design project. Then, at page 12, everything falls apart — deliberately.\n\nThe grid breaks. The typography revolts. The margins disappear. It's a meditation on the invisible rules we follow in design and what happens when we stop following them.`,
    color: '#0a0a0a',
    tags: ['EDITORIAL', 'PRINT', 'EXPERIMENTAL'],
  },
  {
    id: '04-project-thymos',
    title: 'THYMOS',
    image: thymos,
    year: '2023',
    category: 'INSTALLATION',
    description: 'Physical brutalism translated into digital architecture.',
    longDescription: `CONCRETE NET bridges the gap between brutalist architecture and web design. Inspired by the raw exposed concrete of Le Corbusier and Tadao Ando, this project translates the weight, texture, and honesty of brutalist buildings into browser-based experiences.\n\nNo gradients. No shadows that don't exist. No decoration for its own sake.`,
    color: '#080808',
    tags: ['INSTALLATION', 'ARCHITECTURE', 'DIGITAL'],
  },
  {
    id: '05-project-qubi',
    title: 'QUBI',
    image: qubi,
    year: '2022',
    category: 'TYPOGRAPHY',
    description: 'When letters stop cooperating and start fighting back.',
    longDescription: `TYPE RIOT is a typographic experiment that asks: what if letterforms had agency? What if they refused to sit still, align, or behave?\n\nThe result is controlled chaos — a visual language that feels like it's constantly on the verge of collapse, but never quite falls apart. There's a system underneath. You just have to find it.`,
    color: '#050505',
    tags: ['TYPOGRAPHY', 'MOTION', 'EXPERIMENTAL'],
  },
]
 