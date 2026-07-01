
// Pilsen Patriots — bottom tab bar

function TabBar({ active, onChange }) {
  const tabs = [
    { id: 'home',     icon: HomeIcon },
    { id: 'schedule', icon: ScheduleIcon },
    { id: 'roster',   icon: RosterIcon },
    { id: 'stats',    icon: StatsIcon },
    { id: 'news',     icon: NewsIcon },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      background: C.white, borderTop: `1px solid ${C.line}`,
      paddingBottom: 'max(22px, calc(env(safe-area-inset-bottom, 0px) + 10px))', paddingTop: 10,
      display: 'flex', justifyContent: 'space-around',
      zIndex: 70,
    }}>
      {tabs.map(tab => {
        const isActive = active === tab.id;
        const Icon = tab.icon;
        return (
          <button key={tab.id} onClick={() => onChange(tab.id)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
            padding: '4px 8px',
          }}>
            <Icon active={isActive} />
            <span style={{
              fontFamily: 'Oswald, sans-serif', fontSize: 9.5, letterSpacing: 1, fontWeight: 600,
              color: isActive ? C.red : C.mute,
            }}>{t(tab.id).toUpperCase()}</span>
          </button>
        );
      })}
    </div>
  );
}

function HomeIcon({ active }) {
  const c = active ? C.red : C.mute;
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 11L12 4l9 7v9a1 1 0 01-1 1h-5v-6h-6v6H4a1 1 0 01-1-1v-9z"
            stroke={c} strokeWidth="2" strokeLinejoin="round" fill={active ? c : 'none'} fillOpacity="0.12" />
    </svg>
  );
}
function ScheduleIcon({ active }) {
  const c = active ? C.red : C.mute;
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="16" rx="2" stroke={c} strokeWidth="2" fill={active ? c : 'none'} fillOpacity="0.12" />
      <path d="M3 9h18M8 3v4M16 3v4" stroke={c} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function RosterIcon({ active }) {
  const c = active ? C.red : C.mute;
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke={c} strokeWidth="2" fill={active ? c : 'none'} fillOpacity="0.12" />
      <path d="M4 21c0-4 4-7 8-7s8 3 8 7" stroke={c} strokeWidth="2" strokeLinecap="round" fill={active ? c : 'none'} fillOpacity="0.12" />
    </svg>
  );
}
function StatsIcon({ active }) {
  const c = active ? C.red : C.mute;
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" stroke={c} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function NewsIcon({ active }) {
  const c = active ? C.red : C.mute;
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke={c} strokeWidth="2" fill={active ? c : 'none'} fillOpacity="0.12" />
      <path d="M7 9h10M7 13h10M7 17h6" stroke={c} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

window.TabBar = TabBar;

