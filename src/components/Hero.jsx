
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/hero.css";

const slides = [
  {
    image: "/Hero%20images/Events.jpeg",
    title: "Reunite, Celebrate, Network",
    description:
      "Explore upcoming alumni meets, webinars, and campus events designed for you.",
    buttonText: "Explore Events",
    buttonLink: "/#events",
  },
  {
    image: "/Hero%20images/Members.jpeg",
    title: "Celebrating Bonds That Last",
    description:
      "Reconnect with old friends, build new relationships, and stay connected with the alumni community.",
    buttonText: "Meet Our Members",
    buttonLink: "/about/our-members",
  },
  {
    image: "/Hero%20images/Achievements.jpeg",
    title: "Inspiring Achievements",
    description:
      "Discover the accomplishments and journeys of alumni who continue to make a difference.",
    buttonText: "View Achievements",
    buttonLink: "/about/alumni-achievements",
  },
  {
    image: "/Hero%20images/Directory.jpeg",
    title: "One Community. Many Stories.",
    description:
      "Find and connect with alumni from different batches, departments, professions, and locations.",
    buttonText: "Alumni Directory",
    buttonLink: "/about/alumni-directory",
  },
  {
    image: "/Hero%20images/About.jpeg",
    title: "Connected Beyond Graduation",
    description:
      "The journey continues long after graduation. Stay connected with your institution and fellow alumni.",
    buttonText: "About Alumni Association",
    buttonLink: "/about",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  // Previous slide
  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // Next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Navigate directly to selected slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero-carousel">

      {/* SLIDES */}
      <div className="hero-slides">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`hero-slide ${
              index === currentSlide ? "active" : ""
            }`}
            aria-hidden={index !== currentSlide}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="hero-background"
            />

            <div className="hero-overlay"></div>

            <div className="hero-content">
              <span className="hero-small-title">
                ALUMNI ASSOCIATION OF ASSEMBLY OF GOD CHURCH SCHOOL
              </span>

              <h1 className="hero-title">
                {slide.title}
              </h1>

              <p>{slide.description}</p>

              <Link
                to={slide.buttonLink}
                className="hero-button"
              >
                {slide.buttonText}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* PREVIOUS BUTTON */}
      <button
        type="button"
        className="hero-arrow hero-arrow-left"
        onClick={previousSlide}
        aria-label="Previous slide"
      >
        <span aria-hidden="true">‹</span>
      </button>

      {/* NEXT BUTTON */}
      <button
        type="button"
        className="hero-arrow hero-arrow-right"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <span aria-hidden="true">›</span>
      </button>

      {/* SLIDE INDICATORS */}
      <div className="hero-dots">
        {slides.map((slide, index) => (
          <button
            type="button"
            key={slide.title}
            className={`hero-dot ${
              index === currentSlide ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={
              index === currentSlide ? "true" : undefined
            }
          />
        ))}
      </div>

    </section>
  );
}

export default Hero;
