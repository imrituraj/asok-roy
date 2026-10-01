import { useEffect, useState } from 'react'

const ROWS = 6
const COLS = 8
const STAGGER = 30 // ms between bricks
const FALL = 520 // ms per brick drop
const SHADES = ['#a8462a', '#b4532f', '#9c3d24', '#b9583a', '#8f3a22', '#a94b2c']

// Running-bond wall, top row first. Odd rows start and end with half bricks.
const rows = Array.from({ length: ROWS }, (_, r) =>
  r % 2 ? [1, ...Array(COLS - 1).fill(2), 1] : Array(COLS).fill(2),
)
// Lay from the bottom row up, left to right.
const delays = rows.map((row) => row.map(() => 0))
let order = 0
for (let r = ROWS - 1; r >= 0; r--) {
  for (let c = 0; c < rows[r].length; c++) delays[r][c] = order++ * STAGGER
}
const LAID = order * STAGGER + FALL

function shouldPlay() {
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return false
  try {
    return !sessionStorage.getItem('introSeen')
  } catch {
    return true
  }
}

export default function Intro({ t, onDone }) {
  const [play] = useState(shouldPlay)
  const [phase, setPhase] = useState('laying') // laying → named → leaving

  useEffect(() => {
    if (!play) {
      onDone()
      return
    }
    try {
      sessionStorage.setItem('introSeen', '1')
    } catch {
      /* storage unavailable — intro may replay next visit */
    }
    document.body.style.overflow = 'hidden'
    const timers = [
      setTimeout(() => setPhase('named'), LAID),
      setTimeout(() => setPhase('leaving'), LAID + 1000),
      setTimeout(onDone, LAID + 1700),
    ]
    return () => {
      timers.forEach(clearTimeout)
      document.body.style.overflow = ''
    }
  }, [play, onDone])

  if (!play) return null

  return (
    <div className={`intro ${phase}`}>
      <div className="intro-wall" aria-hidden="true">
        {rows.map((row, r) => (
          <div className="intro-row" key={r}>
            {row.map((w, c) => (
              <span
                key={c}
                className="intro-brick"
                style={{
                  flexGrow: w,
                  background: SHADES[(r * 7 + c * 3) % SHADES.length],
                  animationDelay: `${delays[r][c]}ms`,
                  '--tilt': `${((r * 5 + c * 11) % 9) - 4}deg`,
                }}
              />
            ))}
          </div>
        ))}
        <div className="intro-name">
          <span className="intro-eyebrow">{t.hero.eyebrow}</span>
          <strong>{t.hero.name}</strong>
        </div>
      </div>
      <p className="intro-tagline" aria-hidden="true">{t.hero.tagline}</p>
      <button type="button" className="intro-skip" onClick={onDone}>
        Skip ›
      </button>
    </div>
  )
}
