import { memo } from "react";
import { galleryPhotos } from "../data";

const GallerySection = memo(function GallerySection() {
  return (
    <section className="section reveal" id="gallery">
      <div className="container">
        <p className="eyebrow">Our Memories</p>
        <h2 className="section-title">Moments that matter, wherever we are.</h2>
        <div className="gallery-grid">
          {galleryPhotos.map((photo, index) => (
            <div key={index} className="gallery-card">
              <div className="gallery-photo-placeholder">
                <span className="photo-emoji">📸</span>
                <span className="photo-label">{photo.label}</span>
                <span className="photo-hint">✨ Your memory here</span>
              </div>
              <p className="caption">{photo.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default GallerySection;
