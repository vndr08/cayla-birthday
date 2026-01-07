# 🚀 Deployment Guide - Cayla's Birthday Website

Website sudah siap untuk di-deploy! Berikut adalah opsi deployment yang tersedia.

## ⚡ Option 1: Vercel (Recommended - Easiest)

### Step 1: Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/cayla-birthday.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Kunjungi [vercel.com](https://vercel.com)
2. Sign in dengan GitHub account
3. Click "Add New..." → "Project"
4. Import repository `cayla-birthday`
5. Vercel akan auto-detect Vite configuration
6. Click "Deploy"

✅ Website akan live dalam ~2 menit!

---

## 🌐 Option 2: Netlify

### Step 1: Push to GitHub (sama seperti di atas)

### Step 2: Deploy to Netlify
1. Kunjungi [netlify.com](https://netlify.com)
2. Sign in dengan GitHub
3. Click "Add new site" → "Import an existing project"
4. Select GitHub → choose `cayla-birthday`
5. Build settings sudah auto-configured (vercel.json & netlify.toml)
6. Click "Deploy site"

✅ Website akan live dalam ~5 menit!

---

## 📦 Option 3: Manual Deployment (Firebase Hosting)

### Step 1: Setup Firebase
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
```

### Step 2: Deploy
```bash
npm run build
firebase deploy
```

---

## 🔄 Option 4: GitHub Pages (Free)

### Step 1: Update vite.config.js
```javascript
export default defineConfig({
  base: '/cayla-birthday/',  // if repo is cayla-birthday
  plugins: [react()],
})
```

### Step 2: Deploy Script
```bash
npm run build
git add dist -f
git commit -m "Build for GitHub Pages"
git push origin main
```

Then go to GitHub → Settings → Pages → Select `main` branch → `/` root

---

## 📋 Pre-Deployment Checklist

- [x] Build success: `npm run build`
- [x] No errors or warnings
- [x] All components optimized
- [x] Git initialized and committed
- [x] Deployment configs created (vercel.json, netlify.toml)

---

## 🎯 Recommended: Vercel + GitHub

**Why Vercel?**
- ✅ Automatically detects Vite
- ✅ Instant deployment from git push
- ✅ Free tier includes unlimited deployments
- ✅ Great preview URLs
- ✅ Perfect for React apps

**Deployment happens automatically when you:**
```bash
git push origin main
```

---

## 🔗 After Deployment

Once deployed, you'll get a URL like:
- Vercel: `https://cayla-birthday.vercel.app`
- Netlify: `https://cayla-birthday.netlify.app`

Share this URL dengan Cayla! 🎂✨

---

## 📱 Test Deployed Website

1. Open the deployed URL
2. Check all animations work
3. Test dark mode toggle
4. Test music playback
5. Try interactive features
6. Test on mobile devices

---

## 🆘 Troubleshooting

**If deployment fails:**
- Check `npm run build` runs locally without errors
- Verify all imports are correct
- Check that no environment variables are needed

**If styling looks wrong:**
- Clear browser cache (Ctrl+Shift+Delete)
- Check that CSS is being loaded (check Network tab)

**If music doesn't play:**
- Verify `song.mp3` is in the `public` folder
- Check browser console for CORS errors

---

**Ready to deploy? Start with Vercel! 🚀**
