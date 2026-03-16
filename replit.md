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
├── index.html          # Entry point
├── favicon.svg         # Site favicon
├── assets/
│   ├── index-*.js      # Compiled React JS bundle
│   └── index-*.css     # Compiled CSS bundle
└── images/             # Static image assets (referenced by app)
```

## Running the App
- **Workflow**: "Start application"
- **Command**: `npx serve -s . -l 5000`
- **Port**: 5000 (webview)

## Deployment
- **Target**: Static site deployment
- **Public directory**: `.` (project root)
