
import React from "react";
import { Link } from "react-router-dom";
import "../css/Gallery.css";

// =========================================
// GALLERY DATA - 27 IMAGE BLOCKS
// =========================================

const galleryImages = Array.from({ length: 27 }, (_, index) => ({
  id: index + 1,
  title: `Memory ${String(index + 1).padStart(2, "0")}`,
  category: "AGCS MOMENTS",
}));

// =========================================
// GALLERY PAGE
// =========================================

function GalleryPage() {
  return (
    <main className="gallery-page">

      {/* =====================================
          01 - HERO SECTION
      ===================================== */}

      <section className="gallery-hero">
        <div className="gallery-hero-inner">

          <div className="gallery-hero-copy">

            <span className="gallery-eyebrow">
              ASSEMBLY OF GOD CHURCH SCHOOL
            </span>

            <h1>
              Moments
              <br />
              That Become
              <br />
              <span>Memories.</span>
            </h1>

            <p>
              A collection of moments, celebrations and
              experiences that bring generations of our
              school community together.
            </p>

            <div className="gallery-hero-bottom">
              <span className="gallery-hero-line"></span>
              <span>THE ALUMNI GALLERY</span>
            </div>

          </div>

          <div className="gallery-hero-art" aria-hidden="true">

            <div className="gallery-art-circle gallery-art-circle-one"></div>
            <div className="gallery-art-circle gallery-art-circle-two"></div>

            <div className="gallery-art-letter">
              G
            </div>

            <div className="gallery-art-caption">
              <span>CAPTURING OUR</span>
              <strong>SHARED LEGACY</strong>
            </div>

          </div>

          <div className="gallery-hero-index">
            <span>02</span>
            <span className="gallery-index-divider"></span>
            <span>OUR MEMORIES</span>
          </div>

        </div>
      </section>

      {/* =====================================
          02 - INTRODUCTION
      ===================================== */}

      <section className="gallery-intro">

        <div className="gallery-intro-inner">

          <div className="gallery-intro-label">
            <span className="gallery-small-line"></span>
            A JOURNEY THROUGH TIME
          </div>

          <div className="gallery-intro-content">

            <h2>
              Some moments
              <br />
              deserve to <em>last forever.</em>
            </h2>

            <div className="gallery-intro-description">

              <p>
                Every photograph tells a story. From school
                celebrations and alumni gatherings to
                unforgettable campus experiences, each
                moment holds a special place in our journey.
              </p>

              <p>
                Explore the memories that connect us to our
                roots, celebrate our shared experiences and
                remind us that no matter where life takes us,
                we will always be a part of AGCS Haldia.
              </p>

            </div>

          </div>

          <div className="gallery-intro-bottom">
            <span>MEMORIES</span>
            <span className="gallery-intro-dot"></span>
            <span>CELEBRATIONS</span>
            <span className="gallery-intro-dot"></span>
            <span>CONNECTIONS</span>
          </div>

        </div>

      </section>

      {/* =====================================
          03 - GALLERY COLLECTION
      ===================================== */}

      <section className="gallery-collection" id="gallery-collection">

        <div className="gallery-collection-inner">

          <div className="gallery-section-heading">

            <div>
              <span className="gallery-section-kicker">
                EVERY PICTURE HAS A STORY
              </span>

              <h2>
                Explore our
                <br />
                <em>Memories.</em>
              </h2>
            </div>

            <p>
              Take a look at the moments that make our
              school community special. More memories
              will be added as our journey continues.
            </p>

          </div>

          {/* GALLERY GRID */}

          <div className="gallery-page-grid">

            {galleryImages.map((image) => (

              <article
                className="gallery-placeholder-card"
                key={image.id}
              >

                <div className="gallery-placeholder-image">

                  <span className="gallery-image-number">
                    {String(image.id).padStart(2, "0")}
                  </span>

                  <div className="gallery-placeholder-mark">
                    <span>+</span>
                  </div>

                  <span className="gallery-image-label">
                    IMAGE COMING SOON
                  </span>

                </div>

                <div className="gallery-placeholder-details">

                  <div>
                    <span>{image.category}</span>
                    <h3>{image.title}</h3>
                  </div>

                  <span className="gallery-placeholder-arrow">
                    ↗
                  </span>

                </div>

              </article>

            ))}

          </div>

          <div className="gallery-grid-footer">
            <span>27 MOMENTS</span>
            <span>MORE MEMORIES COMING SOON</span>
          </div>

        </div>

      </section>

      {/* =====================================
          04 - LEGACY SECTION
      ===================================== */}

      <section className="gallery-legacy">

        <div className="gallery-legacy-inner">

          <div className="gallery-legacy-copy">

            <span className="gallery-section-kicker">
              MORE THAN JUST PHOTOGRAPHS
            </span>

            <h2>
              Our past.
              <br />
              Our people.
              <br />
              <em>Our story.</em>
            </h2>

            <p>
              The photographs may capture a moment in time,
              but the friendships, experiences and memories
              they represent continue to live with us.
            </p>

          </div>

          <div className="gallery-legacy-values">

            <div className="gallery-value">
              <span>01</span>
              <div>
                <h3>Remember</h3>
                <p>
                  Celebrate the experiences that shaped us.
                </p>
              </div>
            </div>

            <div className="gallery-value">
              <span>02</span>
              <div>
                <h3>Reconnect</h3>
                <p>
                  Rediscover the people and places we cherish.
                </p>
              </div>
            </div>

            <div className="gallery-value">
              <span>03</span>
              <div>
                <h3>Relive</h3>
                <p>
                  Keep our shared memories alive for generations.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* =====================================
          05 - CALL TO ACTION
      ===================================== */}

      <section className="gallery-cta">

        <div className="gallery-cta-inner">

          <div>

            <span className="gallery-section-kicker">
              YOUR STORY BELONGS HERE
            </span>

            <h2>
              The memories
              <br />
              continue with you.
            </h2>

            <p>
              Reconnect with your school, meet fellow alumni
              and become a part of the next chapter of our
              community.
            </p>

          </div>

          <Link
            to="/membership"
            className="gallery-cta-link"
          >
            Explore Membership
            <span>↗</span>
          </Link>

        </div>

      </section>

    </main>
  );
}

export default GalleryPage;
