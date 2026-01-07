# 🔧 Troubleshooting Guide

## Common Issues & Solutions

### 🎵 Music Not Playing

**Problem:** Audio doesn't play after lamp turns on

**Solutions:**
1. **Check if file exists:**
   ```bash
   ls -la public/song.mp3
   ```

2. **Check browser console:**
   - Open DevTools (F12)
   - Look for audio errors
   - Check Network tab for 404

3. **Browser autoplay policy:**
   - Some browsers block autoplay
   - User must interact first (click lamp)
   - Try adding `muted` attribute first

4. **File format:**
   - Ensure file is valid MP3
   - Try converting: `ffmpeg -i input.mp3 -q:a 9 output.mp3`

**Fix:**
```bash
# Copy song to public folder
cp /path/to/song.mp3 public/song.mp3
```

---

### 🖱️ Cursor Not Showing

**Problem:** Custom cursor not visible

**Solutions:**
1. **Check if on mobile:**
   - Custom cursor is hidden on mobile (by design)
   - Use regular cursor on touch devices

2. **Check browser console:**
   - Look for CustomCursor errors
   - Check if component renders

3. **CSS issue:**
   - Ensure `cursor: none` is applied
   - Check if CSS loaded correctly

**Fix:**
```bash
# Clear browser cache
# Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
```

---

### 🌙 Dark Mode Not Persisting

**Problem:** Dark mode resets on page refresh

**Solutions:**
1. **Check localStorage:**
   ```javascript
   // In browser console
   localStorage.getItem("darkMode")
   ```

2. **Clear localStorage:**
   ```javascript
   localStorage.clear()
   ```

3. **Check if DarkModeToggle renders:**
   - Open DevTools
   - Check if button appears
   - Check console for errors

**Fix:**
```bash
# Hard refresh to clear cache
# Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
```

---

### ❌ Scratch Card Not Working

**Problem:** Golden layer doesn't erase when scratching

**Solutions:**
1. **Check canvas rendering:**
   - Right-click canvas → Inspect
   - Check if canvas has content
   - Check console for errors

2. **Check mouse events:**
   - Try different browsers
   - Try touch on mobile
   - Check console for event logs

3. **Check reveal threshold:**
   - Scratch more (need ~90%)
   - Check console for percentage logs

**Fix:**
```javascript
// Add to ScratchCard.jsx for debugging
console.log("Reveal percentage:", revealPercentage);
```

---

### 🎮 Login Form Not Working

**Problem:** Login form doesn't accept input or submit

**Solutions:**
1. **Check input field:**
   - Try typing in input
   - Check if placeholder shows
   - Check console for errors

2. **Check date format:**
   - Must be DD-MM format
   - Example: 01-04
   - Case sensitive

3. **Check form submission:**
   - Try pressing Enter
   - Try clicking button
   - Check console for errors

**Correct Date:** 01-04 (April 1st)

---

### 💥 Page Crashes / White Screen

**Problem:** Page shows blank or error

**Solutions:**
1. **Check console errors:**
   - Open DevTools (F12)
   - Check Console tab
   - Note error messages

2. **Check ErrorBoundary:**
   - If error boundary catches error
   - Click "Refresh Page" button
   - Check what caused error

3. **Clear cache:**
   ```bash
   # Hard refresh
   Ctrl+Shift+R (Windows)
   Cmd+Shift+R (Mac)
   ```

4. **Check dependencies:**
   ```bash
   npm install
   npm run dev
   ```

---

### 🎉 Confetti Not Appearing

**Problem:** Confetti doesn't trigger on scroll

**Solutions:**
1. **Check scroll position:**
   - Scroll to 25%, 50%, 75% of page
   - Check console for scroll percentage
   - Ensure page is long enough

2. **Check ConfettiTrigger:**
   - Verify component renders
   - Check console for errors
   - Check if triggered only once

3. **Check CSS:**
   - Ensure confetti-piece CSS exists
   - Check z-index
   - Check animation

**Debug:**
```javascript
// Add to ConfettiTrigger.jsx
console.log("Scroll percentage:", scrollPercentage);
```

---

### 📱 Mobile Issues

**Problem:** Website doesn't work on mobile

**Solutions:**
1. **Check viewport:**
   - Ensure meta viewport tag exists
   - Check responsive CSS
   - Test on actual device

2. **Check touch events:**
   - Ensure touch handlers work
   - Test on different browsers
   - Check console for errors

3. **Check performance:**
   - Animations might be slow
   - Try disabling effects
   - Check device performance

**Fix:**
```bash
# Test on mobile
npm run dev
# Access from mobile: http://your-ip:5173
```

---

### 🌐 Network Issues

**Problem:** Resources fail to load

**Solutions:**
1. **Check Network tab:**
   - Open DevTools → Network
   - Look for 404 errors
   - Check file paths

2. **Check CORS:**
   - Ensure files are in public folder
   - Check file permissions
   - Check server configuration

3. **Check file paths:**
   - Images: `/api/placeholder/...`
   - Audio: `/song.mp3`
   - Ensure files exist

**Fix:**
```bash
# Check public folder
ls -la public/

# Ensure song.mp3 exists
ls -la public/song.mp3
```

---

### 🐌 Slow Performance

**Problem:** Website is slow or laggy

**Solutions:**
1. **Check animations:**
   - Disable some animations
   - Check FPS in DevTools
   - Look for janky transitions

2. **Check images:**
   - Optimize image sizes
   - Use lazy loading
   - Check Network tab

3. **Check JavaScript:**
   - Look for infinite loops
   - Check memory usage
   - Profile with DevTools

**Debug:**
```bash
# Check performance
npm run build
npm run preview
```

---

### 🔍 Debugging Tips

**Enable console logging:**
```javascript
// Add to components
console.log("Component mounted");
console.log("State updated:", state);
console.log("Event triggered:", event);
```

**Check React DevTools:**
1. Install React DevTools extension
2. Inspect component tree
3. Check props and state
4. Watch for re-renders

**Check Network tab:**
1. Open DevTools → Network
2. Reload page
3. Look for failed requests
4. Check response status

**Check Performance tab:**
1. Open DevTools → Performance
2. Record interaction
3. Look for long tasks
4. Check frame rate

---

### 📞 Getting Help

If you encounter issues:

1. **Check console errors:**
   - Open DevTools (F12)
   - Check Console tab
   - Copy error message

2. **Check this guide:**
   - Search for similar issue
   - Follow solutions

3. **Check browser compatibility:**
   - Try different browser
   - Try incognito mode
   - Clear cache

4. **Check file structure:**
   - Ensure all files exist
   - Check file permissions
   - Check paths

---

### ✅ Quick Fixes Checklist

- [ ] Hard refresh (Ctrl+Shift+R)
- [ ] Clear localStorage
- [ ] Clear browser cache
- [ ] Check console errors
- [ ] Check Network tab
- [ ] Try different browser
- [ ] Try incognito mode
- [ ] Reinstall dependencies (`npm install`)
- [ ] Restart dev server (`npm run dev`)
- [ ] Check file permissions
- [ ] Check file paths
- [ ] Check internet connection

---

### 🎯 Still Having Issues?

1. **Check SETUP.md** for installation help
2. **Check TESTING_CHECKLIST.md** for expected behavior
3. **Review component files** for implementation details
4. **Check browser console** for specific errors
5. **Try the quick fixes** above

Good luck! 🍀✨
