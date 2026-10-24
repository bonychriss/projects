import { useEffect, useState } from 'react'
import { autoplayOnOpen, getAudio, isPlaying, pauseSong, playSong } from './music'
import './App.css'

const REASONS = [
  'The way your smile changes a whole room.',
  'How safe and seen I feel when I’m with you.',
  'Your soft heart — and how fiercely you love.',
  'Every little moment that somehow becomes my favorite.',
  'Simply being Salma. There is no one else like you.',
]

const STEPS = ['hero', 'song', 'letter', 'reasons', 'wish']

export default function App() {
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [opened, setOpened] = useState(false)
  const [revealed, setRevealed] = useState([])
  const [blown, setBlown] = useState(false)

  useEffect(() => {
    const a = getAudio()
    const sync = () => setPlaying(isPlaying())
    a.addEventListener('play', sync)
    a.addEventListener('pause', sync)

    // Start our song as soon as the page opens (gesture unlock if blocked).
    autoplayOnOpen(setPlaying)

    return () => {
      a.removeEventListener('play', sync)
      a.removeEventListener('pause', sync)
    }
  }, [])

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

  function openLetter() {
    setOpened(true)
  }

  function revealReason(i) {
    setRevealed((prev) => (prev.includes(i) ? prev : [...prev, i]))
  }

  function blowCandle() {
    setBlown(true)
  }

  const current = STEPS[step]
  const allRevealed = revealed.length === REASONS.length

  return (
    <div className="app">
      <div className="atmosphere" aria-hidden="true">
        <div className="wash" />
        <div className="sun" />
        <div className="drift d1" />
        <div className="drift d2" />
        <div className="drift d3" />
      </div>

      <header className="topbar">
        <div className="progress" aria-hidden="true">
          {STEPS.map((id, i) => (
            <span key={id} className={`dot ${i <= step ? 'on' : ''}`} />
          ))}
        </div>
        <button
          type="button"
          className={`music-btn ${playing ? 'on' : ''}`}
          onClick={toggleMusic}
          aria-label={playing ? 'Pause our song' : 'Play our song'}
          title="Our song"
        >
          <span className="eq" aria-hidden="true">
            <i /><i /><i />
          </span>
          <span className="music-label">{playing ? 'Stupid Face' : 'Play song'}</span>
        </button>
      </header>

      <main className="stage">
        {current === 'hero' && (
          <section className="panel hero enter" key="hero">
            <p className="kicker">October light · for you</p>
            <h1 className="brand">Salma</h1>
            <p className="lede">
              Happy birthday.
              <br />
              I made this so our song could play while you open it.
            </p>
            <button type="button" className="cta" onClick={goNext}>
              Begin
              <span aria-hidden="true">→</span>
            </button>
          </section>
        )}

        {current === 'song' && (
          <section className="panel song enter" key="song">
            <div className="vinyl" aria-hidden="true">
              <div className={`disc ${playing ? 'spin' : ''}`}>
                <div className="label">AP</div>
              </div>
            </div>
            <h2 className="section-title">Our song</h2>
            <p className="song-name">Abe Parker — Stupid Face</p>
            <p className="song-note">
              The one that sounds like us. Let it keep playing —
              everything after this is for you.
            </p>
            <button type="button" className="cta" onClick={goNext}>
              I’m listening
              <span aria-hidden="true">→</span>
            </button>
          </section>
        )}

        {current === 'letter' && (
          <section className="panel letter-panel enter" key="letter">
            {!opened ? (
              <button type="button" className="mail" onClick={openLetter}>
                <div className="mail-float">
                  <div className="mail-card">
                    <span className="mail-shine" aria-hidden="true" />
                    <span className="mail-to">To Salma</span>
                    <span className="mail-seal" aria-hidden="true">S</span>
                    <span className="mail-from">from Chris</span>
                  </div>
                </div>
                <p className="hint mail-hint">
                  <span className="hint-hand" aria-hidden="true">↓</span>
                  Tap to open
                </p>
              </button>
            ) : (
              <article className="letter">
                <div className="letter-ornament" aria-hidden="true">✦</div>
                <header className="letter-head">
                  <p className="letter-date">For your birthday</p>
                  <h2>My dearest Salma,</h2>
                  <span className="letter-rule" aria-hidden="true" />
                </header>
                <div className="letter-body">
                  <p className="letter-p" style={{ '--d': '0.15s' }}>
                    On your birthday I keep thinking about how lucky I am —
                    not just to know you, but to get to love you.
                  </p>
                  <p className="letter-p" style={{ '--d': '0.35s' }}>
                    You make ordinary days feel brighter. Your laugh, your kindness,
                    the way you see the world — all of it feels like home to me.
                  </p>
                  <p className="letter-p" style={{ '--d': '0.55s' }}>
                    I hope this year brings you every soft morning and every wild
                    dream you deserve. I will be right here for all of it.
                  </p>
                </div>
                <footer className="letter-sign">
                  <span className="letter-closing">Always yours,</span>
                  <strong className="letter-name">Chris</strong>
                  <span className="letter-heart" aria-hidden="true">♡</span>
                </footer>
                <button type="button" className="letter-cta" onClick={goNext}>
                  Keep going
                  <span aria-hidden="true">→</span>
                </button>
              </article>
            )}
          </section>
        )}

        {current === 'reasons' && (
          <section className="panel reasons enter" key="reasons">
            <h2 className="section-title">Because of you</h2>
            <p className="section-sub">Tap each line</p>
            <ul className="reason-list">
              {REASONS.map((text, i) => {
                const open = revealed.includes(i)
                return (
                  <li key={text}>
                    <button
                      type="button"
                      className={`reason ${open ? 'open' : ''}`}
                      onClick={() => revealReason(i)}
                    >
                      {open ? (
                        <span className="reason-text">{text}</span>
                      ) : (
                        <span className="reason-locked">
                          {String(i + 1).padStart(2, '0')} · reveal
                        </span>
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>
            <button
              type="button"
              className={`cta ${allRevealed ? 'show' : 'ghost'}`}
              onClick={goNext}
              disabled={!allRevealed}
            >
              One last wish
              <span aria-hidden="true">→</span>
            </button>
          </section>
        )}

        {current === 'wish' && (
          <section className="panel wish enter" key="wish">
            <button
              type="button"
              className={`candle-wrap ${blown ? 'blown' : ''}`}
              onClick={blowCandle}
              aria-label="Blow out the candle"
            >
              <svg viewBox="0 0 120 140" className="candle-art" aria-hidden="true">
                <ellipse cx="60" cy="128" rx="36" ry="6" fill="rgba(36,48,56,0.12)" />
                <rect x="28" y="78" width="64" height="44" rx="6" fill="#f4efe6" />
                <rect x="28" y="78" width="64" height="12" fill="#6f9e96" />
                <path d="M28 90c12 8 28 8 40 0s28-8 40 0v8H28z" fill="#c56b5c" opacity="0.85" />
                <rect x="56" y="42" width="8" height="38" rx="2" fill="#e8d5b5" />
                <g className="flame">
                  <ellipse cx="60" cy="32" rx="8" ry="14" fill="#f0b45a" />
                  <ellipse cx="60" cy="34" rx="3.5" ry="7" fill="#fff4d2" />
                </g>
              </svg>
            </button>
            <h2 className="section-title">Make a wish</h2>
            <p className="wish-copy">
              May this year wrap itself around you the way you wrap around my
              heart — gently, completely, forever.
            </p>
            {!blown && <p className="hint">Tap the candle</p>}
            <p className={`finale ${blown ? 'show' : ''}`}>
              Happy birthday, Salma. I love you.
            </p>
          </section>
        )}
      </main>
    </div>
  )
}
