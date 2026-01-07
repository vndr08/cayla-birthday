// Sound effects utility
const sounds = {
  click: new Audio('data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA=='),
  success: new Audio('data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA=='),
  hover: new Audio('data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA=='),
};

// Set volume
Object.values(sounds).forEach(sound => {
  sound.volume = 0.3;
});

export const playSound = (soundName) => {
  if (sounds[soundName]) {
    const audio = sounds[soundName].cloneNode();
    audio.play().catch(() => {
      // Silently fail if audio can't play
    });
  }
};

export const playClickSound = () => playSound('click');
export const playSuccessSound = () => playSound('success');
export const playHoverSound = () => playSound('hover');
