import { useEffect, useState } from 'react'

const BASE = import.meta.env.BASE_URL
const PORTRAIT_QUERY = '(max-aspect-ratio: 1/1)'

function useIsPortrait() {
  const [portrait, setPortrait] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(PORTRAIT_QUERY).matches : false,
  )
  useEffect(() => {
    const mq = window.matchMedia(PORTRAIT_QUERY)
    const onChange = (e) => setPortrait(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return portrait
}

const warmed = new Set()

/**
 * Fetch background images ahead of time so later pages open instantly.
 * Images for the current orientation are loaded first (in order), then the rest.
 * Each file is fetched one at a time so it doesn't starve the song download.
 */
export function preloadScenes(scenes) {
  const portrait = window.matchMedia(PORTRAIT_QUERY).matches
  const first = []
  const later = []
  for (const s of scenes) {
    const primary = portrait && s.tall ? s.tall : s.wide
    const secondary = portrait && s.tall ? s.wide : s.tall
    if (primary) first.push(primary)
    if (secondary) later.push(secondary)
  }
  const queue = [...first, ...later].filter((f) => f && !warmed.has(f))
  queue.forEach((f) => warmed.add(f))

  const next = () => {
    const file = queue.shift()
    if (!file) return
    const img = new Image()
    img.decoding = 'async'
    img.onload = img.onerror = () => setTimeout(next, 0)
    img.src = `${BASE}${file}`
  }
  next()
}

/**
 * Full-screen illustrated backdrop with overlay content.
 * - Landscape viewports: `wide` image, letterboxed (contain).
 * - Portrait viewports: `tall` image (or `wide` if none), filling the screen (cover).
 * Overlay children are positioned relative to the image box; use cqh/cqw units.
 */
export default function Scene({ wide, tall, ratioWide = 16 / 9, ratioTall = 9 / 16, name, children }) {
  const portrait = useIsPortrait()
  const useTall = portrait && Boolean(tall)
  const src = `${BASE}${useTall ? tall : wide}`
  const ratio = useTall ? ratioTall : ratioWide
  const mode = portrait ? 'cover' : 'contain'
  const [ready, setReady] = useState(false)

  return (
    <div className={`scene scene-${name} ${mode} ${useTall ? 'tall' : 'wide'} ${ready ? 'ready' : 'loading'}`}>
      <div className="scene-box" style={{ '--ratio': ratio }}>
        <img
          className="scene-img"
          src={src}
          alt=""
          draggable="false"
          decoding="async"
          fetchPriority="high"
          onLoad={() => setReady(true)}
          onError={() => setReady(true)}
        />
        <div className="scene-content">{children}</div>
      </div>
    </div>
  )
}
