const alumniCards = [
  {
    category: "ALUMNI STORIES",
    title: "The Journey Continues",
    description:
      "Stories, memories, and experiences that continue to connect generations of our alumni.",
    image: "https://dummyimage.com/720x400",
    views: "1.2K",
    comments: "6",
  },
  {
    category: "COMMUNITY",
    title: "Together, Always",
    description:
      "A community built through shared experiences, lasting friendships, and meaningful connections.",
    image: "https://dummyimage.com/721x401",
    views: "980",
    comments: "12",
  },
  {
    category: "MEMORIES",
    title: "Shared Memories",
    description:
      "Looking back at the moments that shaped us and the memories that remain with us.",
    image: "https://dummyimage.com/722x402",
    views: "1.5K",
    comments: "9",
  },
];

const ArrowIcon = () => (
  <svg
    className="alumni-card-arrow"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);

const EyeIcon = () => (
  <svg
    className="alumni-card-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const CommentIcon = () => (
  <svg
    className="alumni-card-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

function AlumniCards() {
  return (
    <section className="alumni-cards-section">
      <div className="container-custom">

        {/* Section Heading */}
        <div className="alumni-cards-header">
          <div className="alumni-cards-number">02</div>

          <div>
            <div className="eyebrow">
              From our community
            </div>

            <h2 className="alumni-cards-title">
              Stories that
              <br />
              stay with us.
            </h2>

            <p className="alumni-cards-intro">
              Discover stories, memories and moments from the people
              who make our alumni community what it is.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="alumni-cards-grid">
          {alumniCards.map((card, index) => (
            <article
              className="alumni-card"
              key={card.title}
            >
              {/* Image */}
              <div className="alumni-card-image-wrapper">
                <img
                  src={card.image}
                  alt={card.title}
                  className="alumni-card-image"
                  loading="lazy"
                />

                <div className="alumni-card-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="alumni-card-image-overlay" />
              </div>

              {/* Content */}
              <div className="alumni-card-content">

                <div className="alumni-card-category">
                  {card.category}
                </div>

                <h3 className="alumni-card-title">
                  {card.title}
                </h3>

                <p className="alumni-card-description">
                  {card.description}
                </p>

                {/* Bottom */}
                <div className="alumni-card-bottom">

                  <a
                    href="/stories"
                    className="alumni-card-link"
                  >
                    <span>Read story</span>
                    <ArrowIcon />
                  </a>

                  <div className="alumni-card-stats">

                    <span className="alumni-card-stat">
                      <EyeIcon />
                      <span>{card.views}</span>
                    </span>

                    <span className="alumni-card-stat">
                      <CommentIcon />
                      <span>{card.comments}</span>
                    </span>

                  </div>

                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AlumniCards;