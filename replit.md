# Spyder Sec

## Project Overview
A cybersecurity company website for Spyder Sec, rebuilt from scratch as a fully editable React + Vite source project.

## Architecture
- **Type**: React + Vite SPA (Source code available)
- **Styling**: Tailwind CSS v4 (configured via `src/index.css` `@theme`)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Orbitron (display/headings), Inter (body)

## Project Structure
```
.
├── index.html              # Vite entry point
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies & scripts
├── src/
│   ├── main.jsx            # React root
│   ├── App.jsx             # App shell (assembles all sections)
│   ├── index.css           # Global styles, theme, cyber classes
│   └── components/
│       ├── Navbar.jsx      # Sticky nav + mobile menu
│       ├── Hero.jsx        # Hero section with animated cyber shield
│       ├── Services.jsx    # 6 service cards
│       ├── Certifications.jsx  # 5 certification cards
│       ├── Stats.jsx       # Animated counters (clients, uptime, etc.)
│       ├── WhyUs.jsx       # 4 feature cards (Precision, Visibility, etc.)
│       ├── Team.jsx        # Team member cards with photos
│       ├── Gallery.jsx     # 6-photo gallery with lightbox
│       ├── Support.jsx     # Contact info + support ticket form
│       ├── Feedback.jsx    # Testimonials + feedback form
│       └── Footer.jsx      # Footer with links and contact info
├── images/
│   ├── team/               # Team member photos
│   │   ├── himanshu.jpg    # Himanshu Vyas - Founder
│   │   ├── harsh.jpg       # Harsh Tikkiwal - Chief Technology Officer
│   │   └── michelle.jpg    # Michelle Dhawan - Chief Marketing Officer
│   └── gallery/            # Photo gallery images
│       ├── gallery1.jpg    # Workshop: Deep Fake Awareness
│       ├── gallery2.jpg    # Community Workshop
│       ├── gallery3.jpg    # Security Awareness Session
│       ├── gallery4.jpg    # Interactive Quiz Session
│       ├── gallery5.jpg    # Hands-on Training
│       └── gallery6.jpg    # Recognition Ceremony
└── _old_bundle/            # Old compiled assets (backup, not used)
```

## Running the App
- **Workflow**: "Start application"
- **Command**: `npm run dev`
- **Port**: 5000 (webview)

## Custom CSS Classes (in src/index.css)
- `.cyber-grid` — grid dot background pattern
- `.cyber-dots` — radial dot background
- `.cyber-clip` — angular clip-path corners
- `.cyber-clip-button` — smaller clip-path for buttons
- `.cyber-panel-decoration` — red triangle in bottom-right corner
- `.font-display` — applies Orbitron font

## Theme Colors (HSL)
- background: `hsl(0 0% 4%)` — near black
- foreground: `hsl(0 0% 98%)` — near white
- primary: `hsl(0 100% 50%)` — pure red
- secondary: `hsl(0 0% 12%)` — dark gray
- muted-foreground: `hsl(0 0% 65%)` — gray text
- border: `hsl(0 0% 15%)` — subtle border

## Contact Info
- Phone/WhatsApp: 7665140660
- Email: spyder.sec.org@gmail.com

## Deployment
- Run `npm run build` to generate production bundle
- Deploy the `dist/` folder as a static site
