# 🎉 Cayla's Birthday Website - Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Navigate to project directory:**
```bash
cd /Users/vdr/cayla-birthday
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Open in browser:**
```
http://localhost:5173
```

---

## 📋 Features

### ✨ Visual & UX
- ✅ Beautiful loading screen with progress bar
- ✅ Smooth transitions and animations
- ✅ Custom cursor with hover effects
- ✅ Dark mode toggle
- ✅ Responsive design for all devices

### 🎮 Interactive Features
- ✅ Scratch card to reveal login form
- ✅ Confetti triggers on scroll
- ✅ Music visualizer
- ✅ Floating action button menu
- ✅ Interactive photo gallery
- ✅ Light switch animation

### 🎨 Design
- ✅ Glassmorphism cards
- ✅ Gradient animations
- ✅ Particle effects
- ✅ Floating balloons
- ✅ Professional color scheme

### ⚡ Performance
- ✅ Lazy image loading
- ✅ Optimized animations
- ✅ GPU acceleration
- ✅ Error boundary for safety

---

## 🛠️ Development

### Project Structure
```
src/
├── components/          # React components
│   ├── ScratchCard.jsx
│   ├── IntroGate.jsx
│   ├── LightSwitchAnimation.jsx
│   ├── LoadingScreen.jsx
│   ├── CustomCursor.jsx
│   ├── MusicVisualizer.jsx
│   ├── PhotoGallery.jsx
│   ├── DarkModeToggle.jsx
│   ├── FloatingActionButton.jsx
│   ├── LazyImage.jsx
│   ├── ScrollReveal.jsx
│   ├── GlassCard.jsx
│   ├── ConfettiTrigger.jsx
│   └── ErrorBoundary.jsx
├── App.jsx              # Main app component
├── index.css            # Global styles
└── main.jsx             # Entry point
```

### Key Components

#### ScratchCard
- Canvas-based scratch functionality
- Reveals login form when scratched 90%
- Particle effects on scratch

#### IntroGate
- Login form with date verification
- Unlocks main content

#### LightSwitchAnimation
- Pendant lamp animation
- Triggers music playback
- Confetti effects

#### LoadingScreen
- Animated progress bar
- Floating particles
- Auto-completes after 2.5s

#### CustomCursor
- Smooth 60fps tracking
- Hover state detection
- GPU-accelerated

#### MusicVisualizer
- Real-time bar animation
- Shows when music plays
- Bottom-right corner

#### PhotoGallery
- Interactive slideshow
- Thumbnail navigation
- Smooth transitions

#### DarkModeToggle
- System preference detection
- localStorage persistence
- Smooth theme switching

#### FloatingActionButton
- Quick action menu
- Gallery, Message, Music actions
- Animated menu items

---

## 🎯 Usage Tips

### Customization

1. **Change colors:**
   - Edit CSS variables in `index.css`
   - `--accent-strong`, `--accent-light`, etc.

2. **Add photos:**
   - Replace `/api/placeholder/` URLs with real image paths
   - Update PhotoGallery component

3. **Change music:**
   - Replace `/song.mp3` with your music file
   - Ensure file is in `public/` folder

4. **Modify text:**
   - Edit component text directly
   - Update DividerQuote text in App.jsx

### Performance Optimization

- Images are lazy-loaded
- Animations use GPU acceleration
- Cursor uses requestAnimationFrame
- Error boundary prevents crashes

---

## 🐛 Troubleshooting

### Cursor not showing
- Check if on mobile (cursor hidden on mobile)
- Ensure CustomCursor component is rendered

### Music not playing
- Check if `/song.mp3` exists in public folder
- Ensure browser allows autoplay
- Check browser console for errors

### Dark mode not working
- Clear localStorage: `localStorage.clear()`
- Check browser console for errors

### Confetti not triggering
- Scroll to 25%, 50%, 75% of page
- Check if ConfettiTrigger is rendered

---

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

---

## 🚀 Deployment

### Build for production:
```bash
npm run build
```

### Deploy to Netlify:
1. Connect GitHub repo
2. Set build command: `npm run build`
3. Set publish directory: `dist`

---

## 📝 Notes

- All animations are smooth and optimized
- Mobile responsive design included
- Error handling with ErrorBoundary
- Accessibility features (aria labels, keyboard navigation)

---

## 🎉 Enjoy!

This website is designed to make Cayla's 20th birthday special! 🎂✨
