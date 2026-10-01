import { useEffect, useState } from 'react'
import Kiln from './components/Kiln'
import Moments from './components/Moments'
import { copy, contact, credit } from './data'
import { useReveal } from './useReveal'

const year = new Date().getFullYear()

function getInitialLang() {
  try {
    return localStorage.getItem('lang') === 'bn' ? 'bn' : 'en'
  } catch {
    return 'en'
  }
}

function Nav({ t, onToggle }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`} aria-label="Main">
      <a href="#top" className="logo" aria-label="Asok Roy — home">
        <span className="monogram">AR</span>
        <span className="logo-text">{t.hero.name}</span>
      </a>
      <div className="nav-links">
        <a href="#about">{t.nav.about}</a>
        <a href="#moments">{t.nav.moments}</a>
        <a href="#bricks">{t.nav.bricks}</a>
        <a href="#works">{t.nav.works}</a>
        <a href="#home">{t.nav.home}</a>
        <a href="#contact" className="nav-cta">{t.nav.contact}</a>
      </div>
      <button className="lang" onClick={onToggle} type="button">
        {t.langLabel}
      </button>
    </nav>
  )
}

function Hero({ t }) {
  return (
    <header className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.name}</h1>
          <p className="tagline">{t.hero.tagline}</p>
          <p className="hero-sub">{t.hero.sub}</p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-fire">{t.hero.ctaPrimary}</a>
            <a href="#works" className="btn btn-ghost">{t.hero.ctaSecondary}</a>
          </div>
        </div>
        <div className="hero-art">
          <Kiln />
        </div>
      </div>
      <ul className="pillars wrap">
        {t.pillars.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </header>
  )
}

function Section({ id, kicker, title, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="wrap">
        <p className="kicker reveal">{kicker}</p>
        <h2 className="reveal">{title}</h2>
        {children}
      </div>
    </section>
  )
}

function About({ t }) {
  const a = t.about
  return (
    <Section id="about" kicker={a.kicker} title={a.title}>
      <div className="about-grid">
        <div className="portrait reveal">
          <div className="portrait-inner">
            <img src="/asok-roy.jpg" alt="Asok Roy" width="400" height="400" />
          </div>
        </div>
        <div className="about-copy reveal">
          {a.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <blockquote>{a.motto}</blockquote>
        </div>
      </div>
      <div className="values">
        {a.values.map((v, i) => (
          <article key={i} className="value reveal" style={{ '--d': `${i * 80}ms` }}>
            <span className="value-num">0{i + 1}</span>
            <h3>{v.t}</h3>
            <p>{v.d}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

function Bricks({ t }) {
  const b = t.bricks
  return (
    <Section id="bricks" kicker={b.kicker} title={b.title} className="section-clay">
      <p className="lead reveal">{b.intro}</p>
      <a className="kiln-card reveal" href={contact.mapsUrl} target="_blank" rel="noreferrer">
        <span className="kiln-pin" aria-hidden="true" />
        <span>
          <strong>{b.kiln.name}</strong>
          <span className="kiln-place">{b.kiln.place}</span>
        </span>
        <span className="kiln-go">{b.kiln.map} →</span>
      </a>
      <ol className="process">
        {b.steps.map((s, i) => (
          <li key={i} className="reveal" style={{ '--d': `${i * 90}ms` }}>
            <span className="step-brick">{i + 1}</span>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
          </li>
        ))}
      </ol>
      <h3 className="sub-title reveal">{b.productsTitle}</h3>
      <div className="products">
        {b.products.map((p, i) => (
          <article key={i} className={`product reveal p${i}`} style={{ '--d': `${i * 80}ms` }}>
            <div className="product-swatch" aria-hidden="true" />
            <h4>{p.t}</h4>
            <p>{p.d}</p>
          </article>
        ))}
      </div>
      <a href="#contact" className="btn btn-brick reveal">{b.cta} →</a>
    </Section>
  )
}

const workIcons = [
  // road
  <path key="r" d="M14 44 24 4h16l10 40M32 8v6M32 20v6M32 32v8" />,
  // building
  <path key="b" d="M10 44V14l22-10 22 10v30M4 44h56M20 22h6M38 22h6M20 32h6M38 32h6M28 44v-8h8v8" />,
  // culvert
  <path key="c" d="M4 22h56M4 44h56M14 44V32a18 18 0 0 1 36 0v12M4 30c6 3 10 3 16 0" />,
  // earthwork
  <path key="e" d="M4 44 22 24l10 10 8-8 20 18ZM40 8l8 8M44 4l8 8-4 4-8-8Z" />,
]

function Works({ t }) {
  const w = t.works
  return (
    <Section id="works" kicker={w.kicker} title={w.title} className="section-dark">
      <p className="lead reveal">{w.intro}</p>
      <div className="works">
        {w.items.map((it, i) => (
          <article key={i} className="work reveal" style={{ '--d': `${i * 80}ms` }}>
            <svg viewBox="0 0 64 48" aria-hidden="true">{workIcons[i]}</svg>
            <h3>{it.t}</h3>
            <p>{it.d}</p>
          </article>
        ))}
      </div>
      <ul className="promise reveal">
        {w.promise.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </Section>
  )
}

function Home({ t }) {
  const h = t.home
  return (
    <Section id="home" kicker={h.kicker} title={h.title}>
      <div className="home-grid">
        <p className="lead reveal">{h.body}</p>
        <svg className="river reveal" viewBox="0 0 400 220" aria-hidden="true">
          <path d="M-10 150C60 120 90 180 160 160S260 90 330 110 400 80 420 70" className="river-line" />
          <path d="M-10 150C60 120 90 180 160 160S260 90 330 110 400 80 420 70" className="river-flow" />
          {[30, 60, 90, 250, 280, 310, 340].map((x, i) => (
            <path key={x} d={`M${x} ${i < 3 ? 200 : 60}q4 -12 8 0`} className="paddy" />
          ))}
          <g className="palace" transform="translate(196 66)">
            <rect x="-26" y="0" width="52" height="20" />
            <rect x="-8" y="-12" width="16" height="12" />
            <path d="M-8 -12q8 -14 16 0M-26 0q5 -9 10 0M16 0q5 -9 10 0" />
          </g>
          <circle cx="196" cy="110" r="5" className="pin" />
        </svg>
      </div>
      <ul className="facts reveal">
        {h.facts.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </Section>
  )
}

function Contact({ t }) {
  const c = t.contact
  const tel = contact.phone.replace(/[^\d+]/g, '')
  return (
    <section id="contact" className="contact">
      <div className="wrap contact-inner">
        <p className="kicker reveal">{c.kicker}</p>
        <h2 className="reveal">{c.title}</h2>
        <p className="lead reveal">{c.body}</p>
        <div className="contact-ctas reveal">
          {tel && <a className="btn btn-fire" href={`tel:${tel}`}>{c.call} · {contact.phone}</a>}
          {contact.whatsapp && (
            <a className="btn btn-ghost" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">
              {c.whatsapp}
            </a>
          )}
          {contact.email && <a className="btn btn-ghost" href={`mailto:${contact.email}`}>{c.email}</a>}
          <a className="btn btn-ghost" href={contact.mapsUrl} target="_blank" rel="noreferrer">
            {c.maps}
          </a>
        </div>
        <dl className="addresses reveal">
          {c.addresses.map((a, i) => (
            <div key={i}>
              <dt>{a.label}</dt>
              <dd>{a.v}</dd>
            </div>
          ))}
        </dl>
      </div>
      <footer className="footer wrap">
        <span>© {year} {t.hero.name} · {t.footer}</span>
        <span className="credit">{credit}</span>
      </footer>
    </section>
  )
}

export default function App() {
  const [lang, setLang] = useState(getInitialLang)
  const t = copy[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* storage unavailable — language just won't persist */
    }
  }, [lang])

  useReveal([lang])

  return (
    <div className={`lang-${lang}`}>
      <Nav t={t} onToggle={() => setLang((l) => (l === 'en' ? 'bn' : 'en'))} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Moments t={t} lang={lang} />
        <Bricks t={t} />
        <Works t={t} />
        <Home t={t} />
      </main>
      <Contact t={t} />
    </div>
  )
}
