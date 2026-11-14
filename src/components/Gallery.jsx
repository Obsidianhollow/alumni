
import React from "react";
import { Link } from "react-router-dom";
import "../css/Gallery.css";

// =========================================
// GALLERY IMAGES
// =========================================



const galleryImages = [
  {
    id: 1,
    title: "Campus Moments",
    image: "/Gallery%20image/1.jpeg",
  },
  {
    id: 2,
    title: "Annual Celebrations",
    image: "/Gallery%20image/2.jpeg",
  },
  {
    id: 3,
    title: "Student Activities",
    image: "/Gallery%20image/3.jpeg",
  },
  {
    id: 4,
    title: "Workshops & Seminars",
    image: "/Gallery%20image/4.jpeg",
  },
  {
    id: 5,
    title: "Campus Life",
    image: "/Gallery%20image/5.jpeg",
  },
  {
    id: 6,
    title: "Unforgettable Memories",
    image: "/Gallery%20image/6.jpeg",
  },
];



// =========================================
// HOME GALLERY COMPONENT
// =========================================

const HomeGallery = () => {
  return (
    <section className="home-gallery">

      <div className="container px-5 py-20 mx-auto">

        {/* SECTION HEADING */}

        <div className="gallery-heading-wrapper">
          <h2 className="gallery-heading">
            Galle<span>ry</span>
          </h2>

          <p className="gallery-subtitle">
            Explore the moments, celebrations, achievements and
            experiences that make our institution special.
          </p>
        </div>

        {/* GALLERY GRID */}

        <div className="gallery-grid">
          {galleryImages.map((item) => (
            <article
              key={item.id}
              className="gallery-card"
            >
              {/* IMAGE */}

              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="gallery-image"
              />

              {/* GRADIENT OVERLAY */}

              <div
                className="gallery-overlay"
                aria-hidden="true"
              />

              {/* IMAGE TITLE */}

              <div className="gallery-card-content">
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>

        {/* SEE MORE BUTTON */}

        <div className="gallery-button-wrapper">
          <Link
            to="/gallery"
            className="gallery-more-button"
          >
            <span>See More</span>

            <span
              className="gallery-button-arrow"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HomeGallery;
