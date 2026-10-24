const SONG = `${import.meta.env.BASE_URL}stupid-face.mp3`

let audio = null
let unlockBound = false

export function getAudio() {
  if (!audio) {
    audio = new Audio(SONG)
    audio.loop = true
    audio.preload = 'auto'
    audio.volume = 0.72
    audio.setAttribute('playsinline', 'true')
    audio.playsInline = true
  }
  return audio
}

export async function playSong() {
  const a = getAudio()
  try {
    await a.play()
    return true
  } catch {
    return false
  }
}

export function pauseSong() {
  getAudio().pause()
}

export function isPlaying() {
  const a = getAudio()
  return !a.paused && !a.ended
}

/** Try to start immediately; if the browser blocks it, unlock on first tap/key. */
export async function autoplayOnOpen(onChange) {
  const ok = await playSong()
  onChange?.(ok)
  if (ok || unlockBound) return ok

  unlockBound = true
  const unlock = async () => {
    const started = await playSong()
    onChange?.(started)
    if (started) {
      window.removeEventListener('pointerdown', unlock)
      window.removeEventListener('touchstart', unlock)
      window.removeEventListener('keydown', unlock)
    }
  }

  window.addEventListener('pointerdown', unlock, { passive: true })
  window.addEventListener('touchstart', unlock, { passive: true })
  window.addEventListener('keydown', unlock)
  return false
}
