
// Pilsen Patriots — screens
const { useState, useMemo, useEffect } = React;

const _LIGHT = {
  navy: '#0A1F44',
  navyDeep: '#06152E',
  red: '#C8102E',
  redDark: '#A00C24',
  white: '#FFFFFF',
  cream: '#F7F4ED',
  ink: '#0E1320',
  mute: '#6B7280',
  line: '#E5E2DA',
  surface: '#FBFAF6',
  outerBg: '#E8E5DE',
};
const _DARK = {
  navy: '#0A1F44',
  navyDeep: '#040D1F',
  red: '#E22A47',
  redDark: '#C8102E',
  white: '#1A2542',
  cream: '#0B1426',
  ink: '#F0F4FF',
  mute: '#8B95B5',
  line: '#243358',
  surface: '#101A33',
  outerBg: '#070D1C',
};
const C = { ..._LIGHT };
window.setPPTheme = (dark) => Object.assign(C, dark ? _DARK : _LIGHT);

// ────────── shared bits ──────────
function StripeBar({ color = C.red, h = 4 }) {
  return <div style={{ height: h, background: color }} />;
}

function SectionTitle({ children, action, onAction }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
      padding: '20px 20px 10px',
    }}>
      <h2 style={{
        margin: 0, fontFamily: 'Oswald, sans-serif', fontWeight: 600,
        fontSize: 18, letterSpacing: 1.5, textTransform: 'uppercase', color: C.ink,
      }}>{children}</h2>
      {action && (
        <span onClick={onAction} style={{
          fontFamily: 'Inter', fontSize: 13, color: C.red, fontWeight: 600,
          cursor: onAction ? 'pointer' : 'default',
        }}>{action}</span>
      )}
    </div>
  );
}

function Card({ children, style = {}, onClick }) {
  return (
    <div onClick={onClick} style={{
      background: C.white, borderRadius: 14,
      border: `1px solid ${C.line}`,
      overflow: 'hidden',
      cursor: onClick ? 'pointer' : 'default',
      ...style,
    }}>{children}</div>
  );
}

function heroBg(style) {
  if (style === 'red')     return `linear-gradient(180deg, ${C.redDark} 0%, ${C.red} 100%)`;
  return `linear-gradient(180deg, ${C.navyDeep} 0%, ${C.navy} 100%)`;
}

function HeroStripes() {
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 0, height: 14, display: 'flex',
    }}>
      {[C.red, C.white, C.red, C.white, C.red].map((c, i) => (
        <div key={i} style={{ flex: 1, background: c, opacity: 0.85 }} />
      ))}
    </div>
  );
}

function PageHeader({ title, subtitle, tweaks }) {
  const heroStyle = tweaks?.heroStyle || 'navy';
  return (
    <>
      <div style={{
        background: heroBg(heroStyle), color: C.white, padding: '60px 20px 18px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.06, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, #fff 1.2px, transparent 1.5px)',
          backgroundSize: '22px 22px',
        }} />
        <div style={{
          fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 26,
          letterSpacing: 1, textTransform: 'uppercase', position: 'relative',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12,
        }}>
          <span>{title}</span>
          {window.PP_LangToggle && <window.PP_LangToggle />}
        </div>
        <div style={{ fontFamily: 'Inter', fontSize: 13, opacity: 0.75, marginTop: 4, position: 'relative' }}>
          {subtitle}
        </div>
        {heroStyle === 'stripes' && <HeroStripes />}
      </div>
      {tweaks?.accentRed !== false && heroStyle !== 'stripes' && <StripeBar color={C.red} h={3} />}
    </>
  );
}

// ────────── HOME ──────────
function HomeScreen({ tweaks, openNews, openGame, goTo, openFanID }) {
  const { team, news, sponsors, venue, schedule, gameRecaps } = window.PP_DATA;
  const ng = team.nextGame;
  const lr = team.lastResult;
  const heroStyle = tweaks.heroStyle || 'navy';
  const lastPlayedGame = [...schedule].reverse().find(g => g.played && !g.bye);

  return (
    <div style={{ background: C.cream, minHeight: '100%', paddingBottom: 110 }}>
      {/* Hero header */}
      <div style={{
        background: heroBg(heroStyle),
        color: C.white, padding: '70px 20px 24px', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.06, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, #fff 1.2px, transparent 1.5px)',
          backgroundSize: '22px 22px',
        }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, position: 'relative' }}>
          <PPLogo size={52} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 22, lineHeight: 1, letterSpacing: 0.5 }}>
              PILSEN PATRIOTS
            </div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 6 }}>
              <span style={{
                background: C.red, color: C.white, padding: '2px 8px',
                fontSize: 11, fontWeight: 700, letterSpacing: 0.6, borderRadius: 3,
                fontFamily: 'Oswald, sans-serif',
              }}>{team.record}</span>
              <span style={{ fontSize: 12, opacity: 0.75, fontFamily: 'Inter' }}>{team.rank}</span>
            </div>
          </div>
          {window.PP_LangToggle && <window.PP_LangToggle />}
        </div>
        {heroStyle === 'stripes' && <HeroStripes />}
      </div>

      {/* Next game card — or season-complete summary */}
      {team.seasonComplete ? (
      <div style={{ padding: '0 16px', marginTop: -18, position: 'relative', zIndex: 2 }}>
        <Card style={{ boxShadow: '0 4px 14px rgba(10,31,68,0.10)' }}>
          <div style={{
            background: C.navy, color: C.white, padding: '8px 14px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            fontFamily: 'Oswald, sans-serif', fontSize: 12, letterSpacing: 1.4, fontWeight: 600,
          }}>
            <span>{t('seasonOver')}</span>
            <span>2026</span>
          </div>
          <div style={{ padding: '22px 18px 18px', textAlign: 'center' }}>
            <PPLogo size={48} />
            <div style={{
              fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 20, color: C.navy,
              marginTop: 10, letterSpacing: 0.5,
            }}>{t('seasonOverTitle')}</div>
            <div style={{ fontFamily: 'Inter', fontSize: 13, color: C.mute, marginTop: 6 }}>
              {t('finishedNth', team.finalRank)}
            </div>
            <div style={{
              display: 'inline-block', marginTop: 14, padding: '6px 16px',
              background: C.cream, borderRadius: 999,
              fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 16,
              color: C.navy, letterSpacing: 1,
            }}>{t('finalRecord', team.record)}</div>
            <div style={{ display: 'flex', gap: 8, marginTop: 18 }}>
              <button onClick={() => goTo('stats')} style={{
                flex: 1, padding: '13px',
                background: C.navy, color: C.white, border: 'none', borderRadius: 8,
                fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 13,
                letterSpacing: 1, cursor: 'pointer',
              }}>{t('seeStandings')}</button>
              <button onClick={() => goTo('schedule')} style={{
                flex: 1, padding: '13px',
                background: C.white, color: C.navy, border: `1.5px solid ${C.navy}`, borderRadius: 8,
                fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 13,
                letterSpacing: 1, cursor: 'pointer',
              }}>{t('seeSchedule')}</button>
            </div>
          </div>
        </Card>
      </div>
      ) : (
      <div style={{ padding: '0 16px', marginTop: -18, position: 'relative', zIndex: 2 }}>
        <Card style={{ boxShadow: '0 4px 14px rgba(10,31,68,0.10)' }}>
          <div style={{
            background: C.red, color: C.white, padding: '8px 14px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            fontFamily: 'Oswald, sans-serif', fontSize: 12, letterSpacing: 1.4, fontWeight: 600,
          }}>
            <span>{t('nextGame')}{ng.week ? ` · ${t('week')} ${ng.week}` : ''}</span>
            <span>{ng.date}</span>
          </div>
          <div style={{ padding: '20px 18px 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ textAlign: 'center', flex: 1 }}>
                <PPLogo size={44} />
                <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 14, marginTop: 6, color: C.navy }}>{t('pilsen')}</div>
                <div style={{ fontSize: 11, color: C.mute, fontFamily: 'Inter' }}>{team.record} · {t('home_team')}</div>
              </div>
              <div style={{ textAlign: 'center', padding: '0 12px' }}>
                <div style={{
                  fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 22,
                  color: C.red, letterSpacing: 2,
                }}>{t('vs')}</div>
                <div style={{ fontSize: 11, color: C.mute, fontFamily: 'Inter', marginTop: 2 }}>{ng.time}</div>
              </div>
              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{
                  width: 44, height: 48, margin: '0 auto', borderRadius: 6,
                  background: '#E5E2DA', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 16, color: C.mute,
                  border: `2px solid ${C.line}`,
                }}>{ng.opponentShort}</div>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 14, marginTop: 6, color: C.navy }}>
                  {ng.opponent.split(' ')[0].toUpperCase()}
                </div>
                <div style={{ fontSize: 11, color: C.mute, fontFamily: 'Inter' }}>{ng.oppRecord ? `${ng.oppRecord} · ` : ''}{ng.home ? t('home_team') : t('away')}</div>
              </div>
            </div>

            <div style={{
              marginTop: 16, padding: '10px 12px', background: C.cream, borderRadius: 8,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              fontFamily: 'Inter', fontSize: 12,
            }}>
              <span style={{ color: C.mute }}>{ng.venue}</span>
              {tweaks.showCountdown !== false && (
                <span style={{
                  color: C.navy, fontWeight: 700, fontFamily: 'Oswald, sans-serif',
                  fontSize: 13, letterSpacing: 0.5,
                }}>{t('inDays', ng.countdownDays)}</span>
              )}
            </div>

            <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
              <button style={{
                flex: 2, padding: '13px',
                background: C.navy, color: C.white, border: 'none', borderRadius: 8,
                fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 13,
                letterSpacing: 1.5, cursor: 'pointer',
              }}>{t('getTickets')}</button>
              <a href={venue.mapsUrl} target="_blank" rel="noopener" style={{
                flex: 1, padding: '13px', textAlign: 'center', textDecoration: 'none',
                background: C.white, color: C.navy, border: `1.5px solid ${C.navy}`, borderRadius: 8,
                fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 13,
                letterSpacing: 1, cursor: 'pointer', boxSizing: 'border-box',
              }}>{t('directions')}</a>
            </div>
          </div>
        </Card>
      </div>
      )}

      {/* Fan ID quick-access */}
      <div style={{ marginTop: 14 }}>
        <FanCard onOpen={openFanID} />
      </div>

      {/* Last result */}
      <SectionTitle action={t('scheduleArrow')} onAction={() => goTo('schedule')}>{t('lastGame')}</SectionTitle>
      <div style={{ padding: '0 16px' }}>
        <Card onClick={() => lastPlayedGame && openGame(lastPlayedGame)}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '14px 16px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 6,
                background: lr.result === 'W' ? C.red : '#3A3F4A',
                color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 16,
              }}>{lr.result}</div>
              <div>
                <div style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 14, color: C.ink }}>
                  {lr.home ? `vs ${lr.opponent}` : `@ ${lr.opponent}`}
                </div>
                <div style={{ fontSize: 12, color: C.mute, fontFamily: 'Inter', marginTop: 2 }}>
                  {lr.home ? t('home_team') : t('away')} · {lr.date}
                </div>
              </div>
            </div>
            <div style={{
              fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 22, color: C.navy,
            }}>
              {lr.ourScore}<span style={{ color: C.mute, fontWeight: 400 }}> – </span>{lr.theirScore}
            </div>
          </div>
        </Card>
      </div>

      {/* News */}
      <SectionTitle action={t('seeAll')} onAction={() => goTo('news')}>{t('latestNews')}</SectionTitle>
      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {news.slice(0, 3).map(n => (
          <Card key={n.id} onClick={() => openNews(n)}>
            <div style={{ display: 'flex' }}>
              <div style={{ width: 4, background: n.accent === 'red' ? C.red : C.navy }} />
              <div style={{ padding: '14px 14px', flex: 1 }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4,
                }}>
                  <span style={{
                    fontFamily: 'Oswald, sans-serif', fontSize: 10, letterSpacing: 1.5,
                    color: n.accent === 'red' ? C.red : C.navy, fontWeight: 700,
                  }}>{n.tag}</span>
                  <span style={{ fontSize: 11, color: C.mute, fontFamily: 'Inter' }}>{n.ago} ago</span>
                </div>
                <div style={{
                  fontFamily: 'Inter', fontSize: 14, color: C.ink, lineHeight: 1.35, fontWeight: 500,
                }}>{n.title}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Predict the score */}
      <SectionTitle>{t('predict')}</SectionTitle>
      <PredictBlock />

      {/* Merch */}
      <MerchStrip />

      {/* Sponsors */}
      <SectionTitle>{t('sponsors')}</SectionTitle>
      <div style={{ padding: '0 16px' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8,
        }}>
          {sponsors.map(s => (
            <div key={s.name} style={{
              background: C.white, border: `1px solid ${C.line}`,
              borderRadius: 8, padding: '14px 8px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
              minHeight: 78,
            }}>
              <div style={{
                fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 18,
                color: C.navy, letterSpacing: 1,
              }}>{s.short}</div>
              <div style={{
                fontFamily: 'Inter', fontSize: 10, color: C.mute,
                textTransform: 'uppercase', letterSpacing: 0.5, textAlign: 'center',
              }}>{s.tier}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ────────── SCHEDULE ──────────
function ScheduleScreen({ tweaks, openGame }) {
  const { schedule } = window.PP_DATA;
  return (
    <div style={{ background: C.cream, minHeight: '100%', paddingBottom: 110 }}>
      <PageHeader title={t('schedule')} subtitle="Snapbacks Liga 2026" tweaks={tweaks} />
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {schedule.map(g => (
          <Card key={g.week}
                onClick={g.played && !g.bye ? () => openGame(g) : undefined}
                style={g.bye ? { opacity: 0.55, background: 'transparent', borderStyle: 'dashed' } : {}}>
            <div style={{ display: 'flex', alignItems: 'stretch' }}>
              <div style={{
                width: 56,
                background: g.bye ? 'transparent' : (g.played ? C.cream : C.navy),
                color: g.bye ? C.mute : (g.played ? C.navy : C.white),
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Oswald, sans-serif',
                borderRight: g.bye ? `1px dashed ${C.line}` : 'none',
              }}>
                <div style={{ fontSize: 10, letterSpacing: 1, opacity: 0.8 }}>{t('week')}</div>
                <div style={{ fontSize: 22, fontWeight: 700, lineHeight: 1 }}>{g.week}</div>
              </div>
              <div style={{ flex: 1, padding: '12px 14px' }}>
                {g.bye ? (
                  <div style={{
                    display: 'flex', alignItems: 'center', height: '100%',
                    fontFamily: 'Oswald, sans-serif', fontSize: 14, letterSpacing: 1.5,
                    color: C.mute, fontWeight: 600,
                  }}>{t('bye')} · {g.date}</div>
                ) : (
                  <div style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  }}>
                    <div>
                      <div style={{ fontFamily: 'Inter', fontSize: 14, color: C.ink, fontWeight: 600 }}>
                        {g.home ? 'vs' : '@'} {g.opp}
                      </div>
                      <div style={{ fontSize: 12, color: C.mute, fontFamily: 'Inter', marginTop: 2 }}>
                        {g.date} · {g.home ? t('home_team') : t('away')}
                      </div>
                    </div>
                    {g.played ? (
                      <div style={{ textAlign: 'right' }}>
                        <div style={{
                          fontFamily: 'Oswald, sans-serif', fontSize: 18, fontWeight: 700,
                          color: g.result === 'W' ? C.navy : C.mute,
                        }}>{g.ours}-{g.theirs}</div>
                        <div style={{
                          fontFamily: 'Oswald, sans-serif', fontSize: 11, fontWeight: 700,
                          color: g.result === 'W' ? C.red : C.mute, letterSpacing: 1,
                        }}>{g.result}</div>
                      </div>
                    ) : (
                      <div style={{
                        fontFamily: 'Oswald, sans-serif', fontSize: 13, fontWeight: 600,
                        color: C.red, letterSpacing: 0.5,
                      }}>{t('upcoming')}</div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ────────── ROSTER ──────────
function RosterScreen({ tweaks, openPlayer }) {
  const { roster } = window.PP_DATA;
  const [view, setView] = useState('players');
  const [filter, setFilter] = useState('ALL');
  const positions = ['ALL', 'QB', 'RB', 'WR', 'TE', 'OL', 'DT', 'DE', 'LB', 'CB', 'FS', 'SS', 'DB', 'K'];
  const filtered = filter === 'ALL' ? roster : roster.filter(p => p.pos === filter);

  return (
    <div style={{ background: C.cream, minHeight: '100%', paddingBottom: 110 }}>
      <PageHeader title={t('roster')}
        subtitle={view === 'players' ? t('rosterSubtitle', roster.length) : `${window.PP_DATA.staff.length} coaches & staff`}
        tweaks={tweaks} />

      {/* Players / Staff segmented */}
      <div style={{ padding: '14px 16px 0' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          background: C.surface, border: `1px solid ${C.line}`, borderRadius: 999,
          padding: 3, gap: 0,
        }}>
          {[['players', t('players')], ['staff', t('staff')]].map(([id, label]) => (
            <button key={id} onClick={() => setView(id)} style={{
              padding: '8px 12px', cursor: 'pointer', border: 'none',
              borderRadius: 999,
              background: view === id ? C.navy : 'transparent',
              color: view === id ? C.white : C.mute,
              fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 12,
              letterSpacing: 1,
            }}>{label.toUpperCase()}</button>
          ))}
        </div>
      </div>

      {view === 'staff' ? <StaffList /> : (
        <>
          <div style={{
            padding: '14px 16px 4px',
            display: 'flex', gap: 6, overflowX: 'auto',
          }}>
            {positions.map(p => (
              <button key={p} onClick={() => setFilter(p)} style={{
                padding: '8px 14px', borderRadius: 999,
                fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 12,
                letterSpacing: 1, cursor: 'pointer', flexShrink: 0,
                background: filter === p ? C.red : C.white,
                color: filter === p ? C.white : C.navy,
                border: `1px solid ${filter === p ? C.red : C.line}`,
              }}>{p === 'ALL' ? t('all') : p}</button>
            ))}
          </div>

          <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {filtered.map(p => (
              <Card key={p.num} onClick={() => openPlayer(p)}>
                <div style={{ display: 'flex', alignItems: 'center', padding: '12px 14px', gap: 14 }}>
                  <div style={{
                    width: 50, height: 50, borderRadius: 8,
                    background: C.navy, color: C.white,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 22,
                    position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: C.red,
                    }} />
                    {p.num}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{
                        fontFamily: 'Inter', fontSize: 15, color: C.ink, fontWeight: 600,
                        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                      }}>{p.name}</span>
                      {p.rookie && (
                        <span style={{
                          fontFamily: 'Oswald, sans-serif', fontSize: 9, fontWeight: 700,
                          letterSpacing: 1, color: C.red,
                          padding: '2px 5px', border: `1px solid ${C.red}`, borderRadius: 3,
                          flexShrink: 0,
                        }}>{t('rookie')}</span>
                      )}
                    </div>
                    <div style={{ fontSize: 12, color: C.mute, fontFamily: 'Inter', marginTop: 2 }}>
                      {t(`pos.${p.pos}`)}
                    </div>
                  </div>
                  <div style={{
                    fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 13,
                    color: C.red, letterSpacing: 1,
                    padding: '4px 8px', border: `1.5px solid ${C.red}`, borderRadius: 4,
                  }}>{p.pos}</div>
                </div>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

window.HomeScreen = HomeScreen;
window.ScheduleScreen = ScheduleScreen;
window.RosterScreen = RosterScreen;
window.C = C;
window.Card = Card;
window.SectionTitle = SectionTitle;
window.PageHeader = PageHeader;
window.StripeBar = StripeBar;
window.HeroStripes = HeroStripes;
window.heroBg = heroBg;

