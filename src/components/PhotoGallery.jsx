import { useState, useMemo, useCallback } from "react";

function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Placeholder photos - replace with actual images
  const photos = useMemo(() => [
    { id: 1, title: "Memory 1", description: "A beautiful moment" },
    { id: 2, title: "Memory 2", description: "Cherished times" },
    { id: 3, title: "Memory 3", description: "Happy memories" },
    { id: 4, title: "Memory 4", description: "Special moments" },
    { id: 5, title: "Memory 5", description: "Forever memories" },
  ], []);

  const nextPhoto = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  }, [photos.length]);

  const prevPhoto = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  }, [photos.length]);

  return (
    <section className="photo-gallery" id="gallery">
      <div className="gallery-header">
        <h2>Our Memories Together</h2>
        <p>A collection of moments we cherish</p>
      </div>

      <div className="gallery-container">
        <div className="gallery-main">
          <div className="gallery-image-wrapper">
            <div 
              className="gallery-image" 
              style={{ 
                backgroundImage: `linear-gradient(135deg, rgba(250, 204, 107, 0.2), rgba(255, 215, 0, 0.1)), url(/api/placeholder/600/400)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="gallery-overlay">
                <h3>{photos[currentIndex].title}</h3>
                <p>{photos[currentIndex].description}</p>
              </div>
            </div>
          </div>

          <div className="gallery-controls">
            <button className="gallery-btn prev" onClick={prevPhoto} aria-label="Previous photo">
              ← Previous
            </button>
            <div className="gallery-counter">
              {currentIndex + 1} / {photos.length}
            </div>
            <button className="gallery-btn next" onClick={nextPhoto} aria-label="Next photo">
              Next →
            </button>
          </div>
        </div>

        <div className="gallery-thumbnails">
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              className={`thumbnail ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`View ${photo.title}`}
              aria-current={index === currentIndex ? "true" : "false"}
            >
              <div 
                className="thumbnail-image" 
                style={{ 
                  backgroundImage: `linear-gradient(135deg, rgba(250, 204, 107, 0.2), rgba(255, 215, 0, 0.1)), url(/api/placeholder/100/100)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }} 
              />
              <span className="thumbnail-number">{index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PhotoGallery;
