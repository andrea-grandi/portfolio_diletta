import diesis from '../assets/projects/01_diesis.png'
import mocquebrune from '../assets/projects/02_mocquebrune.png'
import appartamento from '../assets/projects/03_appartamento.png'
import thymos from '../assets/projects/04_thymos.png'
import qubi from '../assets/projects/05_qubi.png'


export interface GalleryItem {
  src: string
  description: string
}

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
  gallery?: GalleryItem[]
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
      { src: new URL('../assets/projects/01_diesis_gallery_2.png', import.meta.url).href, description: "Prototipo in legno e metallo 1, 2024" },
      { src: new URL('../assets/projects/01_diesis_gallery_3.png', import.meta.url).href, description: "Prototipo in legno e metallo 2, 2024" },
      { src: new URL('../assets/projects/01_diesis_gallery_4.png', import.meta.url).href, description: "Prototipo in legno e metallo 3, 2024" },
      { src: new URL('../assets/projects/01_diesis_gallery_5.png', import.meta.url).href, description: "Prototipo in legno e metallo 4, 2024" },
      { src: new URL('../assets/projects/01_diesis_gallery_6.png', import.meta.url).href, description: "Prototipo in legno e metallo 5, 2024" },
      { src: new URL('../assets/projects/01_diesis_gallery_7.png', import.meta.url).href, description: "Prototipo in legno e metallo 6, 2024" },
      { src: new URL('../assets/projects/01_diesis_gallery_8.png', import.meta.url).href, description: "Prototipo in legno e metallo 7, 2024" },
    ]
  },
  {
    id: '02-project-mocquebrune',
    title: 'MOCQUEBRUNE',
    image: mocquebrune,
    year: '2024',
    category: 'Product Design',
    description: 'Cambio di Materiale: Roquebrune by Eileen Gray',
    longDescription: "Il progetto propone una possibile alternativa ai materiali utilizzati in origine. Mocquebrune è un progetto di reinterpretazione della sedia Roquebrune (1927), sviluppato attraverso un cambio mirato di materiali e soluzioni costruttive. L’intervento progettuale si concentra sulla riduzione delle saldature e sulla semplificazione degli incastri, con l’obiettivo di mantenere leggerezza e robustezza migliorando al tempo stesso la percezione tattile e visiva dell’oggetto. L’introduzione di elementi in legno di frassino e cuoio contribuisce a rendere la seduta meno “fredda” rispetto alla versione originale, preservandone l’equilibrio formale e l’identità strutturale.",
    color: '#111111',
    tags: ['Product Design', 'Materiali'],
    gallery: [
      { src: new URL('../assets/projects/02_mocquebrune_gallery_1.png', import.meta.url).href, description: "Cambio di Materiale: Roquebrune by Eileen Gray, 2024" },
      { src: new URL('../assets/projects/02_mocquebrune_gallery_2.png', import.meta.url).href, description: "Cambio di Materiale: Roquebrune by Eileen Gray, 2024" },
      { src: new URL('../assets/projects/02_mocquebrune_gallery_3.png', import.meta.url).href, description: "Cambio di Materiale: Roquebrune by Eileen Gray, 2024" },
      { src: new URL('../assets/projects/02_mocquebrune_gallery_4.png', import.meta.url).href, description: "Cambio di Materiale: Roquebrune by Eileen Gray, 2024" },
      { src: new URL('../assets/projects/02_mocquebrune_gallery_5.png', import.meta.url).href, description: "Cambio di Materiale: Roquebrune by Eileen Gray, 2024" },
      { src: new URL('../assets/projects/02_mocquebrune_gallery_6.png', import.meta.url).href, description: "Cambio di Materiale: Roquebrune by Eileen Gray, 2024" },
      { src: new URL('../assets/projects/02_mocquebrune_gallery_7.png', import.meta.url).href, description: "Cambio di Materiale: Roquebrune by Eileen Gray, 2024" },
      { src: new URL('../assets/projects/02_mocquebrune_gallery_8.png', import.meta.url).href, description: "Cambio di Materiale: Roquebrune by Eileen Gray, 2024" },
      { src: new URL('../assets/projects/02_mocquebrune_gallery_9.png', import.meta.url).href, description: "Cambio di Materiale: Roquebrune by Eileen Gray, 2024" },
      { src: new URL('../assets/projects/02_mocquebrune_gallery_10.png', import.meta.url).href, description: "Cambio di Materiale: Roquebrune by Eileen Gray, 2024" },
      { src: new URL('../assets/projects/02_mocquebrune_gallery_11.png', import.meta.url).href, description: "Cambio di Materiale: Roquebrune by Eileen Gray, 2024" },
      { src: new URL('../assets/projects/02_mocquebrune_gallery_12.png', import.meta.url).href, description: "Cambio di Materiale: Roquebrune by Eileen Gray, 2024" },
    ]
  },
  {
    id: '03-project-appartamento',
    title: 'APPARTAMENTO',
    image: appartamento,
    year: '2024',
    category: 'Architettura degli Interni',
    description: "Concetti di soglia, passaggio e confine",
    longDescription: "Appartamento è un progetto di interior design sviluppato a partire dai concetti di soglia, passaggio e confine come elementi organizzatori dello spazio domestico. L’intervento prevede la riorganizzazione delle unità esistenti attraverso l’inserimento di un collegamento verticale con scala a chiocciola e la definizione di nuovi rapporti tra gli ambienti mediante partizioni leggere, elementi su misura e sistemi di filtraggio visivo. Il progetto mira a migliorare continuità, funzionalità e qualità percettiva degli spazi abitativi.",
    color: '#0a0a0a',
    tags: ['Architettura degli Interni', 'Interior Design'],
    gallery: [
      { src: new URL('../assets/projects/03_appartamento_gallery_1.png', import.meta.url).href, description: "Appartamento - 1" },
      { src: new URL('../assets/projects/03_appartamento_gallery_2.png', import.meta.url).href, description: "Appartamento - 2" },
      { src: new URL('../assets/projects/03_appartamento_gallery_3.png', import.meta.url).href, description: "Appartamento - 3" },
      { src: new URL('../assets/projects/03_appartamento_gallery_4.png', import.meta.url).href, description: "Appartamento - 4" },
      { src: new URL('../assets/projects/03_appartamento_gallery_5.png', import.meta.url).href, description: "Appartamento - 5" },
      { src: new URL('../assets/projects/03_appartamento_gallery_6.png', import.meta.url).href, description: "Appartamento - 6" },
      { src: new URL('../assets/projects/03_appartamento_gallery_7.png', import.meta.url).href, description: "Appartamento - 7" },
      { src: new URL('../assets/projects/03_appartamento_gallery_8.png', import.meta.url).href, description: "Appartamento - 8" },
      { src: new URL('../assets/projects/03_appartamento_gallery_9.png', import.meta.url).href, description: "Appartamento - 9" },
      { src: new URL('../assets/projects/03_appartamento_gallery_10.png', import.meta.url).href, description: "Appartamento - 10" },
      { src: new URL('../assets/projects/03_appartamento_gallery_11.png', import.meta.url).href, description: "Appartamento - 11" },
    ]
  },
  {
    id: '04-project-thymos',
    title: 'THYMOS',
    image: thymos,
    year: '2025',
    category: 'Mobile Design',
    description: 'La ruota delle emozioni:',
    longDescription: "Thymos è un concept di app mobile per la consapevolezza emotiva, ispirato al libro Achille piè veloce. Il progetto utilizza la ruota delle emozioni come strumento per ampliare il vocabolario emotivo e guidare l’utente in un percorso introspettivo basato sul riconoscimento, la registrazione e la riflessione sulle proprie emozioni. Attraverso domande guidate e un vocabolario dedicato, l’interfaccia accompagna l’utente in un’esperienza intuitiva e progressiva, favorendo una maggiore consapevolezza personale e una migliore capacità di espressione emotiva.",
    color: '#080808',
    tags: ['Mobile Design', 'Health Tech'],
    gallery: [
      { src: new URL('../assets/projects/04_thymos_gallery_1.png', import.meta.url).href, description: "Thymos - 1" },
      { src: new URL('../assets/projects/04_thymos_gallery_2.png', import.meta.url).href, description: "Thymos - 2" },
      { src: new URL('../assets/projects/04_thymos_gallery_3.png', import.meta.url).href, description: "Thymos - 3" },
      { src: new URL('../assets/projects/04_thymos_gallery_4.png', import.meta.url).href, description: "Thymos - 4" },
      { src: new URL('../assets/projects/04_thymos_gallery_5.png', import.meta.url).href, description: "Thymos - 5" },
      { src: new URL('../assets/projects/04_thymos_gallery_6.png', import.meta.url).href, description: "Thymos - 6" },
      { src: new URL('../assets/projects/04_thymos_gallery_7.png', import.meta.url).href, description: "Thymos - 7" },
      { src: new URL('../assets/projects/04_thymos_gallery_8.png', import.meta.url).href, description: "Thymos - 8" },
    ]
  },
  {
    id: '05-project-qubi',
    title: 'QU.BI',
    image: qubi,
    year: '2025',
    category: 'Product Design',
    description: 'Qu.Bi. (Quanto Basta)',
    longDescription: "Modulo per cucine componibili che integra un orto domestico e una dispensa refrigerante per ortaggi, progettato per favorire uno stile di vita più sostenibile e consapevole. Realizzato in terracotta per le sue proprietà di regolazione dell’umidità e traspirabilità, il sistema porta l’elemento verde all’interno dello spazio domestico contribuendo al benessere ambientale e alla riduzione del surriscaldamento degli ambienti. Il progetto unisce funzionalità, sostenibilità e attenzione al rapporto tra uomo, casa e natura.",
    color: '#050505',
    tags: ['Product Design', 'Sostenibilità', 'Workshop'],
    gallery: [
      { src: new URL('../assets/projects/05_qubi_gallery_1.png', import.meta.url).href, description: "QU.BI - 1" },
      { src: new URL('../assets/projects/05_qubi_gallery_2.png', import.meta.url).href, description: "QU.BI - 2" },
      { src: new URL('../assets/projects/05_qubi_gallery_3.png', import.meta.url).href, description: "QU.BI - 3" },
      { src: new URL('../assets/projects/05_qubi_gallery_4.png', import.meta.url).href, description: "QU.BI - 4" },
      { src: new URL('../assets/projects/05_qubi_gallery_5.png', import.meta.url).href, description: "QU.BI - 5" },
      { src: new URL('../assets/projects/05_qubi_gallery_6.png', import.meta.url).href, description: "QU.BI - 6" },
      { src: new URL('../assets/projects/05_qubi_gallery_7.png', import.meta.url).href, description: "QU.BI - 7" },
      { src: new URL('../assets/projects/05_qubi_gallery_8.png', import.meta.url).href, description: "QU.BI - 8" },
      { src: new URL('../assets/projects/05_qubi_gallery_9.png', import.meta.url).href, description: "QU.BI - 9" },
      { src: new URL('../assets/projects/05_qubi_gallery_10.png', import.meta.url).href, description: "QU.BI - 10" },
      { src: new URL('../assets/projects/05_qubi_gallery_11.png', import.meta.url).href, description: "QU.BI - 11" },
      { src: new URL('../assets/projects/05_qubi_gallery_12.png', import.meta.url).href, description: "QU.BI - 12" },
      { src: new URL('../assets/projects/05_qubi_gallery_13.png', import.meta.url).href, description: "QU.BI - 13" },
      { src: new URL('../assets/projects/05_qubi_gallery_14.png', import.meta.url).href, description: "QU.BI - 14" },
      { src: new URL('../assets/projects/05_qubi_gallery_15.png', import.meta.url).href, description: "QU.BI - 15" },
      { src: new URL('../assets/projects/05_qubi_gallery_16.png', import.meta.url).href, description: "QU.BI - 16" },
      { src: new URL('../assets/projects/05_qubi_gallery_17.png', import.meta.url).href, description: "QU.BI - 17" },
      { src: new URL('../assets/projects/05_qubi_gallery_18.png', import.meta.url).href, description: "QU.BI - 18" },
    ]
  },
]
 