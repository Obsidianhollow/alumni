
import React from "react";
import { Link } from "react-router-dom";
import "../css/Gallery.css";

const galleryItems = [
  {
    category: "ALUMNI MEET",
    title: "Coming Together",
    image: "/images/gallery/alumni-meet.jpg",
    year: "2026",
  },
  {
    category: "CAMPUS LIFE",
    title: "Where It All Began",
    image: "/images/gallery/campus-life.jpg",
    year: "2025",
  },
  {
    category: "COMMUNITY",
    title: "Shared Moments",
    image: "/images/gallery/community.jpg",
    year: "2025",
  },
  {
    category: "REUNION",
    title: "Back Together",
    image: "/images/gallery/reunion.jpg",
    year: "2024",
  },
  {
    category: "MEMORIES",
    title: "Moments We Keep",
    image: "/images/gallery/memories.jpg",
    year: "2024",
  },
  {
    category: "ALUMNI STORIES",
    title: "Generations Connected",
    image: "/images/gallery/alumni-stories.jpg",
    year: "2023",
  },
  {
    category: "SCHOOL EVENTS",
    title: "Celebrating Together",
    image: "/images/gallery/school-events.jpg",
    year: "2023",
  },
  {
    category: "FRIENDSHIPS",
    title: "Old Friends, New Memories",
    image: "/images/gallery/friendships.jpg",
    year: "2022",
  },
  {
    category: "CELEBRATIONS",
    title: "A Day to Remember",
    image: "/images/gallery/celebrations.jpg",
    year: "2022",
  },
  {
    category: "SCHOOL LEGACY",
    title: "Our Shared Heritage",
    image: "/images/gallery/school-legacy.jpg",
    year: "2021",
  },
  {
    category: "GATHERINGS",
    title: "Together Again",
    image: "/images/gallery/gatherings.jpg",
    year: "2021",
  },
  {
    category: "ALUMNI COMMUNITY",
    title: "Connected for Life",
    image: "/images/gallery/alumni-community.jpg",
    year: "2021",
  },
];

// Add more real gallery records here until you have 50 images.

function Gallery({ fullPage = false }) {
  const items = fullPage ? galleryItems : galleryItems.slice(0, 6);

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <header className="gallery-header">
          <div className="gallery-heading-content">
            <span className="gallery-eyebrow">OUR MEMORIES</span>

            <h2 className="gallery-title">
              Moments That
              <span> Bring Us Together.</span>
            </h2>

            <p className="gallery-intro">
              Explore the gatherings, friendships, celebrations,
              and memories that connect our alumni community.
            </p>
          </div>

          {fullPage && (
            <div className="gallery-count">
              <strong>{String(items.length).padStart(2, "0")}</strong>
              <span>PHOTOGRAPHS</span>
            </div>
          )}
        </header>

        <div className="gallery-grid">
          {items.map((item, index) => (
            <article className="gallery-card" key={item.title}>
              <img
                src={item.image}
                alt={item.title}
                className="gallery-image"
                loading="lazy"
              />

              <div className="gallery-card-overlay">
                <span className="gallery-card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="gallery-card-info">
                  <span className="gallery-category">
                    {item.category}
                  </span>

                  <h3>{item.title}</h3>

                  <div className="gallery-card-bottom">
                    <span>{item.year}</span>
                    <span className="gallery-card-line" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {!fullPage && (
          <div className="gallery-footer">
            <Link to="/gallery" className="gallery-more-button">
              See More
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;
