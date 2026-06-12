import { createContext, useContext, useState, useEffect } from 'react'

type IconProps = { className?: string }

function PlumberIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.65 2.65 0 0021 17.25l-5.83-5.83m-3.75 3.75l-2.36 2.36a2.65 2.65 0 01-3.75-3.75l2.36-2.36m3.75 3.75l3.75-3.75m-3.75 3.75L8.91 8.91M15.17 11.42a4.5 4.5 0 00-6.26-6.26 4.5 4.5 0 00-1.21 4.21L4 13.07a2.65 2.65 0 003.75 3.75l3.7-3.7a4.5 4.5 0 003.72-1.7z" />
    </svg>
  )
}

function UtilityIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
    </svg>
  )
}

function PasteIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
    </svg>
  )
}

function TinyIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75V16.5zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
    </svg>
  )
}

function NoteIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  )
}

function PlayIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  )
}

function KaraokeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
    </svg>
  )
}

const APPS: { id: string; Icon: (p: IconProps) => React.ReactElement; name: string; desc: string; domain: string }[] = [
  { id: 'plumber', Icon: PlumberIcon, name: 'Plumber', desc: 'Network toolbox — IP, DNS, BGP, TLS, CIDR',           domain: 'plumber.kevinprk.com' },
  { id: 'utility', Icon: UtilityIcon, name: 'Utility', desc: 'Dev toolbox — Hash, Base64, JSON, YAML, Regex',       domain: 'utility.kevinprk.com' },
  { id: 'paste',   Icon: PasteIcon,   name: 'Paste',   desc: 'Text sharing with configurable TTL up to 24h',        domain: 'paste.kevinprk.com'   },
  { id: 'tiny',    Icon: TinyIcon,    name: 'Tiny',    desc: 'URL shortener with QR code generation',                domain: 'tiny.kevinprk.com'    },
  { id: 'note',    Icon: NoteIcon,    name: 'Note',    desc: 'Interactive technical notes — TCP, Clos, VPC',         domain: 'note.kevinprk.com'    },
  { id: 'play',    Icon: PlayIcon,    name: 'Play',    desc: 'Small interactive experiments',                        domain: 'play.kevinprk.com'    },
  { id: 'karaoke', Icon: KaraokeIcon, name: 'Karaoke', desc: 'JPOP lyrics — Japanese, romaji, Korean side-by-side', domain: 'karaoke.kevinprk.com' },
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
              App
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
            {APPS.map(({ id, Icon, name, desc, domain }) => (
              <a
                key={id}
                href={`https://${domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="app-card"
              >
                <div className="ac-icon-wrap">
                  <Icon className="ac-icon" />
                </div>
                <div className="app-body">
                  <div className="app-name">{name}</div>
                  <div className="app-desc">{desc}</div>
                </div>
                <span className="app-domain">{domain}</span>
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
