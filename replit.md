# Spyder Sec

## Project Overview
A pre-built static React frontend for Spyder Sec — a cybersecurity-themed website. The project contains compiled/bundled assets (no source code), served as a static site.

## Architecture
- **Type**: Static site (pre-compiled React app)
- **Frontend**: Pre-built JS/CSS bundles in `assets/`, served from root `index.html`
- **No backend**: Pure static file serving

## Project Structure
```
.
├── index.html          # Entry point (includes team photo injection script)
├── favicon.svg         # Site favicon
├── assets/
│   ├── index-*.js      # Compiled React JS bundle
│   └── index-*.css     # Compiled CSS bundle
└── images/             # Static image assets
    ├── team/           # Team member photos
    │   ├── himanshu.jpg  # Himanshu Vyas - Founder
    │   ├── harsh.jpg     # Harsh Tikkiwal - Chief Technology Officer
    │   └── michelle.jpg  # Michelle Dhawan - Chief Marketing Officer
    └── gallery/        # Photo gallery images (workshop/event photos)
        ├── gallery1.jpg  # Workshop: Deep Fake Awareness
        ├── gallery2.jpg  # Community Workshop
        ├── gallery3.jpg  # Security Awareness Session
        ├── gallery4.jpg  # Interactive Quiz Session
        ├── gallery5.jpg  # Hands-on Training
        └── gallery6.jpg  # Recognition Ceremony
```

## Team Photo Injection
Since the app is pre-compiled (no source code), team photos are injected via a script in `index.html`. The script uses a MutationObserver to detect when the team section renders, then replaces the icon placeholders with actual photos and updates titles:
- Himanshu Vyas → Founder
- Harsh Tikkiwal → Chief Technology Officer
- Michelle Dhawan → Chief Marketing Officer

## Running the App
- **Workflow**: "Start application"
- **Command**: `npx serve -s . -l 5000`
- **Port**: 5000 (webview)

## Deployment
- **Target**: Static site deployment
- **Public directory**: `.` (project root)
