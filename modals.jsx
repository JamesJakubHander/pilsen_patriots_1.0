
// Pilsen Patriots — modal sheets

function ModalShell({ onClose, children, accent = C.navy }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 80,
      background: C.cream, display: 'flex', flexDirection: 'column',
    }}>
      <div style={{
        background: accent, color: C.white,
        padding: '50px 16px 14px',
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <button onClick={onClose} style={{
          background: 'rgba(255,255,255,0.18)', border: 'none', color: C.white,
          width: 32, height: 32, borderRadius: 8,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', fontSize: 18, fontWeight: 600, lineHeight: 1,
        }} aria-label="Close">←</button>
        <span style={{
          fontFamily: 'Oswald, sans-serif', fontSize: 14, letterSpacing: 1.5,
          fontWeight: 600, textTransform: 'uppercase',
        }}>{t('back')}</span>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 40 }}>
        {children}
      </div>
    </div>
  );
}

// ─── Player modal ───
function PlayerModal({ player, onClose }) {
  const { playerBios } = window.PP_DATA;
  const bio = playerBios[player.num];
  return (
    <ModalShell onClose={onClose}>
      <div style={{
        background: C.navy, color: C.white, padding: '0 20px 28px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, position: 'relative' }}>
          <div style={{
            width: 100, height: 100, borderRadius: 12, background: C.navyDeep,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 56, color: C.white,
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 5, background: C.red,
            }} />
            {player.num}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontFamily: 'Oswald, sans-serif', fontSize: 11, letterSpacing: 1.5,
              color: C.red, fontWeight: 700, marginBottom: 4,
            }}>{t(`pos.${player.pos}`).toUpperCase()}</div>
            <div style={{
              fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 24,
              lineHeight: 1.1, letterSpacing: 0.5,
            }}>{player.name}</div>
            {player.rookie && (
              <div style={{
                marginTop: 8, display: 'inline-block',
                fontFamily: 'Oswald, sans-serif', fontSize: 10, fontWeight: 700,
                letterSpacing: 1, padding: '3px 8px',
                background: C.red, borderRadius: 3,
              }}>{t('rookie')}</div>
            )}
          </div>
        </div>
      </div>
      <StripeBar color={C.red} h={3} />

      {bio && (
        <>
          <SectionTitle>{t('bio')}</SectionTitle>
          <div style={{ padding: '0 16px' }}>
            <div style={{
              fontFamily: 'Inter', fontSize: 14, color: C.ink, lineHeight: 1.5,
              padding: '4px 4px',
            }}>{bio}</div>
          </div>
        </>
      )}

      <SectionTitle>{t('seasonStats')}</SectionTitle>
      <div style={{ padding: '0 16px' }}>
        <Card>
          <div style={{ padding: 0 }}>
            <PlayerStatsList player={player} />
          </div>
        </Card>
      </div>
    </ModalShell>
  );
}

function PlayerStatsList({ player }) {
  // Pull stats from leaders if matching, else show position-relevant placeholders.
  const leader = window.PP_DATA.stats.leaders.find(l => l.num === player.num);
  if (leader) {
    return (
      <div>
        {[
          { l: leader.cat, v: `${leader.big} ${leader.unit}` },
          { l: 'Detail', v: leader.sub },
        ].map((row, i) => (
          <div key={i} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '12px 14px',
            borderTop: i === 0 ? 'none' : `1px solid ${C.line}`,
            fontFamily: 'Inter', fontSize: 13,
          }}>
            <span style={{ color: C.mute }}>{row.l}</span>
            <span style={{ color: C.ink, fontWeight: 600 }}>{row.v}</span>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div style={{
      padding: '20px 14px', textAlign: 'center',
      fontFamily: 'Inter', fontSize: 13, color: C.mute,
    }}>
      Detailed individual stats coming soon.
    </div>
  );
}

// ─── Game modal ───
function GameModal({ game, onClose }) {
  const { team, gameRecaps } = window.PP_DATA;
  const recap = gameRecaps[game.week];
  const won = game.result === 'W';
  return (
    <ModalShell onClose={onClose} accent={won ? C.navy : '#3A3F4A'}>
      <div style={{
        background: won ? C.navy : '#3A3F4A', color: C.white,
        padding: '0 20px 24px',
      }}>
        <div style={{
          fontFamily: 'Oswald, sans-serif', fontSize: 11, letterSpacing: 1.5,
          color: 'rgba(255,255,255,0.7)', fontWeight: 600,
        }}>WEEK {game.week} · {game.date}</div>
        <div style={{
          fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 22,
          marginTop: 6, letterSpacing: 0.3,
        }}>{game.home ? 'vs' : '@'} {game.opp}</div>

        <div style={{
          marginTop: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'rgba(255,255,255,0.08)', borderRadius: 10, padding: '14px 16px',
        }}>
          <div>
            <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: 12, letterSpacing: 1, color: 'rgba(255,255,255,0.7)' }}>{t('pilsen')}</div>
            <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: 40, fontWeight: 700, lineHeight: 1 }}>{game.ours}</div>
          </div>
          <div style={{
            fontFamily: 'Oswald, sans-serif', fontSize: 28, fontWeight: 700,
            color: won ? C.red : C.white, letterSpacing: 2,
          }}>{game.result}</div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: 12, letterSpacing: 1, color: 'rgba(255,255,255,0.7)' }}>{game.opp.split(' ')[0]}</div>
            <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: 40, fontWeight: 700, lineHeight: 1 }}>{game.theirs}</div>
          </div>
        </div>
      </div>
      <StripeBar color={C.red} h={3} />

      {recap && (
        <>
          <SectionTitle>{t('gameRecap')}</SectionTitle>
          <div style={{ padding: '0 16px' }}>
            <div style={{
              fontFamily: 'Inter', fontSize: 15, color: C.ink, lineHeight: 1.45,
              fontWeight: 600, marginBottom: 8,
            }}>{recap.headline}</div>
            <div style={{
              fontFamily: 'Inter', fontSize: 14, color: C.ink, lineHeight: 1.55,
              opacity: 0.85,
            }}>{recap.body}</div>
          </div>
        </>
      )}
    </ModalShell>
  );
}

// ─── News modal ───
function NewsModal({ news: n, onClose }) {
  return (
    <ModalShell onClose={onClose} accent={n.accent === 'red' ? C.red : C.navy}>
      <div style={{
        background: n.accent === 'red' ? C.red : C.navy,
        color: C.white, padding: '0 20px 24px',
      }}>
        <div style={{
          fontFamily: 'Oswald, sans-serif', fontSize: 11, letterSpacing: 1.5,
          fontWeight: 700, opacity: 0.85,
        }}>{n.tag} · {n.ago} ago</div>
        <div style={{
          fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 26,
          marginTop: 8, lineHeight: 1.15, letterSpacing: 0.3,
        }}>{n.title}</div>
      </div>
      <StripeBar color={n.accent === 'red' ? C.navy : C.red} h={3} />

      <div style={{ padding: '24px 16px' }}>
        <div style={{
          fontFamily: 'Inter', fontSize: 15, color: C.ink, lineHeight: 1.6,
        }}>{n.body}</div>
      </div>
    </ModalShell>
  );
}

window.PlayerModal = PlayerModal;
window.GameModal = GameModal;
window.NewsModal = NewsModal;

