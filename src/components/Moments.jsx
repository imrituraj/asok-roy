import { useCallback, useEffect, useState } from 'react'
import { photos } from '../data'

// Justified-row tile: grows in proportion to its aspect ratio, so every photo in a row
// shares one height and is shown uncropped.
function Tile({ photo, index, caption, onOpen }) {
  const [ratio, setRatio] = useState(4 / 3)
  const onLoad = (e) => setRatio(e.currentTarget.naturalWidth / e.currentTarget.naturalHeight)
  return (
    <button
      type="button"
      className="tile reveal"
      style={{
        '--d': `${Math.min(index, 6) * 80}ms`,
        flex: `${ratio} 1 ${ratio * 300}px`,
        maxWidth: `${ratio * 440}px`,
        aspectRatio: ratio,
      }}
      onClick={() => onOpen(index)}
    >
      <img src={photo.src} alt={caption || ''} loading="lazy" onLoad={onLoad} />
      {caption && <span className="tile-caption">{caption}</span>}
    </button>
  )
}

function Lightbox({ index, lang, t, onClose, onStep }) {
  const photo = photos[index]
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onStep(1)
      if (e.key === 'ArrowLeft') onStep(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onStep])

  const many = photos.length > 1
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={photo[lang] || 'Photo'} onClick={onClose}>
      <figure onClick={(e) => e.stopPropagation()}>
        <img src={photo.src} alt={photo[lang] || ''} />
        <figcaption>
          <span>{photo[lang]}</span>
          {many && (
            <span className="lb-count">
              {index + 1} / {photos.length}
            </span>
          )}
        </figcaption>
      </figure>
      <button type="button" className="lb-btn lb-close" onClick={onClose} aria-label={t.close}>
        ✕
      </button>
      {many && (
        <>
          <button type="button" className="lb-btn lb-prev" onClick={(e) => (e.stopPropagation(), onStep(-1))} aria-label={t.prev}>
            ‹
          </button>
          <button type="button" className="lb-btn lb-next" onClick={(e) => (e.stopPropagation(), onStep(1))} aria-label={t.next}>
            ›
          </button>
        </>
      )}
    </div>
  )
}

export default function Moments({ t, lang }) {
  const m = t.moments
  const [open, setOpen] = useState(null)
  const close = useCallback(() => setOpen(null), [])
  const step = useCallback((d) => setOpen((i) => (i + d + photos.length) % photos.length), [])

  if (!photos.length) return null
  return (
    <section id="moments" className="section section-dark moments">
      <div className="wrap">
        <p className="kicker reveal">{m.kicker}</p>
        <h2 className="reveal">{m.title}</h2>
        <p className="lead reveal">{m.intro}</p>
        <div className="mosaic">
          {photos.map((p, i) => (
            <Tile key={p.src} photo={p} index={i} caption={p[lang]} onOpen={setOpen} />
          ))}
        </div>
      </div>
      {open !== null && <Lightbox index={open} lang={lang} t={m} onClose={close} onStep={step} />}
    </section>
  )
}
