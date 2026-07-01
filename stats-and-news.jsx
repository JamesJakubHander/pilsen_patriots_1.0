
// Pilsen Patriots — Stats + News screens

function StatsScreen({ tweaks }) {
  const { stats, standings } = window.PP_DATA;
  return (
    <div style={{ background: C.cream, minHeight: '100%', paddingBottom: 110 }}>
      <PageHeader title={t('stats')} subtitle={t('statsSubtitle', stats.games)} tweaks={tweaks} />

      <SectionTitle>{t('scoringByQuarter')}</SectionTitle>
      <div style={{ padding: '0 16px' }}>
        <Card>
          <div style={{ padding: '14px 14px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '70px 1fr 1fr 1fr 1fr 56px',
              alignItems: 'center', gap: 8,
              fontFamily: 'Oswald, sans-serif', fontSize: 11, letterSpacing: 1,
              color: C.mute, fontWeight: 600, marginBottom: 8,
            }}>
              <div>{t('team')}</div>
              <div style={{ textAlign: 'center' }}>Q1</div>
              <div style={{ textAlign: 'center' }}>Q2</div>
              <div style={{ textAlign: 'center' }}>Q3</div>
              <div style={{ textAlign: 'center' }}>Q4</div>
              <div style={{ textAlign: 'right' }}>{t('tot')}</div>
            </div>
            {[
              { name: t('pilsen'), vals: stats.scoreByQ.pilsen, color: C.navy },
              { name: t('opp'),    vals: stats.scoreByQ.opp,    color: C.mute },
            ].map(row => (
              <div key={row.name} style={{
                display: 'grid',
                gridTemplateColumns: '70px 1fr 1fr 1fr 1fr 56px',
                alignItems: 'center', gap: 8, padding: '8px 0',
                borderTop: `1px solid ${C.line}`,
                fontFamily: 'Oswald, sans-serif', fontSize: 16, fontWeight: 600,
              }}>
                <div style={{ color: row.color, letterSpacing: 0.5 }}>{row.name}</div>
                {row.vals.slice(0, 4).map((v, i) => (
                  <div key={i} style={{ textAlign: 'center', color: C.ink }}>{v}</div>
                ))}
                <div style={{
                  textAlign: 'right', color: row.color, fontWeight: 700, fontSize: 18,
                }}>{row.vals[4]}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <SectionTitle>{t('teamVsOpp')}</SectionTitle>
      <div style={{ padding: '0 16px' }}>
        <Card>
          {stats.teamAvg.map((s, i) => {
            const num = v => parseFloat(String(v).replace('%',''));
            const a = num(s.ptr), b = num(s.opp);
            const total = a + b || 1;
            const aPct = (a / total) * 100;
            return (
              <div key={s.label} style={{
                padding: '12px 14px',
                borderTop: i === 0 ? 'none' : `1px solid ${C.line}`,
              }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                  fontFamily: 'Inter', fontSize: 12, color: C.mute, marginBottom: 6,
                }}>
                  <span style={{ textTransform: 'uppercase', letterSpacing: 0.5 }}>{s.label}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 18,
                    color: C.navy, minWidth: 56,
                  }}>{s.ptr}</div>
                  <div style={{ flex: 1, height: 6, background: C.line, borderRadius: 3, overflow: 'hidden', display: 'flex' }}>
                    <div style={{ width: `${aPct}%`, background: C.navy }} />
                    <div style={{ width: `${100 - aPct}%`, background: C.red, opacity: 0.85 }} />
                  </div>
                  <div style={{
                    fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 18,
                    color: C.mute, minWidth: 56, textAlign: 'right',
                  }}>{s.opp}</div>
                </div>
              </div>
            );
          })}
        </Card>
      </div>

      <SectionTitle>{t('statLeaders')}</SectionTitle>
      <div style={{ padding: '0 16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {stats.leaders.map(l => (
          <Card key={l.cat}>
            <div style={{ padding: '14px 14px' }}>
              <div style={{
                fontFamily: 'Oswald, sans-serif', fontSize: 10, letterSpacing: 1.5,
                color: C.red, fontWeight: 700,
              }}>{l.cat.toUpperCase()}</div>
              <div style={{ marginTop: 8, display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <span style={{
                  fontFamily: 'Oswald, sans-serif', fontSize: 30, fontWeight: 700,
                  color: C.navy, lineHeight: 1,
                }}>{l.big}</span>
                <span style={{
                  fontFamily: 'Oswald, sans-serif', fontSize: 11, letterSpacing: 1,
                  color: C.mute, fontWeight: 600,
                }}>{l.unit}</span>
              </div>
              <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{
                  fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 11,
                  color: C.white, background: C.navy, padding: '2px 5px', borderRadius: 3,
                }}>#{l.num}</span>
                <span style={{
                  fontFamily: 'Inter', fontSize: 12, color: C.ink, fontWeight: 600,
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }}>{l.name}</span>
              </div>
              <div style={{
                marginTop: 4, fontFamily: 'Inter', fontSize: 11, color: C.mute,
              }}>{l.sub}</div>
            </div>
          </Card>
        ))}
      </div>

      <SectionTitle>{t('standings')}</SectionTitle>
      <div style={{ padding: '0 16px' }}>
        <Card>
          {standings.map((tm, i) => (
            <div key={tm.team} style={{
              display: 'flex', alignItems: 'center', padding: '12px 14px',
              borderTop: i === 0 ? 'none' : `1px solid ${C.line}`,
              background: tm.us ? '#FFF8F0' : 'transparent',
            }}>
              <div style={{
                width: 24, fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 16,
                color: tm.us ? C.red : C.mute,
              }}>{tm.rank}</div>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8 }}>
                {tm.us && <PPMark size={12} color={C.red} />}
                <span style={{
                  fontFamily: 'Inter', fontSize: 14, color: C.ink,
                  fontWeight: tm.us ? 700 : 500,
                }}>{tm.team}</span>
              </div>
              <div style={{
                fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 14, color: C.navy,
              }}>{tm.w}-{tm.l}</div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}

// ────────── NEWS ──────────
function NewsScreen({ tweaks, openNews }) {
  const { news } = window.PP_DATA;
  return (
    <div style={{ background: C.cream, minHeight: '100%', paddingBottom: 110 }}>
      <PageHeader title={t('news')} subtitle={`${news.length} stories`} tweaks={tweaks} />
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {news.map(n => (
          <Card key={n.id} onClick={() => openNews(n)}>
            <div style={{ display: 'flex' }}>
              <div style={{ width: 4, background: n.accent === 'red' ? C.red : C.navy }} />
              <div style={{ padding: '14px 14px', flex: 1 }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6,
                }}>
                  <span style={{
                    fontFamily: 'Oswald, sans-serif', fontSize: 10, letterSpacing: 1.5,
                    color: n.accent === 'red' ? C.red : C.navy, fontWeight: 700,
                  }}>{n.tag}</span>
                  <span style={{ fontSize: 11, color: C.mute, fontFamily: 'Inter' }}>{n.ago} ago</span>
                </div>
                <div style={{
                  fontFamily: 'Inter', fontSize: 15, color: C.ink, lineHeight: 1.35, fontWeight: 600,
                }}>{n.title}</div>
                <div style={{
                  marginTop: 6, fontFamily: 'Inter', fontSize: 13, color: C.mute, lineHeight: 1.45,
                  display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}>{n.body}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

window.StatsScreen = StatsScreen;
window.NewsScreen = NewsScreen;

