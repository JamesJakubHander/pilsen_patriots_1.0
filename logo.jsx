
// Pilsen Patriots shield logo — simple geometric SVG
function PPLogo({ size = 56, navy = '#0A1F44', red = '#C8102E', white = '#F7F4ED' }) {
  return (
    <svg width={size} height={size * 1.1} viewBox="0 0 100 110" style={{ display: 'block' }}>
      {/* shield outline */}
      <path d="M50 4 L92 16 L92 60 Q92 88 50 106 Q8 88 8 60 L8 16 Z"
            fill={navy} stroke={white} strokeWidth="3" />
      {/* red top band */}
      <path d="M50 4 L92 16 L92 28 L8 28 L8 16 Z" fill={red} />
      {/* star */}
      <polygon points="50,12 52.4,18.6 59.5,18.6 53.7,22.8 56,29.4 50,25.2 44,29.4 46.3,22.8 40.5,18.6 47.6,18.6"
               fill={white} />
      {/* monogram PP */}
      <text x="50" y="76" textAnchor="middle"
            fontFamily="Oswald, Impact, sans-serif" fontWeight="700"
            fontSize="38" fill={white} letterSpacing="-1">PP</text>
      {/* bottom stripe */}
      <rect x="8" y="92" width="84" height="3" fill={red} />
    </svg>
  );
}

function PPMark({ size = 24, color = '#C8102E' }) {
  // tiny star mark for inline use
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
      <polygon points="12,2 14.6,9 22,9 16,13.5 18.2,21 12,16.5 5.8,21 8,13.5 2,9 9.4,9"
               fill={color} />
    </svg>
  );
}

window.PPLogo = PPLogo;
window.PPMark = PPMark;

