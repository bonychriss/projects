function Balloons() {
  return (
    <svg className="doodle balloons" viewBox="0 0 70 90" aria-hidden="true">
      <ellipse cx="22" cy="28" rx="14" ry="18" fill="#f7a8c0" stroke="#e8789a" strokeWidth="1.5" />
      <ellipse cx="18" cy="22" rx="3" ry="5" fill="rgba(255,255,255,0.45)" />
      <ellipse cx="42" cy="22" rx="12" ry="16" fill="#ff8fab" stroke="#e8789a" strokeWidth="1.5" />
      <ellipse cx="38" cy="16" rx="2.5" ry="4" fill="rgba(255,255,255,0.45)" />
      <ellipse cx="58" cy="34" rx="11" ry="15" fill="#f4c2d0" stroke="#e8789a" strokeWidth="1.5" />
      <path d="M22 46 Q20 62 24 78" fill="none" stroke="#5a4a4a" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M42 38 Q40 58 36 78" fill="none" stroke="#5a4a4a" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M58 49 Q55 64 42 78" fill="none" stroke="#5a4a4a" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function TinyHearts() {
  return (
    <svg className="doodle tiny-hearts" viewBox="0 0 56 48" aria-hidden="true">
      <path d="M14 20c0-4 3-7 7-7 2.2 0 4 1 5 2.5C27 14 28.8 13 31 13c4 0 7 3 7 7 0 8-12 16-12 16S14 28 14 20z" fill="#e85a6b" />
      <path d="M36 12c0-2.5 1.8-4.5 4.2-4.5 1.3 0 2.4.6 3 1.5.6-.9 1.7-1.5 3-1.5 2.4 0 4.2 2 4.2 4.5 0 5-7.2 10-7.2 10S36 17 36 12z" fill="#ff8fab" />
      <path d="M8 34c0-2 1.4-3.5 3.3-3.5 1 0 1.9.5 2.4 1.2.5-.7 1.4-1.2 2.4-1.2 1.9 0 3.3 1.5 3.3 3.5 0 4-5.7 8-5.7 8S8 38 8 34z" fill="#f7a8c0" />
    </svg>
  )
}

function BeatHeart() {
  return (
    <svg className="doodle beat-heart" viewBox="0 0 72 72" aria-hidden="true">
      <path d="M18 22c0-7 5-12 11-12 3.5 0 6.5 1.8 8 4.5 1.5-2.7 4.5-4.5 8-4.5 6 0 11 5 11 12 0 14-19 28-19 28S18 36 18 22z" fill="#e23d4a" stroke="#c22e3a" strokeWidth="1.5" />
      <path d="M8 18 Q4 28 10 36" fill="none" stroke="#e23d4a" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
      <path d="M6 28 Q2 34 8 42" fill="none" stroke="#e23d4a" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M64 18 Q68 28 62 36" fill="none" stroke="#e23d4a" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
      <path d="M66 28 Q70 34 64 42" fill="none" stroke="#e23d4a" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M28 8 Q36 2 44 8" fill="none" stroke="#e23d4a" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
    </svg>
  )
}

function Cake() {
  return (
    <svg className="doodle cake" viewBox="0 0 70 80" aria-hidden="true">
      <rect x="33" y="8" width="4" height="14" rx="1" fill="#f0c96a" />
      <ellipse className="cake-flame" cx="35" cy="6" rx="5" ry="8" fill="#ffb347" />
      <ellipse className="cake-flame-core" cx="35" cy="7" rx="2.2" ry="4" fill="#fff3c4" />
      <path d="M18 28h34v8c-4 4-8 4-12 0s-8-4-12 0-8 4-10 0v-8z" fill="#ff9eb5" />
      <rect x="18" y="34" width="34" height="14" fill="#ffe4ec" stroke="#f0a0b5" strokeWidth="1" />
      <path d="M10 50h50v8c-5 5-10 5-15 0s-10-5-15 0-10 5-15 0-5-5-5 0v-8z" fill="#ff8fab" />
      <rect x="10" y="56" width="50" height="16" rx="2" fill="#ffe4ec" stroke="#f0a0b5" strokeWidth="1" />
      <ellipse cx="35" cy="72" rx="26" ry="3" fill="rgba(0,0,0,0.08)" />
    </svg>
  )
}

function WavyBorder() {
  return (
    <svg className="card-border" viewBox="0 0 300 420" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M18 28
           C40 18, 70 22, 100 18
           S160 12, 200 20
           S260 16, 282 30
           C292 70, 286 120, 290 170
           S296 260, 286 310
           S292 380, 278 398
           C240 408, 200 400, 150 406
           S60 412, 22 396
           C10 350, 16 300, 12 250
           S8 140, 14 90
           S10 40, 18 28Z"
        fill="none"
        stroke="#f4a0b5"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* hearts along border */}
      <g fill="#e85a6b">
        <path d="M40 24c0-2.2 1.6-4 3.8-4 1.2 0 2.2.6 2.7 1.4.5-.8 1.5-1.4 2.7-1.4 2.2 0 3.8 1.8 3.8 4 0 4.5-3.5 6.5-6.5 6.5S40 28.5 40 24z" />
        <path d="M150 14c0-2 1.5-3.6 3.4-3.6 1.1 0 2 .5 2.5 1.3.5-.8 1.4-1.3 2.5-1.3 1.9 0 3.4 1.6 3.4 3.6 0 4.2-5.9 8-5.9 8S150 18.2 150 14z" transform="scale(0.85) translate(28,4)" />
        <path d="M270 40c0-2.2 1.6-4 3.8-4 1.2 0 2.2.6 2.7 1.4.5-.8 1.5-1.4 2.7-1.4 2.2 0 3.8 1.8 3.8 4 0 4.5-3.5 6.5-6.5 6.5S270 44.5 270 40z" />
        <path d="M286 200c0-2 1.5-3.6 3.4-3.6 1.1 0 2 .5 2.5 1.3.5-.8 1.4-1.3 2.5-1.3 1.9 0 3.4 1.6 3.4 3.6 0 4.2-5.9 8-5.9 8S286 204.2 286 200z" transform="translate(-8,0)" />
        <path d="M250 400c0-2.2 1.6-4 3.8-4 1.2 0 2.2.6 2.7 1.4.5-.8 1.5-1.4 2.7-1.4 2.2 0 3.8 1.8 3.8 4 0 0.5-3.5 6.5-6.5 6.5S250 404.5 250 400z" />
        <path d="M80 404c0-2 1.5-3.6 3.4-3.6 1.1 0 2 .5 2.5 1.3.5-.8 1.4-1.3 2.5-1.3 1.9 0 3.4 1.6 3.4 3.6 0 4.2-5.9 8-5.9 8S80 408.2 80 404z" />
        <path d="M8 300c0-2.2 1.6-4 3.8-4 1.2 0 2.2.6 2.7 1.4.5-.8 1.5-1.4 2.7-1.4 2.2 0 3.8 1.8 3.8 4 0 0.5-3.5 6.5-6.5 6.5S8 304.5 8 300z" />
        <path d="M12 120c0-2 1.5-3.6 3.4-3.6 1.1 0 2 .5 2.5 1.3.5-.8 1.4-1.3 2.5-1.3 1.9 0 3.4 1.6 3.4 3.6 0 4.2-5.9 8-5.9 8S12 124.2 12 120z" />
      </g>
      <g fill="#f4a0b5">
        <circle cx="100" cy="20" r="2" />
        <circle cx="220" cy="24" r="1.8" />
        <circle cx="288" cy="120" r="2" />
        <circle cx="292" cy="280" r="1.6" />
        <circle cx="180" cy="408" r="2" />
        <circle cx="40" cy="390" r="1.7" />
        <circle cx="16" cy="220" r="1.8" />
        <circle cx="20" cy="60" r="1.5" />
      </g>
    </svg>
  )
}

export default function LetterCard({ onContinue }) {
  return (
    <article className="letter-card">
      <WavyBorder />
      <Balloons />
      <TinyHearts />
      <BeatHeart />
      <Cake />

      <div className="letter-card-inner">
        <header className="hd-head">
          <h2 className="hd-title">Happy Birthday!</h2>
          <span className="hd-flourish" aria-hidden="true">
            <i />
            <span>♥</span>
            <i />
          </span>
          <p className="hd-dear">My dearest Salma,</p>
        </header>

        <div className="hd-body">
          <p>
            On your birthday I keep thinking about how lucky I am — not just to
            know you, but to get to love you.
          </p>
          <p>
            You make ordinary days feel brighter. Your laugh, your kindness, the
            way you see the world — all of it feels like home to me.
          </p>
          <p>
            I hope this year brings you every soft morning and every wild dream
            you deserve. I will be right here for all of it.
          </p>
          <p className="hd-highlight">
            <span>Happy birthday once again</span>
          </p>
        </div>

        <footer className="hd-sign">
          <p>With all my love,</p>
          <p className="hd-always">
            Always yours
            <span aria-hidden="true"> ♥</span>
          </p>
          <strong className="hd-name">Chris</strong>
        </footer>

        <button type="button" className="hd-cta" onClick={onContinue}>
          Keep going
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  )
}
