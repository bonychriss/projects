import { useEffect, useState } from 'react'
import Scene from './Scene.jsx'
import { autoplayOnOpen, getAudio, isPlaying, pauseSong, playSong } from './music'
import './App.css'

const STEPS = ['hero', 'song', 'letter', 'wish', 'download']
const SONG_URL = `${import.meta.env.BASE_URL}stupid-face.mp3`

function fmtTime(s) {
  if (!Number.isFinite(s) || s < 0) return '0:00'
  const m = Math.floor(s / 60)
  const r = Math.floor(s % 60)
  return `${m}:${String(r).padStart(2, '0')}`
}

function Waveform() {
  return (
    <div className="wave" aria-hidden="true">
      <span className="wave-heart">♥</span>
      <span className="wave-bars">
        {Array.from({ length: 9 }).map((_, i) => (
          <i key={`l${i}`} style={{ '--h': `${30 + ((i * 37) % 60)}%` }} />
        ))}
      </span>
      <span className="wave-note">♪</span>
      <span className="wave-bars">
        {Array.from({ length: 9 }).map((_, i) => (
          <i key={`r${i}`} style={{ '--h': `${30 + ((i * 53) % 60)}%` }} />
        ))}
      </span>
      <span className="wave-heart">♥</span>
    </div>
  )
}

function HeartDivider({ className = '' }) {
  return (
    <div className={`divider ${className}`} aria-hidden="true">
      <i />
      <span>♥</span>
      <i />
    </div>
  )
}

export default function App() {
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [opened, setOpened] = useState(false)
  const [blown, setBlown] = useState(false)
  const [progress, setProgress] = useState({ cur: 0, dur: 0, pct: 0 })

  useEffect(() => {
    const a = getAudio()
    const sync = () => setPlaying(isPlaying())
    const tick = () => {
      const dur = Number.isFinite(a.duration) ? a.duration : 0
      const cur = a.currentTime || 0
      setProgress({ cur, dur, pct: dur ? Math.min(100, (cur / dur) * 100) : 0 })
    }
    a.addEventListener('play', sync)
    a.addEventListener('pause', sync)
    a.addEventListener('timeupdate', tick)
    a.addEventListener('loadedmetadata', tick)
    a.addEventListener('durationchange', tick)
    tick()
    autoplayOnOpen(setPlaying)
    return () => {
      a.removeEventListener('play', sync)
      a.removeEventListener('pause', sync)
      a.removeEventListener('timeupdate', tick)
      a.removeEventListener('loadedmetadata', tick)
      a.removeEventListener('durationchange', tick)
    }
  }, [])

  function restart() {
    setOpened(false)
    setBlown(false)
    setStep(0)
  }

  async function startMusic() {
    const ok = await playSong()
    setPlaying(ok)
  }

  async function toggleMusic() {
    if (isPlaying()) {
      pauseSong()
      setPlaying(false)
    } else {
      await startMusic()
    }
  }

  async function goNext() {
    await startMusic()
    setStep((s) => Math.min(s + 1, STEPS.length - 1))
  }

  const current = STEPS[step]

  return (
    <div className="app">
      <button
        type="button"
        className={`music-btn ${playing ? 'on' : ''}`}
        onClick={toggleMusic}
        aria-label={playing ? 'Pause our song' : 'Play our song'}
      >
        <span className="eq" aria-hidden="true">
          <i /><i /><i />
        </span>
        <span className="music-label">{playing ? 'Stupid Face' : 'Play song'}</span>
      </button>

      {/* 1 — Cover */}
      {current === 'hero' && (
        <Scene name="hero" wide="bg-hero-wide.jpg" tall="bg-hero-tall.jpg">
          <div className="hero-block enter">
            <span className="hero-heart" aria-hidden="true">♡</span>
            <h1 className="hero-name">Salma</h1>
            <HeartDivider className="hero-div" />
            <p className="hero-greeting">Happy Birthday</p>
            <p className="hero-sub">With our song, just for you.</p>
            <Waveform />
            <button type="button" className="pill" onClick={goNext}>
              Begin <span aria-hidden="true">→</span>
            </button>
            <HeartDivider className="hero-div bottom" />
          </div>
        </Scene>
      )}

      {/* 2 — Our song */}
      {current === 'song' && (
        <Scene name="song" wide="bg-song-wide.jpg" tall="bg-song-tall.jpg">
          <div className="song-block enter">
            <h2 className="song-title">Our song</h2>
            <p className="song-artist">Abe Parker – Stupid Face</p>
            <p className="song-note">
              The one that sounds like us. Let it keep
              <br />
              playing — everything after this is for you.
            </p>
            <button type="button" className="pill" onClick={goNext}>
              I’m listening <span aria-hidden="true">→</span>
            </button>
            <HeartDivider className="song-div" />
          </div>
        </Scene>
      )}

      {/* 3a — Envelope */}
      {current === 'letter' && !opened && (
        <Scene name="envelope" wide="bg-envelope-wide.jpg" tall="bg-envelope-tall.jpg">
          <button type="button" className="env-hit" onClick={() => setOpened(true)} aria-label="Open the letter">
            <span className="env-to enter">To you</span>
            <span className="env-from enter">from Bony</span>
            <span className="env-cta enter">
              TAP TO OPEN <span aria-hidden="true">›</span>
            </span>
          </button>
        </Scene>
      )}

      {/* 3b — Letter */}
      {current === 'letter' && opened && (
        <Scene name="letter" wide="bg-letter-tall.jpg" ratioWide={3 / 4}>
          <article className="letter-block enter">
            <h2 className="letter-title">
              <span className="lt-happy">Happy</span>
              <span className="lt-birthday">Birthday!</span>
            </h2>
            <p className="letter-dear">
              My dearest <span className="script">Salma,</span>
            </p>
            <p>On your birthday, I keep thinking about how lucky I am — not just to know you, but to get to love you.</p>
            <p>You have this effortless way of making ordinary days feel incredibly bright. Your laugh, your gentle kindness, and the beautiful way you see the world — all of it feels like home to me. Every moment spent with you is a reminder of how lucky I am to walk through life by your side.</p>
            <p>I hope this new year brings you everything your heart desires: every soft, quiet morning and every wild dream you deserve. No matter where those dreams take you, I will be right here for all of it, loving you louder each day.</p>
            <p className="letter-sign script">
              Happy birthday once again,
              <br />
              my beautiful Salma. <span aria-hidden="true">♡</span>
            </p>
            <button type="button" className="pill small" onClick={goNext}>
              Keep going <span aria-hidden="true">→</span>
            </button>
          </article>
        </Scene>
      )}

      {/* 4 — Wish */}
      {current === 'wish' && (
        <Scene name="wish" wide="bg-wish-wide.jpg" tall="bg-wish-tall.jpg">
          {/* flame drawn in code on top of the unlit candle in the artwork */}
          <div className={`flame-anchor ${blown ? 'blown' : ''}`} aria-hidden="true">
            <svg className="flame-svg" viewBox="0 0 40 70">
              <defs>
                <radialGradient id="flameGlow" cx="50%" cy="60%" r="60%">
                  <stop offset="0" stopColor="rgba(255,205,120,0.55)" />
                  <stop offset="1" stopColor="rgba(255,205,120,0)" />
                </radialGradient>
                <linearGradient id="flameBody" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0" stopColor="#f29a3a" />
                  <stop offset="0.55" stopColor="#f9c35b" />
                  <stop offset="1" stopColor="#fff0b8" />
                </linearGradient>
              </defs>
              <circle className="flame-glow" cx="20" cy="44" r="22" fill="url(#flameGlow)" />
              <g className="flame">
                <path d="M20 8 C 29 22, 31 34, 26 46 C 23 53, 17 53, 14 46 C 9 34, 11 22, 20 8 Z" fill="url(#flameBody)" />
                <path d="M20 26 C 24 34, 24 42, 21 47 C 19.5 49.5, 17.5 49, 17 46 C 15.5 40, 17 33, 20 26 Z" fill="#fff8dc" opacity="0.9" />
                <path d="M19 42 C 21 44, 21 48, 20 50 C 19 48, 18.5 45, 19 42 Z" fill="#8bb8ff" opacity="0.6" />
              </g>
              <g className="smoke">
                <path d="M20 44 C 16 36, 25 30, 20 22 C 16 16, 24 10, 20 2" fill="none" stroke="rgba(120,110,120,0.55)" strokeWidth="2" strokeLinecap="round" />
              </g>
            </svg>
          </div>

          <button
            type="button"
            className="cake-hit"
            onClick={() => setBlown(true)}
            aria-label="Blow out the candle"
            disabled={blown}
          />

          <div className="wish-block enter">
            <h2 className="wish-title">Make a wish</h2>
            <HeartDivider className="wish-div" />
            <p className="wish-copy">
              To see you conquer every wild dream you have —
              <br />
              while I stand right beside you,
              <br />
              loving you through all of it.
            </p>
            {!blown ? (
              <p className="wish-hint">
                <span aria-hidden="true">♥</span> TAP THE CANDLE <span aria-hidden="true">♥</span>
              </p>
            ) : (
              <>
                <p className="wish-final script show">Happy birthday, Salma. I love you. ♡</p>
                <button type="button" className="pill small enter" onClick={goNext}>
                  One more thing <span aria-hidden="true">→</span>
                </button>
              </>
            )}
          </div>
        </Scene>
      )}

      {/* 5 — Download our song */}
      {current === 'download' && (
        <Scene name="download" wide="bg-download-wide.jpg" tall="bg-download-tall.jpg">
          <div className="dl-block enter">
            <h1 className="dl-name">
              Salma<span className="dl-name-heart" aria-hidden="true">♡</span>
            </h1>
            <p className="dl-greeting script">Happy Birthday</p>
            <HeartDivider className="dl-div" />
            <p className="dl-lead">
              Here is our favourite music <span className="dl-heart-outline" aria-hidden="true">♡</span>
            </p>
            <p className="dl-song">Abe Parker – Stupid Face</p>
            <p className="dl-note">
              A song that always reminds me of us <span className="dl-heart-outline" aria-hidden="true">♡</span>
            </p>

            <div className="player">
              <button
                type="button"
                className={`player-art ${playing ? 'spinning' : ''}`}
                onClick={toggleMusic}
                aria-label={playing ? 'Pause' : 'Play'}
              >
                <span className="vinyl" aria-hidden="true">
                  <span className="vinyl-label" />
                </span>
                <span className="player-toggle" aria-hidden="true">
                  {playing ? (
                    <svg viewBox="0 0 24 24"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
                  ) : (
                    <svg viewBox="0 0 24 24"><path d="M8 5.5v13l10-6.5z" /></svg>
                  )}
                </span>
              </button>
              <div className="player-body">
                <p className="player-title">Abe Parker – Stupid Face</p>
                <p className="player-sub script">
                  Our song <span aria-hidden="true">♥</span>
                </p>
                <div className="player-row">
                  <div className="player-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={Math.round(progress.pct)}>
                    <span className="player-fill" style={{ width: `${progress.pct}%` }} />
                    <span className="player-knob" style={{ left: `${progress.pct}%` }} />
                  </div>
                  <span className="player-time">
                    {fmtTime(progress.cur)} / {fmtTime(progress.dur)}
                  </span>
                </div>
              </div>
              <span className="player-heart" aria-hidden="true">♥</span>
            </div>

            <a className="pill dl-btn" href={SONG_URL} download="Abe Parker - Stupid Face.mp3">
              <svg className="dl-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3v11m0 0l-4-4m4 4l4-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 15v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
              Download our fav music <span aria-hidden="true">♥</span>
            </a>

            <button type="button" className="dl-next" onClick={restart}>
              Next <span aria-hidden="true">→</span>
            </button>
          </div>
        </Scene>
      )}
    </div>
  )
}
