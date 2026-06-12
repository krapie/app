import { createContext, useContext, useState, useEffect } from 'react'

const APPS = [
  { id: 'plumber',  glyph: '🔧', name: 'Plumber',  desc: 'Network toolbox — IP, DNS, BGP, TLS, CIDR',        domain: 'plumber.kevinprk.com'  },
  { id: 'utility',  glyph: '🛠️', name: 'Utility',  desc: 'Dev toolbox — Hash, Base64, JSON, YAML, Regex',    domain: 'utility.kevinprk.com'  },
  { id: 'paste',    glyph: '📋', name: 'Paste',    desc: 'Text sharing with configurable TTL up to 24h',      domain: 'paste.kevinprk.com'    },
  { id: 'tiny',     glyph: '🔗', name: 'Tiny',     desc: 'URL shortener with QR code generation',             domain: 'tiny.kevinprk.com'     },
  { id: 'note',     glyph: '📝', name: 'Note',     desc: 'Interactive technical notes — TCP, Clos, VPC',      domain: 'note.kevinprk.com'     },
  { id: 'play',     glyph: '🎮', name: 'Play',     desc: 'Small interactive experiments',                     domain: 'play.kevinprk.com'     },
  { id: 'karaoke',  glyph: '🎤', name: 'Karaoke',  desc: 'JPOP lyrics — Japanese, romaji, Korean side-by-side', domain: 'karaoke.kevinprk.com' },
  { id: 'drive',    glyph: '📁', name: 'Drive',    desc: 'Self-hosted file browser',                          domain: 'drive.kevinprk.com'    },
  { id: 'obsidian', glyph: '🧠', name: 'Obsidian', desc: 'Self-hosted Obsidian vault',                        domain: 'obsidian.kevinprk.com' },
]

type Theme = 'light' | 'dark'
const ThemeCtx = createContext<{ theme: Theme; toggle: () => void }>({ theme: 'light', toggle: () => {} })

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('kp-theme')
    if (stored === 'light' || stored === 'dark') return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('kp-theme', theme)
  }, [theme])

  function toggle() { setTheme(t => t === 'dark' ? 'light' : 'dark') }

  return (
    <ThemeCtx.Provider value={{ theme, toggle }}>
      <div className="page">
        <header>
          <div className="kp-header">
            <a href="https://kevinprk.com" className="brand">
              <span className="pi-mark">π</span>
              app · kevinprk
            </a>
            <ThemeToggle />
          </div>
        </header>

        <main className="kp-main">
          <div className="intro">
            <h1>Apps.</h1>
            <p>Everything I've built and deployed.</p>
          </div>
          <div className="section-label">all</div>
          <div className="app-grid">
            {APPS.map(app => (
              <a
                key={app.id}
                href={`https://${app.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="app-card"
              >
                <span className="app-glyph">{app.glyph}</span>
                <div className="app-body">
                  <div className="app-name">{app.name}</div>
                  <div className="app-desc">{app.desc}</div>
                </div>
                <span className="app-domain">{app.domain}</span>
              </a>
            ))}
          </div>
        </main>

        <footer>
          <div className="kp-footer">
            <span>© {new Date().getFullYear()} kevin park</span>
            <span className="pi">π</span>
          </div>
        </footer>
      </div>
    </ThemeCtx.Provider>
  )
}

function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeCtx)
  return (
    <button className="theme-toggle" onClick={toggle} aria-label="toggle theme">
      {theme === 'dark' ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="4"/>
          <path strokeLinecap="round" d="M12 3v1.5M12 19.5V21M3 12h1.5M19.5 12H21M5.6 5.6l1.06 1.06M17.34 17.34l1.06 1.06M5.6 18.4l1.06-1.06M17.34 6.66l1.06-1.06"/>
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/>
        </svg>
      )}
    </button>
  )
}
