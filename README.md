# app

App directory for [app.kevinprk.com](https://app.kevinprk.com) — everything Kevin Park has built and deployed.

## Apps

| App | Description | URL |
|-----|-------------|-----|
| Plumber | Network toolbox — IP, DNS, BGP, TLS, CIDR | plumber.kevinprk.com |
| Utility | Dev toolbox — Hash, Base64, JSON, YAML, Regex | utility.kevinprk.com |
| Paste | Text sharing with configurable TTL up to 24h | paste.kevinprk.com |
| Tiny | URL shortener with QR code generation | tiny.kevinprk.com |
| Note | Interactive technical notes — TCP, Clos, VPC | note.kevinprk.com |
| Play | Small interactive experiments | play.kevinprk.com |
| Karaoke | JPOP lyrics — Japanese, romaji, Korean side-by-side | karaoke.kevinprk.com |

## Stack

| Layer | Tech |
|-------|------|
| Frontend | Vite + React + TypeScript |
| Serving | nginx:1.27-alpine |

## Project Structure

```
app/
├── src/
│   ├── App.tsx        # App grid + theme toggle
│   ├── index.css
│   └── main.tsx
├── index.html
├── Dockerfile
└── nginx.conf
```

## Local Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## CI/CD

Push to `main` → builds `krapi0314/app:<sha>` → updates `k8s/app/deployment.yaml` in homeserver repo → ArgoCD syncs.

Required GitHub Actions secrets: `DOCKERHUB_USERNAME`, `DOCKERHUB_TOKEN`, `GITOPS_TOKEN`.
