# 🎂 Happy Birthday Sayani

A beautiful, animated birthday website built with React + Framer Motion, inspired by the [ALt. portfolio](https://alt-portfolio.framer.website/) design aesthetic.

## ✨ Features

- **Scroll-animated sections** with Framer Motion (parallax, stagger, fade-in)
- **Sidebar accordion navigation** matching the reference site's flow
- **Floating confetti** with hearts, stars, and sparkles
- **Photo gallery** with horizontal scroll and image placeholders
- **Birthday audio player** with animated waveform bars
- **Receipt-style birthday card** with SVG border animation
- **Expandable birthday wishes** accordion
- **Warm color palette** — rose-gold, coral, amber, peach tones
- **Responsive** — works on mobile, tablet, and desktop
- **One-command deploy** to GitHub Pages

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## 🎨 Customization

Edit **`src/config.js`** to personalize:

- `name` — Birthday person's name
- `date` — Birthday date
- `hero.greeting` / `hero.subtitle` — Hero section text
- `images[]` — Add your photos (put files in `src/assets/images/` or use URLs)
- `audioSrc` — Path to a birthday song (put in `src/assets/audio/`)
- `wishes[]` — Accordion birthday messages
- `card` — Birthday card details
- `nav[]` — Navigation items

### Adding Images

1. Place your images in `src/assets/images/`
2. In `src/config.js`, import and set them:

```js
// At the top of config.js:
import photo1 from './assets/images/photo1.jpg'
import photo2 from './assets/images/photo2.jpg'

// In the images array:
images: [
  { src: photo1, alt: "Memory 1", caption: "A beautiful moment" },
  { src: photo2, alt: "Memory 2", caption: "Cherished times" },
  // ...
]
```

Or use external URLs directly:
```js
images: [
  { src: "https://example.com/photo.jpg", alt: "Memory 1", caption: "A moment" },
]
```

### Adding Audio

Place an `.mp3` file in `src/assets/audio/` and update:
```js
import song from './assets/audio/birthday-song.mp3'
// ...
audioSrc: song,
```

## 🌐 Deploy to GitHub Pages

```bash
npm run deploy
```

This builds the project and pushes to the `gh-pages` branch. Your site will be live at:
```
https://<your-username>.github.io/hambaaa/
```

> **Note:** If your GitHub username or repo name differs, update `homepage` in `package.json` and `base` in `vite.config.js`.

## 🛠 Tech Stack

- [Vite](https://vite.dev/) — Build tool
- [React 19](https://react.dev/) — UI framework
- [Framer Motion](https://motion.dev/) — Animations
- [CSS Modules](https://github.com/css-modules/css-modules) — Scoped styling
- [gh-pages](https://github.com/tschaub/gh-pages) — Deployment

## 📁 Structure

```
src/
  config.js          ← All customization here
  components/
    Navbar.jsx       ← Sidebar accordion nav
    Hero.jsx         ← Full-screen hero + confetti
    Confetti.jsx     ← Floating animated particles
    AudioPlayer.jsx  ← Birthday music player
    MessageBanner.jsx← Large parallax text section
    Gallery.jsx      ← Photo gallery with scroll
    BirthdayCard.jsx ← Receipt/ticket-style card
    WishesAccordion.jsx ← Expandable wishes
    Footer.jsx       ← Closing section
  styles/
    global.css       ← Color palette & base styles
```
