import { useEffect, useState } from 'react'

const BASE = import.meta.env.BASE_URL

function useIsPortrait() {
  const query = '(max-aspect-ratio: 1/1)'
  const [portrait, setPortrait] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false,
  )
  useEffect(() => {
    const mq = window.matchMedia(query)
    const onChange = (e) => setPortrait(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return portrait
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

  return (
    <div className={`scene scene-${name} ${mode} ${useTall ? 'tall' : 'wide'}`}>
      <div className="scene-box" style={{ '--ratio': ratio }}>
        <img className="scene-img" src={src} alt="" draggable="false" />
        <div className="scene-content">{children}</div>
      </div>
    </div>
  )
}
