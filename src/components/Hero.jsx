import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/hero.css";

const slides = [
  {
    image: "/images/home/alumni-meet.jpg",
    title: "Reunite, Celebrate, Network",
    description:
      "Explore upcoming alumni meets, webinars, and campus events designed for you.",
    buttonText: "Explore Events",
    buttonLink: "/events",
  },

  {
    image: "/images/home/alumni-community.jpg",
    title: "Celebrating Bonds That Last",
    description:
      "Reconnect with old friends, build new relationships, and stay connected with the HIT alumni community.",
    buttonText: "Meet Our Members",
    buttonLink: "/about/our-members",
  },

  {
    image: "/images/home/alumni-achievement.jpg",
    title: "Inspiring Achievements",
    description:
      "Discover the accomplishments and journeys of alumni who continue to make a difference.",
    buttonText: "View Achievements",
    buttonLink: "/about/alumni-achievements",
  },

  {
    image: "/images/home/alumni-directory.jpg",
    title: "One Community. Many Stories.",
    description:
      "Find and connect with alumni from different batches, departments, professions, and locations.",
    buttonText: "Alumni Directory",
    buttonLink: "/about/alumni-directory",
  },

  {
    image: "/images/home/campus.jpg",
    title: "Connected Beyond Graduation",
    description:
      "The journey continues long after graduation. Stay connected with your institution and fellow alumni.",
    buttonText: "About Alumni Association",
    buttonLink: "/about",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  /* Automatic slide - every 3 seconds */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* Previous */
  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  /* Next */
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="hero-carousel">

      {/* Slides */}
      <div className="hero-slides">

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${
              index === currentSlide ? "active" : ""
            }`}
          >

            {/* Background image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="hero-background"
            />

            {/* Dark overlay */}
            <div className="hero-overlay"></div>

            {/* Content */}
            <div className="hero-content">

              <span className="hero-small-title">
                ALUMNI ASSOCIATION OF HALDIA INSTITUTE OF TECHNOLOGY
              </span>

              <h1>{slide.title}</h1>

              <p>{slide.description}</p>

              <Link
                to={slide.buttonLink}
                className="hero-button"
              >
                {slide.buttonText}
                <span>→</span>
              </Link>

            </div>

          </div>
        ))}

      </div>

      {/* Previous button */}
      <button
        className="hero-arrow hero-arrow-left"
        onClick={previousSlide}
        aria-label="Previous slide"
      >
        <span>‹</span>
      </button>

      {/* Next button */}
      <button
        className="hero-arrow hero-arrow-right"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <span>›</span>
      </button>

      {/* Dots */}
      <div className="hero-dots">

        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${
              index === currentSlide ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}

      </div>

    </section>
  );
}

export default Hero;