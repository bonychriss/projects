/** Animated doodles for each “because of you” reason */

function SmileRoom() {
  return (
    <svg className="reason-art" viewBox="0 0 88 72" aria-hidden="true">
      <circle className="ra-glow" cx="44" cy="36" r="28" fill="#ffe8a8" opacity="0.45" />
      <g className="ra-rays">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <line
            key={deg}
            x1="44"
            y1="36"
            x2={44 + Math.cos((deg * Math.PI) / 180) * 34}
            y2={36 + Math.sin((deg * Math.PI) / 180) * 34}
            stroke="#f0c96a"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        ))}
      </g>
      <circle cx="44" cy="36" r="18" fill="#ffd56a" stroke="#e8b84a" strokeWidth="1.5" />
      <circle cx="37" cy="32" r="2.2" fill="#5a3a20" />
      <circle cx="51" cy="32" r="2.2" fill="#5a3a20" />
      <path
        className="ra-smile"
        d="M34 40 Q44 50 54 40"
        fill="none"
        stroke="#5a3a20"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

function SafeSeen() {
  return (
    <svg className="reason-art" viewBox="0 0 88 72" aria-hidden="true">
      <ellipse className="ra-glow" cx="44" cy="48" rx="30" ry="10" fill="#c8e8e2" opacity="0.7" />
      <path
        className="ra-shield"
        d="M44 10 L64 18 V36 C64 50 44 60 44 60 S24 50 24 36 V18 Z"
        fill="#e8f6f3"
        stroke="#6f9e96"
        strokeWidth="2"
      />
      <path
        className="ra-heart-in"
        d="M38 34c0-3.2 2.4-5.6 5.2-5.6 1.6 0 2.9.8 3.8 2 0.9-1.2 2.2-2 3.8-2 2.8 0 5.2 2.4 5.2 5.6 0 6.5-9 12-9 12s-9-5.5-9-12z"
        fill="#e85a6b"
      />
      <circle className="ra-spark s1" cx="20" cy="22" r="2" fill="#6f9e96" />
      <circle className="ra-spark s2" cx="68" cy="20" r="1.6" fill="#f4a0b5" />
      <circle className="ra-spark s3" cx="70" cy="42" r="2" fill="#6f9e96" />
    </svg>
  )
}

function FierceHeart() {
  return (
    <svg className="reason-art" viewBox="0 0 88 72" aria-hidden="true">
      <g className="ra-fierce-heart">
        <path
          d="M28 28c0-7 5.2-12 11.5-12 3.4 0 6.3 1.8 7.5 4.5C48.2 17.8 51.1 16 54.5 16 60.8 16 66 21 66 28c0 14-22 28-22 28S28 42 28 28z"
          fill="#e23d4a"
          stroke="#c22e3a"
          strokeWidth="1.5"
        />
      </g>
      <g className="ra-burst" stroke="#e85a6b" strokeWidth="1.8" strokeLinecap="round">
        <line x1="14" y1="36" x2="22" y2="36" />
        <line x1="66" y1="36" x2="74" y2="36" />
        <line x1="20" y1="18" x2="26" y2="24" />
        <line x1="68" y1="18" x2="62" y2="24" />
        <line x1="20" y1="54" x2="26" y2="48" />
        <line x1="68" y1="54" x2="62" y2="48" />
      </g>
      <path className="ra-sparkle" d="M44 8 L45.5 12 L49.5 13.5 L45.5 15 L44 19 L42.5 15 L38.5 13.5 L42.5 12 Z" fill="#ffd56a" />
    </svg>
  )
}

function LittleMoments() {
  return (
    <svg className="reason-art" viewBox="0 0 88 72" aria-hidden="true">
      <g className="ra-polaroid">
        <rect x="24" y="14" width="40" height="46" rx="2" fill="#fff" stroke="#c9b8a8" strokeWidth="1.5" />
        <rect x="28" y="18" width="32" height="28" fill="#dceaf2" />
        <circle cx="38" cy="28" r="5" fill="#ffd56a" />
        <path d="M28 42 L36 34 L44 40 L50 32 L60 42 Z" fill="#6f9e96" opacity="0.7" />
        <rect x="30" y="50" width="20" height="3" rx="1" fill="#e8d5b5" />
      </g>
      <g className="ra-stars" fill="#f0c96a">
        <path className="ra-star s1" d="M14 20 L15.2 23.2 L18.5 24 L15.2 24.8 L14 28 L12.8 24.8 L9.5 24 L12.8 23.2 Z" />
        <path className="ra-star s2" d="M72 16 L73 18.8 L76 19.5 L73 20.2 L72 23 L71 20.2 L68 19.5 L71 18.8 Z" />
        <path className="ra-star s3" d="M68 48 L69 50.5 L71.5 51 L69 51.5 L68 54 L67 51.5 L64.5 51 L67 50.5 Z" />
      </g>
    </svg>
  )
}

function SimplySalma() {
  return (
    <svg className="reason-art" viewBox="0 0 88 72" aria-hidden="true">
      <circle className="ra-glow" cx="44" cy="38" r="26" fill="#ffd0dc" opacity="0.55" />
      <g className="ra-crown">
        <path
          d="M22 34 L28 18 L36 30 L44 14 L52 30 L60 18 L66 34 Z"
          fill="#ffd56a"
          stroke="#e8b84a"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <rect x="22" y="34" width="44" height="8" rx="1" fill="#f0c96a" stroke="#e8b84a" strokeWidth="1" />
        <circle cx="28" cy="18" r="3" fill="#e85a6b" />
        <circle cx="44" cy="14" r="3.5" fill="#e85a6b" />
        <circle cx="60" cy="18" r="3" fill="#e85a6b" />
      </g>
      <text
        className="ra-initial"
        x="44"
        y="58"
        textAnchor="middle"
        fontFamily="Caveat, cursive"
        fontSize="22"
        fontWeight="700"
        fill="#e85a6b"
      >
        S
      </text>
    </svg>
  )
}

const ARTS = [SmileRoom, SafeSeen, FierceHeart, LittleMoments, SimplySalma]

export default function ReasonArt({ index }) {
  const Art = ARTS[index] || SmileRoom
  return (
    <div className="reason-art-wrap" aria-hidden="true">
      <Art />
    </div>
  )
}
