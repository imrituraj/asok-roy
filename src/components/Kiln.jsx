// Hero illustration: a brick-kiln chimney at dusk, smoke rising, fire glowing in the arches.
export default function Kiln() {
  const stack = (x0, rows, cols) =>
    Array.from({ length: rows }).flatMap((_, r) =>
      Array.from({ length: cols - (r % 2) }).map((__, c) => (
        <rect
          key={`${x0}-${r}-${c}`}
          x={x0 + c * 22 + (r % 2) * 11}
          y={392 - (r + 1) * 11}
          width="20"
          height="9"
          rx="1.5"
          className={(r + c) % 3 === 0 ? 'b2' : 'b1'}
        />
      )),
    )

  return (
    <svg className="kiln" viewBox="0 0 420 420" role="img" aria-label="Illustration of a brick kiln chimney with smoke rising">
      <defs>
        <pattern id="bricks" width="24" height="12" patternUnits="userSpaceOnUse">
          <rect width="24" height="12" fill="#a8462a" />
          <path d="M0 11.5H24M0 5.5H24M12 0V5.5M0 6V11.5M24 6V11.5" stroke="#6e2a18" strokeWidth="1" />
        </pattern>
        <linearGradient id="shade" x1="0" x2="1">
          <stop offset="0" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity=".35" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#f4b860" stopOpacity=".55" />
          <stop offset="1" stopColor="#f4b860" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="fire" cx="50%" cy="100%" r="80%">
          <stop offset="0" stopColor="#ffe08a" />
          <stop offset=".45" stopColor="#f08a2c" />
          <stop offset="1" stopColor="#7a2410" />
        </radialGradient>
      </defs>

      {/* setting sun */}
      <circle cx="300" cy="150" r="120" fill="url(#glow)" />
      <circle cx="300" cy="150" r="46" className="sun" />

      {/* smoke */}
      <g className="smoke">
        <circle cx="210" cy="52" r="16" />
        <circle cx="210" cy="52" r="20" />
        <circle cx="210" cy="52" r="24" />
        <circle cx="210" cy="52" r="18" />
      </g>

      {/* chimney */}
      <polygon points="192,58 228,58 250,330 170,330" fill="url(#bricks)" />
      <polygon points="192,58 228,58 250,330 170,330" fill="url(#shade)" />
      <rect x="186" y="50" width="48" height="12" rx="2" fill="#6e2a18" />
      <rect x="181" y="150" width="58" height="6" fill="#6e2a18" opacity=".55" />

      {/* kiln body */}
      <path d="M48 392V318q0-14 14-14h296q14 0 14 14v74Z" fill="url(#bricks)" />
      <path d="M48 392V318q0-14 14-14h296q14 0 14 14v74Z" fill="#000" opacity=".18" />
      {[90, 160, 230, 300].map((x) => (
        <g key={x}>
          <path d={`M${x} 392v-32a18 18 0 0 1 36 0v32Z`} fill="#2a130b" />
          <path d={`M${x + 4} 392v-30a14 14 0 0 1 28 0v30Z`} fill="url(#fire)" className="flame" />
        </g>
      ))}

      {/* drying stacks */}
      <g className="stack">{stack(4, 5, 2)}</g>
      <g className="stack">{stack(372, 4, 2)}</g>

      <rect x="0" y="392" width="420" height="28" fill="#2a1f19" />
      <path d="M0 392H420" stroke="#d9a066" strokeOpacity=".35" />
    </svg>
  )
}
