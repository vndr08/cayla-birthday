import { useEffect, useRef, useState } from "react";

function LazyImage({ src, alt, className = "", onError = null }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        try {
          if (entry && entry.isIntersecting && src) {
            setImageSrc(src);
            if (entry.target) {
              observer.unobserve(entry.target);
            }
          }
        } catch (error) {
          console.warn("LazyImage intersection error:", error);
        }
      },
      {
        rootMargin: "50px",
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      try {
        if (imgRef.current) {
          observer.unobserve(imgRef.current);
        }
      } catch (error) {
        console.warn("LazyImage cleanup error:", error);
      }
    };
  }, [src]);

  const handleImageError = () => {
    try {
      setHasError(true);
      if (typeof onError === "function") {
        onError();
      }
      console.warn(`Failed to load image: ${src}`);
    } catch (error) {
      console.warn("Image error handler error:", error);
    }
  };

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`lazy-image ${isLoaded ? "loaded" : ""} ${hasError ? "error" : ""} ${className}`}
      onLoad={() => setIsLoaded(true)}
      onError={handleImageError}
    />
  );
}

export default LazyImage;
