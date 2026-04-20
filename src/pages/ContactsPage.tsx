import '../styles/ContactsPage.css'

const contacts = {
  email: 'dilettacellurale@live.it',
  location: 'Modena, IT',
  links: [
    { label: 'INSTAGRAM', url: 'https://instagram.com/' },
    { label: 'LINKEDIN', url: 'https://linkedin.com/' },
  ],
}

export default function ContactsPage() {
  return (
    <main className="contacts-page">
      <div className="contacts-body">
        <div className="contacts-left">
          <p className="contacts-label">EMAIL</p>
          <a className="contacts-email" href={`mailto:${contacts.email}`}>
            {contacts.email}
          </a>
          <p className="contacts-label">LOCATION</p>
          <p className="contacts-location">{contacts.location}</p>
        </div>

        <div className="contacts-right">
          <p className="contacts-label">LINKS</p>
          <div className="contacts-links">
            {contacts.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span>{link.label}</span>
                <span className="link-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}