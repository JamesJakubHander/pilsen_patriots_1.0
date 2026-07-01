
// Pilsen Patriots logo
// Prefers images/logo.png; falls back to inline SVG recreation.

function PPLogoSVG({ size }) {
  const blue  = '#1456C0';
  const red   = '#C8102E';
  const white = '#FFFFFF';
  const shield = 'M50,97 C31,85 8,69 8,48 L8,20 Q8,6 22,6 L78,6 Q92,6 92,20 L92,48 C92,69 69,85 50,97 Z';

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block' }}>
      <defs>
        <clipPath id={`sc-${size}`}>
          <path d={shield} />
        </clipPath>
      </defs>

      {/* shield white base */}
      <path d={shield} fill={white} />

      {/* blue left half */}
      <rect x="0" y="0" width="50" height="100"
            fill={blue} clipPath={`url(#sc-${size})`} />

      {/* red right half */}
      <rect x="50" y="0" width="50" height="100"
            fill={red} clipPath={`url(#sc-${size})`} />

      {/* white center circle */}
      <circle cx="50" cy="46" r="32" fill={white} />

      {/* PP letters — bold with white outline */}
      <text x="50" y="61"
            textAnchor="middle"
            fontFamily="Impact, 'Arial Black', sans-serif"
            fontWeight="900"
            fontSize="38"
            fill={blue}
            stroke={white}
            strokeWidth="4"
            paintOrder="stroke fill">PP</text>

      {/* smile arc inside circle */}
      <path d="M33,72 Q50,82 67,72"
            stroke={blue} strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* red shield border */}
      <path d={shield} fill="none" stroke={red} strokeWidth="3" />
    </svg>
  );
}

function PPLogo({ size = 56 }) {
  const [useSVG, setUseSVG] = React.useState(false);
  if (useSVG) return <PPLogoSVG size={size} />;
  return (
    <img
      src="images/logo.png"
      width={size}
      height={size}
      style={{ display: 'block', objectFit: 'contain' }}
      onError={() => setUseSVG(true)}
    />
  );
}

function PPMark({ size = 24, color = '#C8102E' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
      <polygon points="12,2 14.6,9 22,9 16,13.5 18.2,21 12,16.5 5.8,21 8,13.5 2,9 9.4,9"
               fill={color} />
    </svg>
  );
}

window.PPLogo = PPLogo;
window.PPMark = PPMark;
