import { useEffect, useState, useMemo } from "react";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import ConfettiTrigger from "./components/ConfettiTrigger.jsx";
import DarkModeToggle from "./components/DarkModeToggle.jsx";
import ScratchCard from "./components/ScratchCard.jsx";
import IntroGate from "./components/IntroGate.jsx";
import LightSwitchAnimation from "./components/LightSwitchAnimation.jsx";

import DividerQuote from "./components/DividerQuote.jsx";
import SurpriseEasterEgg from "./components/SurpriseEasterEgg.jsx";
import FloatingMessages from "./components/FloatingMessages.jsx";
import ScrollTriggerMessage from "./components/ScrollTriggerMessage.jsx";
import ParticleBackground from "./components/ParticleBackground.jsx";
import LoveCalculator from "./components/LoveCalculator.jsx";
import FloatingHearts from "./components/FloatingHearts.jsx";
import Balloons from "./components/Balloons.jsx";
import HeroSection from "./components/HeroSection.jsx";
import CountdownSection from "./components/CountdownSection.jsx";
import AboutCaylaSection from "./components/AboutCaylaSection.jsx";
import TimelineSection from "./components/TimelineSection.jsx";
import GallerySection from "./components/GallerySection.jsx";
import LoveMeterSection from "./components/LoveMeterSection.jsx";
import MemoriesSection from "./components/MemoriesSection.jsx";
import ReasonsSection from "./components/ReasonsSection.jsx";
import QuizSection from "./components/QuizSection.jsx";
import GratitudeSection from "./components/GratitudeSection.jsx";
import LetterSection from "./components/LetterSection.jsx";
import FutureSection from "./components/FutureSection.jsx";

function App() {
  const [showLoading, setShowLoading] = useState(true);
  const [scratchRevealed, setScratchRevealed] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [showLightAnimation, setShowLightAnimation] = useState(false);
  const [lampOn, setLampOn] = useState(false);

  // Memoize observer config for better performance
  const observerConfig = useMemo(() => ({ threshold: 0.15 }), []);

  useEffect(() => {
    if (!unlocked) return;

    // Flag that JS-driven animations are enabled
    document.body.classList.add("js-enabled");

    const elements = document.querySelectorAll(".reveal");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      observerConfig
    );

    elements.forEach((el) => {
      // Make anything already on screen visible immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        el.classList.add("visible");
      }
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, [unlocked, observerConfig]);

  return (
    <div className="page">
      {/* Loading Screen */}
      {showLoading && (
        <LoadingScreen onComplete={() => setShowLoading(false)} />
      )}

      {/* Dark Mode Toggle */}
      <DarkModeToggle />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Confetti Trigger */}
      <ConfettiTrigger />

      <ParticleBackground />
      <FloatingHearts />
      <Balloons />
      <FloatingMessages />
      <ScrollTriggerMessage />
      <SurpriseEasterEgg />

      {/* IntroGate - Always render when not unlocked */}
      {!unlocked && (
        <IntroGate onUnlock={() => {
          setUnlocked(true);
          setShowLightAnimation(true);
        }} />
      )}

      {/* Scratch Card - Layer on top of IntroGate */}
      {!scratchRevealed && !unlocked && (
        <ScratchCard onReveal={() => setScratchRevealed(true)} />
      )}

      {unlocked && (
        <>
          {/* Light Switch Animation */}
          {showLightAnimation && (
            <LightSwitchAnimation 
              onComplete={() => setShowLightAnimation(false)}
              onLampOn={() => setLampOn(true)}
            />
          )}

          {/* Auto-play song when lamp is on */}
          {lampOn && (
            <audio 
              autoPlay 
              loop 
              onError={() => console.warn("Audio file not found or failed to load")}
            >
              <source src="/song.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
          
          <HeroSection />
          <DividerQuote text="Your birthday comes once a year. But I want you to feel celebrated every day." />

          <CountdownSection />
          <DividerQuote text="Toward a new age, with a version of you that keeps growing." />

          <AboutCaylaSection />
          <DividerQuote text="Before I knew 'us,' I was grateful to know 'you.'" />

          <TimelineSection />
          <DividerQuote text="So much has passed. So much more awaits us." />

          <GallerySection />
          <DividerQuote text="These moments are just fragments of why I'm so happy to be here with you." />

          {/* --- NEW: LOVE METER --- */}
          <LoveMeterSection />
          <DividerQuote text="It's not about the number. It's about how genuinely you're loved and cherished." />

          {/* --- LOVE CALCULATOR --- */}
          <LoveCalculator />
          <DividerQuote text="Every love story is unique. Ours is my favorite." />

          {/* --- NEW: PICK A MEMORY --- */}
          <MemoriesSection />
          <DividerQuote text="Years from now, I hope we still talk about 'remember when you turned twenty?'" />

          <ReasonsSection />
          <DividerQuote text="These twenty truths are just another way of saying: I want you to be okay." />

          <QuizSection />
          <GratitudeSection />
          <DividerQuote text="If you ever forget how strong you are, you can always come back here." />

          <LetterSection />
          <FutureSection />
        </>
      )}
    </div>
  );
}

export default function AppWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}
