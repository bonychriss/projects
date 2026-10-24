const SONG = `${import.meta.env.BASE_URL}stupid-face.mp3`

let audio = null

export function getAudio() {
  if (!audio) {
    audio = new Audio(SONG)
    audio.loop = true
    audio.preload = 'auto'
    audio.volume = 0.72
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
